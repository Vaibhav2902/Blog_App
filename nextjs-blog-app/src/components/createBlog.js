"use client";
/* eslint-disable react/no-unescaped-entities */


import { SignedIn, SignedOut, SignInButton, useUser } from '@clerk/nextjs';
import { useState } from 'react';
import supabase from '@/lib/supabaseClient';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export default function CreateBlog({ onBlogCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [alert, setAlert] = useState(null); // To manage the alert
  const { user } = useUser(); // Get the signed-in user's information

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is signed in
    if (!user) {
      setAlert({
        type: 'error',
        message: 'You must be signed in to create a blog.',
      });
      setTimeout(() => setAlert(null), 3000);
      return;
    }

    // Validate the form fields
    if (title.trim() === '' || content.trim() === '') {
      setAlert({
        type: 'error',
        message: 'Please fill in both the title and content.',
      });
      setTimeout(() => setAlert(null), 3000);
      return;
    }

    const blogData = {
      title,
      content,
      user_id: user.id,
      author_name: user.fullName || user.email || 'Anonymous', // Use user's full name or email
      created_at: new Date(),
    };

    // Insert the blog into the Supabase database
    const { data, error } = await supabase.from('blogs').insert([blogData]);

    if (error) {
      setAlert({
        type: 'error',
        message: 'Error creating blog: ${error.message}',
      });
      setTimeout(() => setAlert(null), 3000);
    } else {
      setAlert({
        type: 'success',
        message: 'Blog posted successfully!',
      });
      setTimeout(() => setAlert(null), 3000);
      console.log('Blog created:', data);

      // Trigger parent component to refresh the blog list
      if (onBlogCreated) {
        onBlogCreated(); // Notify parent component to refresh the blog list
      }
    }

    // Clear form fields after submission
    setTitle('');
    setContent('');
  };

  return (
    <div style={{ border: '2px solid black', padding: '20px', margin: '10px auto', maxWidth: '600px' }}>
      <SignedIn>
        <h2>Create a New Blog</h2>
        {/* Display alert if set */}
        {alert && (
          <Alert variant={alert.type === 'error' ? 'destructive' : 'success'}>
            <AlertTitle>{alert.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <Label htmlFor="title">Title of The Blog</Label>
          <Input
            id="title"
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
            }}
          />
          <Label htmlFor="content">Your Thought's</Label>
          <Textarea
            id="content"
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '10px',
              width: '100%',
            }}
          />
          <Button  style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }} type="submit">Submit Blog</Button>
        </form>
      </SignedIn>
      <SignedOut>
        <div>Please sign in to create a blog.</div>
      </SignedOut>
    </div>
  );
}

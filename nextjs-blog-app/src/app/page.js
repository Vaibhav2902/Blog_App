'use client';

import { useEffect, useState } from 'react';
import AuthButtons from "@/components/AuthButton";
import CreateBlog from "@/components/createBlog";
import ViewBlogs from "@/components/BlogList";

export default function Page() {
  const [message, setMessage] = useState(""); // State for the message fetched from the API
  const [loading, setLoading] = useState(true); // State for loading indication
  const [error, setError] = useState(""); // State to handle errors

  useEffect(() => {
    // Function to fetch message from API
    const fetchMessage = async () => {
      try {
        const res = await fetch('/api/getPageData');
        if (res.ok) {
          const data = await res.json();
          setMessage(data.message); // Set message state from the API response
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error.message); // If there's an error, set the error state
      } finally {
        setLoading(false); // Set loading to false once the request is completed
      }
    };

    fetchMessage();
  }, []); // Empty dependency array means this effect will run once on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if something went wrong
  }

  return (
    <main style={{ padding: '30px', textAlign: 'center' }}>
      <AuthButtons /> {/* AuthButtons component for authentication */}
      
      {/* Display the message fetched from API */}
      <h1>{message}</h1>
      
      {/* CreateBlog and ViewBlogs components for blog functionality */}
      <CreateBlog />
      <ViewBlogs />
    </main>
  );
}

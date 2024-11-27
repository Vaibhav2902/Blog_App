'use client'

import { useState } from 'react';
import AuthButtons from "@/components/AuthButton";
import CreateBlog from "@/components/createBlog";
import ViewBlogs from "@/components/BlogList";

export default function Page() {
  const [shouldFetch, setShouldFetch] = useState(true); // Flag to control fetching

  const handleBlogCreated = () => {
    setShouldFetch(true); // Trigger re-fetch when a new blog is created
  };

  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <AuthButtons />
      
      {/* Pass the handleBlogCreated function to CreateBlog component */}
      <CreateBlog onBlogCreated={handleBlogCreated} />
      
      {/* Conditionally render ViewBlogs if shouldFetch is true */}
      {shouldFetch && <ViewBlogs />}
    </main>
  );
}

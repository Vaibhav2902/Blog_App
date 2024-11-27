'use client';

import { useEffect, useState } from 'react';
import AuthButtons from "@/components/AuthButton";
import CreateBlog from "@/components/createBlog";
import ViewBlogs from "@/components/BlogList";

export default function Page() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the message from the API
    const fetchMessage = async () => {
      const res = await fetch('/api/getPageData');
      if (res.ok) {
        const data = await res.json();
        setMessage(data.message);
      } else {
        setMessage("Failed to load message");
      }
    };

    fetchMessage();
  }, []);

  return (
    <main style={{ padding: '30px', textAlign: 'center' }}>
      <AuthButtons />
      <h1>{message}</h1> {/* Display the API message */}
      <CreateBlog />
      <ViewBlogs />
    </main>
  );
}

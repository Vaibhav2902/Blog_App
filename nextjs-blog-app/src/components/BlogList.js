'use client'
import { useEffect, useState } from "react";
import supabase from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming you have a Card component

export default function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from Supabase
  const fetchBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('blogs').select('*');
    
    if (error) {
      console.error("Error fetching blogs:", error);
    } else {
      setBlogs(data);
    }
    setLoading(false);
  };

  // Use effect to fetch blogs on initial mount
  useEffect(() => {
    fetchBlogs();
  }, []); // Empty dependency array ensures it runs once when component mounts

  // Handle reload button click
  const handleReload = () => {
    fetchBlogs();
  };

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', // Center the heading and button horizontally
        alignItems: 'center', 
        marginBottom: '20px', // Adds spacing below the heading and button
        width: '100%' // Ensures the flex container takes full width
      }}>
        <h2 style={{ marginRight: '20px' }}>Blogs</h2>
        
        {/* Reload button */}
        <Button
          onClick={handleReload}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Reload
        </Button>
      </div>

      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '20px', 
          width: '100%', 
          justifyContent: 'center', // Center the blogs grid horizontally
        }}>
          {blogs.map((blog) => (
            <Card key={blog.id} style={{ maxWidth: '400px' }}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{`By ${blog.author_name || 'Anonymous'}`}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{blog.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

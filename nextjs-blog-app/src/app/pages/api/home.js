// pages/api/index.js

export default async function handler(req, res) {
    // Check if the request is a GET request
    if (req.method === "GET") {
      // Redirect to the Authentication page
      res.redirect('../../page'); // This will redirect to '/authentication' page
    } else {
      // If it's not a GET request, return a 405 (Method Not Allowed) error
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  
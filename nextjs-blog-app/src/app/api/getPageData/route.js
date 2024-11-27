// app/api/getPageData/route.js

export async function GET(request) {
    return new Response(JSON.stringify({ message: "Welcome to the Blog App! You are on the homepage." }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  
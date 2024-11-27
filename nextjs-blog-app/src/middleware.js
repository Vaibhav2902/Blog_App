import { clerkMiddleware } from '@clerk/nextjs/server';

// This will disable the edge function and use the default Node.js environment
export default clerkMiddleware();

export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)'],
};

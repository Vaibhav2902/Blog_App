'use client';  // Add this line at the top to mark the file as a client component

import { useState, useEffect } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

// Dynamically import ClerkProvider with SSR disabled
const ClerkProviderWithNoSSR = dynamic(
  () => import('@clerk/nextjs').then((mod) => mod.ClerkProvider),
  { ssr: false }
);

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  // This ensures that we only render client-specific content after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing while the client-side code is loading
  }

  return (
    <html lang="en">
      <head />
      <body>
        <ClerkProviderWithNoSSR>{children}</ClerkProviderWithNoSSR>
      </body>
    </html>
  );
}

import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column', // Stack the text and button vertically
      }}
    >
      {/* Welcome text centered */}
      <h1>Welcome to Bloggers App</h1>

      {/* Container for the Sign In / Sign Out button */}
      <div 
        style={{
          position: 'absolute', // Positioning relative to the viewport
          top: '30px', // Space from the top of the screen
          right: '20px', // Space from the right of the screen
        }}
      >
        {/* Shown only when the user is not signed in */}
        <SignedOut>
          <SignInButton>
            <Button style={{ backgroundColor: 'green', padding: '8px 16px', cursor: 'pointer' }}>
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        {/* Shown only when the user is signed in */}
        <SignedIn>
          <SignOutButton>
            <Button style={{ backgroundColor: 'red', padding: '8px 16px', cursor: 'pointer' }}>
              Sign Out
            </Button>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
}

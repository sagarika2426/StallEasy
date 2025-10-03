"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // ✅ Correct import

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
           onClick={() => router.push("/")}>
            Stall Easy
            
          </div>

          {/* Auth Buttons */}
          <div className="md:flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm font-medium">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition text-sm">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              {/* Show Create Events button only for stalleasy1@gmail.com */}
              {user?.primaryEmailAddress?.emailAddress ===
                "stalleasy1@gmail.com" && (
                <button
                  onClick={() => router.push("/create-event")} // ✅ Works with next/navigation
                  className="px-5 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition text-sm"
                >
                  Create Events
                </button>
              )}

              {/* Profile avatar & dropdown */}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

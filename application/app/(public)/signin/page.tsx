"use client";

import SignIn from "@/components/auth/sign-in";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <SignIn />
      </div>
    </div>
  );
}

"use client";
import SignIn from "@/components/auth/sign-in";
import { authClient } from "@/lib/auth/auth-client";

export default function Home() {
  const session = authClient.useSession();
  console.log(session);
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <SignIn />
      </div>
    </div>
  );
}

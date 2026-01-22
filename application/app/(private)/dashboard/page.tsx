"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await authClient.signOut();
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
      setIsSigningOut(false);
    }
  };

  // Show loading state while checking authentication
  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Show 404 if not authenticated (stays on /dashboard) except in the process of signing out
  if (!session && !isSigningOut) {
    notFound();
  }

  // Show loading state during sign out
  if (isSigningOut) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Signing out...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome, {session?.user?.name || session?.user?.email || "User"}!
      </p>
      <Button variant="outline" onClick={handleSignOut}>
        Logout
      </Button>
    </div>
  );
}

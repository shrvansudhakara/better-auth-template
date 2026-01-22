"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { useRouter, notFound } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  // Show 404 if not authenticated (stays on /dashboard)
  if (!session) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome, {session.user?.email || session.user?.name || "User"}!
      </p>
      <Button variant="outline" onClick={handleSignOut}>
        Logout
      </Button>
    </div>
  );
}

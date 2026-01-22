import SignUp from "@/components/auth/sign-up";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </div>
  );
}

"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/products"); // redirect after login
    }
  }, [session, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <button
        onClick={() => signIn("google")}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}

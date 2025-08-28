"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/products");
    }
  }, [session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-700">Sign in to your account</h2>
        <button
          onClick={() => signIn("google")}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition mb-2"
        >
          <span className="inline-flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.36 30.18 0 24 0 14.82 0 6.71 5.82 2.69 14.09l7.98 6.2C12.13 13.13 17.56 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.41c-.54 2.9-2.18 5.36-4.64 7.03l7.19 5.6C43.99 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M9.67 28.29c-1.13-3.36-1.13-6.97 0-10.33l-7.98-6.2C-1.13 17.18-1.13 30.82 1.69 37.91l7.98-6.2z"/><path fill="#EA4335" d="M24 46c6.18 0 11.64-2.36 15.85-6.45l-7.19-5.6c-2.01 1.35-4.58 2.15-8.66 2.15-6.44 0-11.87-3.63-13.33-8.79l-7.98 6.2C6.71 42.18 14.82 48 24 48z"/></g></svg>
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  );
}

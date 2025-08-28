"use client";
import Link from "next/link";
import { useSession, signOut, SessionProvider } from "next-auth/react";

export default function Navbar() {
  return (
    <SessionProvider>
      <NavbarContent />
    </SessionProvider>
  );
}

function NavbarContent() {
  const { data: session } = useSession();
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="font-bold">My App</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products" className="ml-4">Products</Link>
        {session && (
          <Link href="/dashboard" className="ml-4">Dashboard</Link>
        )}
        {session ? (
          <button onClick={() => signOut()} className="ml-4">Logout</button>
        ) : (
          <Link href="/login" className="ml-4">Login</Link>
        )}
      </div>
    </nav>
  );
}

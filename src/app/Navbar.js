import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="font-bold">My App</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products" className="ml-4">Products</Link>
        <Link href="/dashboard" className="ml-4">Dashboard</Link>
        <Link href="/login" className="ml-4">Login</Link>
      </div>
    </nav>
  );
}

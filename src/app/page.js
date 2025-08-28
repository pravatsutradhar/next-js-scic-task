import Link from "next/link";
import { getAllProducts } from "../lib/products";

export default function Home() {
  const products = getAllProducts().slice(0, 3); // highlight 3 products

  return (
    <div>
      {/* Hero Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Product App</h2>
        <p className="text-gray-700">Explore amazing products and manage them easily.</p>
      </section>

      {/* Product Highlights */}
      <section className="p-10">
        <h3 className="text-2xl font-bold mb-4">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h4 className="font-bold">{product.name}</h4>
              <p>{product.description}</p>
              <p className="font-semibold">${product.price}</p>
              <Link href={`/products/${product.id}`} className="text-blue-500 mt-2 inline-block">
                Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        &copy; 2025 My App. All rights reserved.
      </footer>
    </div>
  );
}

import Link from "next/link";
import { getAllProducts } from "../lib/products";


export default function Home() {
  const products = getAllProducts().slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg rounded-b-3xl">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Discover Amazing Products</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">Your one-stop shop for the best products. Browse, manage, and enjoy a seamless experience.</p>
        <Link href="/products" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-blue-100 transition">Browse Products</Link>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl" />
      </section>

      {/* Product Highlights */}
      <section className="flex-1 py-16 px-4 max-w-6xl mx-auto w-full">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-blue-600">{product.name[0]}</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h4>
              <p className="text-gray-600 mb-2 text-center">{product.description}</p>
              <p className="font-semibold text-blue-700 text-xl mb-4">${product.price}</p>
              <Link href={`/products/${product.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">View Details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center rounded-t-3xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Ready to add your own product?</h3>
        <Link href="/products/add-product" className="inline-block px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow hover:bg-purple-100 transition">Add Product</Link>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-900 text-white text-center mt-8 rounded-t-2xl">
        &copy; 2025 My App. All rights reserved.
      </footer>
    </div>
  );
}

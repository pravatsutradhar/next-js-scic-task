import Link from "next/link";
import { getAllProducts } from "../../lib/products";


export default function Products() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-100">
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-4xl font-extrabold mb-2 text-gray-900">All Products</h2>
            <p className="text-gray-600">Browse our complete product collection.</p>
          </div>
          <Link href="/dashboard/add-product" className="mt-6 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">Add Product</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">{product.name[0]}</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h4>
              <p className="text-gray-600 mb-2 text-center">{product.description}</p>
              <p className="font-semibold text-blue-700 text-lg mb-4">${product.price}</p>
              <Link href={`/products/${product.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { getProductById } from "../../../lib/products";


import Link from "next/link";

export default function ProductDetails({ params }) {
  const product = getProductById(params.id);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-yellow-100">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Product not found</h2>
          <Link href="/products" className="text-blue-600 underline">Back to Products</Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-blue-600">{product.name[0]}</span>
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-gray-900">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="font-semibold text-blue-700 text-2xl mb-6">${product.price}</p>
        <Link href="/products" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">Back to Products</Link>
      </div>
    </div>
  );
}

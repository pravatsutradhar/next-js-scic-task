import Link from "next/link";
import { getAllProducts } from "../../lib/products";

export default function Products() {
  const products = getAllProducts();

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>
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
    </div>
  );
}

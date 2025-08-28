import { getProductById } from "../../../lib/products";

export default function ProductDetails({ params }) {
  const product = getProductById(params.id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="mb-2">{product.description}</p>
      <p className="font-semibold mb-4">${product.price}</p>
    </div>
  );
}

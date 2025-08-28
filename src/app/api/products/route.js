import { addProduct, getAllProducts } from "../../../lib/products";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const products = getAllProducts();
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }

  const data = await req.json();
  const newProduct = {
    id: Date.now().toString(),
    name: data.name,
    description: data.description,
    price: parseFloat(data.price),
  };

  addProduct(newProduct);

  return new Response(JSON.stringify(newProduct), { status: 201 });
}

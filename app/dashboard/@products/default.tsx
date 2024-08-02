import Link from "next/link";
import React from "react";

interface ProductProp {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}
export default async function ProductsPage() {
  const products = await fetch("https://fakestoreapi.com/products");
  if (!products.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await products.json();
  return (
    <div className="min-h-screen grow py-[20px] pr-[20px] min-w-[450px]">
      <div className="h-full shadow-2xl p-[20px] rounded-box">
        <h2 className="text-2xl font-bold mb-[14px]">Products:</h2>
        <ul className="">
          {data.map((product: ProductProp) => (
            <li key={product.id}>
              <Link href={`/dashboard/${product.id}`}>
                <p>{product.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

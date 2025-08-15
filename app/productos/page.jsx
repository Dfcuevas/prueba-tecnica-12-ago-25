"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Page() {
  //const data = await fetch("/api/products");
  //const { products } = await data.json();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);
  return (
    <main className="p-6">
      <h1 className="text-blue-500 font-bold text-3xl ">Productos TechStore</h1>
      <section className="mt-6 flex gap-4 flex-wrap justify-center">
        {products.products?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </section>
    </main>
  );
}

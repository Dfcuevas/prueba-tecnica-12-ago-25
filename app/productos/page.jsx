import ProductCard from "../components/ProductCard";

export default async function Page() {
  const data = await fetch("http://localhost:3000/api/products");
  const { products } = await data.json();
  return (
    <main className="p-6">
      <h1 className="text-blue-500 font-bold text-3xl ">Productos TechStore</h1>
      <section className="mt-6 flex gap-4 flex-wrap justify-center">
        {products?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </section>
    </main>
  );
}

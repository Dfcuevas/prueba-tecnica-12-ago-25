"use client";
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Producto 1", price: 60 },
  { id: 2, name: "Producto 2", price: 100 },
  { id: 3, name: "Producto 3", price: 120 },
  { id: 4, name: "Producto 4", price: 70 },
];

const page = () => {
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState([]);

  function getBestCombination(products, budget) {
    let bestCombination = [];
    let bestTotal = 0;

    function backtrack(current, index, total) {
      if (total > budget) return;
      if (total > bestTotal) {
        bestTotal = total;
        bestCombination = [...current];
      }
      if (index >= products.length) return;

      backtrack(
        [...current, products[index]],
        index + 1,
        total + products[index].price,
      );
      backtrack(current, index + 1, total);
    }

    backtrack([], 0, 0);
    return {
      bestCombination,
      bestTotal,
    };
  }

  const handleClick = () => {
    setResult(getBestCombination(products, budget));
  };
  console.log(result);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Mejor combinación de productos</h1>

      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white p-2 rounded-xl"
      >
        Calcular
      </button>

      <ul className="mt-4 flex gap-4">
        {result.bestCombination?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ul>

      <div className="mt-6">Con un total de: ${result.bestTotal}</div>
    </div>
  );
};

export default page;

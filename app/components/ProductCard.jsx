"use client";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  console.log(cart);

  const handleAddToCart = async () => {
    const result = await addToCart(product.id);
  };

  return (
    <div className="rounded-2xl border p-4">
      <h2 className="text-lg">{product.name}</h2>
      <p className="font-bold text-xl">$ {product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 cursor-pointer bg-blue-500 px-2 py-3 rounded-xl text-teal-50 hover:bg-blue-300"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;

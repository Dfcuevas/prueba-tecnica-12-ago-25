"use client";

import React from "react";
import { useCart } from "../hooks/useCart";

const page = () => {
  const { cart, removeFromCart } = useCart();
  console.log(cart);

  const handleRemoveFromCart = async (productId, quantity) => {
    const result = await removeFromCart(productId, quantity);
  };

  if (cart.itemCount === 0) {
    return (
      <div className="mt-10 flex items-center justify-center text-2xl">
        No hay productos agregados al carrito aún.
      </div>
    );
  }
  return (
    <main className="p-6 grid md:grid-cols-2 gap-8">
      <section>
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="p-4 mb-2 border rounded-xl border-gray-200 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="mb-2">
              <p>{item.name}</p>
              <button
                onClick={() => handleRemoveFromCart(item.id, item.quantity)}
                className="cursor-pointer text-red-600 mt-2"
              >
                Eliminar
              </button>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Unidades: {item.quantity}</div>
              <div className="text-xl">$ {item.price * item.quantity}</div>
            </div>
          </div>
        ))}
      </section>
      <section className="p-4 flex flex-col gap-4 border rounded-xl border-gray-200 shadow-sm transition hover:shadow-md self-start">
        <h1>Resume de la compra</h1>
        <div className="flex justify-between">
          <span>Productos ({cart.itemCount})</span>
          <span className="text-xl">$ {cart.total}</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="text-xl">$ {cart.total}</span>
        </div>
        <button className="cursor-pointer bg-blue-500 rounded-xl w-full p-2 text-teal-50 hover:bg-blue-400">
          Continuar compra
        </button>
      </section>
    </main>
  );
};

export default page;

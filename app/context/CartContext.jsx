"use client";
import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { SET_CART, SET_LOADING } from "./cartActions";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
    loading: false,
  });

  // Funcion para obtener el carrito

  const fetchCart = async () => {
    try {
      const res = await fetch("/api/cart");
      const data = await res.json();
      if (data.success) {
        dispatch({ type: SET_CART, payload: data.cart });
      }
    } catch (error) {
      console.log("Error fetching cart:", error);
    }
  };

  // Funcion para agregar al carrito

  const addToCart = async (productId, quantity = 1) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
      });
      const data = await res.json();
      if (data.success) {
        dispatch({ type: SET_CART, payload: data.cart });
        return { success: true, message: data.message };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: "Error adding to cart" };
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  // Funcion para remover del carrito

  const removeFromCart = async (productId, quantity) => {
    dispatch({ type: SET_LOADING, payload: true });

    try {
      const res = await fetch("/api/cart/remove", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
      });

      const data = await res.json();
      if (data.success) {
        dispatch({ type: SET_CART, payload: data.cart });
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  // Cargar carrito al montar el componente
  useEffect(() => {
    fetchCart();
  }, []);

  const value = {
    cart,
    fetchCart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

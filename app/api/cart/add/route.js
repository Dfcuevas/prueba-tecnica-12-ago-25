import { cart, products } from "@/lib/data";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { productId, quantity = 1 } = await request.json();
    if (!productId) {
      return NextResponse.json(
        {
          success: false,
          error: "Product ID is required",
        },
        { status: 400 },
      );
    }

    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: "Product not found",
        },
        { status: 404 },
      );
    }

    // Buscar si el producto ya está en el carrito
    const existingItemIndex = cart.items.findIndex(
      (item) => item.id === product.id,
    );

    if (existingItemIndex >= 0) {
      const newQuantity = cart.items[existingItemIndex].quantity + quantity;
      cart.items[existingItemIndex].quantity = newQuantity;
    } else {
      // Agregar nuevo item
      cart.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      });
    }

    // calcular totales
    const total = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    return NextResponse.json({
      success: true,
      cart: {
        ...cart,
        total: parseFloat(total.toFixed(2)),
        itemCount,
      },
      message: "Product added to cart",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to add product to cart",
      },
      { status: 500 },
    );
  }
}

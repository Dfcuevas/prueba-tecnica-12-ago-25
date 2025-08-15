import { cart } from "@/lib/data";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const { productId, quantity } = await request.json();

    if (!productId) {
      return NextResponse.json(
        {
          success: false,
          error: "Product ID is required",
        },
        { status: 400 },
      );
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.id === parseInt(productId),
    );

    if (itemIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "Product not found in cart",
        },
        { status: 404 },
      );
    }

    if (quantity && quantity < cart.items[itemIndex].quantity) {
      // Reducir cantidad
      cart.items[itemIndex].quantity -= quantity;
    } else {
      // Remover completamente
      cart.items.splice(itemIndex, 1);
    }

    // Calcular totales
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
      message: "Product removed from cart",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to remove product from cart",
      },
      { status: 500 },
    );
  }
}

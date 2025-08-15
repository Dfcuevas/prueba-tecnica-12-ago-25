import { cart } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch cart",
      },
      { status: 500 },
    );
  }
}

import { products } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  console.log(products);
  try {
    return NextResponse.json({
      products,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch products",
      },
      { status: 500 },
    );
  }
}

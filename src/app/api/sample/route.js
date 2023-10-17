import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    `${process.env.BE_API_URL}/sample?message=FromNextApp`
  );
  const data = await response.json();
  return NextResponse.json(data, { status: 200 });
}

export const dynamic = "force-dynamic";

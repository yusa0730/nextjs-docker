import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "sample api route." }, { status: 200 });
}

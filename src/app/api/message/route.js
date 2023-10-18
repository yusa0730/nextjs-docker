import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${process.env.BE_API_URL}/message`);
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

export const dynamic = "force-dynamic";

export async function POST(request) {
  const params = await request.json();
  const body = JSON.stringify(params);
  const response = await fetch(`${process.env.BE_API_URL}/message`, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}

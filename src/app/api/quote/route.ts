import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Quote from "@/models/quote";

export async function GET() {
  try {
    await dbConnect();
    const quotes = await Quote.aggregate([{ $sample: { size: 1 } }]);
    if (!quotes || quotes.length === 0) {
      return NextResponse.json({ error: "No quotes found" }, { status: 404 });
    }
    return NextResponse.json(quotes[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: `Internal Server Error` },
      { status: 500 }
    );
  }
}

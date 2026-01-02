import { supabase } from "@/app/connectDb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url, shortUrl } = await request.json();

    if (!url || !shortUrl) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    // Check if shortUrl already exists
    const { data: existing } = await supabase
      .from("linksnap")
      .select("id")
      .eq("shortUrl", shortUrl)
      .single();

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Short URL already exists" },
        { status: 409 }
      );
    }

    // Insert new record
    const { error } = await supabase.from("linksnap").insert({
      url,
      shortUrl: shortUrl,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Short URL created successfully",
    });

  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

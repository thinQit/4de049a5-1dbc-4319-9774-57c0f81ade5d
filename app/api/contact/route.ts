import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactInquirySchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactInquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const inquiry = await db.contactInquiry.create({
      data: parsed.data,
    });

    // Placeholder for internal notification/email integration

    return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactCreateSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactCreateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const inquiry = await db.contactInquiry.create({
      data: {
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        topic: parsed.data.topic,
        message: parsed.data.message,
      },
    });

    return NextResponse.json(
      { success: true, id: inquiry.id, message: "Inquiry submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

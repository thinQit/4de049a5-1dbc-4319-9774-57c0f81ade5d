import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    await db.contactMessage.create({
      data: {
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone || null,
        topic: payload.topic,
        message: payload.message,
      },
    });

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully." }, { status: 201 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ success: false, error: "Failed to submit inquiry." }, { status: 500 });
  }
}

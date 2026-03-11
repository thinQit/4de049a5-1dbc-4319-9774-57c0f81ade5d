import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    const existing = await db.newsletterSubscriber.findUnique({
      where: { email: payload.email },
    });

    if (existing) {
      return NextResponse.json(
        { success: true, message: "You are already subscribed." },
        { status: 200 }
      );
    }

    await db.newsletterSubscriber.create({
      data: {
        email: payload.email,
        name: payload.name || null,
      },
    });

    return NextResponse.json({ success: true, message: "Subscribed successfully." }, { status: 201 });
  } catch (error) {
    console.error("POST /api/newsletter error:", error);
    return NextResponse.json({ success: false, error: "Failed to subscribe." }, { status: 500 });
  }
}

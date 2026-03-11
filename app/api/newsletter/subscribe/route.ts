import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribeSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = newsletterSubscribeSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const subscriber = await db.newsletterSubscriber.upsert({
      where: { email: parsed.data.email },
      update: {
        interests: parsed.data.interests,
        consent: parsed.data.consent,
      },
      create: parsed.data,
    });

    return NextResponse.json({ success: true, id: subscriber.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/newsletter/subscribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

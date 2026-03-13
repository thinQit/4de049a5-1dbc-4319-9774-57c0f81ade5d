import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribeSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = newsletterSubscribeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const subscriber = await db.newsletterSubscriber.upsert({
      where: { email: parsed.data.email.toLowerCase() },
      update: {
        interests: parsed.data.interests,
        consent: parsed.data.consent,
      },
      create: {
        email: parsed.data.email.toLowerCase(),
        interests: parsed.data.interests,
        consent: parsed.data.consent,
      },
    });

    return NextResponse.json({ success: true, id: subscriber.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/newsletter/subscribe error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}

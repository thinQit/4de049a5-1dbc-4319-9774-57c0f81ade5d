import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribeSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSubscribeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const subscription = await db.newsletterSubscription.upsert({
      where: { email: parsed.data.email },
      update: {
        name: parsed.data.name || null,
        playingLevel: parsed.data.playingLevel ?? null,
      },
      create: {
        email: parsed.data.email,
        name: parsed.data.name || null,
        playingLevel: parsed.data.playingLevel ?? null,
      },
    });

    return NextResponse.json(
      { success: true, id: subscription.id, message: "Subscribed successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/newsletter/subscribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

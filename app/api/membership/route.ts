import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { membershipSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = membershipSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    await db.membershipRequest.create({
      data: {
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        plan: payload.plan,
        playingLevel: payload.playingLevel,
        preferredTimes: payload.preferredTimes ?? [],
        message: payload.message || null,
      },
    });

    return NextResponse.json({ success: true, message: "Membership request submitted." }, { status: 201 });
  } catch (error) {
    console.error("POST /api/membership error:", error);
    return NextResponse.json({ success: false, error: "Failed to submit membership request." }, { status: 500 });
  }
}

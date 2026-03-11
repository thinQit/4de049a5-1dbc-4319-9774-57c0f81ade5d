import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { membershipApplicationCreateSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = membershipApplicationCreateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const application = await db.membershipApplication.create({
      data: {
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        playingLevel: parsed.data.playingLevel,
        preferredPlan: parsed.data.preferredPlan,
        preferredTime: parsed.data.preferredTime,
        notes: parsed.data.notes || null,
      },
    });

    return NextResponse.json(
      { success: true, id: application.id, message: "Application submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/membership/apply error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

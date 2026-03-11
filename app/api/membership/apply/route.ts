import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";
import { membershipApplySchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    const json = await req.json();
    const parsed = membershipApplySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const application = await db.membershipApplication.create({
      data: {
        ...parsed.data,
        userId: session?.user?.id ?? null,
      },
    });

    return NextResponse.json({ success: true, id: application.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/membership/apply error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

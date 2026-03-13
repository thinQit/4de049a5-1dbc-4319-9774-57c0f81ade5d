import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";
import { membershipApplicationSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    const body = await req.json();
    const parsed = membershipApplicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const created = await db.membershipApplication.create({
      data: {
        ...parsed.data,
        preferredStartDate: parsed.data.preferredStartDate
          ? new Date(parsed.data.preferredStartDate)
          : null,
        userId: (session?.user as { id?: string } | undefined)?.id ?? null,
      },
    });

    // Placeholder for internal notification/email integration

    return NextResponse.json({ success: true, id: created.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/membership/apply error:", error);
    return NextResponse.json({ error: "Failed to submit membership application" }, { status: 500 });
  }
}

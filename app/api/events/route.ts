import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const now = new Date();

    const events = await db.event.findMany({
      where: {
        startsAt: {
          gte: now,
        },
      },
      orderBy: {
        startsAt: "asc" as const,
      },
      select: {
        id: true,
        slug: true,
        title: true,
        startsAt: true,
        durationMinutes: true,
        category: true,
        level: true,
        feeINR: true,
        capacity: true,
        location: true,
      },
    });

    return NextResponse.json({ success: true, events }, { status: 200 });
  } catch (error) {
    console.error("GET /api/events error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

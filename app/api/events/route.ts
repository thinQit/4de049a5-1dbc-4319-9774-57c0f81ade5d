import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const now = new Date();

    const events = await db.event.findMany({
      where: {
        isPublished: true,
        startDateTime: {
          gte: now,
        },
      },
      orderBy: {
        startDateTime: "asc" as const,
      },
    });

    return NextResponse.json({ success: true, data: events }, { status: 200 });
  } catch (error) {
    console.error("GET /api/events error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch events." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const events = await db.event.findMany({
      where: { isPublished: true },
      orderBy: { eventDate: "asc" as const },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        eventDate: true,
        timeLabel: true,
        type: true,
        level: true,
        priceLabel: true,
        capacity: true,
        location: true,
      },
    });

    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    console.error("GET /api/events error:", error);
    return NextResponse.json({ error: "Failed to load events" }, { status: 500 });
  }
}

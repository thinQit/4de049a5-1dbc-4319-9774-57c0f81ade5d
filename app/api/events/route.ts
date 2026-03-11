import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getEventsQuerySchema } from "@/lib/validators";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const parsed = getEventsQuerySchema.safeParse({
      type: searchParams.get("type") ?? undefined,
      upcomingOnly: searchParams.get("upcomingOnly") ?? undefined,
      limit: searchParams.get("limit") ?? undefined,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query params", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { type, upcomingOnly, limit } = parsed.data;

    const events = await db.event.findMany({
      where: {
        isPublished: true,
        ...(type ? { type } : {}),
        ...(upcomingOnly ? { date: { gte: new Date() } } : {}),
      },
      orderBy: {
        date: "asc" as const,
      },
      take: limit,
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        date: true,
        endDate: true,
        type: true,
        location: true,
        capacity: true,
        priceMember: true,
        priceNonMember: true,
      },
    });

    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    console.error("GET /api/events error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

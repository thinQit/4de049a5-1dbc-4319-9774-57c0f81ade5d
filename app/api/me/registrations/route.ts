import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getAuthSession();
    const userId = (session?.user as { id?: string } | undefined)?.id;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const registrations = await db.eventRegistration.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" as const },
      include: {
        event: {
          select: {
            id: true,
            slug: true,
            title: true,
            eventDate: true,
            timeLabel: true,
            location: true,
            type: true,
            level: true,
          },
        },
      },
    });

    return NextResponse.json({ registrations }, { status: 200 });
  } catch (error) {
    console.error("GET /api/me/registrations error:", error);
    return NextResponse.json({ error: "Failed to load registrations" }, { status: 500 });
  }
}

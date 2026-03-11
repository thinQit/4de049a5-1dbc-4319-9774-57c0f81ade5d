import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { eventRegistrationSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = eventRegistrationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    const event = await db.event.findUnique({
      where: { slug: payload.eventSlug },
      select: {
        id: true,
        isPublished: true,
        isMembersOnly: true,
      },
    });

    if (!event || !event.isPublished) {
      return NextResponse.json({ success: false, error: "Event not found." }, { status: 404 });
    }

    const session = await auth();

    if (event.isMembersOnly && !session?.user?.id) {
      return NextResponse.json({ success: false, error: "Authentication required for this event." }, { status: 401 });
    }

    const registration = await db.eventRegistration.create({
      data: {
        eventId: event.id,
        userId: session?.user?.id ?? null,
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone || null,
        notes: payload.notes || null,
      },
    });

    return NextResponse.json({ success: true, data: registration }, { status: 201 });
  } catch (error) {
    console.error("POST /api/events/register error:", error);
    return NextResponse.json({ success: false, error: "Failed to register for event." }, { status: 500 });
  }
}

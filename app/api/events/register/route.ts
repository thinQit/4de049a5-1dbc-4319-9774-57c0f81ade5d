import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";
import { eventRegistrationSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    const json = await req.json();
    const parsed = eventRegistrationSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const event = await db.event.findUnique({
      where: { slug: parsed.data.eventSlug },
      select: { id: true, capacity: true, date: true, isPublished: true },
    });

    if (!event || !event.isPublished) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    if (event.date < new Date()) {
      return NextResponse.json({ error: "Event registration is closed" }, { status: 400 });
    }

    const registrationCount = await db.eventRegistration.count({
      where: { eventId: event.id },
    });

    if (registrationCount >= event.capacity) {
      return NextResponse.json({ error: "Event is full" }, { status: 409 });
    }

    const registration = await db.eventRegistration.create({
      data: {
        eventId: event.id,
        userId: session?.user?.id ?? null,
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        category: parsed.data.category,
        level: parsed.data.level,
        partnerName: parsed.data.partnerName,
        notes: parsed.data.notes,
        consent: parsed.data.consent,
      },
    });

    return NextResponse.json({ success: true, id: registration.id }, { status: 201 });
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code?: string }).code === "P2002"
    ) {
      return NextResponse.json(
        { error: "You are already registered for this category in this event" },
        { status: 409 }
      );
    }

    console.error("POST /api/events/register error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

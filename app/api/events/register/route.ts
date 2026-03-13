import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";
import { eventRegisterSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    const userId = (session?.user as { id?: string } | undefined)?.id;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = eventRegisterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const result = await db.$transaction(async (tx) => {
      const event = await tx.event.findUnique({
        where: { id: parsed.data.eventId },
        select: { id: true, capacity: true, eventDate: true, isPublished: true },
      });

      if (!event || !event.isPublished) {
        throw new Error("EVENT_NOT_FOUND");
      }

      const now = new Date();
      if (event.eventDate < now) {
        throw new Error("EVENT_CLOSED");
      }

      const existing = await tx.eventRegistration.findUnique({
        where: {
          eventId_userId: {
            eventId: parsed.data.eventId,
            userId,
          },
        },
      });

      if (existing) {
        throw new Error("ALREADY_REGISTERED");
      }

      const confirmedCount = await tx.eventRegistration.count({
        where: {
          eventId: parsed.data.eventId,
          status: "CONFIRMED",
        },
      });

      if (confirmedCount >= event.capacity) {
        throw new Error("EVENT_FULL");
      }

      return tx.eventRegistration.create({
        data: {
          eventId: parsed.data.eventId,
          userId,
          partnerName: parsed.data.partnerName,
          notes: parsed.data.notes,
          status: "CONFIRMED",
        },
      });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

    return NextResponse.json({ success: true, registrationId: result.id }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "EVENT_NOT_FOUND") {
        return NextResponse.json({ error: "Event not found" }, { status: 404 });
      }
      if (error.message === "EVENT_CLOSED") {
        return NextResponse.json({ error: "Event registration is closed" }, { status: 400 });
      }
      if (error.message === "ALREADY_REGISTERED") {
        return NextResponse.json({ error: "You are already registered for this event" }, { status: 409 });
      }
      if (error.message === "EVENT_FULL") {
        return NextResponse.json({ error: "Event capacity reached" }, { status: 409 });
      }
    }

    console.error("POST /api/events/register error:", error);
    return NextResponse.json({ error: "Failed to register for event" }, { status: 500 });
  }
}

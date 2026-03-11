import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { eventRegisterSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
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
        select: { id: true, capacity: true, startsAt: true },
      });

      if (!event) {
        return { error: "Event not found", status: 404 as const };
      }

      if (event.startsAt < new Date()) {
        return { error: "Event registration is closed", status: 400 as const };
      }

      const registrationsCount = await tx.eventRegistration.count({
        where: { eventId: event.id },
      });

      if (registrationsCount >= event.capacity) {
        return { error: "Event is full", status: 409 as const };
      }

      try {
        const registration = await tx.eventRegistration.create({
          data: {
            userId: session.user.id,
            eventId: event.id,
          },
          select: {
            id: true,
            eventId: true,
            userId: true,
            createdAt: true,
          },
        });

        return { registration, status: 201 as const };
      } catch {
        return { error: "Already registered for this event", status: 409 as const };
      }
    });

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    return NextResponse.json({ success: true, registration: result.registration }, { status: 201 });
  } catch (error) {
    console.error("POST /api/events/register error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

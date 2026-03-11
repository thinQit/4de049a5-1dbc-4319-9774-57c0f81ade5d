"use client";

interface ScheduleTimelineProps {
  schedule?: { day: string; slots: string[] }[]
}

export default function ScheduleTimeline({
  schedule = [
    { day: 'Monday', slots: ['6:00 AM Conditioning', '5:00 PM Junior Drills'] },
    { day: 'Wednesday', slots: ['7:00 AM Open Rally', '6:30 PM Match Play'] },
    { day: 'Friday', slots: ['5:30 PM Pro Clinic', '8:00 PM Social Doubles'] },
    { day: 'Sunday', slots: ['8:00 AM Tournament Prep', '6:00 PM Recovery Stretch'] },
  ],
}: Partial<ScheduleTimelineProps>) {
  return (
    <section className="py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {schedule.map((day) => (
          <div key={day.day} className="relative rounded-2xl border border-white/10 bg-[#102D21] p-5">
            <div className="mb-4 text-lg font-bold text-[#FFD700]">{day.day}</div>
            <div className="space-y-3">
              {day.slots.map((slot) => (
                <div key={slot} className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/85">
                  {slot}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

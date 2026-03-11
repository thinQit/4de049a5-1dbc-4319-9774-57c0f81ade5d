'use client'

export default function Timeline() {
  const milestones = [
    { year: '1924', title: 'Club Founded', text: 'Wimbledon Grove was established as a neighborhood grass-court club.' },
    { year: '1968', title: 'Open Era Expansion', text: 'New spectator pavilion and championship courts were added.' },
    { year: '2004', title: 'Junior Academy Launch', text: 'A dedicated youth development program began producing regional champions.' },
    { year: '2023', title: 'Performance Center', text: 'Modern analytics and recovery spaces introduced for all members.' },
  ]

  return (
    <section className='py-20 md:py-24' id='history'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-[#0F4D2C] md:text-4xl'>Our History</h2>
        <div className='mt-8 grid gap-6 md:grid-cols-4'>
          {milestones.map((m) => (
            <div key={m.year} className='rounded-2xl border bg-card p-5'>
              <p className='text-sm font-semibold text-[#2C8B57]'>{m.year}</p>
              <h3 className='mt-1 font-bold'>{m.title}</h3>
              <p className='mt-2 text-sm text-muted-foreground'>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

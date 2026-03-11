'use client'

export default function StatsRow() {
  const stats = [
    { label: 'Founded', value: '1924' },
    { label: 'Active Members', value: '1,800+' },
    { label: 'Expert Coaches', value: '26' },
    { label: 'Courts', value: '18' },
  ]

  return (
    <section className='py-10'>
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-6'>
        {stats.map((stat) => (
          <div key={stat.label} className='rounded-2xl border bg-card p-5 text-center'>
            <p className='text-2xl font-bold text-[#0F4D2C]'>{stat.value}</p>
            <p className='text-sm text-muted-foreground'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

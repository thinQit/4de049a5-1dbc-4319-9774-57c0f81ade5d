"use client";

interface SEOHeadProps {
  title?: string
  description?: string
}

export default function SEOHead({
  title = 'Home',
  description = 'Anand Tennis Club official website for events, membership, and club updates.',
}: Partial<SEOHeadProps>) {
  const fullTitle = title.includes('Anand Tennis Club') ? title : title + ' | Anand Tennis Club'
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </>
  )
}

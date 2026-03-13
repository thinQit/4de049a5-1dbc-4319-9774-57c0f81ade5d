export const dynamic = 'force-dynamic';

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-syne text-3xl md:text-4xl font-bold mb-5">Terms of Service</h1>
      <p className="mb-6 text-muted-foreground">Last updated: March 2024</p>
      <h2 className="font-bold text-lg mb-2">Acceptance of Terms</h2>
      <p>
        By accessing or using Anand Tennis Club’s website and services, you agree to these Terms of Service. If you do not agree, please do not use our services.
      </p>
      <h2 className="mt-8 font-bold text-lg mb-2">Memberships and Events</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>Memberships renew monthly unless cancelled</li>
        <li>Event registration is first-come, first-served with set capacities</li>
        <li>Conduct must follow our Club Code at all times</li>
      </ul>
      <h2 className="mt-8 font-bold text-lg mb-2">Liability</h2>
      <p>
        Club activities involve physical exercise; members and participants are responsible for their own health and safety. The club is not liable for injuries or lost property.
      </p>
      <h2 className="mt-8 font-bold text-lg mb-2">Changes to Terms</h2>
      <p>
        We may update these terms periodically. Continued use of our site and services means you accept any changes.
      </p>
      <h2 className="mt-8 font-bold text-lg mb-2">Contact</h2>
      <p>
        Please contact <a className="underline text-primary" href="mailto:hello@anandtennisclub.com">hello@anandtennisclub.com</a> with questions about these terms.
      </p>
    </main>
  )
}

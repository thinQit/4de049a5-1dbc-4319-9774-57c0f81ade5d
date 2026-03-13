export const dynamic = 'force-dynamic';

export default function CookiesPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-syne text-3xl md:text-4xl font-bold mb-5">Cookie Policy</h1>
      <p className="mb-6 text-muted-foreground">Last updated: March 2024</p>
      <p>
        Anand Tennis Club uses cookies to provide basic functionality and monitor site traffic (using privacy-first analytics). We do not use cookies for advertising or third-party tracking.
      </p>
      <h2 className="mt-8 mb-2 font-bold text-lg">What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device by your browser. They help the site remember preferences and recognize you between visits.
      </p>
      <h2 className="mt-8 mb-2 font-bold text-lg">How We Use Cookies</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>Maintain basic session and signup functionality</li>
        <li>Aggregate, anonymous usage analytics only</li>
      </ul>
      <h2 className="mt-8 mb-2 font-bold text-lg">Managing Cookies</h2>
      <p>
        You can disable cookies via your browser settings at any time. However, some site features may not work as intended if cookies are disabled.
      </p>
      <h2 className="mt-8 mb-2 font-bold text-lg">Contact</h2>
      <p>
        Questions regarding cookies? Email <a className="underline text-primary" href="mailto:hello@anandtennisclub.com">hello@anandtennisclub.com</a>.
      </p>
    </main>
  )
}

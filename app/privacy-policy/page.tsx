export const dynamic = 'force-dynamic';

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-syne text-3xl md:text-4xl font-bold mb-5">Privacy Policy</h1>
      <p className="mb-6 text-muted-foreground">Last updated: March 2024</p>
      <p>
        Anand Tennis Club (“we”, “us”, or “our”) is committed to protecting your privacy and handling your information with transparency. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website and services.
      </p>
      <h2 className="mt-8 mb-2 font-bold text-lg">Information We Collect</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>Your name and email when you contact us or subscribe to the newsletter</li>
        <li>Information you provide on membership and event forms</li>
        <li>Basic usage data (analytics in aggregate only)</li>
      </ul>
      <h2 className="mt-8 mb-2 font-bold text-lg">How We Use Your Information</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>Process inquiries, applications, and event registrations</li>
        <li>Send you club updates and event information (if you’ve opted in)</li>
        <li>Improve our website and services</li>
      </ul>
      <h2 className="mt-8 mb-2 font-bold text-lg">Data Protection</h2>
      <p>
        We never share your personal information with unaffiliated third parties. All data is securely stored and access is limited to club management. You can unsubscribe or request deletion of your data anytime by contacting <a className="underline text-primary" href="mailto:hello@anandtennisclub.com">hello@anandtennisclub.com</a>.
      </p>
      <h2 className="mt-8 mb-2 font-bold text-lg">Contact</h2>
      <p>
        Questions about this Privacy Policy? Email <a className="underline text-primary" href="mailto:hello@anandtennisclub.com">hello@anandtennisclub.com</a>.
      </p>
    </main>
  )
}

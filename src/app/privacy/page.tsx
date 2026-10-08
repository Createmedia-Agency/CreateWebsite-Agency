import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CREATE.",
  description: "How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8">
          Privacy <span className="text-brand-red">Policy</span>
        </h1>
        <div className="prose prose-invert prose-lg max-w-none font-sans opacity-80 space-y-8">
          <p>
            At CREATE., we respect your privacy and are committed to protecting your personal data in accordance with the Digital Personal Data Protection (DPDP) Act, 2023. This policy explains what information we collect, why we collect it, and how we handle it.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. What Personal Data We Collect</h2>
          <p>
            When you use our contact form, we collect the following personal data:
            Name, Email Address, Phone Number, Company Name, Website URL, Budget, Project Details, and Message content.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Why We Collect It & How We Use It</h2>
          <p>
            We process this data solely to respond to your project enquiries, provide requested services, and communicate with you regarding your business needs. 
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Where It Is Stored & Third-Party Processors</h2>
          <p>
            Your data is stored securely in our database. We use the following third-party service providers acting as Data Processors:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Supabase:</strong> For secure database hosting and storage.</li>
            <li><strong>Resend:</strong> For transactional email delivery of your enquiries.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Data Retention</h2>
          <p>
            We retain contact leads for a period of 2 years from the date of last communication to maintain business context. After this period, personal data that is no longer required for active business purposes will be securely deleted.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Your Rights & Data Deletion</h2>
          <p>
            Under the DPDP Act, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request the deletion of your personal data.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact our Data Protection Officer / Privacy Team at <strong>privacy@createforbrands.com</strong> (subject to business configuration) or <strong>createforbrands@gmail.com</strong>. All requests will be verified before action is taken.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Grievance Redressal</h2>
          <p>
            If you have a grievance regarding how we handle your personal data, you may email us at the addresses above. We will respond within the legally mandated timeframe to resolve your concerns.
          </p>

          <p className="mt-12 text-sm opacity-60">
            Last Updated: [Current Date - 2026]
          </p>
        </div>
      </div>
    </div>
  );
}

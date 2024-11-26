import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Smartify',
  description: 'Terms of Service for Smartify app users.',
}

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Smartify mobile application and website (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Access to the Service</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service for your personal, non-commercial use.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Content</h2>
        <p>
          Our Service allows you to post, link, store, share and otherwise make available certain information, text, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
        <p>
          You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>In any way that violates any applicable law or regulation.</li>
          <li>To impersonate or attempt to impersonate Smartify, a Smartify employee, another user, or any other person or entity.</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Smartify and its licensors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
        <p>
          In no event shall Smartify, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of Florida, United States, without regard to its conflict of law provisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="mt-2">
          Email: support@studysmartify.onmicrosoft.com<br />
        </p>
      </section>
    </div>
  )
}

export default TermsPage

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Smartify',
  description: 'Privacy policy for Smartify app users.',
}

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Smartify ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p>We collect information that you provide directly to us when you:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Create an account</li>
          <li>Use our Service</li>
          <li>Contact our customer support</li>
        </ul>
        <p>This information may include:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Your name and email address</li>
          <li>Your study materials and quiz results</li>
          <li>Device information and usage data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Provide, maintain, and improve our Service</li>
          <li>Personalize your experience</li>
          <li>Communicate with you about our Service</li>
          <li>Monitor and analyze trends and usage</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Sharing of Your Information</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Service providers who help us operate our business</li>
          <li>Other users, if you choose to participate in collaborative features</li>
          <li>Legal authorities, if required by law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mt-2">
          Email: support@studysmartify.onmicrosoft.com<br />
        </p>
      </section>
    </div>
  )
}

export default PrivacyPage

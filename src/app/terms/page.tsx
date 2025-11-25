import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SJMPC',
  description: 'Terms of Service for San Jose Multi-Purpose Cooperative',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Terms of Service</h1>
          <p className="text-gray-600 text-center mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the services provided by San Jose Multi-Purpose Cooperative ("SJMPC", "we", "our", or "us"),
              you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide
              by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              SJMPC provides cooperative financial services including but not limited to savings accounts, loan services,
              insurance products, and other financial services to our members. Our website serves as an information portal
              and application platform for these services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Membership Eligibility</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                To become a member of SJMPC, you must:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Be at least 18 years old</li>
                <li>Reside within our area of operation</li>
                <li>Agree to abide by our bylaws and policies</li>
                <li>Complete the required membership application process</li>
                <li>Make the minimum share capital contribution</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
            <div className="space-y-4">
              <p className="text-gray-700">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in accordance with applicable laws and regulations</li>
                <li>Not engage in fraudulent or illegal activities</li>
                <li>Report any suspicious activities or security concerns</li>
                <li>Keep your contact information current</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Financial Services Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Loans and Credit</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>All loans are subject to approval and credit evaluation</li>
                  <li>Interest rates and terms are determined by our loan policies</li>
                  <li>Members must maintain good standing to be eligible for loans</li>
                  <li>Loan payments must be made according to agreed schedules</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Savings and Deposits</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Savings accounts earn dividends as declared by the Board</li>
                  <li>Minimum balance requirements may apply</li>
                  <li>Withdrawals are subject to our policies and regulations</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Online Services</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Our online services include:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Online application submission</li>
                <li>Account information access</li>
                <li>Transaction history viewing</li>
                <li>Document downloads</li>
                <li>Communication tools</li>
              </ul>
              <p className="text-gray-700">
                Online services are provided for convenience and do not replace the need for proper documentation
                and verification processes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services,
              to understand our practices regarding the collection and use of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              The SJMPC name, logo, and all related names, logos, product and service names, designs, and slogans are
              trademarks of San Jose Multi-Purpose Cooperative. You must not use such marks without our prior written
              permission. All other names, logos, product and service names, designs, and slogans on this website are
              the trademarks of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall SJMPC, its officers, directors, employees, or agents be liable for any indirect,
              incidental, special, consequential, or punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your account and access to our services immediately, without prior notice
              or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the Republic of the Philippines,
              without regard to its conflict of law provisions. Any disputes arising from these terms shall
              be subject to the exclusive jurisdiction of the courts of Antique, Philippines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material,
              we will try to provide at least 30 days notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-3">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>San Jose Multi-Purpose Cooperative</strong></p>
              <p className="text-gray-700">Tradetown Funda-Dalipe, San Jose, Antique</p>
              <p className="text-gray-700">Phone: (036) 540-8209</p>
              <p className="text-gray-700">Email: sanjosempc@yahoo.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Acknowledgment</h2>
            <p className="text-gray-700 leading-relaxed">
              By using our services or accessing our website, you acknowledge that you have read these Terms of Service
              and agree to be bound by them. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

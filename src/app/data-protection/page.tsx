import Link from 'next/link';
import { Shield, Lock, Eye, FileText, UserCheck, Database, AlertCircle, Mail } from 'lucide-react';

export const metadata = {
  title: 'Data Protection Policy',
  description: 'Learn how SJMPC protects your personal data and respects your privacy rights in accordance with the Data Privacy Act of 2012.',
};

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Data Protection Policy</h1>
          <p className="text-xl text-blue-100 mb-2">
            Your Privacy, Our Commitment
          </p>
          <p className="text-sm text-blue-200">
            Last Updated: January 13, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                San Jose Multi-Purpose Cooperative (SJMPC) is committed to protecting the privacy and security of your personal data. 
                This Data Protection Policy explains how we collect, use, store, and safeguard your information in compliance with the 
                <strong> Data Privacy Act of 2012 (Republic Act No. 10173)</strong> and its implementing rules and regulations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using our services, you acknowledge that you have read and understood this policy and consent to the collection 
                and processing of your personal data as described herein.
              </p>
            </div>
          </div>
        </section>

        {/* Data We Collect */}
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Data We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We collect and process the following types of personal information:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personal Identification Information</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Full name, date of birth, and gender</li>
                    <li>Government-issued ID numbers (TIN, SSS, etc.)</li>
                    <li>Contact information (address, phone, email)</li>
                    <li>Photographs and signatures</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Financial Information</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Bank account details</li>
                    <li>Employment and income information</li>
                    <li>Credit history and loan records</li>
                    <li>Transaction history with SJMPC</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and usage data</li>
                    <li>Website interaction patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Your Data */}
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Data</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We process your personal data for the following purposes:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Membership Services</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Processing membership applications, maintaining member accounts, and providing cooperative services
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Loan Processing</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Evaluating loan applications, managing loan accounts, and processing payments
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Compliance</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Meeting legal and regulatory requirements (AML, KYC, tax reporting)
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Communication</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Sending important notices, updates, and promotional materials about our services
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">Security</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Preventing fraud, detecting suspicious activities, and protecting member assets
                  </p>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                  <h3 className="font-semibold text-teal-900 dark:text-teal-300 mb-2">Improvement</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Analyzing usage patterns to improve our services and member experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Data Security Measures</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We implement comprehensive security measures to protect your personal data:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Encryption:</strong> All sensitive data is encrypted both in transit (SSL/TLS) and at rest
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Access Control:</strong> Strict role-based access controls with multi-factor authentication
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Regular Audits:</strong> Periodic security audits and vulnerability assessments
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Staff Training:</strong> Regular training on data protection and privacy best practices
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Backup Systems:</strong> Regular backups with secure off-site storage for disaster recovery
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Incident Response:</strong> Comprehensive incident response plan for potential data breaches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Data Privacy Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Under the Data Privacy Act of 2012, you have the following rights:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1. Right to Be Informed</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You have the right to know how your personal data is being collected, used, and shared.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2. Right to Access</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You can request access to your personal data that we hold and obtain a copy of it.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">3. Right to Rectification</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You can request correction of inaccurate or incomplete personal data.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">4. Right to Erasure/Blocking</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You can request deletion or blocking of your personal data under certain circumstances.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">5. Right to Object</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You can object to the processing of your personal data for direct marketing or other purposes.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">6. Right to Data Portability</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You can request your personal data in a structured, commonly used, and machine-readable format.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">7. Right to File a Complaint</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You can file a complaint with the National Privacy Commission if you believe your rights have been violated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, 
                or as required by law:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Active Membership Data:</strong> Retained throughout your membership period and for 10 years after account closure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Loan Records:</strong> Retained for 10 years after full payment as required by law</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Financial Statements:</strong> Retained indefinitely for auditing purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Website Analytics:</strong> Aggregated data retained for 24 months</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Data Sharing and Disclosure</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We do not sell your personal data. We may share your information with:
          </p>
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Service Providers</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Third-party vendors who assist us in providing services (e.g., IT support, payment processors)
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Regulatory Authorities</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Government agencies when required by law (e.g., CDA, BIR, NPC, AMLC)
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Legal Obligations</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                When necessary to comply with legal processes, court orders, or to protect our legal rights
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl shadow-lg p-8 border-2 border-blue-200 dark:border-blue-700">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Data Protection Officer</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                For any questions, concerns, or requests regarding your personal data or this policy, please contact our Data Protection Officer:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:dpo@sanjoseantiquempc.com" className="text-blue-600 dark:text-blue-400 hover:underline">dpo@sanjoseantiquempc.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:0917-308-1505" className="text-blue-600 dark:text-blue-400 hover:underline">0917-308-1505</a></p>
                <p><strong>Address:</strong> Tradetown Funda-Dalipe, San Jose, Antique</p>
                <p><strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Updates to Policy */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may update this Data Protection Policy from time to time to reflect changes in our practices or legal requirements. 
            We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We encourage you to review this policy periodically to stay informed about how we protect your personal data.
          </p>
        </section>

        {/* Related Links */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link 
            href="/privacy" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-md"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors shadow-md"
          >
            Terms of Service
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

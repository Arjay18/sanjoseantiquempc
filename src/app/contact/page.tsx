import ContactForm from '@/components/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const branches = [
    {
      name: 'San Jose Main Office',
      address: 'Tradetown Funda-Dalipe, San Jose, Antique',
      phone: '(036) 540-8209',
      email: 'sanjosempc@yahoo.com',
      hours: 'Mon-Fri: 8AM-4PM, Sat: 9AM-12PM'
    },
    {
      name: 'Miagao Branch',
      address: 'Peñaranda St. Brgy, Baybay Norte, Miagao, Iloilo',
      phone: '(033) 513-8925',
      email: 'sanjosempc@yahoo.com',
      hours: 'Mon: 1PM, Sat: 9AM'
    },
    {
      name: 'Oton Branch',
      address: 'M.H Del Pilar St. Pob South, Oton, Iloilo',
      phone: '(033) 510-8564',
      email: 'sanjosempc@yahoo.com',
      hours: 'Mon, Wed, Fri: 1:30PM, Sat: 9:30AM'
    },
    {
      name: 'Guimaras Branch',
      address: 'Alejandro Heights, San Miguel Jordan, Guimaras',
      phone: '(033) 322-5149',
      email: 'sanjosempc@yahoo.com',
      hours: 'Sat: 9AM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Contact SJMPC
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Reach Out to Us
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              We're here to help you with all your cooperative banking needs.
              Reach out to us through any of our branches or send us a message.
            </p>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Branches</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit any of our branches across Antique, Iloilo, and Guimaras for personalized service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{branch.name}</h3>
              </div>

              <div className="space-y-3 text-sm">
                <p className="text-gray-600 leading-relaxed">{branch.address}</p>

                <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">{branch.phone}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">{branch.email}</span>
                </div>

                <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                  <ClockIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{branch.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+63365408209"
              className="flex items-center justify-center space-x-3 p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <PhoneIcon className="w-6 h-6" />
              <span className="font-semibold">Call Main Office</span>
            </a>

            <a
              href="mailto:sanjosempc@yahoo.com"
              className="flex items-center justify-center space-x-3 p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <EnvelopeIcon className="w-6 h-6" />
              <span className="font-semibold">Send Email</span>
            </a>

            <a
              href="/online-application"
              className="flex items-center justify-center space-x-3 p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-semibold">Apply Online</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

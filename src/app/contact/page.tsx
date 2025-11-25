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
      phone: 'Branch Phone',
      email: 'sanjosempc@yahoo.com',
      hours: 'Mon: 1PM, Sat: 9AM'
    },
    {
      name: 'Oton Branch',
      address: 'M.H Del Pilar St. Pob South, Oton, Iloilo',
      phone: 'Branch Phone',
      email: 'sanjosempc@yahoo.com',
      hours: 'Mon, Wed, Fri: 1:30PM, Sat: 9:30AM'
    },
    {
      name: 'Guimaras Branch',
      address: 'Alejandro Heights, San Miguel Jordan, Guimaras',
      phone: 'Branch Phone',
      email: 'sanjosempc@yahoo.com',
      hours: 'Sat: 9AM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Contact SJMPC
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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

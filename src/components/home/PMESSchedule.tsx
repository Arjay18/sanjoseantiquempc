import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

const scheduleData = [
  {
    office: 'SAN JOSE - MAIN OFFICE',
    location: 'Tradetown Funda-Dalipe, San Jose, Antique',
    schedule: [
      'Monday - Friday: 8:00 AM to 4:00 PM',
      'Saturday: 9:00 AM'
    ]
  },
  {
    office: 'MIAGAO OFFICE',
    location: 'Peñaranda St. Brgy, Baybay Norte, Miagao, Iloilo',
    schedule: [
      'Monday: 1:00 PM',
      'Saturday: 9:00 AM'
    ]
  },
  {
    office: 'OTON OFFICE',
    location: 'M.H Del Pilar St. Pob South, Oton, Iloilo',
    schedule: [
      'Monday, Wednesday and Friday: 1:30 PM',
      'Saturday: 9:30 AM'
    ]
  },
  {
    office: 'GUIMARAS OFFICE',
    location: 'Alejandro Heights, San Miguel Jordan, Guimaras',
    schedule: [
      'Saturday: 9:00 AM'
    ]
  }
];

export default function PMESSchedule() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl mb-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              PMES SCHEDULE
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find your nearest SJMPC branch and check our PMES (Pre-Membership Education Seminar) schedule.
            Join us to learn about cooperative membership and benefits.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {scheduleData.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Office Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {branch.office}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {branch.location}
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 mb-4">
                  <ClockIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-lg font-semibold text-gray-900">Schedule</span>
                </div>

                <div className="space-y-2 pl-8">
                  {branch.schedule.map((time, timeIndex) => (
                    <div
                      key={timeIndex}
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Ready to join SJMPC? Attend our PMES and start your cooperative journey!
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Attend PMES?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Learn the Basics</h4>
                <p className="text-gray-600 text-sm">Understand cooperative principles and how they benefit members</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Meet the Community</h4>
                <p className="text-gray-600 text-sm">Connect with fellow members and cooperative leaders</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Start Your Journey</h4>
                <p className="text-gray-600 text-sm">Begin your membership application process with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

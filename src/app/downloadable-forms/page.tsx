export default function DownloadableForms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-8 shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Download & Access
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Downloadable Forms
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              At Your Fingertips
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Discover our comprehensive collection of forms designed to streamline your applications.
            Download detailed forms for our various services and community initiatives.
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Application For Loan */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Application For Loan</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This loan application form is for existing members only.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Click Here to Download
              </button>
            </div>
          </div>

          {/* PROMISSORY NOTE */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-green mb-4">PROMISSORY NOTE</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Accomplished this promissory note together with the loan application form.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Click Here to Download
              </button>
            </div>
          </div>

          {/* Application for Petty Cash/Rice Loan */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Application for Petty Cash/Rice Loan</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This application for petty cash/rice loan form is for existing members only.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Click Here to Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

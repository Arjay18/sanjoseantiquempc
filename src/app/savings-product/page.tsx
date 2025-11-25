export default function SavingsProduct() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block p-2 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-2xl mb-6">
            <h1 className="text-5xl md:text-6xl font-black text-brand-blue">
              SAVINGS PRODUCTS
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our comprehensive savings products designed to help you build a secure financial future with competitive rates and flexible terms.
          </p>
          <div className="mt-10">
            <button className="group relative bg-blue-400 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10">Open Account</span>
              <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Savings Products */}
        <div className="space-y-16">
          {/* Regular Savings */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-brand-blue mb-4">
                Regular Savings
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Regular Savings Card */}
              <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200/50 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-green-800">Regular Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A requirement for all SJMPC Members with P500.00 maintaining balance and P100 minimum deposit to earn interest. A liquid savings account with no contractual maturity and can be withdrawn anytime.</p>
              </div>

              {/* Time Deposit Card */}
              <div className="group relative bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200/50 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-yellow-800">Time Deposit</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular time deposit certificate issued to the member for every account opened. Interest on deposits varies depending on the amount, the longer the term and amount, the higher the interest rate. (P 5,000 minimum deposit)</p>
              </div>

              {/* Alkansya Savings Card */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200/50 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-blue-800">Alkansya Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 2 years but with no minimum amount pledge. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>
            </div>
          </div>

          {/* Long Term Savings */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-brand-green mb-4">
                Long Term Savings
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-green-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ultima Savings Card */}
              <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200/50 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-green-800">Ultima Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular monthly savings for SJMPC member with the term of 5 years or 10 years based on your monthly pledge amount. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>

              {/* Retirement Savings Card */}
              <div className="group relative bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200/50 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-yellow-800">Retirement Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 5 years with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>
            </div>
          </div>

          {/* Special Purpose Savings */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-brand-blue mb-4">
                Special Purpose Savings
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Wedding Savings Card */}
              <div className="group relative bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200/50 hover:border-red-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-red-400 to-red-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-red-800">Wedding Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 2 years with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>

              {/* Debut Savings Card */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200/50 hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-orange-800">Debut Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 5 years with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>

              {/* Anniversary Savings Card */}
              <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200/50 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-green-800">Anniversary Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 1 year with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>

              {/* Travel and Leisure Savings Card */}
              <div className="group relative bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200/50 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-yellow-800">Travel and Leisure Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 1 year with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>

              {/* Fiesta Savings Card */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200/50 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-blue-800">Fiesta Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 1 year with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>

              {/* Emergency Savings Card */}
              <div className="group relative bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200/50 hover:border-red-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-red-400 to-red-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-red-800">Emergency Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 1 year with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>

              {/* Baptism Savings Card */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200/50 hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mr-4 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-orange-800">Baptism Savings</h3>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">A regular saving account for SJMPC members with term of 1 year with 500 initial minimum deposit. Principal and Interest earn will be credited to your regular saving account when matured.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow text-black rounded-3xl p-16 mt-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6">Ready to Start Saving?</h3>
            <p className="mb-10 text-xl opacity-90 font-light leading-relaxed max-w-2xl mx-auto">
              Contact us today to discuss your savings goals and get started with your savings account.
            </p>
            <button className="group relative bg-blue-400 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10">Start Saving</span>
              <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

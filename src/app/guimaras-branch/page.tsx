export default function GuimarasBranchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block p-2 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-2xl mb-6">
            <h1 className="text-5xl md:text-6xl font-black text-brand-blue">
              GUIMARAS BRANCH OFFICE
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Meet the dedicated team serving our Guimaras community with excellence and commitment.
          </p>
        </div>

        {/* Branch Manager */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-brand-blue mb-4">
              Branch Manager
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <img src="https://via.placeholder.com/150x150?text=JONNAH+L.+FORASTEROS" alt="JONNAH L. FORASTEROS" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2">JONNAH L. FORASTEROS</h3>
              <p className="text-gray-600 font-medium">Branch Manager</p>
            </div>
          </div>
        </div>

        {/* Branch Staff */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/30 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-brand-green mb-4">
              Branch Staff
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
              <img src="https://via.placeholder.com/150x150?text=REZEL+G.+CAPALLA" alt="REZEL G. CAPALLA" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-green mb-2">REZEL G. CAPALLA</h3>
              <p className="text-gray-600 font-medium">Clerk, Admin</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <img src="https://via.placeholder.com/150x150?text=APRIL+JANE+R.+MACABINGUEL" alt="APRIL JANE R. MACABINGUEL" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-blue mb-2">APRIL JANE R. MACABINGUEL</h3>
              <p className="text-gray-600 font-medium">Teller</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
              <img src="https://via.placeholder.com/150x150?text=DIETHER+E.+INFANTE" alt="DIETHER E. INFANTE" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-800 mb-2">DIETHER E. INFANTE</h3>
              <p className="text-gray-600 font-medium">Account Officer</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
              <img src="https://via.placeholder.com/150x150?text=EDMAR+JET+H.+TUAZON" alt="EDMAR JET H. TUAZON" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-yellow mb-2">EDMAR JET H. TUAZON</h3>
              <p className="text-gray-600 font-medium">Account Officer</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border border-pink-200">
              <img src="https://via.placeholder.com/150x150?text=CLOIE+JOY+B.+TANALEON" alt="CLOIE JOY B. TANALEON" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-800 mb-2">CLOIE JOY B. TANALEON</h3>
              <p className="text-gray-600 font-medium">Clerk, Loan Monitoring</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200">
              <img src="https://via.placeholder.com/150x150?text=CONIE+A.+GENANDA" alt="CONIE A. GENANDA" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-indigo-800 mb-2">CONIE A. GENANDA</h3>
              <p className="text-gray-600 font-medium">Accounting Clerk (JO)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';

export default function Brochures() {
  const downloadImage = (imagePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Download & Learn
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Informative Brochures
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                At Your Fingertips
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Discover our comprehensive collection of brochures designed to educate and inform.
              Download detailed guides about our products, services, and community initiatives.
            </p>
          </div>

        {/* Brochures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SJMPC Success Stories */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Image
                  src="/Brochurs/Search for SJMPC Success Stories.jpg"
                  alt="SJMPC Success Stories"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">SJMPC Success Stories</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover inspiring stories of our members who have achieved their dreams through our cooperative.
              </p>
              <button
                onClick={() => downloadImage('/Brochurs/Search for SJMPC Success Stories.jpg', 'SJMPC Success Stories.jpg')}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Download
              </button>
            </div>
          </div>

          {/* SJMPC & GAD DIY Eco Bag Making Contest */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-28 h-28 rounded-2xl overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Image
                  src="/Brochurs/SJMPC & GAD DIY Eco Bag Making Contest.jpg"
                  alt="SJMPC & GAD DIY Eco Bag Making Contest"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-green mb-4">SJMPC & GAD DIY Eco Bag Making Contest</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn about our eco-friendly initiatives and creative contests promoting sustainability.
              </p>
              <button
                onClick={() => downloadImage('/Brochurs/SJMPC & GAD DIY Eco Bag Making Contest.jpg', 'SJMPC & GAD DIY Eco Bag Making Contest.jpg')}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Download
              </button>
            </div>
          </div>

          {/* SJMPC Jingle Making Contest */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Image
                  src="/Brochurs/SJMPC Jingle Making Contest.jpg"
                  alt="SJMPC Jingle Making Contest"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">SJMPC Jingle Making Contest</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore our creative contests that celebrate talent and community spirit.
              </p>
              <button
                onClick={() => downloadImage('/Brochurs/SJMPC Jingle Making Contest.jpg', 'SJMPC Jingle Making Contest.jpg')}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Download
              </button>
            </div>
          </div>

          {/* On-the-Spot Slogan Making Contest */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Image
                  src="/Brochurs/On-the-Spot Slogan Making Contest.jpg"
                  alt="On-the-Spot Slogan Making Contest"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">On-the-Spot Slogan Making Contest</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join our spontaneous contests that showcase quick thinking and creativity.
              </p>
              <button
                onClick={() => downloadImage('/Brochurs/On-the-Spot Slogan Making Contest.jpg', 'On-the-Spot Slogan Making Contest.jpg')}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Download
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

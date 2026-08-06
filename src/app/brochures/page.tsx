'use client';

import Image from 'next/image';
import PageHero from '@/components/PageHero';

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
    <div>
      {/* Hero Section */}
      <PageHero
        image="/Hero Section/About us Hero Section.png"
        imageAlt="Informative Brochures"
        title="INFORMATIVE BROCHURES"
        subtitle="Discover our comprehensive collection of brochures designed to educate and inform. Download detailed guides about our products, services, and community initiatives."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Brochures" },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
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
    </div>
  );
}

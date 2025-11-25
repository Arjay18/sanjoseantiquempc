import { CountUp } from '@/components/animations/CountUp';

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            SJMPC by the Numbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Empowering communities and transforming lives through cooperative excellence
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              <CountUp end={15000} suffix="+" />
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">Happy Members</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Growing stronger together</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-2">
              <CountUp end={500} suffix="M+" />
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">Loans Disbursed</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Fueling dreams & ambitions</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              <CountUp end={300} suffix="M+" />
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">Savings Collected</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Building secure futures</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              <CountUp end={25} suffix="+" />
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">Years of Trust</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Committed to excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}

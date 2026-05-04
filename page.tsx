'use client';

import React, { useEffect, useState } from 'react';
import { BarChart3, Users, MessageSquare, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const questionLabels = [
  'Klaro ang katuyuan',
  'Nalambot ang tinutuyo',
  'May sistema sa pagtugro',
  'Pagkaun/pamahaw',
  'Kaduruhon kang nagtambong',
  'Partisipasyon',
  'Mga speakers',
  'Venue ukon lugar',
  'Baratyagun sa hirikuton'
];

export default function EvaluationDashboard() {
  const [evaluations, setEvaluations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/evaluation')
      .then(res => res.json())
      .then(data => {
        setEvaluations(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const calculateAverage = (key: string) => {
    if (evaluations.length === 0) return "0";
    const sum = evaluations.reduce((acc, curr) => acc + (curr[key] || 0), 0);
    return (sum / evaluations.length).toFixed(1);
  };

  if (loading) return <div className="p-10 text-center">Loading summaries...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <Link href="/dashboard" className="text-brand-green flex items-center gap-2 mb-2 hover:underline">
              <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-brand-black">Evaluation Summaries</h1>
            <p className="text-gray-600">San Jose Multi-Purpose Cooperative Feedback Analysis</p>
          </div>
          <div className="bg-brand-white p-4 rounded-xl shadow-sm flex items-center gap-4 border-l-4 border-brand-yellow">
            <div className="bg-yellow-100 p-3 rounded-full text-brand-yellow">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold">Total Responses</p>
              <p className="text-2xl font-black text-brand-black">{evaluations.length}</p>
            </div>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-brand-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-brand-green" />
              <h2 className="text-xl font-bold">Average Ratings (1-5 Scale)</h2>
            </div>
            <div className="space-y-4">
              {questionLabels.map((label, index) => {
                const avg = parseFloat(calculateAverage(`q${index + 1}`));
                return (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{index + 1}. {label}</span>
                      <span className="font-bold text-brand-green">{avg} / 5.0</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-brand-green h-full transition-all duration-1000" 
                        style={{ width: `${(avg / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-brand-blue text-brand-white p-6 rounded-2xl shadow-lg flex flex-col justify-center text-center">
            <Star className="mx-auto mb-4 text-brand-yellow" size={48} fill="currentColor" />
            <h3 className="text-2xl font-bold mb-2">Cooperative Excellence</h3>
            <p className="opacity-90">
              These metrics help SJMPC improve activities and member services.
            </p>
          </div>
        </div>

        {/* Recent Comments Table */}
        <div className="bg-brand-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-2">
            <MessageSquare className="text-brand-blue" />
            <h2 className="text-xl font-bold">Detailed Feedback & Comments</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                <tr>
                  <th className="px-6 py-4 font-bold">Date</th>
                  <th className="px-6 py-4 font-bold">Name/Activity</th>
                  <th className="px-6 py-4 font-bold">Overall Feel (Q9)</th>
                  <th className="px-6 py-4 font-bold">Komento/Suhestyon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {evaluations.map((ev) => (
                  <tr key={ev.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(ev.createdAt || ev.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-brand-black">{ev.name || 'Anonymous'}</div>
                      <div className="text-xs text-brand-green">{ev.activity}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        ev.q9 >= 4 ? 'bg-green-100 text-green-700' : 
                        ev.q9 === 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                      }`}>
                        Rating: {ev.q9}/5
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-md italic">
                      "{ev.comments || 'No comment provided.'}"
                    </td>
                  </tr>
                ))}
                {evaluations.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-gray-400">
                      No evaluation data found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
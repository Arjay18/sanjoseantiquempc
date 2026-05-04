'use client';

import React, { useState } from 'react';

const questions = [
  { id: 'q1', text: '1. Klaro ang katuyuan' },
  { id: 'q2', text: '2. Nalambot ang tinutuyo' },
  { id: 'q3', text: '3. May sistema sa pagtugro kang aktibidades' },
  { id: 'q4', text: '4. Pagkaun/pamahaw' },
  { id: 'q5', text: '5. Kaduruhon kang nagtambong' },
  { id: 'q6', text: '6. Partisipasyon kang nagtambong' },
  { id: 'q7', text: '7. Mga speakers' },
  { id: 'q8', text: '8. Venue ukon lugar' },
  { id: 'q9', text: '9. Ang imo baratyagun sa amo dya nga hirikuton' },
];

const options = [
  { label: 'Very satisfied', value: 5 },
  { label: 'Satisfied', value: 4 },
  { label: 'Neutral', value: 3 },
  { label: 'Unsatisfied', value: 2 },
  { label: 'Very unsatisfied', value: 1 },
];

export default function EvaluationForm() {
  const [formData, setFormData] = useState({
    name: '', gender: '', activity: '', venue: '', date: '', time: '',
    ratings: {} as Record<string, number>,
    comments: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/evaluation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) alert('Salamat sa pagpartisipar!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-brand-white shadow-lg border-t-4 border-brand-green rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold text-brand-black">San Jose Multi-Purpose Cooperative</h1>
        <p className="text-sm text-gray-600">Trade Town, Funda-Dalipe, San Jose, Antique</p>
        <h2 className="text-2xl font-bold mt-4 text-brand-blue uppercase tracking-wider">Evaluation Form</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Top Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <label className="whitespace-nowrap font-medium">Name (optional):</label>
            <input type="text" className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green" 
              onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-medium">Gender:</label>
            <input type="text" className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green" 
              onChange={e => setFormData({...formData, gender: e.target.value})} />
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-medium">Activity:</label>
            <input type="text" required className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green" 
              onChange={e => setFormData({...formData, activity: e.target.value})} />
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-medium">Lugar/Venue:</label>
            <input type="text" required className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green" 
              onChange={e => setFormData({...formData, venue: e.target.value})} />
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-medium">Date:</label>
            <input type="date" className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green" 
              onChange={e => setFormData({...formData, date: e.target.value})} />
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-medium">Time:</label>
            <input type="time" className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green" 
              onChange={e => setFormData({...formData, time: e.target.value})} />
          </div>
        </div>

        <p className="italic text-sm text-gray-700 mt-6">
          Instruction: Butangan kang tsek ( √ ) ang hitsura nga nagasanto sa imo nakita o nabatyagan.
        </p>

        {/* Ratings Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-2 border font-semibold">Aspects</th>
                {options.map(opt => (
                  <th key={opt.value} className="p-2 border text-center text-xs font-semibold">{opt.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 border text-sm">{q.text}</td>
                  {options.map(opt => (
                    <td key={opt.value} className="p-3 border text-center">
                      <input 
                        type="radio" 
                        name={q.id} 
                        required
                        className="w-5 h-5 accent-brand-green cursor-pointer"
                        onChange={() => setFormData({
                          ...formData, 
                          ratings: { ...formData.ratings, [q.id]: opt.value }
                        })}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <label className="block font-bold mb-2">Komento/ Suhestyon</label>
          <textarea 
            className="w-full border-2 border-gray-200 p-3 rounded-md focus:border-brand-green focus:outline-none h-32"
            onChange={e => setFormData({...formData, comments: e.target.value})}
          />
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 italic max-w-xs">
            Reminder: Ang kaundan kang dya nga formas para lang sa SJMPC kag ginasiguro nga confidential.
          </p>
          <button 
            type="submit"
            className="bg-brand-green text-brand-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md active:scale-95"
          >
            Submit Evaluation
          </button>
        </div>
      </form>
    </div>
  );
}
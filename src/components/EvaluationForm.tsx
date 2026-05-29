'use client';

import React, { useMemo, useState } from 'react';

const ratingOptions = [
  { value: 1, label: 'Dissastified' },
  { value: 2, label: 'Somewhat Satisfied' },
  { value: 3, label: 'Satisfied' },
  { value: 4, label: 'Very Satisfied' },
];

export default function EvaluationForm() {


  const [formData, setFormData] = useState({
    branch: '',
    officeSection: '',
    date: '',
    name: '',
    rating: 0,
    remarks: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Endpoint not implemented yet; keep UI functional.
    alert('Salamat sa pagpartisipar!');
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
          <div className="flex flex-col">
            <label className="font-medium mb-1">OFFICE/SECTION</label>
            <input
              type="text"
              className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green bg-transparent"
              value={formData.officeSection}
              onChange={(e) => setFormData({ ...formData, officeSection: e.target.value })}
            />
          </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">DATE</label>
            <input
              type="date"
              className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Name (Optional)</label>
            <input
              type="text"
              className="border-b border-gray-400 w-full focus:outline-none focus:border-brand-green"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>

        {/* Ratings */}
        <div className="mt-6">
          <p className="font-bold">Kindly rate your experience with the services availed. Please rate your experience with the services availed</p>


          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-2 border font-semibold">(check the box)</th>
                  <th className="p-2 border text-center text-xs font-semibold">1 Dissastified</th>
                  <th className="p-2 border text-center text-xs font-semibold">2 Somewhat Satisfied</th>
                  <th className="p-2 border text-center text-xs font-semibold">3 Satisfied</th>
                  <th className="p-2 border text-center text-xs font-semibold">4 Very Satisfied</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border text-sm font-medium"> </td>
                  {ratingOptions.map((opt) => (
                    <td key={opt.value} className="p-3 border text-center">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-brand-green cursor-pointer"
                        checked={formData.rating === opt.value}
                        onChange={() => setFormData({ ...formData, rating: opt.value })}
                      />
                      <div className="text-[10px] text-gray-500 mt-1">{opt.label}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Remarks */}
        <div className="mt-6">
          <label className="block font-bold mb-2">REMARKS/COMMENTS/SUGGESTIONS</label>
          <textarea
            className="w-full border-2 border-gray-200 p-3 rounded-md focus:border-brand-green focus:outline-none h-32"
            value={formData.remarks}
            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
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
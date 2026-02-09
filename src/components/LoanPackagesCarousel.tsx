"use client";
import { useState } from "react";
import Link from "next/link";

interface LoanPackage {
  title: string;
  description: string;
  image: string;
}

const loanPackages: LoanPackage[] = [
  {
    title: "Personal Loan",
    description: "Flexible personal loans for your needs.",
    image: "/slider/slide2.jpg",
  },
  {
    title: "Business Loan",
    description: "Grow your business with our tailored packages.",
    image: "/slider/slide1.jpg",
  },
  {
    title: "Home Loan",
    description: "Affordable home loans for your dream house.",
    image: "/slider/slide3.jpg",
  },
  {
    title: "Vehicle Loan",
    description: "Drive your dream car with easy financing.",
    image: "/slider/slide4.jpg",
  },
];

export default function LoanPackagesCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % loanPackages.length);
  const prev = () => setCurrent((c) => (c - 1 + loanPackages.length) % loanPackages.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">&#8592;</button>
        <h3 className="text-xl font-bold text-blue-900">Loan Packages</h3>
        <button onClick={next} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">&#8594;</button>
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <img src={loanPackages[current].image} alt={loanPackages[current].title} className="w-40 h-28 object-cover rounded mb-4" />
        <h4 className="text-lg font-semibold mb-2">{loanPackages[current].title}</h4>
        <p className="text-gray-600 mb-4">{loanPackages[current].description}</p>
        <Link href="/loan-application" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition">Apply Now</Link>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {loanPackages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-600" : "bg-gray-300"}`}
            aria-label={`Go to package ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

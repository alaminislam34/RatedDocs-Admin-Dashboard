"use client";

import PatientResultsInfo from "./PatientResultsInfo";
import ResultCard from "./ResultCard";

export default function PatientResult() {
  const results = [
    {
      title: "Single Implant",
      location: "San Francisco, CA",
      date: "Jan 2026",
    },
    { title: "Veneer (per tooth)", location: "Austin, TX", date: "Feb 2026" },
    { title: "Crown", location: "Los Angeles, CA", date: "Mar 2026" },
    { title: "Invisalign", location: "Seattle, WA", date: "Mar 2026" },
    { title: "Single Implant", location: "Chicago, IL", date: "Apr 2026" },
    { title: "Veneer (per tooth)", location: "Boston, MA", date: "Apr 2026" },
  ];

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <PatientResultsInfo />

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result, idx) => (
          <ResultCard
            key={idx}
            title={result.title}
            location={result.location}
            date={result.date}
          />
        ))}
      </div>
    </div>
  );
}

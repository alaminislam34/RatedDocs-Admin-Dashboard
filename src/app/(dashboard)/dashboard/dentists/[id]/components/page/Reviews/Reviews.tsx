"use client";

import { useState } from "react";
import ReviewsSummary from "./ReviewsSummary";
import ReviewCard from "./ReviewCard";
import Pagination from "./Pagination";
import { Shield } from "lucide-react";

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      author: "Olivia Martinez",
      initials: "OM",
      isVerified: true,
      date: "2026-04-22",
      rating: 1,
      text: "Incredibly attentive — explained every step.",
    },
    {
      id: 2,
      author: "Olivia Martinez",
      initials: "OM",
      isVerified: true,
      date: "2026-04-22",
      rating: 1,
      text: "Incredibly attentive — explained every step.",
    },
    {
      id: 3,
      author: "Sarah Johnson",
      initials: "SJ",
      isVerified: true,
      date: "2026-04-21",
      rating: 5,
      text: "Best dental experience I've had. Professional and friendly staff.",
    },
    {
      id: 4,
      author: "Michael Chen",
      initials: "MC",
      isVerified: true,
      date: "2026-04-20",
      rating: 4,
      text: "Great service. Highly recommend for anyone looking for quality dental care.",
    },
    {
      id: 5,
      author: "Emma Wilson",
      initials: "EW",
      isVerified: false,
      date: "2026-04-19",
      rating: 5,
      text: "Excellent dentist! Made me feel comfortable throughout the procedure.",
    },
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 76 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  const categories = [
    { name: "Communication", rating: 4.9 },
    { name: "Professionalism", rating: 4.8 },
    { name: "Results", rating: 4.9 },
    { name: "Value", rating: 4.7 },
    { name: "Facility", rating: 4.8 },
  ];

  const itemsPerPage = 5;
  const paginatedReviews = reviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <div className="flex items-start gap-3 rounded-lg bg-blue-50 border border-blue-100 p-4">
        <Shield className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700">
          All reviews are from patients who booked and paid through RatedDocs.
        </p>
      </div>

      {/* Main Grid: Summary + Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Summary */}
        <div className="lg:col-span-1">
          <ReviewsSummary
            overallRating={4.9}
            totalReviews={184}
            ratingDistribution={ratingDistribution}
            categories={categories}
          />
        </div>

        {/* Right Column: Reviews List */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="space-y-4">
              {paginatedReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  author={review.author}
                  initials={review.initials}
                  isVerified={review.isVerified}
                  date={review.date}
                  rating={review.rating}
                  text={review.text}
                  onFlag={() => alert(`Flagged review from ${review.author}`)}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(reviews.length / itemsPerPage)}
              totalItems={reviews.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

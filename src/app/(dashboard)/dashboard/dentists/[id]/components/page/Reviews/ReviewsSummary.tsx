"use client";

import { Star } from "lucide-react";
import RatingDistribution from "./RatingDistribution";
import CategoryRating from "./CategoryRating";

type ReviewsSummaryProps = {
  overallRating: number;
  totalReviews: number;
  ratingDistribution: { stars: number; percentage: number }[];
  categories: { name: string; rating: number }[];
};

export function ReviewsSummary({
  overallRating,
  totalReviews,
  ratingDistribution,
  categories,
}: ReviewsSummaryProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      {/* Overall Rating */}
      <div className="text-center mb-6 pb-6 border-b border-slate-100">
        <p className="text-5xl font-bold text-[#101828]">
          {overallRating.toFixed(1)}
        </p>
        <div className="flex justify-center gap-1 my-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(overallRating)
                  ? "fill-amber-500 text-amber-500"
                  : "text-slate-200"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-slate-600">
          Based on {totalReviews} verified reviews
        </p>
      </div>

      {/* Rating Distribution */}
      <div className="space-y-2 mb-6 pb-6 border-b border-slate-100">
        {ratingDistribution.map((item) => (
          <RatingDistribution
            key={item.stars}
            stars={item.stars}
            percentage={item.percentage}
            color={
              item.stars === 5
                ? "bg-amber-500"
                : item.stars === 4
                  ? "bg-amber-400"
                  : "bg-slate-300"
            }
          />
        ))}
      </div>

      {/* By Category */}
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
          By Category
        </p>
        <div className="space-y-3">
          {categories.map((cat) => (
            <CategoryRating
              key={cat.name}
              category={cat.name}
              rating={cat.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsSummary;

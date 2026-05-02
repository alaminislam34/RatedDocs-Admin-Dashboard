"use client";

type RatingDistributionProps = {
  stars: number;
  percentage: number;
  color?: string;
};

export function RatingDistribution({
  stars,
  percentage,
  color = "bg-amber-500",
}: RatingDistributionProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-slate-900 w-8">{stars}</span>
      <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-slate-900 w-12 text-right">
        {percentage}%
      </span>
    </div>
  );
}

export default RatingDistribution;

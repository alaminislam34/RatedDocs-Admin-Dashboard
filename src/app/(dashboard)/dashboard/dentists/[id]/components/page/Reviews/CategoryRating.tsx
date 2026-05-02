"use client";

type CategoryRatingProps = {
  category: string;
  rating: number;
  color?: string;
};

export function CategoryRating({
  category,
  rating,
  color = "bg-slate-900",
}: CategoryRatingProps) {
  return (
    <div className="flex items-center gap-3">
      <p className="text-sm text-slate-600 w-28">{category}</p>
      <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-full ${color}`}
          style={{ width: `${(rating / 5) * 100}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-slate-900 w-8">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default CategoryRating;

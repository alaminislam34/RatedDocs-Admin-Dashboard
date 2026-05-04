"use client";

import { Star, Flag } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type ReviewCardProps = {
  author: string;
  initials: string;
  isVerified: boolean;
  date: string;
  rating: number;
  text: string;
  onFlag?: () => void;
};

export function ReviewCard({
  author,
  initials,
  isVerified,
  date,
  rating,
  text,
  onFlag,
}: ReviewCardProps) {
  return (
    <div className="rounded-lg border border-slate-100 bg-white p-4 hover:shadow-sm transition-shadow">
      {/* Header: Author + Date */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-[#101828] text-white">
            <AvatarFallback className="text-xs font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-[#101828]">{author}</p>
              {isVerified && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">
                  ✓ Verified
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">{date}</p>
          </div>
        </div>
        <button
          onClick={onFlag}
          className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <Flag className="h-4 w-4" />
        </button>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-amber-500 text-amber-500" : "text-slate-200"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-slate-700">{text}</p>
    </div>
  );
}

export default ReviewCard;

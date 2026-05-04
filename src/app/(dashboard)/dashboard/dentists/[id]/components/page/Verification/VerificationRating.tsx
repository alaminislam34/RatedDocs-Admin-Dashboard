"use client";

import { CheckCircle2 } from "lucide-react";

type VerificationRatingProps = {
  score: string;
  title: string;
  subtitle: string;
};

export function VerificationRating({
  score,
  title,
  subtitle,
}: VerificationRatingProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-start gap-6">
        {/* Circular Score */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-24 w-24 rounded-full border-4 border-emerald-500 bg-emerald-50 flex items-center justify-center">
            <span className="text-3xl font-bold text-[#101828]">100</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600">
            Fully verified
          </span>
        </div>

        {/* Score Info */}
        <div className="flex-1 py-2">
          <h3 className="text-sm font-bold text-[#101828]">{score}</h3>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="text-xs text-emerald-600 font-medium">{subtitle}</p>
        </div>

        <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-2" />
      </div>
    </div>
  );
}

export default VerificationRating;

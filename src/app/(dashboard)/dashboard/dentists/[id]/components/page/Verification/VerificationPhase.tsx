"use client";

import { CheckCircle2 } from "lucide-react";
import VerificationItem from "./VerificationItem";

type PhaseItem = {
  label: string;
  description?: string;
  status?: "approved" | "data-reviewed" | "pending";
};

type VerificationPhaseProps = {
  name: string;
  percentage: number;
  date: string;
  items: PhaseItem[];
};

export function VerificationPhase({
  name,
  percentage,
  date,
  items,
}: VerificationPhaseProps) {
  return (
    <div className="space-y-3">
      {/* Phase Header */}
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-bold text-slate-900">{name}</p>
          <p className="text-xs text-slate-400">{date}</p>
        </div>
        <span className="text-sm font-bold text-emerald-600">
          {percentage}%
        </span>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 gap-2 ml-7">
        {items.map((item, idx) => (
          <VerificationItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

export default VerificationPhase;

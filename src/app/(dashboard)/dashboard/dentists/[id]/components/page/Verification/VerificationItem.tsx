"use client";

import { Check } from "lucide-react";

type VerificationItemProps = {
  label: string;
  description?: string;
  status?: "approved" | "data-reviewed" | "pending";
};

const statusConfig = {
  approved: {
    badge: "Approved",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
  },
  "data-reviewed": {
    badge: "Data reviewed",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
  },
  pending: {
    badge: "Pending",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-100",
  },
};

export function VerificationItem({
  label,
  description,
  status = "approved",
}: VerificationItemProps) {
  const config = statusConfig[status];

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border ${config.borderColor} ${config.bgColor} p-3`}
    >
      <Check className={`h-5 w-5 ${config.textColor} shrink-0 mt-0.5`} />
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-800">{label}</p>
        {description && (
          <p className="text-xs text-slate-500 mt-0.5">{description}</p>
        )}
      </div>
      <span
        className={`text-xs font-bold ${config.textColor} whitespace-nowrap`}
      >
        {config.badge}
      </span>
    </div>
  );
}

export default VerificationItem;

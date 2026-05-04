"use client";

import * as React from "react";

export default function StatsCard({
  label,
  value,
  note,
  className,
}: {
  label: string;
  value: React.ReactNode;
  note?: React.ReactNode;
  className: string;
}) {
  return (
    <div className="px-4 lg:px-6 py-4">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-bold text-[#101828]">{value}</div>
      {note && <div className="mt-1 text-sm text-slate-500">{note}</div>}
    </div>
  );
}

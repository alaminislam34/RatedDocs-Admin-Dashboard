"use client";

import { Bookmark, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type CEFileItemProps = {
  filename: string;
  size: string;
  date: string;
  status?: "Reviewed" | "Pending";
};

export function CEFileItem({
  filename,
  size,
  date,
  status = "Reviewed",
}: CEFileItemProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-white p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3">
        <Bookmark className="h-5 w-5 text-slate-400 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-[#101828]">{filename}</p>
          <p className="text-xs text-slate-500">
            {size} · {date}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge
          className={`${status === "Reviewed" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"} rounded-full text-xs font-bold px-2 py-1`}
        >
          {status}
        </Badge>
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Download className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default CEFileItem;

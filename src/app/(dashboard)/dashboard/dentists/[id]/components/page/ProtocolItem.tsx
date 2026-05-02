"use client";

import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

type ProtocolItemProps = {
  title: string;
  meta?: string;
  status?: "Reviewed" | "Pending";
};

export function ProtocolItem({
  title,
  meta,
  status = "Reviewed",
}: ProtocolItemProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-white p-3">
      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        {meta && <p className="text-[11px] text-slate-400">{meta}</p>}
      </div>

      <div className="flex items-center gap-3">
        <Badge
          className={`h-5 rounded-full ${status === "Reviewed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"} px-2 text-[10px]`}
        >
          {status}
        </Badge>
        <button className="p-2 text-slate-500 hover:text-slate-700">
          <Download />
        </button>
      </div>
    </div>
  );
}

export default ProtocolItem;

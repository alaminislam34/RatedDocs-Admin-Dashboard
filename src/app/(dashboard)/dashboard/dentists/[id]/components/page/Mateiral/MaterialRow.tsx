"use client";

import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type MaterialRowProps = {
  category: string;
  brand: string;
  hasInvoice?: boolean;
  status?: "Verified" | "Pending";
};

export function MaterialRow({
  category,
  brand,
  hasInvoice = true,
  status = "Verified",
}: MaterialRowProps) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4">
        <p className="text-sm font-semibold text-[#101828]">{category}</p>
      </td>
      <td className="px-6 py-4">
        <p className="text-sm text-slate-600">{brand}</p>
      </td>
      <td className="px-6 py-4">
        {hasInvoice ? (
          <button className="inline-flex items-center gap-2 text-slate-600 hover:text-[#101828] transition-colors">
            <FileText className="h-4 w-4" />
            <span className="text-sm">View</span>
          </button>
        ) : (
          <span className="text-sm text-slate-400">—</span>
        )}
      </td>
      <td className="px-6 py-4 text-right">
        <Badge
          className={`${status === "Verified" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"} rounded-full text-xs font-bold px-3 py-1`}
        >
          {status}
        </Badge>
      </td>
    </tr>
  );
}

export default MaterialRow;

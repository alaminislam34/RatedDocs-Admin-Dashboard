"use client";

import { Badge } from "@/components/ui/badge";
import { DentistProfileData } from "@/types/types";

type PriceTableProps = {
  procedures: DentistProfileData["procedures"];
};

export function PriceTable({ procedures }: PriceTableProps) {
  const bookingType = (procName: string) => {
    if (procName.toLowerCase().includes("full-arch"))
      return { label: "Estimate", tone: "amber" };
    return { label: "Direct-book", tone: "emerald" };
  };

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <table className="w-full min-w-162.5">
        <thead>
          <tr className="bg-slate-900 text-white text-left text-sm">
            <th className="px-6 py-3">Procedure</th>
            <th className="px-6 py-3">Price (USD)</th>
            <th className="px-6 py-3">Booking type</th>
            <th className="px-6 py-3 text-right">Notes</th>
          </tr>
        </thead>
        <tbody>
          {procedures.map((p) => {
            const bt = bookingType(p.procedure);
            return (
              <tr
                key={p.procedure}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  {p.procedure}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                  {p.price}
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className={
                      bt.tone === "emerald"
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                        : "bg-amber-50 text-amber-700 border-amber-100"
                    }
                  >
                    {bt.label}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right text-slate-400">—</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PriceTable;

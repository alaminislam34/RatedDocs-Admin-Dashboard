import { DentistProfileData } from "@/types/types";
import { MoreHorizontal, Plus } from "lucide-react";

type ProceduresOfferedCardProps = {
  procedures: DentistProfileData["procedures"];
};

export function ProceduresOfferedCard({
  procedures,
}: ProceduresOfferedCardProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-800">
          Procedures offered
        </h2>
        <button className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700">
          <Plus className="size-3.5" /> Add
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-162.5">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/50 text-left text-[10px] uppercase tracking-wide text-slate-400">
              <th className="px-4 py-2.5 font-semibold">Procedure</th>
              <th className="px-4 py-2.5 font-semibold">Category</th>
              <th className="px-4 py-2.5 font-semibold">Price</th>
              <th className="px-4 py-2.5 font-semibold">Bookings</th>
              <th className="px-4 py-2.5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {procedures.map((item) => (
              <tr
                key={item.procedure}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                  {item.procedure}
                </td>
                <td className="px-4 py-3 text-xs text-slate-500">
                  {item.category}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-slate-700">
                  {item.price}
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {item.bookings}
                </td>
                <td className="px-4 py-3 text-right text-slate-400">
                  <button className="inline-flex rounded p-1.5 hover:bg-slate-100">
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

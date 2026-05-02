import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TOP_DENTISTS } from "../../../../public/Mock_Data/data";

export function TopDentists() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-bold text-slate-900">Top dentists</h3>
        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
          By bookings (30d)
        </span>
      </div>
      <div className="divide-y divide-slate-50 flex-1">
        {TOP_DENTISTS.map((dentist) => (
          <div
            key={dentist.id}
            className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 bg-[#0a192f] text-white">
                <AvatarFallback className="text-xs font-bold">
                  {dentist.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-none mb-1">
                  {dentist.name}
                </p>
                <p className="text-xs text-slate-500">
                  {dentist.specialty} · {dentist.location}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">
                {dentist.bookings}
              </p>
              <p className="text-[10px] text-slate-400 font-medium uppercase">
                bookings
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

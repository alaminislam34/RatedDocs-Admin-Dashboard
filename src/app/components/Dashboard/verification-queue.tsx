import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { VERIFICATION_QUEUE } from "../../../../public/Mock_Data/data";
import { cn } from "@/lib/utils";

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  review: "bg-blue-50 text-blue-700 border-blue-200",
  action: "bg-red-50 text-red-700 border-red-200",
};

export function VerificationQueue() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-bold text-slate-900">Verification Queue</h3>
      </div>
      <div className="divide-y divide-slate-50">
        {VERIFICATION_QUEUE.map((item) => (
          <div
            key={item.id}
            className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 bg-[#0a192f] text-white">
                <AvatarFallback className="text-xs font-bold">
                  {item.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-none mb-1">
                  {item.name}
                </p>
                <p className="text-xs text-slate-500">
                  {item.role} · {item.time}
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "capitalize px-2 py-0.5 text-[10px]",
                statusStyles[item.status as keyof typeof statusStyles],
              )}
            >
              {item.status === "action"
                ? "Action req."
                : item.status === "review"
                  ? "Re-review"
                  : "Pending"}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

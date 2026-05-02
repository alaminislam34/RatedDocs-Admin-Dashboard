import {
  CheckCircle2,
  UserPlus,
  Flag,
  CreditCard,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RECENT_ACTIVITY } from "../../../../public/Mock_Data/data";

const iconMap = { CheckCircle2, UserPlus, Flag, CreditCard, XCircle };

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-100">
        <h3 className="font-bold text-slate-900">Recent activity</h3>
      </div>
      <div className="divide-y divide-slate-50 flex-1">
        {RECENT_ACTIVITY.map((activity) => {
          const Icon = iconMap[activity.icon as keyof typeof iconMap];
          return (
            <div
              key={activity.id}
              className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors"
            >
              <div
                className={cn(
                  "mt-0.5 p-1.5 rounded-lg bg-slate-50",
                  activity.color,
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {activity.title}
                  </p>
                  <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
                    {activity.time}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

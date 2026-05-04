import {
  LucideIcon,
  TrendingUp,
  TrendingDown,
  Stethoscope,
  Users,
  Calendar,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Stethoscope,
  Users,
  Calendar,
  DollarSign,
};

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  subtext: string;
  icon: keyof typeof iconMap;
}

export function DashboardStatsCard({
  label,
  value,
  change,
  trend,
  subtext,
  icon,
}: StatsCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-hover hover:shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={cn(
            "p-2.5 rounded-lg",
            label.includes("Revenue")
              ? "bg-amber-50 text-amber-600"
              : "bg-emerald-50 text-emerald-600",
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <h3 className="text-3xl font-bold text-[#101828] tracking-tight">
          {value}
        </h3>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div
          className={cn(
            "flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full",
            trend === "up"
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600",
          )}
        >
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {change}
        </div>
        <span className="text-xs text-slate-400 font-medium">{subtext}</span>
      </div>
    </div>
  );
}

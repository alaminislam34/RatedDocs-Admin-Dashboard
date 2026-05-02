import { Calendar, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  name: string;
  date: string;
}

export function DashboardHeader({ name, date }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Greeting Section */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Welcome back, {name}
        </h1>
        <p className="text-sm font-medium text-slate-500 mt-1">
          Here&apos;s what&apos;s happening across the platform — {date}.
        </p>
      </div>

      {/* Global Actions */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="h-10 border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50"
        >
          Last 7 days
          <ChevronDown className="ml-2 h-4 w-4 text-slate-400" />
        </Button>

        <Button
          variant="outline"
          className="h-10 border-slate-200 bg-white px-4 text-sm font-semibold text-slate-600 shadow-sm hover:bg-slate-50"
        >
          <Download className="mr-2 h-4 w-4 text-slate-400" />
          Export
        </Button>
      </div>
    </div>
  );
}

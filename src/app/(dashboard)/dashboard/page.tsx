import { DashboardHeader } from "@/app/components/Dashboard/header";
import { RecentActivity } from "@/app/components/Dashboard/recent-activity";
import { RevenueChart } from "@/app/components/Dashboard/revenue-card";
import { StatsGrid } from "@/app/components/Dashboard/stats-card";
import { TopDentists } from "@/app/components/Dashboard/top-dentists";
import { VerificationQueue } from "@/app/components/Dashboard/verification-queue";
import { UserPlus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-400 mx-auto">
      {/* 1. Top Section: Header */}
      <DashboardHeader name="Jordan" date="Wed, Apr 29 2026" />

      {/* 2. Middle Section: Stats (Full Width Row) */}
      <StatsGrid />

      {/* 3. Bottom Section: Split Layout for Chart and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Chart Column (2/3 width) */}
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>

        {/* Sidebar Column (1/3 width) */}
        <div className="space-y-8">
          <VerificationQueue />
        </div>
      </div>
      {/* 4. Bottom Row: Lists & Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TopDentists />
        <RecentActivity />

        {/* Re-using the Quick Actions layout from the design */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
          <h3 className="font-bold text-slate-900 mb-6">Quick actions</h3>
          <button className="group w-full flex flex-col items-center justify-center gap-4 p-10 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 hover:border-[#D99A29] hover:bg-amber-50/30 transition-all duration-200">
            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-all">
              <UserPlus className="h-6 w-6 text-slate-400 group-hover:text-[#D99A29]" />
            </div>
            <span className="text-sm font-bold group-hover:text-slate-900">
              Add Dentist
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

import { DentistProfileData } from "@/types/types";

type StatsSummaryRowProps = {
  stats: DentistProfileData["stats"];
};

export function StatsSummaryRow({ stats }: StatsSummaryRowProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5">
        <div className="border-b border-slate-200 p-4 sm:border-r sm:border-b xl:border-b-0">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total Bookings
          </p>
          <p className="mt-1 text-3xl font-semibold text-slate-800">
            {stats.totalBookings}
          </p>
          <p className="text-[10px] text-slate-400">+18 this month</p>
        </div>
        <div className="border-b border-slate-200 p-4 sm:border-r sm:border-b xl:border-b-0">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Revenue (Lifetime)
          </p>
          <p className="mt-1 text-3xl font-semibold text-slate-800">
            {stats.revenue}
          </p>
          <p className="text-[10px] text-slate-400">Avg $154 / visit</p>
        </div>
        <div className="border-b border-slate-200 p-4 sm:border-r xl:border-b-0">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Cancellation Rate
          </p>
          <p className="mt-1 text-3xl font-semibold text-slate-800">
            {stats.cancellationRate}
          </p>
          <p className="text-[10px] text-slate-400">Below avg (-5.1%)</p>
        </div>
        <div className="border-b border-slate-200 p-4 sm:border-r sm:border-b-0">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Estimate Accuracy
          </p>
          <p className="mt-1 text-3xl font-semibold text-slate-800">
            {stats.estimateAccuracy}
          </p>
          <p className="text-[10px] text-slate-400">Within 15% of estimate</p>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Avg Response Time
          </p>
          <p className="mt-1 text-3xl font-semibold text-slate-800">
            {stats.avgResponseTime}
          </p>
          <p className="text-[10px] text-slate-400">Typically &lt;24 hrs</p>
        </div>
      </div>
    </div>
  );
}

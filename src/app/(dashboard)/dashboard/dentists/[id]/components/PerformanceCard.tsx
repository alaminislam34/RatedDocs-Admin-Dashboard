import { DentistProfileData } from "@/types/types";

type PerformanceCardProps = {
  performance: DentistProfileData["performance"];
};

export function PerformanceCard({ performance }: PerformanceCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <h2 className="mb-4 text-sm font-semibold text-slate-800">Performance</h2>
      <div className="space-y-3">
        {performance.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-slate-500">{item.label}</span>
              <span className="font-semibold text-slate-700">
                {item.value}%
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-100">
              <div
                className={`h-1.5 rounded-full ${item.color}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

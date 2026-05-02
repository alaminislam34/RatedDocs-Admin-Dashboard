import { Badge } from "@/components/ui/badge";
import { DentistProfileData } from "@/types/types";

type VerificationCardProps = {
  verification: DentistProfileData["verification"];
};

export function VerificationCard({ verification }: VerificationCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-800">Verification</h2>
        <Badge className="h-5 rounded-full bg-emerald-100 px-2 text-[10px] text-emerald-700 hover:bg-emerald-100">
          Verified
        </Badge>
      </div>

      <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
        <div className="flex items-center gap-2">
          <div className="grid size-6 place-items-center rounded-full border border-emerald-500 text-[9px] font-bold text-emerald-600">
            {verification.score}
          </div>
          <div>
            <p className="text-xs font-semibold text-emerald-700">
              {verification.title}
            </p>
            <p className="text-[10px] text-emerald-600">
              {verification.subtitle}
            </p>
          </div>
        </div>
      </div>

      <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
        Phase breakdown
      </p>
      <div className="space-y-3">
        {verification.phaseBreakdown.map((phase) => (
          <div key={phase.name}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-700">
                <div className="size-2 rounded-full bg-emerald-500" />
                <span>{phase.name}</span>
                <span className="text-slate-400">{phase.percent}%</span>
              </div>
              <Badge className="h-4 rounded-full bg-emerald-100 px-1.5 text-[9px] text-emerald-700 hover:bg-emerald-100">
                {phase.status}
              </Badge>
            </div>
            <p className="text-[10px] text-slate-400">{phase.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function AuthInfoPanel() {
  const features = [
    "SOC 2 Type II compliant infrastructure",
    "Role-based access for every admin action",
    "Full audit trail of every change",
  ];

  return (
    <div className="relative hidden w-full overflow-hidden bg-[#0a192f] lg:flex lg:flex-col lg:justify-between p-8 sm:p-12 lg:p-16 min-h-screen">
      <div className="absolute -right-48 -top-48 h-200 w-200 rounded-full border-80 border-white/5 opacity-50" />
      <div className="absolute -left-32 -bottom-32 h-150 w-150 rounded-full border-60 border-white/5 opacity-50" />

      <div className="relative z-10 flex items-center gap-3 mt-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
          <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2} />
        </div>
        <span className="text-sm font-semibold text-white tracking-wide">
          Secured by RatedDocs
        </span>
      </div>

      <div className="relative z-10 w-full max-w-xl flex-1 flex flex-col justify-center mb-10">
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Admin Console
          </span>
        </div>

        <h2 className="text-[2.75rem] leading-[1.15] font-semibold text-white mb-6">
          Run your network of
          <br /> dentists, bookings and
          <br /> patients from one place.
        </h2>

        <p className="text-lg text-slate-300 mb-12 max-w-md leading-relaxed">
          Verify practitioners, moderate reviews, manage payouts, and connect
          bookings end-to-end — securely.
        </p>

        <ul className="space-y-5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-4 text-slate-200">
              <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2} />
              <span className="text-[15px] font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 text-sm font-medium text-slate-500">
        v2.4 · build 2026.04.29
      </div>
    </div>
  );
}

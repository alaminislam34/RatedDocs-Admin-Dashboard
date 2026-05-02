"use client";

import { ShieldCheck } from "lucide-react";

export function PatientResultsInfo() {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-blue-50 border border-blue-100 p-4">
      <ShieldCheck className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
      <p className="text-sm text-blue-700">
        All patient results are authenticated via verified booking records.
        RatedDocs watermark applied.
      </p>
    </div>
  );
}

export default PatientResultsInfo;

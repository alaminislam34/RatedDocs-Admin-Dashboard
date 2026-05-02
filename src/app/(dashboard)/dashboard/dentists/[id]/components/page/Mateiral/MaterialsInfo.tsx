"use client";

import { CheckCircle2 } from "lucide-react";

export function MaterialsInfo() {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-emerald-50 border border-emerald-100 p-4">
      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
      <p className="text-sm text-emerald-700">
        Material declarations reviewed and confirmed by RatedDocs.
      </p>
    </div>
  );
}

export default MaterialsInfo;

"use client";

import ProtocolItem from "./ProtocolItem";
import { Upload } from "lucide-react";
import { DentistProfileData } from "@/types/types";

type ClinicalProtocolsCardProps = {
  // accept a lightweight list for demo; in real app this would be files metadata
  items?: { title: string; meta?: string; status?: "Reviewed" | "Pending" }[];
};

export function ClinicalProtocolsCard({ items }: ClinicalProtocolsCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">
          Clinical protocols
        </h3>
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="text-xs text-slate-400">
            Layer 2 — login-gated on public profile
          </span>
          <button className="inline-flex items-center gap-2 rounded px-2 py-1 text-sm text-slate-600 hover:bg-slate-50">
            <Upload className="size-4" /> Upload
          </button>
        </div>
      </div>

      <div className="mb-4 rounded-md bg-amber-50/10 p-3 text-sm text-slate-600">
        Shown only to logged-in patients on the public profile. Admin always has
        full access.
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items?.map((it) => (
          <ProtocolItem
            key={it.title}
            title={it.title}
            meta={it.meta}
            status={it.status}
          />
        ))}
      </div>
    </section>
  );
}

export default ClinicalProtocolsCard;

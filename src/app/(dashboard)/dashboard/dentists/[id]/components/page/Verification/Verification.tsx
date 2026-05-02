"use client";

import VerificationRating from "./VerificationRating";
import VerificationPhase from "./VerificationPhase";
import { CheckCircle2 } from "lucide-react";

export default function Verification() {
  // Phase breakdown data - matches design
  type PhaseData = {
    name: string;
    percentage: number;
    date: string;
    items: {
      label: string;
      description: string;
      status: "data-reviewed" | "approved" | "pending";
    }[];
  };

  const verificationData = {
    score: "RDV Score = 100/100",
    title: "All verification phases approved",
    subtitle: "By Jordan Smith, Apr 12, 2025",
    phases: [
      {
        name: "Phase 1 — Identity",
        percentage: 30,
        date: "Approved Apr 10, 2025",
        items: [
          {
            label: "License number",
            description: "CA-DDS-44192 · Matched in SBD/TFAPD",
            status: "data-reviewed" as const,
          },
          {
            label: "Full name match",
            description: "Name matches date board record",
            status: "data-reviewed" as const,
          },
          {
            label: "Headshot photo",
            description: "headshot.jpg · Reviewed Apr 10, 2025",
            status: "data-reviewed" as const,
          },
        ],
      },
      {
        name: "Phase 2 — Operations",
        percentage: 40,
        date: "Approved Apr 12, 2025",
        items: [
          {
            label: "Sterilization protocol",
            description: "X-Cert uploaded. Reviewed Apr 12, 2025",
            status: "data-reviewed" as const,
          },
          {
            label: "Price list",
            description: "Published Apr 12, 2025",
            status: "data-reviewed" as const,
          },
          {
            label: "NGO enrollment",
            description: "No Surprise Guarantee active",
            status: "data-reviewed" as const,
          },
        ],
      },
      {
        name: "Phase 3 — Clinical Depth",
        percentage: 30,
        date: "Approved Apr 13, 2025",
        items: [
          {
            label: "CE certificates",
            description: "Implants, Veneers, Crowns covered",
            status: "data-reviewed" as const,
          },
          {
            label: "Material declarations",
            description: "materials.pdf · Reviewed Apr 13, 2025",
            status: "data-reviewed" as const,
          },
          {
            label: "Clinical protocols",
            description: "protocols.pdf · Eligible",
            status: "data-reviewed" as const,
          },
        ],
      },
    ] as PhaseData[],
  };

  return (
    <div className="space-y-6">
      {/* Verification Rating Card */}
      <VerificationRating
        score={verificationData.score}
        title={verificationData.title}
        subtitle={verificationData.subtitle}
      />

      {/* Phases Container */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-6">
        {verificationData.phases.map((phase, idx) => (
          <VerificationPhase
            key={idx}
            name={phase.name}
            percentage={phase.percentage}
            date={phase.date}
            items={phase.items}
          />
        ))}

        {/* Footer */}
        <div className="border-t border-slate-100 pt-6 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
          <p className="text-sm text-slate-600">
            All verification phases approved. This dentist is on the RatedDocs
            platform with full trust signal.
          </p>
        </div>
      </div>
    </div>
  );
}

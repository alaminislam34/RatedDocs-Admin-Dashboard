"use client";

import {
  DollarSign,
  FlaskConical,
  ShieldCheck,
  UserCheck,
  FileText, // Added for Documents
  CalendarCheck, // Added for Bookings
} from "lucide-react";
import { useState } from "react";

// 1. Define a clear type for the Tab object
export type TabItem = {
  label: string;
  icon: React.ReactNode;
};

// 2. Updated data structures with better icons
export const profileTabs: TabItem[] = [
  { label: "Overview", icon: <UserCheck className="size-3.5" /> },
  { label: "Pricing & Protocols", icon: <DollarSign className="size-3.5" /> },
  { label: "Verification Data", icon: <ShieldCheck className="size-3.5" /> },
  { label: "Reviews", icon: <FlaskConical className="size-3.5" /> },
  { label: "Patient Results", icon: <FlaskConical className="size-3.5" /> },
  { label: "Materials", icon: <FlaskConical className="size-3.5" /> },
];

export const profileTabsForPatients: TabItem[] = [
  { label: "Overview", icon: <UserCheck className="size-3.5" /> },
  { label: "Bookings", icon: <CalendarCheck className="size-3.5" /> },
  { label: "Documents", icon: <FileText className="size-3.5" /> },
];

interface ProfileTabsProps {
  tabs: TabItem[];
  // Callback usually only needs the label string to switch content
  setProfileTab: (label: string) => void;
}

export function ProfileTabs({ tabs, setProfileTab }: ProfileTabsProps) {
  // Initialize state with the label of the first tab
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.label || "");

  return (
    <div className="border-b border-slate-200">
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.label;
          return (
            <button
              key={tab.label}
              onClick={() => {
                setActiveTab(tab.label);
                setProfileTab(tab.label);
              }}
              className={`inline-flex min-w-max items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-medium transition-colors outline-none ${
                isActive
                  ? "border-slate-800 text-slate-800"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

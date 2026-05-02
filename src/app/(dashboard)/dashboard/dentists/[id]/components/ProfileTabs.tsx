"use client";

import {
  CircleEllipsis,
  FlaskConical,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

type ProfileTabsProps = {
  tabs: string[];
};

export function ProfileTabs({
  tabs,
  setProfileTab,
}: ProfileTabsProps & { setProfileTab: (tab: string) => void }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="border-b border-slate-200">
      <div className="flex overflow-x-auto">
        {tabs.map((tab, idx) => {
          const isActive = activeTab === tab;
          return (
            <button
              onClick={() => {
                setProfileTab(tab);
                setActiveTab(tab);
              }}
              key={tab}
              className={`inline-flex min-w-max items-center gap-1.5 border-b-2 px-3 py-2 text-xs transition-colors ${
                isActive
                  ? "border-slate-800 text-slate-800"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {idx === 0 && <UserCheck className="size-3.5" />}
              {idx === 1 && <CircleEllipsis className="size-3.5" />}
              {idx === 2 && <ShieldCheck className="size-3.5" />}
              {idx === 5 && <FlaskConical className="size-3.5" />}
              {tab}
              {idx === 3 && (
                <span className="text-[10px] text-slate-400">184</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { Bell, Lock, User, UserX } from "lucide-react";
import type { SystemSection } from "../types";
import { cn } from "@/lib/utils";

type SystemSidebarProps = {
  activeSection: SystemSection;
  onChange: (section: SystemSection) => void;
};

const items: { id: SystemSection; label: string; icon: typeof User }[] = [
  { id: "personal-info", label: "Personal info", icon: User },
  { id: "password", label: "Password", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "danger-zone", label: "Deactivate account", icon: UserX },
];

export function SystemSidebar({ activeSection, onChange }: SystemSidebarProps) {
  return (
    <aside className="w-full shrink-0 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:w-44">
      <p className="px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        Profile
      </p>

      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-blue-50 text-[#101828]"
                  : "text-slate-500 hover:bg-slate-50",
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 shrink-0",
                  active ? "text-slate-700" : "text-slate-400",
                )}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default SystemSidebar;

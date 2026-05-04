"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}

export function SidebarItem({
  label,
  href,
  icon: Icon,
  badge,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center justify-between px-4 py-2.5 rounded-md transition-all duration-200",
        isActive
          ? "bg-white/10 text-white"
          : "text-slate-400 hover:text-slate-200 hover:bg-white/5",
      )}
    >
      {/* Active Indicator Border */}
      {isActive && (
        <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#D99A29] rounded-r-full" />
      )}

      <div className="flex items-center gap-3">
        <Icon
          className={cn(
            "h-5 w-5",
            isActive
              ? "text-white"
              : "text-slate-400 group-hover:text-slate-200",
          )}
        />
        <span className="text-sm font-medium">{label}</span>
      </div>

      {badge && (
        <span className="bg-[#D99A29] text-[#101828] text-[10px] font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
}

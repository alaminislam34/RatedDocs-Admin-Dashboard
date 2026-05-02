"use client";

import { Activity, LogOut } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navConfig } from "@/config/NavigationConfig";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-70 bg-[#0a192f] flex flex-col border-r border-white/5">
      {/* Brand Section */}
      <div className="px-6 py-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D99A29]">
          <Activity className="h-6 w-6 text-black" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-tight text-white">
            RatedDocs
          </span>
          <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
            Admin Console
          </span>
        </div>
      </div>

      {/* Navigation Scrollable Area */}
      <nav className="flex-1 overflow-y-auto px-4 space-y-8 scrollbar-hide">
        {navConfig.map((group) => (
          <div key={group.group} className="space-y-1">
            <h3 className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
              {group.group}
            </h3>
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <SidebarItem key={item.href} {...item} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* User Footer Section */}
      <div className="p-4 border-t border-white/5 mt-auto">
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10 border border-emerald-500/50">
                <AvatarImage src="/avatar.webp" />
                <AvatarFallback className="bg-slate-800 text-white text-xs">
                  JS
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-emerald-500 border-2 border-[#0a192f] rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">
                Jordan Smith
              </span>
              <span className="text-[11px] text-slate-500">Super Admin</span>
            </div>
          </div>
          <button className="text-slate-500 hover:text-white transition-colors">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

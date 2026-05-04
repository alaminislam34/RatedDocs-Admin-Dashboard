"use client";

import { Bell, HelpCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "../search-input";
import { UserNav } from "../user-nav";
import { NotificationDropdown } from "../notification-dropdown";

export function DashboardNavbar({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Left Section: Title & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-600"
            onClick={() => onOpenChange(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden sm:flex flex-col">
            <h2 className="text-sm font-bold text-[#101828] leading-none">
              Dashboard
            </h2>
            <span className="text-[11px] font-medium text-slate-400 mt-1">
              Overview
            </span>
          </div>
        </div>

        {/* Center Section: Search */}

        {/* Right Section: Actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          <SearchInput />
          <Button
            variant={"ghost"}
            size={"lg"}
            className="text-slate-500 border"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>

          <NotificationDropdown />

          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />

          <UserNav />
        </div>
      </div>
    </header>
  );
}

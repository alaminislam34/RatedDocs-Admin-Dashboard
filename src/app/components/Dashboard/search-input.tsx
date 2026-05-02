"use client";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="relative w-full max-w-md group hidden md:block">
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 group-focus-within:text-[#D99A29] transition-colors" />
      <input
        type="text"
        placeholder="Search dentists, patients, bookings..."
        className="h-10 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-14 text-sm transition-all focus:border-[#D99A29] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#D99A29]/5"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-bold text-slate-400">
        <span className="text-[8px]">⌘</span>K
      </div>
    </div>
  );
}

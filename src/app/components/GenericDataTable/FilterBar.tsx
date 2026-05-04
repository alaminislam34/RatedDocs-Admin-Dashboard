"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Filter, Search } from "lucide-react";

export interface FilterOption {
  value: string;
  label: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

interface UniversalFilterBarProps {
  // Tabs section
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  counts: Record<string, number>;

  // Search section
  search: string;
  setSearch: (value: string) => void;
  searchPlaceholder?: string;

  // Dynamic Filters section (this makes it reusable)
  filters: FilterOption[];

  // Optional "More Filters" toggle
  onMoreFiltersClick?: () => void;
}

export default function FilterBar({
  tabs,
  activeTab,
  setActiveTab,
  counts,
  search,
  setSearch,
  searchPlaceholder = "Search...",
  filters,
  onMoreFiltersClick,
}: UniversalFilterBarProps) {
  return (
    <div className="space-y-5">
      {/* 1. Status Tabs Layout */}
      <div className="flex flex-wrap gap-1 border-b border-b-slate-200 mb-4 w-full">
        {tabs.map((tab) => {
          // Normalizes tab name to match your count object keys (e.g., "Active" -> "active")
          const countKey = tab === "All" ? "all" : tab.toLowerCase();

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 text-sm font-semibold transition-all duration-200 flex items-center gap-2",
                activeTab === tab
                  ? "text-[#101828] border-b border-b-[#101828]"
                  : "text-slate-500 hover:text-[#101828]",
              )}
            >
              {tab}
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-md font-bold",
                  activeTab === tab
                    ? "bg-slate-100 text-slate-600"
                    : "bg-slate-200/60 text-slate-400",
                )}
              >
                {counts[countKey] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Controls Section (Search + Selects) */}
      <div className="flex flex-col lg:flex-row gap-3 items-center">
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Reusable Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="pl-10 border-slate-200 focus:ring-slate-100 rounded-lg"
            />
          </div>

          {/* Dynamic Select Filters */}
          {filters.map((filter, index) => (
            <Select
              key={index}
              value={filter.value}
              onValueChange={filter.onChange}
            >
              <SelectTrigger className="w-full sm:w-45 text-slate-600">
                <SelectValue placeholder={filter.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {/* here is show my default all or existing all fix it */}
                <SelectItem value="all">{filter.label}</SelectItem>
                {filter.options.map((option, idx) => (
                  <SelectItem key={idx} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
        </div>

        {onMoreFiltersClick && (
          <Button
            variant="outline"
            onClick={onMoreFiltersClick}
            className="w-full lg:w-auto border-slate-200 text-slate-600 font-medium gap-2 hover:bg-slate-50 rounded-lg px-4"
          >
            <Filter className="w-4 h-4" />
            More Filters
          </Button>
        )}
      </div>
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Funnel, Search } from "lucide-react";

type FilterBarProps = {
  counts: Record<string, number>;
  active: string;
  setActive: (v: string) => void;
  search: string;
  setSearch: (v: string) => void;
  specialty: string;
  setSpecialty: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
  specialties: string[];
  cities: string[];
};

export default function FilterBar({
  counts,
  active,
  setActive,
  search,
  setSearch,
  specialty,
  setSpecialty,
  city,
  setCity,
  specialties,
  cities,
}: FilterBarProps) {
  const tabs = ["All", "Active", "Pending", "Suspended", "Rejected"];

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex gap-2 bg-white rounded-lg p-1 border border-slate-200">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "px-3 py-1 rounded text-sm font-medium",
                active === t ? "bg-slate-100 text-slate-900" : "text-slate-500",
              )}
            >
              {t}{" "}
              <span className="ml-2 text-xs text-slate-400">
                {counts[t.toLowerCase()] ?? 0}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 md:flex-row max-w-2xl">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email or ID..."
              className="pl-10 py-2"
            />
          </div>

          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm"
          >
            <option value="">All specialties</option>
            {specialties.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm"
          >
            <option value="">All cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <Button variant="ghost" className="flex flex-row items-center gap-2">
            <Funnel />
            More filters
          </Button>
        </div>
      </div>
    </div>
  );
}

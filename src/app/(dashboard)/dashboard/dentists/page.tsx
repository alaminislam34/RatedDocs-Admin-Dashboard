"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { GenericDataTable } from "@/app/components/GenericDataTable/GenericDataTable";
import { MOCK_DENTISTS } from "../../../../../public/Mock_Data/data";
import PageHeader from "../../../components/GenericDataTable/PageHeader";
import StatsCard from "../../../components/GenericDataTable/StatsCard";
import FilterBar from "../../../components/GenericDataTable/FilterBar";
import PaginationFooter from "../../../components/GenericDataTable/PaginationFooter";
import React from "react";

interface Dentist {
  id: string;
  name: string;
  email: string;
  idCode: string;
  specialty: string;
  location: string;
  status: "Active" | "Pending" | "Suspended" | "Rejected";
  rating: number;
  reviews: number;
  bookings: number | null;
  joined: string;
}

export default function DentistsPage() {
  const [activeTab, setActiveTab] = React.useState("All");
  const [search, setSearch] = React.useState("");
  const [specialty, setSpecialty] = React.useState("");
  const [city, setCity] = React.useState("");

  const counts = React.useMemo(() => {
    const total = MOCK_DENTISTS.length;
    const byStatus = MOCK_DENTISTS.reduce<Record<string, number>>((acc, d) => {
      const k = d.status.toLowerCase();
      acc[k] = (acc[k] || 0) + 1;
      return acc;
    }, {});
    return {
      total,
      active: byStatus["active"] || 0,
      pending: byStatus["pending"] || 0,
      suspended: byStatus["suspended"] || 0,
      rejected: byStatus["rejected"] || 0,
      all: total,
    } as Record<string, number>;
  }, []);
  const dentistColumns = [
    {
      key: "dentist",
      header: "Dentist",
      render: (row: Dentist) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-[#0a192f]">
            <AvatarFallback className="text-white text-xs font-bold">
              {row.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 flex items-center gap-1">
              {row.name}{" "}
              <span className="text-[10px] text-blue-500">check</span>
            </span>
            <span className="text-xs text-slate-400">
              {row.email} · {row.idCode}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "specialty",
      header: "Specialty",
      render: (row: Dentist) => (
        <Badge
          variant="outline"
          className="bg-slate-50 text-slate-500 font-medium border-slate-200"
        >
          {row.specialty}
        </Badge>
      ),
    },
    { key: "location", header: "Location" },
    {
      key: "status",
      header: "Status",
      render: (row: Dentist) => (
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              row.status === "Active"
                ? "bg-emerald-500"
                : row.status === "Pending"
                  ? "bg-amber-500"
                  : row.status === "Suspended"
                    ? "bg-yellow-500"
                    : "bg-red-500",
            )}
          />
          <span
            className={cn(
              "text-xs font-bold",
              row.status === "Active"
                ? "text-emerald-600"
                : row.status === "Pending"
                  ? "text-amber-600"
                  : row.status === "Suspended"
                    ? "text-yellow-600"
                    : "text-red-600",
            )}
          >
            {row.status}
          </span>
        </div>
      ),
    },
    {
      key: "rating",
      header: "Rating",
      render: (row: Dentist) => (
        <div className="flex items-center gap-1">
          <span className="font-bold text-slate-900">
            {row.rating > 0 ? row.rating : "—"}
          </span>
          {row.reviews > 0 && (
            <span className="text-slate-400 text-xs font-medium">
              ({row.reviews})
            </span>
          )}
        </div>
      ),
    },
    {
      key: "bookings",
      header: "Bookings",
      render: (row: Dentist) => (
        <span className="font-medium text-slate-600">
          {row.bookings ?? "—"}
        </span>
      ),
    },
    { key: "joined", header: "Joined" },
  ];

  const specialties = React.useMemo(() => {
    const s = Array.from(
      new Set(MOCK_DENTISTS.map((d) => d.specialty).filter(Boolean)),
    );
    return s.sort();
  }, []);

  const cities = React.useMemo(() => {
    const c = Array.from(
      new Set(MOCK_DENTISTS.map((d) => d.location).filter(Boolean)),
    );
    return c.sort();
  }, []);

  const filteredData = React.useMemo(() => {
    return MOCK_DENTISTS.filter((d) => {
      // Tab filter
      if (activeTab !== "All") {
        if (d.status.toLowerCase() !== activeTab.toLowerCase()) return false;
      }
      // Search
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!`${d.name} ${d.email} ${d.idCode}`.toLowerCase().includes(q))
          return false;
      }
      // Specialty
      if (specialty) {
        if (d.specialty !== specialty) return false;
      }
      // City
      if (city) {
        if (d.location !== city) return false;
      }
      return true;
    });
  }, [activeTab, search, specialty, city]);

  return (
    <div className=" space-y-6">
      <PageHeader
        title="Dentists"
        description="Manage all practitioners on the platform — verification, status, performance."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          label="Total Dentists"
          value={counts.total}
          note={<span className="text-emerald-500">+34 this week</span>}
        />
        <StatsCard
          label="Active"
          value={counts.active}
          note={
            <span className="text-slate-400">
              {Math.round((counts.active / counts.total) * 100)}%
            </span>
          }
        />
        <StatsCard
          label="Pending Verification"
          value={counts.pending}
          note={<span className="text-amber-500">Awaiting review</span>}
        />
        <StatsCard
          label="Suspended"
          value={counts.suspended}
          note={<span className="text-slate-400">0.6%</span>}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <FilterBar
          counts={{
            all: counts.all,
            active: counts.active,
            pending: counts.pending,
            suspended: counts.suspended,
            rejected: counts.rejected,
          }}
          active={activeTab}
          setActive={setActiveTab}
          search={search}
          setSearch={setSearch}
          specialty={specialty}
          setSpecialty={setSpecialty}
          city={city}
          setCity={setCity}
          specialties={specialties}
          cities={cities}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <GenericDataTable data={filteredData} columns={dentistColumns} />
        <PaginationFooter
          total={filteredData.length}
          showingTo={filteredData.length}
        />
      </div>
    </div>
  );
}

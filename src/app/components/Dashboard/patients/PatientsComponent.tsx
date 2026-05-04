"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  UserX,
  Mail,
  History,
  MoreVertical,
  Upload,
  Download,
  Plus,
  Phone,
  Ban,
} from "lucide-react";

// ShadCN & Utils
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";

// Generic Architecture Components
import { GenericDataTable } from "@/app/components/GenericDataTable/GenericDataTable";
import PageHeader from "../../../components/GenericDataTable/PageHeader";
import StatsCard from "../../../components/GenericDataTable/StatsCard";
import FilterBar from "../../../components/GenericDataTable/FilterBar";
import PaginationFooter from "../../../components/GenericDataTable/PaginationFooter";

// Types
import { TableAction } from "@/types/table/data-table";
import { Button } from "@/components/ui/button";

interface Patient {
  id: string;
  name: string;
  email: string;
  patientId: string;
  gender: string;
  city: string;
  age: number;
  lastVisit: string;
  status: "Active" | "Inactive" | "Blocked";
  totalBookings: number;
  joined: string;
  phone: string;
}

// Mock Data for Patients (You can move this to your Mock_Data folder)
const MOCK_PATIENTS: Patient[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    patientId: "PT-8821",
    gender: "Male",
    age: 34,
    lastVisit: "2026-04-20",
    status: "Active",
    totalBookings: 12,
    city: "New York",
    joined: "2020-01-15",
    phone: "+1 (555) 123-4567",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    patientId: "PT-8822",
    gender: "Female",
    age: 28,
    lastVisit: "2026-04-19",
    status: "Inactive",
    totalBookings: 5,
    city: "Los Angeles",
    joined: "2021-06-10",
    phone: "+1 (555) 987-6543",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    patientId: "PT-8823",
    gender: "Male",
    age: 45,
    lastVisit: "2026-04-18",
    status: "Blocked",
    totalBookings: 8,
    city: "Chicago",
    joined: "2019-11-05",
    phone: "+1 (555) 555-1234",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice@example.com",
    patientId: "PT-8824",
    gender: "Female",
    age: 31,
    lastVisit: "2026-04-17",
    status: "Active",
    totalBookings: 3,
    city: "Houston",
    joined: "2022-02-20",
    phone: "+1 (555) 444-5678",
  },
  // ... more patients
];

export default function PatientsPage() {
  const router = useRouter();

  // State Management
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [citiesFilter, setCitiesFilter] = useState("all");
  const [allTimes, setTimes] = useState("all");

  // Logic: Stats Calculation
  const counts = useMemo(() => {
    const total = MOCK_PATIENTS.length;
    const byStatus = MOCK_PATIENTS.reduce<Record<string, number>>((acc, p) => {
      const k = p.status.toLowerCase();
      acc[k] = (acc[k] || 0) + 1;
      return acc;
    }, {});
    return {
      total,
      active: byStatus["active"] || 0,
      inactive: byStatus["inactive"] || 0,
      blocked: byStatus["blocked"] || 0,
    };
  }, []);

  // Logic: Patient-Specific Actions
  const patientActions: TableAction<Patient>[] = [
    {
      label: "View Records",
      icon: <Eye size={16} />,
      onClick: (row) => router.push(`/dashboard/patients/${row.id}`),
    },
    {
      label: "Send Message",
      icon: <Mail size={16} />,
      onClick: (row) => toast(`Opening chat with ${row.name}`),
    },
    {
      label: "Booking History",
      icon: <History size={16} />,
      onClick: (row) => console.log("History:", row.id),
    },
    {
      label: "Restrict Access",
      icon: <UserX size={16} />,
      onClick: (row) => toast.error("Patient access restricted"),
      variant: "destructive",
      separatorBefore: true,
    },
  ];

  // Logic: Table Column Definitions
  const patientColumns = [
    {
      key: "patient",
      header: "Patient",
      render: (row: Patient) => (
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push(`/dashboard/patients/${row.id}`)}
        >
          <Avatar className="h-10 w-10 ">
            <AvatarFallback className="bg-linear-to-b from-[#0A2540] to-[#0F3460] text-slate-200 text-xs font-bold">
              {row.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-bold text-[#101828]">{row.name}</span>
            <span className="text-xs text-slate-400 font-medium">
              <span className="text-slate-500">{row.patientId}</span>
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "contact",
      header: "Contact",
      render: (row: Patient) => (
        <div className="flex flex-col text-slate-500">
          <p>
            <span className="text-xs text-[#101828]">{row.email}</span>
          </p>
          <p>
            <span className="text-xs text-[#667085]">{row.phone}</span>
          </p>
        </div>
      ),
    },
    {
      key: "city",
      header: "City",
      render: (row: Patient) => (
        <div className="text-xs text-slate-600 font-medium">{row.city}</div>
      ),
    },

    {
      key: "status",
      header: "Status",
      render: (row: Patient) => (
        <Badge
          className={cn(
            "rounded-full text-xs space-x-2",
            row.status === "Active"
              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
              : row.status === "Inactive"
                ? "bg-[#FFFAEB] text-[#B54708] border-[#FEF0C7]"
                : row.status === "Blocked" &&
                  "bg-[#FEF3F2] text-[#B42318] border-[#FEE4E2]",
          )}
          variant="outline"
        >
          <span
            className={`w-1 h-1 rounded-full ${row.status === "Active" ? "bg-emerald-500" : row.status === "Inactive" ? "bg-amber-500" : "bg-red-500"}`}
          ></span>{" "}
          {row.status}
        </Badge>
      ),
    },
    {
      key: "totalBookings",
      header: "Total Bookings",
      render: (row: Patient) => (
        <div className="text-sm font-medium text-[#101828]">
          {row.totalBookings}
        </div>
      ),
    },
    {
      key: "lastBooking",
      header: "Last Booking",
      render: (row: Patient) => (
        <div className="text-sm text-slate-500">
          {new Date(row.lastVisit).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: "joined",
      header: "Joined",
      render: (row: Patient) => (
        <div className="text-sm text-slate-500">
          {new Date(row.joined).toLocaleDateString()}
        </div>
      ),
    },
    {
      key: "actions",
      header: "",
      render: (row: Patient) => (
        <div className="flex items-center gap-2">
          <Button variant={"link"} size="sm">
            <Eye size={16} />
          </Button>
          <Button variant={"link"} size="sm">
            <Ban size={16} />
          </Button>
        </div>
      ),
    },
  ];

  // Filtering Logic
  const filteredData = useMemo(() => {
    return MOCK_PATIENTS.filter((p) => {
      const matchesTab =
        activeTab === "All" ||
        p.status.toLowerCase() === activeTab.toLowerCase();
      const matchesSearch =
        !search ||
        `${p.name} ${p.email} ${p.patientId}`
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchesCities =
        citiesFilter === "all" ||
        p.city.toLowerCase() === citiesFilter.toLowerCase();
      return matchesTab && matchesSearch && matchesCities;
    });
  }, [activeTab, search, citiesFilter]);

  return (
    <div className="space-y-6 min-h-screen">
      <PageHeader
        title="Patients"
        description="View and manage patient profiles, medical history, and booking status."
        actionButtons={
          <div className="flex items-center gap-2 *:cursor-pointer">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Download className="size-4" /> Export
            </Button>
            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-2 ml-2"
            >
              <Plus className="size-4" /> Add Patient
            </Button>
          </div>
        }
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white *:border-l border rounded-lg overflow-hidden">
        <StatsCard
          label="Total Patients"
          value={counts.total}
          note={<span className="text-emerald-600 font-bold">+12% growth</span>}
          className="border-r border-b sm:border-b-0 rounded-none shadow-none"
        />
        <StatsCard
          label="Active Users"
          value={counts.active}
          note={
            <span className="text-slate-400 font-medium">Monthly active</span>
          }
          className="lg:border-r border-b sm:border-b-0 rounded-none shadow-none"
        />
        <StatsCard
          label="Pending Sync"
          value={counts.inactive + counts.blocked}
          note={
            <span className="text-amber-600 font-bold">
              Incomplete profiles
            </span>
          }
          className="border-r rounded-none shadow-none"
        />
        <StatsCard
          label="Inactive"
          value={counts.inactive}
          note={<span className="text-slate-400 font-medium">90+ days</span>}
          className="rounded-none shadow-none"
        />
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 md:p-6 border-b border-slate-100">
          <FilterBar
            tabs={["All", "Active", "Inactive", "Blocked"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            counts={{
              all: counts.total,
              active: counts.active,
              inactive: counts.inactive,
              blocked: counts.blocked,
            }}
            search={search}
            setSearch={setSearch}
            searchPlaceholder="Search patients..."
            filters={[
              {
                label: "All City",
                value: citiesFilter,
                options: [
                  "New York",
                  "Los Angeles",
                  "Chicago",
                  "Houston",
                  "Phoenix",
                ],
                placeholder: "All cities",
                onChange: setCitiesFilter,
              },
              {
                label: "All Time",
                value: allTimes,
                options: ["Last 7 days", "Last 30 days", "Last 90 days"],
                placeholder: "All time",
                onChange: setTimes,
              },
            ]}
          />
        </div>

        <GenericDataTable
          data={filteredData}
          columns={patientColumns}
          actions={patientActions}
          selectable={true}
        />

        <PaginationFooter
          total={filteredData.length}
          showingTo={filteredData.length}
        />
      </div>
    </div>
  );
}

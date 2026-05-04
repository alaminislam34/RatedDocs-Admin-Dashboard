"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Edit2,
  Eye,
  Pause,
  ShieldCheck,
  Trash2,
  CheckCircle2,
  Upload,
  Download,
  MoreHorizontal,
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

// Types & Data
import { MOCK_DENTISTS } from "../../../../../public/Mock_Data/data";
import { TableAction } from "@/types/table/data-table";
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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
  const router = useRouter();

  // State Management
  const [activeTab, setActiveTab] = React.useState("All");
  const [search, setSearch] = React.useState("");
  const [specialty, setSpecialty] = React.useState("all");
  const [city, setCity] = React.useState("all");

  // Handler Placeholders
  const handleVerify = (id: string) => toast.success(`Dentist ${id} verified!`);
  const handleSuspend = (id: string) => toast.error(`Account ${id} suspended.`);
  const handleDelete = (id: string) =>
    confirm("Are you sure?") && toast.success("Deleted");

  // Logic: Stats Calculation
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
    };
  }, []);

  // Logic: Professional Action Menu
  const dentistActions: TableAction<Dentist>[] = [
    {
      label: "View Profile",
      icon: <Eye size={16} />,
      onClick: (row) => router.push(`/dashboard/dentists/${row.id}`),
    },
    {
      label: "Edit Details",
      icon: <Edit2 size={16} />,
      onClick: (row) => console.log("Edit:", row.id),
    },
    {
      label: "Approve Verification",
      icon: <ShieldCheck size={16} />,
      onClick: (row) => handleVerify(row.id),
    },
    {
      label: "Suspend Account",
      icon: <Pause size={16} />,
      onClick: (row) => handleSuspend(row.id),
      separatorBefore: true,
    },
    {
      label: "Delete Practitioner",
      icon: <Trash2 size={16} />,
      onClick: (row) => handleDelete(row.id),
      variant: "danger",
    },
  ];

  // Logic: Table Column Definitions
  const dentistColumns = [
    {
      key: "dentist",
      header: "Dentist",
      render: (row: Dentist) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 ">
            <AvatarFallback className="bg-linear-to-b from-[#0A2540] to-[#0F3460] text-slate-200 text-xs font-bold">
              {row.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-bold text-[#101828] flex items-center gap-1">
              {row.name}
              {row.status === "Active" && (
                <CheckCircle2
                  size={14}
                  className="text-blue-500 fill-blue-50"
                />
              )}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {row.email} · <span className="text-slate-500">{row.idCode}</span>
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
          className="bg-slate-50 text-slate-500 font-semibold border-slate-200 px-2.5 py-0.5"
        >
          {row.specialty}
        </Badge>
      ),
    },
    {
      key: "location",
      header: "Location",
      className: "text-slate-600 font-medium",
    },
    {
      key: "status",
      header: "Status",
      render: (row: Dentist) => (
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded-full",
              row.status === "Active"
                ? "bg-emerald-500"
                : row.status === "Pending"
                  ? "bg-amber-500"
                  : row.status === "Suspended"
                    ? "bg-red-400"
                    : "bg-slate-300",
            )}
          />
          <span
            className={cn(
              "text-[13px] font-bold",
              row.status === "Active"
                ? "text-emerald-600"
                : row.status === "Pending"
                  ? "text-amber-600"
                  : "text-slate-600",
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
        <div className="flex items-center gap-1 text-sm">
          <span className="font-bold text-[#101828]">
            {row.rating > 0 ? row.rating : "—"}
          </span>
          {row.reviews > 0 && (
            <span className="text-slate-400 font-medium">({row.reviews})</span>
          )}
        </div>
      ),
    },
    {
      key: "bookings",
      header: "Bookings",
      className: "text-center font-bold text-slate-700",
    },
    { key: "joined", header: "Joined", className: "text-slate-500 text-xs" },
    {
      key: "actions",
      header: "",
      render: (row: Dentist) => (
        <TableCell className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-600 transition-all outline-none">
                <MoreHorizontal size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-52 p-1.5 shadow-xl rounded-xl"
            >
              {dentistActions.map((action, idx) => (
                <React.Fragment key={idx}>
                  {action.separatorBefore && <DropdownMenuSeparator />}
                  <DropdownMenuItem
                    onClick={() => action.onClick(row)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md text-sm",
                      action.variant === "danger" ||
                        action.variant === "destructive"
                        ? "text-red-600 focus:bg-red-50 focus:text-red-700"
                        : "text-slate-600",
                    )}
                  >
                    {action.icon && (
                      <span className="opacity-70">{action.icon}</span>
                    )}
                    {action.label}
                  </DropdownMenuItem>
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      ),
    },
  ];

  // Filters: Dynamic Options
  const specialties = React.useMemo(
    () => [
      ...Array.from(
        new Set(MOCK_DENTISTS.map((d) => d.specialty).filter(Boolean)),
      ).sort(),
    ],
    [],
  );

  const cities = React.useMemo(
    () => [
      ...Array.from(
        new Set(MOCK_DENTISTS.map((d) => d.location).filter(Boolean)),
      ).sort(),
    ],
    [],
  );

  // Filtering Logic
  const filteredData = React.useMemo(() => {
    return MOCK_DENTISTS.filter((d) => {
      const matchesTab =
        activeTab === "All" ||
        d.status.toLowerCase() === activeTab.toLowerCase();
      const matchesSearch =
        !search ||
        `${d.name} ${d.email} ${d.idCode}`
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchesSpec = specialty === "all" || d.specialty === specialty;
      const matchesCity = city === "all" || d.location === city;
      return matchesTab && matchesSearch && matchesSpec && matchesCity;
    });
  }, [activeTab, search, specialty, city]);

  return (
    <div className="space-y-6 min-h-screen">
      <PageHeader
        title="Dentists"
        description="Manage all practitioners on the platform — verification, status, performance."
        actionButtons={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Upload className="size-4" /> Import CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Download className="size-4" /> Export
            </Button>
          </div>
        }
      />

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white *:border-l border rounded-lg overflow-hidden">
        <StatsCard
          label="Total Dentists"
          value={counts.total}
          note={
            <span className="text-emerald-600 font-bold">+34 this week</span>
          }
          className="border-r border-b sm:border-b-0 rounded-none shadow-none"
        />
        <StatsCard
          label="Active"
          value={counts.active}
          note={
            <span className="text-slate-400 font-medium">
              {Math.round((counts.active / counts.total) * 100)}% coverage
            </span>
          }
          className="lg:border-r border-b sm:border-b-0 rounded-none shadow-none"
        />
        <StatsCard
          label="Pending Verification"
          value={counts.pending}
          note={
            <span className="text-amber-600 font-bold">Awaiting review</span>
          }
          className="border-r rounded-none shadow-none"
        />
        <StatsCard
          label="Suspended"
          value={counts.suspended}
          note={<span className="text-slate-400 font-medium">0.6% rate</span>}
          className="rounded-none shadow-none"
        />
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 md:p-6 border-b border-slate-100">
          <FilterBar
            tabs={["All", "Active", "Pending", "Suspended", "Rejected"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            counts={{
              all: counts.total,
              active: counts.active,
              pending: counts.pending,
              suspended: counts.suspended,
              rejected:
                counts.total -
                (counts.active + counts.pending + counts.suspended),
            }}
            search={search}
            setSearch={setSearch}
            searchPlaceholder="Search by name, email or ID..."
            filters={[
              {
                label: "All Specialties",
                value: specialty,
                options: specialties,
                placeholder: "All specialties",
                onChange: setSpecialty,
              },
              {
                label: "All Cities",
                value: city,
                options: cities,
                placeholder: "All cities",
                onChange: setCity,
              },
            ]}
            onMoreFiltersClick={() => console.log("Open Filter Modal")}
          />
        </div>

        <GenericDataTable
          data={filteredData}
          columns={dentistColumns}
          actions={dentistActions}
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

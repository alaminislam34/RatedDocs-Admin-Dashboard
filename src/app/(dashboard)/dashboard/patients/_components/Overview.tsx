"use client";

import { GenericDataTable } from "@/app/components/GenericDataTable/GenericDataTable";
import {
  ArrowRight,
  Copy,
  Eye,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { MOCK_BOOKINGS } from "../../../../../../public/Mock_Data/data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// 1. Define columns OUTSIDE the component
const bookingColumns = [
  {
    key: "id",
    header: "Booking",
    render: (row: any) => (
      <span className="font-bold text-slate-800 text-xs">{row.id}</span>
    ),
  },
  {
    key: "dentistName",
    header: "Dentist",
    render: (row: any) => (
      <span className="text-slate-600 font-medium text-xs">
        {row.dentistName}
      </span>
    ),
  },
  {
    key: "procedure",
    header: "Procedure",
    render: (row: any) => (
      <span className="text-slate-400 text-xs">{row.procedure}</span>
    ),
  },
  {
    key: "date",
    header: "Date",
    render: (row: any) => (
      <span className="text-slate-600 font-medium text-xs">{row.date}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (row: any) => {
      const isConfirmed = row.status === "Confirmed";
      return (
        <Badge
          variant="outline"
          className={cn(
            "rounded-full px-2 py-0 text-[10px] font-semibold flex items-center w-fit gap-1",
            isConfirmed
              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
              : "bg-amber-50 text-amber-600 border-amber-100",
          )}
        >
          <span
            className={cn(
              "h-1 w-1 rounded-full",
              isConfirmed ? "bg-emerald-500" : "bg-amber-500",
            )}
          />
          {row.status}
        </Badge>
      );
    },
  },
  {
    key: "amount",
    header: "Amount",
    render: (row: any) => (
      <span className="font-bold text-slate-800 text-xs">{row.amount}</span>
    ),
  },
];

export default function PatientOverview({ patient }: { patient: any }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column (Span 2) */}
      <div className="lg:col-span-2 space-y-6">
        {/* Personal Information Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-6">
            Personal information
          </h3>
          <div className="grid grid-cols-2 gap-y-6">
            <InfoItem label="FULL NAME" value={patient.name} />
            <InfoItem
              label="PATIENT ID"
              value={patient.patientId || "PAT-1001"}
            />
            <InfoItem label="EMAIL ADDRESS" value={patient.email} />
            <InfoItem label="PHONE NUMBER" value={patient.phone} />
            <InfoItem label="DATE OF BIRTH" value="May 14, 1992" />
            <InfoItem label="GENDER" value="Female" />
            <InfoItem label="CITY / LOCATION" value={patient.city} />
          </div>
        </div>

        {/* Recent Bookings Card */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-800">
              Recent bookings
            </h3>
            <Link
              href="#"
              className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-800"
            >
              View all <ArrowRight size={12} />
            </Link>
          </div>
          {/* Ensure header styling in your GenericDataTable matches the dark blue design */}
          <GenericDataTable
            data={MOCK_BOOKINGS.slice(0, 4)}
            columns={bookingColumns}
          />
        </div>
      </div>

      {/* Right Column (Span 1) */}
      <div className="space-y-6">
        {/* Engagement Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 mb-6">Engagement</h3>
          <div className="space-y-6">
            <StatProgress
              label="Booking show-up rate"
              value="87.5%"
              percentage={87.5}
              color="bg-slate-900"
            />
            <StatProgress
              label="Reviews submitted"
              value="1 of 4"
              percentage={25}
              color="bg-orange-400"
            />
            <StatProgress
              label="Documents uploaded"
              value="3 docs"
              percentage={60}
              color="bg-amber-600"
            />
          </div>
        </div>

        {/* Referrals Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-800">Referrals</h3>
            <button className="text-[11px] font-bold text-slate-400 hover:text-slate-600">
              View all
            </button>
          </div>

          <div className="bg-[#0a192f] rounded-lg p-4 text-center mb-6 relative group overflow-hidden">
            <p className="text-[9px] font-bold text-slate-400 tracking-widest mb-1">
              REFERRAL CODE
            </p>
            <h4 className="text-lg font-bold text-white tracking-wider">
              RD-JW1001
            </h4>
            <button className="absolute right-2 top-2 text-slate-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Copy size={14} />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-400">Available credits</span>
              <span className="text-emerald-600 font-bold">$50</span>
            </div>
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-400">Total referrals</span>
              <span className="text-slate-800 font-bold">3</span>
            </div>
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-400">Credited</span>
              <span className="text-slate-800 font-bold">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] font-bold text-slate-400 tracking-wider mb-1 uppercase">
        {label}
      </p>
      <p className="text-xs font-bold text-slate-800">{value}</p>
    </div>
  );
}

function StatProgress({ label, value, percentage, color }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-bold">
        <span className="text-slate-400">{label}</span>
        <span className="text-slate-800">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { GenericDataTable } from "@/app/components/GenericDataTable/GenericDataTable";
import {
  Booking,
  MOCK_BOOKINGS,
} from "../../../../../../public/Mock_Data/data";

export default function PatientBookings() {
  const bookingColumns = [
    {
      key: "id",
      header: "Booking ID",
      render: (row: Booking) => (
        <span className="font-bold text-slate-800">{row.id}</span>
      ),
    },
    {
      key: "dentistName",
      header: "Dentist",
      className: "font-medium text-slate-700",
    },
    {
      key: "procedure",
      header: "Procedure",
      className: "text-slate-400",
    },
    {
      key: "date",
      header: "Date & Time",
      render: (row: Booking) => (
        <div className="flex flex-col">
          <span className="text-slate-700 font-medium">{row.date}</span>
          <span className="text-slate-400 text-[11px] uppercase font-semibold">
            {row.time}
          </span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (row: Booking) => {
        const styles: Record<string, string> = {
          Confirmed: "bg-emerald-50 text-emerald-600 border-emerald-100",
          Pending: "bg-amber-50 text-amber-600 border-amber-100",
          Cancelled: "bg-red-50 text-red-600 border-red-100",
          Completed: "bg-blue-50 text-blue-600 border-blue-100",
          "No-show": "bg-slate-50 text-slate-600 border-slate-100",
        };
        return (
          <Badge
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] flex items-center w-fit gap-1",
              styles[row.status],
            )}
          >
            <span className="h-1 w-1 rounded-full bg-current" />
            {row.status}
          </Badge>
        );
      },
    },
    {
      key: "amount",
      header: "Amount",
      render: (row: Booking) => (
        <span className="font-bold text-slate-800">{row.amount}</span>
      ),
    },
    {
      key: "view",
      header: "",
      className: "w-10",
      render: (row: Booking) => (
        <button className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors text-xs font-semibold group">
          <div className="p-1 rounded-md border border-transparent group-hover:border-slate-200 bg-slate-50">
            <Eye size={14} />
          </div>
          View
        </button>
      ),
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      {/* Header bar to match the dark blue top in image_e02282.png */}
      <div className="bg-[#0a192f] text-white/90 text-xs font-semibold grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_80px] px-4 py-3">
        {/* We use GenericDataTable but styling the header explicitly to match image_e02282.png */}
      </div>

      <GenericDataTable data={MOCK_BOOKINGS} columns={bookingColumns} />
    </div>
  );
}

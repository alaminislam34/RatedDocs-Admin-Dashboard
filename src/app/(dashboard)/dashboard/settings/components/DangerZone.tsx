"use client";

import { AlertTriangle, Download, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DangerZone() {
  return (
    <section className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
      <div className="border-b border-red-100 px-6 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-red-500">
          <AlertTriangle className="h-4 w-4" />
          <span>Danger zone</span>
        </div>
      </div>

      <div className="space-y-0 px-6 py-4">
        <div className="flex flex-col gap-4 border-b border-slate-100 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#101828]">
              Export my data
            </p>
            <p className="text-xs text-slate-500">
              Download all activity logs and data associated with your account
            </p>
          </div>
          <Button
            variant="outline"
            className="gap-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          >
            <Download className="h-4 w-4" />
            Export data
          </Button>
        </div>

        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-red-500">
              Deactivate my account
            </p>
            <p className="text-xs text-slate-500">
              Your access will be suspended. A super admin can reactivate it.
            </p>
          </div>
          <Button className="gap-2 bg-red-500 text-white hover:bg-red-600">
            <UserX className="h-4 w-4" />
            Deactivate
          </Button>
        </div>
      </div>
    </section>
  );
}

export default DangerZone;

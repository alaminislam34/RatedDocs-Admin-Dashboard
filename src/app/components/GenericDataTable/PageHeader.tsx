"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Upload, Download } from "lucide-react";

export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Upload className="size-4" /> Import CSV
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Download className="size-4" /> Export
        </Button>
      </div>
    </div>
  );
}

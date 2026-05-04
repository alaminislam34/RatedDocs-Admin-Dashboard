"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Upload, Download } from "lucide-react";

export default function PageHeader({
  title,
  description,
  actionButtons,
}: {
  title: string;
  description?: string;
  actionButtons?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-[#101828]">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>

      <div>{actionButtons}</div>
    </div>
  );
}

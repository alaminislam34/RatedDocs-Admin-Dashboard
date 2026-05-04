"use client";

import { Upload } from "lucide-react";
import CEFileItem from "./CEFileItem";

type CEFile = {
  filename: string;
  size: string;
  date: string;
  status?: "Reviewed" | "Pending";
};

type CECertificatesSectionProps = {
  files: CEFile[];
};

export function CECertificatesSection({ files }: CECertificatesSectionProps) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#101828]">
          CE certificates (per procedure)
        </h3>
        <button className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
          <Upload className="h-4 w-4" />
          <span>Upload</span>
        </button>
      </div>

      {/* Files Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {files.map((file, idx) => (
          <CEFileItem
            key={idx}
            filename={file.filename}
            size={file.size}
            date={file.date}
            status={file.status}
          />
        ))}
      </div>
    </div>
  );
}

export default CECertificatesSection;

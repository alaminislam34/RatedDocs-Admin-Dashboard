"use client";

import MaterialsInfo from "./MaterialsInfo";
import MaterialsTable from "./MaterialsTable";
import CECertificatesSection from "./CECertificatesSection";

export default function Material() {
  const materials = [
    {
      category: "Implant system",
      brand: "Straumann BLX",
      hasInvoice: true,
      status: "Verified" as const,
    },
    {
      category: "Crown material",
      brand: "Zirconia (Katana)",
      hasInvoice: true,
      status: "Verified" as const,
    },
    {
      category: "Veneer material",
      brand: "Emax (Ivoclar)",
      hasInvoice: true,
      status: "Verified" as const,
    },
    {
      category: "Bone graft material",
      brand: "Bio-Oss",
      hasInvoice: true,
      status: "Verified" as const,
    },
    {
      category: "Anesthetic",
      brand: "Articaine 4% (Septodont)",
      hasInvoice: true,
      status: "Verified" as const,
    },
  ];

  const ceCertificates = [
    {
      filename: "Implant CE cert.pdf",
      size: "760 KB",
      date: "Apr 13, 2025",
      status: "Reviewed" as const,
    },
    {
      filename: "Veneer CE cert.pdf",
      size: "480 KB",
      date: "Apr 13, 2025",
      status: "Reviewed" as const,
    },
    {
      filename: "Crown CE cert.pdf",
      size: "390 KB",
      date: "Apr 13, 2025",
      status: "Reviewed" as const,
    },
    {
      filename: "Invisalign Diamond+ cert.pdf",
      size: "1.1 MB",
      date: "Apr 13, 2025",
      status: "Reviewed" as const,
    },
    {
      filename: "Full-arch CE cert.pdf",
      size: "620 KB",
      date: "Pending review",
      status: "Pending" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <MaterialsInfo />

      {/* Materials Table */}
      <MaterialsTable materials={materials} />

      {/* CE Certificates Section */}
      <CECertificatesSection files={ceCertificates} />
    </div>
  );
}

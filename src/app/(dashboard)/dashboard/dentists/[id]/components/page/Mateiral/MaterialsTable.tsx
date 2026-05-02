"use client";

import MaterialRow from "./MaterialRow";

type Material = {
  category: string;
  brand: string;
  hasInvoice?: boolean;
  status?: "Verified" | "Pending";
};

type MaterialsTableProps = {
  materials: Material[];
};

export function MaterialsTable({ materials }: MaterialsTableProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
      {/* Table Header */}
      <div className="bg-slate-900 px-6 py-4">
        <div className="grid grid-cols-4 gap-0">
          <p className="text-sm font-bold text-white">Category</p>
          <p className="text-sm font-bold text-white">Brand / System</p>
          <p className="text-sm font-bold text-white">Supplier invoice</p>
          <p className="text-sm font-bold text-white text-right">Status</p>
        </div>
      </div>

      {/* Table Body */}
      <table className="w-full">
        <tbody>
          {materials.map((material, idx) => (
            <MaterialRow
              key={idx}
              category={material.category}
              brand={material.brand}
              hasInvoice={material.hasInvoice}
              status={material.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaterialsTable;

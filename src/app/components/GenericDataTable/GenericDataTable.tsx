"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox"; // Assuming shadcn checkbox
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type TableAction<T> = {
  label: string;
  icon?: React.ReactNode;
  onClick: (row: T) => void;
  variant?: "default" | "danger" | "destructive";
  separatorBefore?: boolean;
};

interface Column<T> {
  key: string;
  header: string;
  className?: string;
  render?: (row: T, index: number) => React.ReactNode;
}

interface GenericDataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  actions?: TableAction<T>[];
  isLoading?: boolean;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
}

export function GenericDataTable<T extends { id: string | number }>({
  data,
  columns,
  actions = [],
  isLoading = false,
  selectable = false,
  onSelectionChange,
}: GenericDataTableProps<T>) {
  // State for row selection
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(
    new Set(),
  );

  // Logic: Toggle Single Row
  const toggleRow = (id: string | number) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
    onSelectionChange?.(Array.from(newSelected));
  };

  // Logic: Toggle All Rows
  const isAllSelected = data.length > 0 && selectedIds.size === data.length;
  const toggleAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    } else {
      const allIds = data.map((item) => item.id);
      setSelectedIds(new Set(allIds));
      onSelectionChange?.(allIds);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <Table>
      <TableHeader className="bg-slate-50/50">
        <TableRow>
          {/* Selection Header Column */}
          {selectable && (
            <TableHead className="w-12 px-4">
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={toggleAll}
                aria-label="Select all"
              />
            </TableHead>
          )}

          {columns.map((col) => (
            <TableHead
              key={col.key}
              className={cn("text-[#667085] bg-[#F9FAFB] py-2", col.className)}
            >
              {col.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={
                columns.length +
                (selectable ? 1 : 0) +
                (actions.length > 0 ? 1 : 0)
              }
              className="h-24 text-center text-slate-500"
            >
              No results found.
            </TableCell>
          </TableRow>
        ) : (
          data.map((row, rowIndex) => (
            <TableRow
              key={row.id || rowIndex}
              className={cn(
                "group transition-colors",
                selectedIds.has(row.id)
                  ? "bg-slate-50"
                  : "hover:bg-slate-50/50",
              )}
            >
              {/* Selection Cell */}
              {selectable && (
                <TableCell className="px-4">
                  <Checkbox
                    checked={selectedIds.has(row.id)}
                    onCheckedChange={() => toggleRow(row.id)}
                    aria-label={`Select row ${row.id}`}
                  />
                </TableCell>
              )}

              {columns.map((col) => (
                <TableCell key={col.key} className={col.className}>
                  {col.render
                    ? col.render(row, rowIndex)
                    : (row[col.key as keyof T] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

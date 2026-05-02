"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { DataTableProps } from "@/types/table/data-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Eye,
  Edit2,
  Trash2,
  ShieldCheck,
  Pause,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function GenericDataTable<T extends { id: string | number }>({
  data,
  columns,
  onRowClick,
  isLoading,
}: DataTableProps<T>) {
  const router = useRouter();
  const handleAction = (action: string, row: T) => {
    // Prevent row navigation by handling actions here.
    // Replace with real handlers as needed.
    // eslint-disable-next-line no-alert
    alert(`${action} - ${JSON.stringify(row)}`);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50/50">
          <TableRow className="hover:bg-transparent border-b border-slate-200">
            <TableHead className="w-12.5 px-6">
              <Checkbox className="border-slate-300 data-[state=checked]:bg-[#0a192f] data-[state=checked]:border-[#0a192f]" />
            </TableHead>
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-wider text-slate-400 py-4",
                  column.headerClassName,
                )}
              >
                {column.header}
              </TableHead>
            ))}
            <TableHead className="w-12.5" /> {/* For Actions (...) */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell
                colSpan={columns.length + 2}
                className="h-24 text-center"
              >
                Loading...
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length + 2}
                className="h-24 text-center text-slate-500"
              >
                No results found.
              </TableCell>
            </TableRow>
          ) : (
            data.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => onRowClick?.(row)}
                className={cn(
                  "group border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors cursor-default",
                  onRowClick && "cursor-pointer",
                )}
              >
                <TableCell className="px-6">
                  <Checkbox className="border-slate-300 data-[state=checked]:bg-[#0a192f] data-[state=checked]:border-[#0a192f]" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={`${row.id}-${column.key}`}
                    className={cn(
                      "py-4 text-sm font-medium text-slate-600",
                      column.className,
                    )}
                  >
                    {column.render
                      ? column.render(row)
                      : (row as any)[column.key]}
                  </TableCell>
                ))}
                <TableCell className="text-right pr-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors"
                        aria-label="Open actions"
                      >
                        <MoreHorizontal />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="border space-y-3 max-w-sm w-full p-4"
                    >
                      <DropdownMenuItem
                        onClick={() =>
                          router.push(`/dashboard/dentists/${row.id}`)
                        }
                      >
                        <Eye className="mr-2" /> View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleAction("Edit", row)}
                      >
                        <Edit2 className="mr-2" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleAction("Edit", row)}
                      >
                        <ShieldCheck className="mr-2" /> Approve Verificaiton
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleAction("Edit", row)}
                      >
                        <Pause className="mr-2" /> Suspend
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-red-500"
                        onClick={() => handleAction("Delete", row)}
                      >
                        <Trash2 className="mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

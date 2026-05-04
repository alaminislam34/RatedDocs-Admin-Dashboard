// src/types/table.ts
import { ReactNode } from "react";

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
  headerClassName?: string;
}

export interface TableAction<T> {
  label: string;
  icon?: ReactNode;
  onClick: (row: T) => void;
  variant?: "default" | "destructive" | "danger";
  separatorBefore?: boolean;
}

export interface GenericDataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  onRowClick?: (row: T) => void;
  actions?: TableAction<T>[]; // Optional actions
  selectable?: boolean; // Optional selection
  onSelectRow?: (row: T, checked: boolean) => void;
}

export type ColumnConfig<T> = {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
};

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  onRowClick?: (row: T) => void;
  isLoading?: boolean;
}

export type TableColumn<T> = { key: keyof T; label: string; render?: (row: T) => React.ReactNode };
export type TableProps<T extends Record<string, unknown>> = { columns: TableColumn<T>[]; rows: T[]; emptyMessage?: string };

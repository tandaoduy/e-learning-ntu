export type FileListItem = { id: string; name: string; size?: string; type?: string };
export type FileListProps = { files: FileListItem[]; onRemove?: (id: string) => void };

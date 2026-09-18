export type RadioOption = { label: string; value: string; disabled?: boolean };
export type RadioProps = { name: string; options: RadioOption[]; value?: string; onChange?: (value: string) => void; label?: string };

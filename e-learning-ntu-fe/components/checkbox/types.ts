export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string; description?: string; error?: string };

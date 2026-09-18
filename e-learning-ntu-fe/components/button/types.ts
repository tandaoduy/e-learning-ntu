export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; loading?: boolean };

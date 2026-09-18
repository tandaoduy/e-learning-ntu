import type { CardProps } from './types';
export function Card({ title, children, className = '' }: CardProps) { return <section className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>{title && <h3 className="mb-3 font-semibold">{title}</h3>}{children}</section>; }

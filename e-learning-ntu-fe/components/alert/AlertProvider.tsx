'use client';
import { createContext, useCallback, useState } from 'react';
import { Alert } from './Alert'; import type { AlertItem, AlertVariant } from './types';
type Value = { notify: (input: Omit<AlertItem, 'id' | 'variant'> & { variant?: AlertVariant }) => void };
export const AlertContext = createContext<Value | null>(null);
export function AlertProvider({ children }: { children: React.ReactNode }) { const [alerts, setAlerts] = useState<AlertItem[]>([]); const remove = (id: string) => setAlerts((x) => x.filter((a) => a.id !== id)); const notify = useCallback((input: Omit<AlertItem, 'id' | 'variant'> & { variant?: AlertVariant }) => { const item = { ...input, id: crypto.randomUUID(), variant: input.variant ?? 'info' } as AlertItem; setAlerts((x) => [...x, item]); window.setTimeout(() => remove(item.id), 5000); }, []); return <AlertContext.Provider value={{ notify }}>{children}<div className="fixed right-4 top-4 z-50 grid w-[min(24rem,calc(100vw-2rem))] gap-3">{alerts.map((item) => <Alert key={item.id} item={item} onDismiss={() => remove(item.id)} />)}</div></AlertContext.Provider>; }

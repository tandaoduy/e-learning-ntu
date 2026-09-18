export type AlertVariant = 'info' | 'success' | 'error' | 'warning';
export type AlertItem = { id: string; title: string; message?: string; variant: AlertVariant };

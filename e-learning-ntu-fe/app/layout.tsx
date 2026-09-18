import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = { title: 'NTU E-learning', description: 'Nền tảng học trực tuyến' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}

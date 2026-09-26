import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kodex Tech Services',
  description: 'Premium technology solutions for web, mobile, multimedia, and digital growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

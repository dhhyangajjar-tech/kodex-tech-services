import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kodex Tech Services | AI-Powered Solutions',
  description: 'Cutting-edge tech solutions powered by advanced AI algorithms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

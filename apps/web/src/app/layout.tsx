import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata:  Metadata = {
  title:  'Marketing Suite - Complete SEO & Digital Marketing Platform',
  description: 'All-in-one SEO, AI Visibility, Content Marketing, and Digital Marketing toolkit',
};

export default function RootLayout({
  children,
}:  {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter. className}>{children}</body>
    </html>
  );
}

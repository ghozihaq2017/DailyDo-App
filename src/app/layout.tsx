import type { Metadata } from 'next';
import { Poppins as FontSans } from 'next/font/google';
import './globals.css';
import { Toaster } from "react-hot-toast";

import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'DailyDo App',
  description: 'Created by Ghozi Izzulhaq'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Toaster/>
        {children}
      </body>
    </html>
  );
}

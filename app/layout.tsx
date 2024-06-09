import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { cn } from '@/lib/utils';
import MobileNav from '@/components/mobile-nav';
import MobileNavBottom from '@/components/mobile-nav-bottom';

export const metadata: Metadata = {
  title: 'Yapping',
  description:
    'Yapping: Where conversations thrive. Join us to share stories, connect, and discover new perspectives. Start yapping today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          GeistSans.className
        )}
      >
        <MobileNav />
        {children}
        <MobileNavBottom />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Fira_Sans, Fira_Mono } from 'next/font/google';
import './globals.css';

const firaSans = Fira_Sans({
  weight: ['100', '300', '400', '700'],
  variable: '--font-fira-sans',
  display: 'swap',
});

const firaMono = Fira_Mono({
  weight: ['400', '700'],
  variable: '--font-fira-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Martin Bruun | Portfolio',
  description: 'My portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} ${firaMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

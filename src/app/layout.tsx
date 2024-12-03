import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import Header from '@/components/header';
import { Background } from '@/components/background';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Martin Bruun',
  description: 'A beautiful and interactive portfolio built with Next.js and Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        defer
        data-website-id="2e00be0e-4962-4f16-be60-73438a291cf8"
        src="https://umami.martinbruun.dk/script.js"
      />
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Background />
          <Header />
          <main className="max-w-[576px] mx-auto pt-10 px-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

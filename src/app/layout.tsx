import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import Header from '@/components/header';
import { Background } from '@/components/background';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/footer';

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

import './globals.css';
import './carousel.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smartify - Transform Your Study Materials',
  description: 'Generate personalized Multiple Choice Questions from your study materials with Smartify.',
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%234a90e2' /%3E%3Cpath d='M30 50 L45 65 L70 35' stroke='white' stroke-width='8' fill='none' /%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="32" height="32" style={{display: 'none'}}>
          <symbol id="favicon" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#4a90e2" />
            <path d="M30 50 L45 65 L70 35" stroke="white" strokeWidth="8" fill="none" />
          </symbol>
        </svg>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shrey Shah - Resume',
  description: 'AI Software Engineer with over 8 years of experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background-main text-text-primary`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}

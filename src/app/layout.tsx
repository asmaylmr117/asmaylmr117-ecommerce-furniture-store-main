import type { Metadata } from 'next';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { AuthProvider } from '@/app/AuthContext';
import '../../public/globals.css';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const mont = Montserrat({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: 'Furnitura.ru - Home Furniture',
  description: 'Explore our collection of cozy and warm home furniture at Furnitura.ru',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={mont.variable}>
        <AuthProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 1500,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 1500,
              },
            }}
          />
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
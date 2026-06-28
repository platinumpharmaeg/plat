import type { Metadata } from 'next';
import { siteName, siteUrl } from '@/lib/metadata';
import LoadingGate from '@/components/LoadingGate';
import SiteLayout from '@/components/layout/SiteLayout';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Advancing Healthcare Solutions`,
    template: `%s | ${siteName}`,
  },
  description:
    'Platinum Pharma is a leading pharmaceutical company dedicated to providing high-quality healthcare solutions, innovative products, and trusted partnerships.',
  icons: {
    icon: 'https://twfik.com/pplogo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingGate>
          <SiteLayout>{children}</SiteLayout>
        </LoadingGate>
      </body>
    </html>
  );
}

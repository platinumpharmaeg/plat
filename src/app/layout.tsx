import type { Metadata } from 'next';
import { siteDescription, siteName, siteUrl } from '@/lib/metadata';
import { siteImages } from '@/lib/images';
import { getSiteStructuredData } from '@/lib/structured-data';
import LoadingGate from '@/components/LoadingGate';
import SiteLayout from '@/components/layout/SiteLayout';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} - Advancing Healthcare Solutions`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    siteName,
    title: `${siteName} - Advancing Healthcare Solutions`,
    description: siteDescription,
    url: siteUrl,
    locale: 'en_EG',
  },
  icons: {
    icon: [
      { url: siteImages.favicon, sizes: '48x48' },
      { url: siteImages.faviconPng, type: 'image/png', sizes: '96x96' },
    ],
    apple: siteImages.faviconPng,
    shortcut: siteImages.favicon,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = getSiteStructuredData();

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LoadingGate>
          <SiteLayout>{children}</SiteLayout>
        </LoadingGate>
      </body>
    </html>
  );
}

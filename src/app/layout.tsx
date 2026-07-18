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
      { url: siteImages.faviconPng48, type: 'image/png', sizes: '48x48' },
      { url: siteImages.faviconPng, type: 'image/png', sizes: '96x96' },
      { url: siteImages.faviconPng192, type: 'image/png', sizes: '192x192' },
      { url: siteImages.favicon, sizes: 'any' },
    ],
    apple: siteImages.appleTouchIcon,
    shortcut: siteImages.faviconPng48,
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

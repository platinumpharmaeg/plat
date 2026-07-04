import type { Metadata } from 'next';
import { siteName, siteUrl } from '@/lib/metadata';
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
  description:
    'Platinum Pharma is a leading pharmaceutical company dedicated to providing high-quality healthcare solutions, innovative products, and trusted partnerships.',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    siteName,
    title: `${siteName} - Advancing Healthcare Solutions`,
    description:
      'Platinum Pharma is a leading pharmaceutical company dedicated to providing high-quality healthcare solutions, innovative products, and trusted partnerships.',
    url: siteUrl,
    locale: 'en_US',
  },
  icons: {
    icon: [{ url: siteImages.favicon, type: 'image/png' }],
    apple: siteImages.favicon,
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

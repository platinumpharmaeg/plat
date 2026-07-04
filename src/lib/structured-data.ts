import { siteName, siteUrl } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export function getSiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: siteName,
        alternateName: 'Platinum Pharma Egypt',
        url: siteUrl,
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}${siteImages.favicon}`,
      },
    ],
  };
}

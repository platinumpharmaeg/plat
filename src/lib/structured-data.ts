import {
  organizationAddress,
  organizationEmail,
  organizationGeo,
  organizationPhone,
  siteDescription,
  siteName,
  siteUrl,
} from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export function getSiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: siteName,
        alternateName: ['Platinum Pharma Egypt', 'Platinum Pharma - Egypt'],
        url: siteUrl,
        description: siteDescription,
        inLanguage: 'en',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': ['Organization', 'MedicalOrganization'],
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        alternateName: ['Platinum Pharma Egypt', 'Platinum Pharma - Egypt'],
        url: siteUrl,
        logo: `${siteUrl}${siteImages.favicon}`,
        description: siteDescription,
        address: {
          '@type': 'PostalAddress',
          streetAddress: organizationAddress.streetAddress,
          addressLocality: organizationAddress.addressLocality,
          addressRegion: organizationAddress.addressRegion,
          addressCountry: organizationAddress.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: organizationGeo.latitude,
          longitude: organizationGeo.longitude,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Egypt',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: organizationPhone,
          email: organizationEmail,
          contactType: 'customer service',
          areaServed: 'EG',
          availableLanguage: ['English', 'Arabic'],
        },
      },
    ],
  };
}

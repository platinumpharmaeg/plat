import type { Metadata } from 'next';

export const siteName = 'Platinum Pharma';
export const siteUrl = 'https://platinumpharma-eg.com';

export const siteDescription =
  'Platinum Pharma is a leading pharmaceutical company in Egypt, headquartered in Cairo. Trusted local commercialization partner delivering high-quality healthcare products and innovative solutions across Egypt.';

export const siteKeywords =
  'Platinum Pharma, Platinum Pharma Egypt, pharmaceutical company Egypt, pharma distributor Cairo, healthcare solutions Egypt, medical products Egypt';

export const organizationAddress = {
  streetAddress: '37 Abo El Fawares St.',
  addressLocality: 'Nasr City',
  addressRegion: 'Cairo',
  addressCountry: 'EG',
} as const;

export const organizationGeo = {
  latitude: 30.05948845,
  longitude: 31.25846435,
} as const;

export const organizationPhone = '+201097737663';
export const organizationEmail = 'info@platinumpharma-eg.com';

type CreateMetadataOptions = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  absolute?: boolean;
};

export function createMetadata({
  title,
  description,
  keywords,
  path = '',
  absolute = false,
}: CreateMetadataOptions): Metadata {
  const isFullTitle = title.includes(siteName);
  const pageTitle = isFullTitle ? title : `${title} | ${siteName}`;

  return {
    title: absolute ? { absolute: pageTitle } : pageTitle,
    description,
    keywords,
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title: pageTitle,
      description,
      siteName,
      url: `${siteUrl}${path}`,
      type: 'website',
      locale: 'en_EG',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
    },
    other: {
      'geo.region': 'EG-C',
      'geo.placename': 'Cairo, Egypt',
      'geo.position': `${organizationGeo.latitude};${organizationGeo.longitude}`,
      ICBM: `${organizationGeo.latitude}, ${organizationGeo.longitude}`,
    },
  };
}

import type { Metadata } from 'next';

export const siteName = 'Platinum Pharma';
export const siteUrl = 'https://platinumpharma-eg.com';

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
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
    },
  };
}

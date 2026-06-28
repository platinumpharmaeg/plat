import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/metadata';
import { getProductIds } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/partners',
    '/products',
    '/why-us',
    '/careers',
    '/contact',
    '/candidate-privacy-notice',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const productRoutes = getProductIds().map((id) => `/products/${id}`);

  return [...staticRoutes, ...productRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}

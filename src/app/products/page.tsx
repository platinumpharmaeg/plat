import { createMetadata } from '@/lib/metadata';
import Products from '@/components/pages/Products';

export const metadata = createMetadata({
  title: 'Our Products',
  description:
    "Explore Platinum Pharma Egypt's portfolio of high-quality pharmaceutical products, including Sterogyl 15, Dedrogyl, Monovisc, Orthovisc, and Cingal, available across Egypt.",
  keywords:
    'Platinum Pharma products Egypt, Sterogyl 15 Egypt, Dedrogyl, Monovisc, Orthovisc, Cingal, pharmaceuticals Cairo',
  path: '/products',
});

export default function Page() {
  return <Products />;
}

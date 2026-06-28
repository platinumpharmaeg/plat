import { createMetadata } from '@/lib/metadata';
import Products from '@/components/pages/Products';

export const metadata = createMetadata({
  title: 'Our Products',
  description:
    "Explore Platinum Pharma's extensive portfolio of high-quality pharmaceutical products, including Sterogyl 15, Dedrogyl, Monovisc, Orthovisc, and Cingal.",
  keywords:
    'Platinum Pharma products, Sterogyl 15, Dedrogyl, Monovisc, Orthovisc, Cingal, healthcare products, orthopedics',
  path: '/products',
});

export default function Page() {
  return <Products />;
}

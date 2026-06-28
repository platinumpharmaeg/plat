import { createMetadata } from '@/lib/metadata';
import WhyUs from '@/components/pages/WhyUs';

export const metadata = createMetadata({
  title: 'Why Choose Us',
  description:
    'Discover the Platinum Advantage. Learn why Platinum Pharma is the preferred partner for healthcare solutions, offering quality, reliability, and innovation.',
  keywords: 'Why Platinum Pharma, pharmaceutical advantage, healthcare partner, quality pharmaceuticals',
  path: '/why-us',
});

export default function Page() {
  return <WhyUs />;
}

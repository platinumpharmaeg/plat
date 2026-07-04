import { createMetadata } from '@/lib/metadata';
import WhyUs from '@/components/pages/WhyUs';

export const metadata = createMetadata({
  title: 'Why Choose Us',
  description:
    'Discover why Platinum Pharma is a preferred pharmaceutical partner in Egypt, offering quality products, reliable supply, and trusted healthcare solutions nationwide.',
  keywords:
    'Why Platinum Pharma Egypt, pharmaceutical advantage Cairo, healthcare partner Egypt, quality pharmaceuticals Egypt',
  path: '/why-us',
});

export default function Page() {
  return <WhyUs />;
}

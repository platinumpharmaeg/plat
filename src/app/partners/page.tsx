import { createMetadata } from '@/lib/metadata';
import Partners from '@/components/pages/Partners';

export const metadata = createMetadata({
  title: 'Our Partners',
  description:
    "Discover Platinum Pharma's global network of trusted partners, including Anika and Desma, working together to deliver exceptional healthcare products.",
  keywords:
    'Platinum Pharma partners, Anika, Desma, pharmaceutical partnerships, healthcare network',
  path: '/partners',
});

export default function Page() {
  return <Partners />;
}

import { createMetadata } from '@/lib/metadata';
import Partners from '@/components/pages/Partners';

export const metadata = createMetadata({
  title: 'Our Partners',
  description:
    "Discover Platinum Pharma Egypt's network of trusted international partners, including Anika and Desma, delivering exceptional healthcare products to the Egyptian market.",
  keywords:
    'Platinum Pharma partners Egypt, Anika Egypt, Desma Egypt, pharmaceutical partnerships Cairo',
  path: '/partners',
});

export default function Page() {
  return <Partners />;
}

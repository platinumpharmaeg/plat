import { createMetadata } from '@/lib/metadata';
import About from '@/components/pages/About';

export const metadata = createMetadata({
  title: 'About Us',
  description:
    "Learn about Platinum Pharma's mission and commitment to improving healthcare in Egypt through innovative pharmaceutical solutions and trusted international partnerships.",
  keywords:
    'About Platinum Pharma Egypt, pharmaceutical company Cairo, healthcare mission Egypt, medical innovation Egypt',
  path: '/about',
});

export default function Page() {
  return <About />;
}

import { createMetadata } from '@/lib/metadata';
import About from '@/components/pages/About';

export const metadata = createMetadata({
  title: 'About Us',
  description:
    "Learn about Platinum Pharma's mission, vision, and commitment to improving global healthcare through innovative pharmaceutical solutions.",
  keywords:
    'About Platinum Pharma, pharmaceutical company mission, healthcare vision, medical innovation',
  path: '/about',
});

export default function Page() {
  return <About />;
}

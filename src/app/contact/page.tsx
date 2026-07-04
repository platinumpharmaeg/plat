import { createMetadata } from '@/lib/metadata';
import Contact from '@/components/pages/Contact';

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    'Contact Platinum Pharma in Cairo, Egypt. Reach our team for partnership inquiries, product information, and general questions about healthcare solutions in Egypt.',
  keywords:
    'Contact Platinum Pharma Egypt, pharmaceutical contact Cairo, healthcare partnership Egypt, Platinum Pharma phone Egypt',
  path: '/contact',
});

export default function Page() {
  return <Contact />;
}

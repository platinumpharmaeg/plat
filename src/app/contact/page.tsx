import { createMetadata } from '@/lib/metadata';
import Contact from '@/components/pages/Contact';

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Platinum Pharma. We are ready to assist you with partnership inquiries, product information, or general questions.',
  keywords:
    'Contact Platinum Pharma, pharmaceutical contact, healthcare partnership, Platinum Pharma email, Platinum Pharma phone',
  path: '/contact',
});

export default function Page() {
  return <Contact />;
}

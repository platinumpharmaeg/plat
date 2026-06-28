import { createMetadata } from '@/lib/metadata';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    "Read Platinum Pharma's Privacy Policy to understand how we collect, use, and protect your personal data.",
  path: '/privacy-policy',
});

export default function Page() {
  return <PrivacyPolicy />;
}

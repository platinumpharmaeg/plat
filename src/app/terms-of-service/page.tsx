import { createMetadata } from '@/lib/metadata';
import TermsOfService from '@/components/pages/TermsOfService';

export const metadata = createMetadata({
  title: 'Terms of Service',
  description:
    "Read Platinum Pharma's Terms of Service to understand the rules and guidelines for using our website and services.",
  path: '/terms-of-service',
});

export default function Page() {
  return <TermsOfService />;
}

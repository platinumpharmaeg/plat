import { createMetadata } from '@/lib/metadata';
import CandidatePrivacyNotice from '@/components/pages/CandidatePrivacyNotice';

export const metadata = createMetadata({
  title: 'Candidate Privacy Notice',
  description:
    "Read Platinum Pharma's Candidate Privacy Notice to understand how we collect, use, and protect your personal data during the recruitment process.",
  path: '/candidate-privacy-notice',
});

export default function Page() {
  return <CandidatePrivacyNotice />;
}

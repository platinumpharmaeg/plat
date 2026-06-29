import { Suspense } from 'react';
import { createMetadata } from '@/lib/metadata';
import ThankYou from '@/components/pages/ThankYou';

export const metadata = createMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting Platinum Pharma.',
  path: '/thank-you',
});

export default function Page() {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
}

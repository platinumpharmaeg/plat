import { createMetadata } from '@/lib/metadata';
import Careers from '@/components/pages/Careers';

export const metadata = createMetadata({
  title: 'Careers',
  description:
    'Join Platinum Pharma. Explore career opportunities and submit your CV to become part of a healthcare company built on integrity and scientific excellence.',
  keywords: 'Platinum Pharma careers, pharmaceutical jobs Egypt, medical sales jobs, healthcare careers',
  path: '/careers',
});

export default function Page() {
  return <Careers />;
}

import { createMetadata } from '@/lib/metadata';
import Careers from '@/components/pages/Careers';

export const metadata = createMetadata({
  title: 'Careers',
  description:
    'Join Platinum Pharma in Egypt. Explore pharmaceutical and healthcare career opportunities in Cairo and submit your CV to our HR team.',
  keywords:
    'Platinum Pharma careers Egypt, pharmaceutical jobs Cairo, medical sales jobs Egypt, healthcare careers Egypt',
  path: '/careers',
});

export default function Page() {
  return <Careers />;
}

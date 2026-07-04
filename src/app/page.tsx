import { createMetadata, siteDescription, siteKeywords } from '@/lib/metadata';
import Home from '@/components/pages/Home';

export const metadata = createMetadata({
  title: 'Platinum Pharma - Advancing Healthcare Solutions',
  description: siteDescription,
  keywords: siteKeywords,
  path: '/',
  absolute: true,
});

export default function Page() {
  return <Home />;
}

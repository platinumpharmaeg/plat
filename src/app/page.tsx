import { createMetadata } from '@/lib/metadata';
import Home from '@/components/pages/Home';

export const metadata = createMetadata({
  title: 'Platinum Pharma - Advancing Healthcare Solutions',
  description:
    'Platinum Pharma is a leading pharmaceutical company dedicated to providing high-quality healthcare solutions, innovative products, and trusted partnerships.',
  keywords:
    'Platinum Pharma, pharmaceuticals, healthcare solutions, medical products, pharmaceutical distributor',
  path: '/',
  absolute: true,
});

export default function Page() {
  return <Home />;
}

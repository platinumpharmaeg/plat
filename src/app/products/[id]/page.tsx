import { createMetadata } from '@/lib/metadata';
import { getProduct, getProductIds } from '@/lib/products';
import ProductDetail from '@/components/pages/ProductDetail';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getProductIds().map((id) => ({ id: String(id) }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProduct(Number(id));

  if (!product) {
    return createMetadata({
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
      path: `/products/${id}`,
    });
  }

  return createMetadata({
    title: `${product.name} - Platinum Pharma`,
    description: `Learn more about ${product.name}, a high-quality ${product.area} product from ${product.partner}.`,
    path: `/products/${id}`,
  });
}

export default function Page() {
  return <ProductDetail />;
}

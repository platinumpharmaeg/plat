export type Product = {
  id: number;
  name: string;
  partner: string;
  area: string;
  form: string;
  image: string;
  description: string;
  medicalInfo: string;
  brochureUrl?: string;
};

export type ProductListItem = Pick<
  Product,
  'id' | 'name' | 'partner' | 'area' | 'form' | 'image'
>;

export const products: Product[] = [
  {
    id: 1,
    name: 'Sterogyl 15',
    partner: 'Desma',
    area: 'Healthcare',
    form: 'Ampoule',
    image: 'https://twfik.com/desma1.png',
    description: 'Sterogyl 15 is used for the treatment and prevention of vitamin D deficiency.',
    medicalInfo:
      'Sterogyl 15 provides a high dose of Vitamin D2 (ergocalciferol). It is primarily indicated for patients with proven Vitamin D deficiency or insufficiency, contributing to the normal absorption and utilization of calcium and phosphorus. It supports normal bone health, muscle function, and immune system function. Please consult the full prescribing information for dosage instructions, contraindications, and potential side effects.',
  },
  {
    id: 2,
    name: 'Dedrogyl',
    partner: 'Desma',
    area: 'Healthcare',
    form: 'Drops',
    image: 'https://twfik.com/desma2.png',
    description: 'Dedrogyl is a specialized drop formula for effective healthcare management.',
    medicalInfo:
      'Dedrogyl (calcifediol) drops are designed for the precise management of metabolic bone diseases, including osteoporosis and osteomalacia, as well as managing specific forms of vitamin D deficiency. Its active form allows for rapid absorption and physiological action. Always adhere to recommended pediatric and adult dosing guidelines.',
  },
  {
    id: 3,
    name: 'Monovisc',
    partner: 'Anika',
    area: 'Orthopedics',
    form: 'Injection',
    image: 'https://twfik.com/anika1.png',
    description: 'Monovisc provides relief from osteoporosis pain with a single injection.',
    medicalInfo:
      'Monovisc is a highly cross-linked high molecular weight hyaluronic acid (HA) viscosupplement. It is designed for treating the symptoms of osteoarthritis (OA) of the knee, offering up to 6 months of relief with a single intra-articular injection. It acts as a lubricant and shock absorber in the synovial joint.',
    brochureUrl: '/brochure/monovisc.pdf',
  },
  {
    id: 4,
    name: 'Cingal',
    partner: 'Anika',
    area: 'Orthopedics',
    form: 'Injection',
    image: 'https://twfik.com/anika2.png',
    description: 'Cingal combines the benefits of long-lasting pain relief with fast-acting steroids.',
    medicalInfo:
      'Cingal is a unique combination viscosupplement that pairs cross-linked hyaluronic acid (HA) with a fast-acting steroid (Triamcinolone Hexacetonide). It is indicated for the treatment of pain in osteoarthritis (OA) of the knee, offering the immediate-onset pain relief of a corticosteroid with the prolonged duration of relief of HA.',
    brochureUrl: '/brochure/cingal1.pdf',
  },
  {
    id: 5,
    name: 'Orthovisc',
    partner: 'Anika',
    area: 'Orthopedics',
    form: 'Injection',
    image: 'https://wheat-duck-884743.hostingersite.com/Orthovisc.jpg',
    description: 'Orthovisc is a multi-injection treatment for joint pain and mobility improvement.',
    medicalInfo:
      'Orthovisc is a viscosupplement composed of ultra-pure, high molecular weight hyaluronic acid (HA) derived from a non-avian source. Indicated for patients with osteoarthritis of the knee who have failed to respond adequately to conservative non-pharmacologic therapy and simple analgesics. A typical course consists of 3-4 weekly injections.',
    brochureUrl: '/brochure/orthovisc.pdf',
  },
];

export const productList: ProductListItem[] = products.map(
  ({ id, name, partner, area, form, image }) => ({
    id,
    name,
    partner,
    area,
    form,
    image,
  })
);

export function getProduct(id: number) {
  return products.find((product) => product.id === id);
}

export function getProductIds() {
  return products.map((product) => product.id);
}

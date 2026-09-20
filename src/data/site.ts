export const site = {
  name: 'GOLDEN ERA MOTORS',
  // wordmark / logo pieces (used in the nav + footer wordmark)
  brandShort: 'GOLDEN ERA',
  brandTail: 'MOTORS',
  monogram: 'G',
  tagline: 'American classics · Sales & restoration',
  description:
    'Classic American car sales, restoration and service. Hand-picked vintage vehicles with documented history and concours-level workmanship.',
  phone: '+1 (313) 555-0197',
  phoneHref: 'tel:+13135550197',
  email: 'hello@goldeneramotors.com',
  address: '3400 Michigan Avenue, Detroit, MI',
  hours: 'Mon–Sat · 9:00–18:00',
  url: 'https://av03.pages.dev',
  established: '1978',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Inventory', href: '/catalog' },
  { label: 'Restoration', href: '/services' },
  { label: 'Shipping', href: '/shipping' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contacts' },
];

export interface Service {
  slug: string;
  title: string;
  description: string;
  price: string;
}

export const services: Service[] = [
  {
    slug: 'restoration',
    title: 'Full Restoration',
    description:
      'Frame-off restorations to concours standard — documented, photographed and delivered with a full build file.',
    price: 'from $45,000',
  },
  {
    slug: 'engine',
    title: 'Engine & Drivetrain',
    description:
      'Matching-numbers rebuilds, period-correct carburetion and transmission work by marque specialists.',
    price: 'from $8,500',
  },
  {
    slug: 'bodywork',
    title: 'Paint & Bodywork',
    description:
      'Metal finishing, lead work and period-correct lacquer or base-coat finishes matched to original codes.',
    price: 'from $12,000',
  },
  {
    slug: 'chrome',
    title: 'Chrome & Trim',
    description:
      'Show-quality re-plating, stainless polishing and correct fasteners for every nut and bolt.',
    price: 'from $1,800',
  },
  {
    slug: 'interior',
    title: 'Upholstery & Interiors',
    description:
      'Correct hides, period patterns and original-style stitching — down to the door cards and headliner.',
    price: 'from $6,500',
  },
  {
    slug: 'appraisal',
    title: 'Appraisal & Consignment',
    description:
      'Written appraisals for insurance and estate purposes, plus consignment sales to a worldwide buyer list.',
    price: 'on request',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'They restored my 1965 Mustang to a standard I did not think was still possible. Every fastener is correct.',
    name: 'Walter Brennan',
    role: '1965 Ford Mustang owner',
  },
  {
    quote:
      'The build file alone is worth the money — hundreds of photographs and every invoice documented.',
    name: 'Dolores Hale',
    role: '1957 Chevrolet Bel Air owner',
  },
  {
    quote:
      'I bought a Corvette sight unseen from across the country. It arrived exactly as described. Not a surprise anywhere.',
    name: 'Ray Whitfield',
    role: '1969 Chevrolet Corvette buyer',
  },
];

export const stats = [
  { value: '1978', label: 'Established' },
  { value: '1,200+', label: 'Classics sold' },
  { value: '38', label: 'Concours awards' },
  { value: '12 mo', label: 'Restoration warranty' },
] as const;

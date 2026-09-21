export type CarBody =
  | 'Coupe'
  | 'Sedan'
  | 'Convertible'
  | 'Hardtop'
  | 'Wagon'
  | 'Pickup'
  | 'SUV'
  | 'Muscle Car';
export type Silhouette = 'sedan' | 'suv' | 'coupe' | 'classic';

export interface Car {
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  body: CarBody;
  engine: string;
  mileage: number;
  transmission: string;
  drive: string;
  fuel: string;
  color: string;
  silhouette: Silhouette;
  images?: string[];
  vin?: string;
  doors?: number;
  cylinders?: number;
  condition?: string;
  features?: string[];
  featured?: boolean;
  description: string;
}

// Inventory for GOLDEN ERA MOTORS — add vehicles here (see CONFIG.md).
export const cars: Car[] = [
  {
    slug: 'pontiac-gto-1965',
    brand: 'Pontiac',
    model: 'GTO',
    year: 1965,
    price: 47900,
    body: 'Convertible',
    engine: '389 cu in V8 (6.4L)',
    mileage: 78563,
    transmission: '4-Speed Manual',
    drive: 'Rear-Wheel Drive',
    fuel: 'Gasoline',
    color: 'Starlight Black',
    silhouette: 'classic',
    images: ['/cars/pontiac-gto-1965.webp'],
    doors: 2,
    cylinders: 8,
    condition: 'Used',
    featured: true,
    features: [
      '389 cu in V8 with Edelbrock intake manifold',
      'Polished valve covers and chrome air cleaner',
      '4-speed manual transmission',
      'Hurst T-handle shifter with centre console',
      'Bucket seats, black interior refinished in 2017',
      'Wood-grain steering wheel',
      'Power steering',
      'Power brakes',
      'Power-operated white convertible top',
      '14-inch factory steel wheels with beauty rings and hubcaps',
      'BFGoodrich Radial T/A tyres',
      'Correct exterior chrome on straight Starlight Black bodywork',
    ],
    description:
      'The 1965 Pontiac GTO Convertible, an enduring icon among muscle cars, combines potent performance with classic styling. Under the hood, a robust 389ci V8 engine delivers impressive power, channelled through a responsive 4-speed manual transmission. Performance has been enhanced with an Edelbrock intake manifold, further adorned with polished valve covers and an air cleaner. Finished in a lustrous Starlight Black, the bodywork is straight and reflective, complemented by gleaming exterior chrome. The car maintains its authentic stance on 14-inch factory steel wheels, featuring correct beauty rings and hubcaps, fitted with BFGoodrich Radial T/A tyres for excellent handling. The black interior, noted to have been refinished in 2017, remains in very good condition, presenting bucket seats with a centre console, a Hurst T-handle shifter, and a wood-grain steering wheel. The white convertible top is in excellent condition, offering a sophisticated contrast. Additional features include power steering, power brakes, and a power top, enhancing the driving experience of this legendary muscle car. This GTO is a fantastic example, ready to impress with its blend of power and classic appeal.',
  },
];

export const featuredCars = cars.filter((car) => car.featured);

export function getCar(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function formatPrice(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

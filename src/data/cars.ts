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
      'Hurst T-handle shifter with center console',
      'Bucket seats, black interior refinished in 2017',
      'Wood-grain steering wheel',
      'Power steering',
      'Power brakes',
      'Power-operated white convertible top',
      '14-inch factory steel wheels with beauty rings and hubcaps',
      'BFGoodrich Radial T/A tires',
      'Correct exterior chrome on straight Starlight Black bodywork',
    ],
    description:
      'The 1965 Pontiac GTO Convertible, an enduring icon among muscle cars, combines potent performance with classic styling. Under the hood, a robust 389ci V8 engine delivers impressive power, channeled through a responsive 4-speed manual transmission. Performance has been enhanced with an Edelbrock intake manifold, further adorned with polished valve covers and an air cleaner. Finished in a lustrous Starlight Black, the bodywork is straight and reflective, complemented by gleaming exterior chrome. The car maintains its authentic stance on 14-inch factory steel wheels, featuring correct beauty rings and hubcaps, fitted with BFGoodrich Radial T/A tires for excellent handling. The black interior, noted to have been refinished in 2017, remains in very good condition, presenting bucket seats with a center console, a Hurst T-handle shifter, and a wood-grain steering wheel. The white convertible top is in excellent condition, offering a sophisticated contrast. Additional features include power steering, power brakes, and a power top, enhancing the driving experience of this legendary muscle car. This GTO is a fantastic example, ready to impress with its blend of power and classic appeal.',
  },
  {
    slug: 'ford-bronco-1977',
    brand: 'Ford',
    model: 'Bronco',
    year: 1977,
    price: 62900,
    body: 'SUV',
    engine: '347 cu in stroker V8 (5.7L)',
    mileage: 2592,
    transmission: 'Automatic',
    drive: 'Four-Wheel Drive (4WD)',
    fuel: 'Gasoline',
    color: 'Charcoal Metallic',
    silhouette: 'suv',
    images: ['/cars/ford-bronco-1977.webp'],
    doors: 2,
    cylinders: 8,
    condition: 'Used',
    featured: true,
    features: [
      '347 cu in stroker V8 with Holley Viper EFI',
      'Stroker V8 reported at 410 horsepower',
      'Automatic transmission',
      'TBP twin-stick 4x4 shifter',
      'Fully functional four-wheel drive system',
      'New black interior, neat and tidy',
      'Full roll cage with rear seatbelts',
      'Detailed, like-new engine compartment',
      'Meticulous restoration in the final year of the classic body style',
      'Straight bodywork in Charcoal Metallic',
      'Chrome and brightwork in exceptional condition',
    ],
    description:
      'The Ford Bronco holds a legendary status in automotive history, celebrated for its iconic SUV lineage and enduring appeal across generations. Renowned for its distinctive styling, robust drivability, and reliability, a Bronco is a highly sought-after classic that continues to appreciate in value. This impressive 1977 Ford Bronco, representing the final year of its coveted body style, has undergone a meticulous restoration. It is powered by a potent 347 stroker V8 engine featuring Holley Viper EFI, paired with a smooth automatic transmission, reportedly capable of 410 horsepower. The fully functional 4x4 system includes a TBP twin-stick shifter, affirming its rugged capability. The exterior is presented in a stunning Charcoal Metallic finish, beautifully complemented by new black interior. The trim and chrome brightwork are in astonishing condition, enhancing its overall allure. The interior is neat and tidy, complete with rear seatbelts and a full cage. The engine compartment is highly detailed, appearing in like-new condition, a testament to the quality of its restoration. This classic Bronco stands as a premier choice for enthusiasts seeking a proven and vintage SUV.',
  },
  {
    slug: 'chevrolet-camaro-1968',
    brand: 'Chevrolet',
    model: 'Camaro SS',
    year: 1968,
    price: 59900,
    body: 'Coupe',
    engine: '400 cu in V8, ProCharged (6.6L)',
    mileage: 8127,
    transmission: '6-Speed Manual (T56)',
    drive: 'Rear-Wheel Drive',
    fuel: 'Gasoline',
    color: 'Black',
    silhouette: 'coupe',
    images: ['/cars/chevrolet-camaro-1968.webp'],
    doors: 2,
    cylinders: 8,
    condition: 'Used',
    featured: true,
    features: [
      'Professionally built 400 cu in V8 with Dart iron block',
      'Diamond pistons and aluminum cylinder heads',
      'D-1SC ProCharger with intercooler',
      'Holley EFI and a full custom exhaust',
      'Dyno-tested at 539 whp and 504 ft-lb',
      'T56 6-speed manual transmission',
      'Power steering',
      '4-wheel disc brakes',
      'Functional heat and air conditioning',
      'Stereo system',
      'Houndstooth interior',
      'Brilliant black paint with carbon fiber accents',
    ],
    description:
      'This stunning 1968 Chevrolet Camaro SS showcases a brilliant black paint job complemented by a sophisticated houndstooth interior and subtle carbon fiber accents, achieving a show-stopping appearance. Under the hood lies a monstrous, professionally built 400 cubic inch V8 engine, expertly mated to a T56 manual transmission. This powerhouse features a Dart iron block, Diamond pistons, aluminum heads, a D-1SC ProCharger, intercooler, Holley EFI, and a full custom exhaust. The impressive performance package has been dyno-tested, delivering a remarkable 539 whp and 504 ft-lb. Enhancing modern drivability and comfort, standard features include power steering, 4-wheel disc brakes, functional heat, air conditioning, and a stereo system. This first-generation Camaro merges iconic American muscle car styling with significant performance upgrades, creating an amazing vehicle.',
  },
];

export const featuredCars = cars.filter((car) => car.featured);

export function getCar(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function formatPrice(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

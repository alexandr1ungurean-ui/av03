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
  {
    slug: 'gmc-c-1500-1971',
    brand: 'GMC',
    model: 'C-1500',
    year: 1971,
    price: 22900,
    body: 'Pickup',
    engine: '396 cu in V8 (6.5L)',
    mileage: 43682,
    transmission: 'Automatic',
    drive: 'Rear-Wheel Drive',
    fuel: 'Gasoline',
    color: 'Blue & White two-tone',
    silhouette: 'suv',
    images: ['/cars/gmc-c-1500-1971.webp'],
    doors: 2,
    cylinders: 8,
    condition: 'Used',
    featured: true,
    features: [
      'Total restoration — every component cleaned, painted or replaced',
      'Rebuilt 396 cu in V8',
      'Headers and Edelbrock intake',
      'Carburetor and air cleaner',
      'Flowmaster mufflers',
      'Rebuilt automatic transmission',
      'Power steering',
      'Power brakes',
      'New shocks',
      'Air conditioning',
      'Tonneau cover for the long bed',
      'Immaculate two-tone paint and exterior trim',
    ],
    description:
      'This 1971 C-1500 Longbed pickup stands in immaculate condition, presenting extremely well after an intense, total restoration where virtually every component was meticulously addressed, cleaned, painted, or replaced. Both the engine and transmission have been rebuilt, ensuring robust performance. Under the hood, the 396ci V8 engine features performance upgrades including headers, an Edelbrock intake, carburetor, and air cleaner, complemented by power steering and power brakes for a refined driving experience. Further enhancements include new shocks, air conditioning, Flowmaster mufflers, and a practical tonneau cover. The interior maintains its immaculate state, perfectly complementing the exterior\u2019s striking two-tone paint and excellent trim.',
  },
  {
    slug: 'dodge-charger-1968',
    brand: 'Dodge',
    model: 'Charger',
    year: 1968,
    price: 31000,
    body: 'Muscle Car',
    engine: '383 cu in V8 (6.3L)',
    mileage: 4794,
    transmission: 'Automatic',
    drive: 'Rear-Wheel Drive',
    fuel: 'Gasoline',
    color: 'QQ1 Blue Metallic',
    silhouette: 'coupe',
    images: ['/cars/dodge-charger-1968.webp'],
    doors: 2,
    cylinders: 8,
    condition: 'Used',
    featured: true,
    features: [
      'Healthy 383 cu in V8',
      '400 hp Edelbrock Performer kit',
      'Hooker headers with Edelbrock heads, carburetor and intake',
      'Chrome air cleaner',
      'Rebuilt automatic transmission',
      '3.55:1 rear end',
      'Rebuilt front suspension',
      'Front disc brakes',
      '16-inch wheels with BF Goodrich white letter radials',
      'Aggressive dual exhaust',
      'Bucket seats in a neat, well-kept interior',
      'Black vinyl roof',
      'Dry, solid trunk and floor pans',
    ],
    description:
      'This second-generation 1968 Dodge Charger is a striking example, finished in a beautiful blue metallic that showcases well, complemented by chrome and brightwork in good condition. The interior is neat, tidy, and well-kept, featuring bucket seats. Under the hood, a healthy 383ci V8, paired with a rebuilt automatic transmission and a 3.55:1 rear end, has been significantly enhanced. Performance upgrades include a 400HP Edelbrock Performer kit, Hooker headers, Edelbrock heads, carburetor, and intake, all capped with a chrome air cleaner. The car benefits from a rebuilt front suspension and the addition of front disc brakes, ensuring improved handling. It rides on 16-inch wheels with BF Goodrich white letter radial tires, and an aggressive dual exhaust system delivers an awesome sound. This is a very solid vehicle, with dry and solid trunk and floor pans, offering a blast to drive for any enthusiast.',
  },
  {
    slug: 'chevrolet-chevelle-1972',
    brand: 'Chevrolet',
    model: 'Chevelle SS',
    year: 1972,
    price: 66900,
    body: 'Muscle Car',
    engine: '530 cu in V8, bored from 454 (8.7L)',
    mileage: 70559,
    transmission: '3-Speed Automatic (350TH)',
    drive: 'Rear-Wheel Drive',
    fuel: 'Gasoline',
    color: 'Majestic Blue',
    silhouette: 'coupe',
    images: ['/cars/chevrolet-chevelle-1972.webp'],
    doors: 2,
    cylinders: 8,
    condition: 'Used',
    featured: true,
    features: [
      'Rebuilt and bored 530 cu in V8, originally a 454',
      'Mahle pistons and Dart cylinder heads',
      'Comp cam with FiTech electronic fuel injection',
      '670 hp and 480 lb-ft of torque',
      'Electric cooling fans',
      '350TH automatic transmission with a 3000 stall converter',
      '4.11 rear end',
      'Full RideTech suspension with adjustable coilover shocks',
      'Wilwood disc brakes front and rear',
      'Custom Savani wheels — 22-inch rear, 20-inch front',
      'Dakota Digital dashboard',
      'Blue LED cabin lighting',
      'Custom power-adjustable front seats',
      'Power windows and power locks',
      'Kenwood audio with a 12-inch subwoofer',
      'House of Kolor Majestic Blue paint',
    ],
    description:
      'This 1972 Chevrolet Chevelle SS Restomod masterfully blends classic muscle car aesthetics with modern performance and comfort, having undergone a comprehensive transformation. Powering this standout performer is a rebuilt and bored 530ci V8 engine, originally a 454ci, now enhanced with Mahle pistons, Dart heads, a Comp cam, electric cooling fans, and a FiTech electronic fuel injection system, generating an exhilarating 670 horsepower and 480 pound-feet of torque. This potent engine is paired with a robust 350TH automatic transmission featuring a 3000 stall converter and a 4.11 rear end for exceptional acceleration. The ride is both thrilling and smooth, thanks to a full Ride Tech suspension system with muscle bars, strong arms, and adjustable height coilover shocks, while Wilwood disc brakes on both front and rear ensure superior stopping power. Its aggressive yet sophisticated exterior is finished in a fresh coat of House of Kolor\u2019s Majestic Blue, complemented by custom Savani wheels, measuring 22 inches in the rear and 20 inches in the front. Inside, the Chevelle maintains a classic appearance while offering modern conveniences, including a Dakota Digital dashboard, blue LED interior lighting, custom power-adjustable front seats, power windows, and power locks. An upgraded Kenwood KDC-X996 audio system with a 12-inch subwoofer provides a powerful soundtrack for every journey. This Chevelle SS Restomod is a true testament to expert craftsmanship and the harmonious integration of automotive heritage with contemporary technology.',
  },
];

export const featuredCars = cars.filter((car) => car.featured);

export function getCar(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function formatPrice(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

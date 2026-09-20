export type CarBody = 'Coupe' | 'Sedan' | 'Convertible' | 'Hardtop' | 'Wagon' | 'Pickup' | 'Muscle Car';
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
export const cars: Car[] = [];

export const featuredCars = cars.filter((car) => car.featured);

export function getCar(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}

export function formatPrice(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

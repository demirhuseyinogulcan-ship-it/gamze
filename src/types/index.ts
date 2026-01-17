export interface GalleryImage {
  src: string;
  alt: string;
  span?: string;
}

export interface ClassSchedule {
  day: string;
  time: string;
  level: string;
  location: string;
}

export interface Location {
  name: string;
  address: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

// Blog types
export * from './blog';

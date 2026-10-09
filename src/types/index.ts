export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: PhotoCategory;
  featured: boolean;
  captureDate?: string;
  camera?: string;
  lens?: string;
  settings?: CameraSettings;
}

export interface CameraSettings {
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
  focalLength?: string;
}

export enum PhotoCategory {
  DEEP_SPACE = 'Deep Space',
  PLANETS = 'Planets',
  MOON = 'Moon',
  MILKY_WAY = 'Milky Way',
  WIDE_FIELD = 'Wide Field',
  SOLAR = 'Solar',
  TIME_LAPSE = 'Time Lapse',
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
} 
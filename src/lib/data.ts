import { Photo, PhotoCategory } from '@/types';

export const samplePhotos: Photo[] = [
  {
    id: '1',
    title: 'Andromeda Galaxy',
    description: 'The Andromeda Galaxy (M31), the nearest large spiral galaxy to the Milky Way, with its bright core, dust lanes and the satellite galaxies M32 and M110.',
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&h=600&fit=crop',
    category: PhotoCategory.DEEP_SPACE,
    featured: true,
    captureDate: '2024-01-15',
    camera: 'Canon EOS R5',
    lens: 'Canon RF 600mm f/4L',
    settings: {
      aperture: 'f/4',
      shutterSpeed: '240s',
      iso: '800',
      focalLength: '600mm'
    }
  },
  {
    id: '2',
    title: 'Milky Way Core',
    description: 'The bright galactic centre of the Milky Way: glowing star clouds threaded with dark dust lanes.',
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop',
    category: PhotoCategory.MILKY_WAY,
    featured: true,
    captureDate: '2024-02-10',
    camera: 'Canon EOS R5',
    lens: 'Canon RF 24-70mm f/2.8L',
    settings: {
      aperture: 'f/2.8',
      shutterSpeed: '20s',
      iso: '3200',
      focalLength: '35mm'
    }
  },
  {
    id: '3',
    title: 'Mars',
    description: 'A full-disc view of Mars showing its dusty ochre surface, dark surface markings, craters and a bright polar cap.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop',
    category: PhotoCategory.PLANETS,
    featured: false
  },
  {
    id: '4',
    title: 'Full Moon',
    description: 'The full Moon, with its dark lunar maria, bright highlands and the long ray systems of young craters.',
    imageUrl: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=800&h=600&fit=crop',
    category: PhotoCategory.MOON,
    featured: false,
    captureDate: '2024-01-28',
    camera: 'Canon EOS R5',
    lens: 'Celestron Schmidt-Cassegrain 8"',
    settings: {
      aperture: 'f/8',
      shutterSpeed: '1/125s',
      iso: '200',
      focalLength: '2000mm'
    }
  },
  {
    id: '5',
    title: 'Milky Way over Mountains',
    description: 'Our home galaxy stretching across the night sky above the mountain peaks, a testament to the beauty of dark skies.',
    imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop',
    category: PhotoCategory.MILKY_WAY,
    featured: true,
    captureDate: '2024-04-12',
    camera: 'Canon EOS R5',
    lens: 'Canon RF 15-35mm f/2.8L',
    settings: {
      aperture: 'f/2.8',
      shutterSpeed: '25s',
      iso: '3200',
      focalLength: '20mm'
    }
  },
  {
    id: '6',
    title: 'Neptune',
    description: 'Neptune\'s deep blue atmosphere with the Great Dark Spot and its white companion clouds, the storm that Voyager 2 photographed in 1989.',
    imageUrl: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&h=600&fit=crop',
    category: PhotoCategory.PLANETS,
    featured: false
  }
];

export const featuredPhotos = samplePhotos.filter(photo => photo.featured);

export const getPhotosByCategory = (category: PhotoCategory) => 
  samplePhotos.filter(photo => photo.category === category); 
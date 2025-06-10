import { Photo, PhotoCategory } from '@/types';

export const samplePhotos: Photo[] = [
  {
    id: '1',
    title: 'Andromeda Galaxy',
    description: 'The magnificent Andromeda Galaxy (M31), our nearest galactic neighbor, captured in stunning detail showing its spiral arms and core.',
    imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
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
    title: 'Orion Nebula',
    description: 'The iconic Orion Nebula (M42), a stellar nursery where new stars are born, showcasing vibrant colors and intricate details.',
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=600&fit=crop',
    category: PhotoCategory.DEEP_SPACE,
    featured: true,
    captureDate: '2024-02-10',
    camera: 'Canon EOS R5',
    lens: 'Canon RF 100-500mm f/4.5-7.1L',
    settings: {
      aperture: 'f/5.6',
      shutterSpeed: '180s',
      iso: '1600',
      focalLength: '500mm'
    }
  },
  {
    id: '3',
    title: 'Jupiter and Its Moons',
    description: 'Jupiter showing its distinctive bands and the Great Red Spot, with its four largest moons visible in their eternal dance.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop',
    category: PhotoCategory.PLANETS,
    featured: false,
    captureDate: '2024-03-05',
    camera: 'Canon EOS R5',
    lens: 'Celestron Schmidt-Cassegrain 8"',
    settings: {
      aperture: 'f/10',
      shutterSpeed: '1/60s',
      iso: '400',
      focalLength: '2000mm'
    }
  },
  {
    id: '4',
    title: 'Lunar Mare Tranquillitatis',
    description: 'The Sea of Tranquility, landing site of Apollo 11, showing the intricate crater details and lunar highlands.',
    imageUrl: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800&h=600&fit=crop',
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
    title: 'Saturn\'s Rings',
    description: 'The jewel of the solar system displaying its magnificent ring system and hexagonal polar storm.',
    imageUrl: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&h=600&fit=crop',
    category: PhotoCategory.PLANETS,
    featured: false,
    captureDate: '2024-05-20',
    camera: 'Canon EOS R5',
    lens: 'Celestron Schmidt-Cassegrain 8"',
    settings: {
      aperture: 'f/10',
      shutterSpeed: '1/30s',
      iso: '800',
      focalLength: '2000mm'
    }
  }
];

export const featuredPhotos = samplePhotos.filter(photo => photo.featured);

export const getPhotosByCategory = (category: PhotoCategory) => 
  samplePhotos.filter(photo => photo.category === category); 
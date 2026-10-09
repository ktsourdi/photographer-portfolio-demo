import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    // overflow-x-clip: the About/Contact columns slide in from x: 50, which would
    // otherwise widen the page on phones and push the fixed nav's menu button off-screen.
    <main className="min-h-screen bg-cosmic-black overflow-x-clip">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
} 
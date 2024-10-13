import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar /> 
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}

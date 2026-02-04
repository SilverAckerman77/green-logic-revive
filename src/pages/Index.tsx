import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Certifications from '@/components/Certifications';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Certifications />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

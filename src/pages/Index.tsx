import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ExplodedHardware from "@/components/ExplodedHardware";
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import About from '@/components/About';

const Index = () => {
  return (
    <>
      <Hero />
      <Services />
      {/* Visual proof of your manual dismantling process */}
      <ExplodedHardware />
      <About />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
};

export default Index;

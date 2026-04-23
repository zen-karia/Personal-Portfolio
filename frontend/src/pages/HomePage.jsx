import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';
import Signature from '../components/Signature';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Signature />
    </main>
  );
}

import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/HeroMain.jsx'
import HeroGradient from './components/Hero/HeroGradient.jsx';
import { AboutMeMain } from './components/AboutMe/AboutMeMain.jsx';
import { SkillsMain } from './components/Skills/SkillsMain.jsx';
import { ExperienceMain } from './components/Experience/ExperienceMain.jsx';
import { ProjectsMain } from './components/Projects/ProjectsMain.jsx';
import { ContactMeMain } from './components/ContactMe/ContactMeMain.jsx';
import { FooterMain } from './components/Footer/FooterMain.jsx';

export default function App() {
  return (
    <main className="font-body">
      <Navbar />
      <Hero />
      <HeroGradient />
      <AboutMeMain />
      <ExperienceMain />
      <SkillsMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}
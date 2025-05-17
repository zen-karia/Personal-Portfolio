import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/HeroMain.jsx'
import HeroGradient from './components/Hero/HeroGradient.jsx';

export default function App() {
  return (
    <main className="font-body">
      <Navbar />
      <Hero />
      <HeroGradient />
    </main>
  );
}
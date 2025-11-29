import React, { useState } from 'react';
import Hero from './components/Hero';
import UrgencyBar from './components/UrgencyBar';
import StorySection from './components/StorySection';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Footer from './components/Footer';
import VolumeSelection from './components/VolumeSelection';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'selection'>('landing');

  // Se o estado for 'selection', renderiza apenas a tela de escolha de volumes
  if (view === 'selection') {
    return <VolumeSelection onBack={() => setView('landing')} />;
  }

  // Caso contrário, renderiza a Landing Page completa
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <UrgencyBar />
      <Hero />
      <StorySection />
      <Benefits />
      <Testimonials />
      <Offer onBuySingle={() => setView('selection')} />
      <Footer />
    </div>
  );
};

export default App;
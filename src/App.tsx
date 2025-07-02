import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Labs from './components/Labs';
import Industries from './components/Industries';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestSolution = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header onRequestSolution={handleRequestSolution} />
      <Hero onRequestSolution={handleRequestSolution} />
      <Services />
      <Projects />
      <Labs />
      <Industries />
      <CTA isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Footer />
    </div>
  );
}

export default App;
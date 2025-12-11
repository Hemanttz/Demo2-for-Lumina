import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import Offerings from './components/Offerings';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import EtiquetteAI from './components/EtiquetteAI';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />
        
        <FadeIn direction="up" delay={200}>
          <BioSection />
        </FadeIn>
        
        <FadeIn direction="up">
          <Offerings />
        </FadeIn>
        
        <FadeIn direction="up">
          <Clients />
        </FadeIn>
        
        <FadeIn direction="up">
          <Testimonials />
        </FadeIn>
        
        <FadeIn direction="up" className="py-20 bg-stone-900 text-stone-200 font-serif italic text-center text-3xl md:text-5xl px-6 leading-tight">
            "Your presence is your power.<br/>Own it with grace."
        </FadeIn>
        
        <FadeIn direction="up">
          <Gallery />
        </FadeIn>
      </main>
      <Footer />
      <EtiquetteAI />
    </div>
  );
}

export default App;
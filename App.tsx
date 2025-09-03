
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Addons from './components/Addons';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Addons />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

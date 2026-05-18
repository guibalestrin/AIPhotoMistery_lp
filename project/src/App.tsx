import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModernDating from './components/ModernDating';
import InvisibleCost from './components/InvisibleCost';
import Mechanism from './components/Mechanism';
import Ethics from './components/Ethics';
import AntiCatfish from './components/AntiCatfish';
import Transformations from './components/Transformations';
import WhatYouGet from './components/WhatYouGet';
import Proofs from './components/Proofs';
import FAQ from './components/FAQ';
import Offer from './components/Offer';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <Hero />
      <ModernDating />
      <InvisibleCost />
      <Mechanism />
      <Ethics />
      <AntiCatfish />
      <Transformations />
      <WhatYouGet />
      <Proofs />
      <FAQ />
      <Offer />
      <FinalCTA />
      <Footer />
      <MobileCTA />
    </div>
  );
}

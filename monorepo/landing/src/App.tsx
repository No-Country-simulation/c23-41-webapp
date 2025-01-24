import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Howitwork from './components/Howitworks';
import Proposal from './components/Proposal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Proposal />
      <Howitwork />
      <Footer />
    </div>
  );
};

export default App;



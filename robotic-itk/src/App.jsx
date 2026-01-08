import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    // Force scroll to top on manual reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Clear any hash in URL to prevent browser jumping to anchors
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }

    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;

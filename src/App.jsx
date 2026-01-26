import React, { useState, useEffect } from 'react'; // Added useState
import { AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import Header from './components/Header';
import Hero from './components/Hero';
import AboutNew from './components/AboutNew';
import DepartmentsNew from './components/DepartmentsNew';
import ActivitiesNew from './components/ActivitiesNew';
import FooterNew from './components/FooterNew';
import Cursor from './components/Cursor';
import Loader from './components/Loader'; // Imported Loader

function App() {
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        // Enforce manual scroll restoration to prevent browser from remembering scroll position
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Clear any anchor hash to prevent jumping
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }

        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Lock scroll when loading AND force top position
        if (loading) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            // When loading finishes, ensure we are still at the top before unlocking
            window.scrollTo(0, 0);
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
            document.body.style.overflow = 'auto';
        };
    }, [loading]);

    return (
        <div className="min-h-screen bg-[#020403] relative selection:bg-[#FFCC00] selection:text-black">
            {/* Loading Screen Manager */}
            <AnimatePresence mode="wait">
                {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <Cursor />

            {/* Global Grain/Noise Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9998] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <Header />

            <main className="relative z-10">
                <Hero />
                <AboutNew />
                <DepartmentsNew />
                <ActivitiesNew />
            </main>

            <FooterNew />
        </div>
    );
}

export default App;

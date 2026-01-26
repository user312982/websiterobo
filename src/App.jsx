import React, { useState } from 'react';
import GalleryPage from './pages/GalleryPage';
import DepartmentsPage from './pages/DepartmentsPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutNew from './components/AboutNew';
import DepartmentsNew from './components/DepartmentsNew';
import ActivitiesNew from './components/ActivitiesNew';
import FooterNew from './components/FooterNew';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import DepartmentDetail from './pages/DepartmentDetail';

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Scroll restoration: Force manual
    React.useLayoutEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    // Force scroll to top on route change with a slight delay to ensure DOM is ready
    React.useEffect(() => {
        // Instant jump to top
        window.scrollTo(0, 0);

        // Safety check: ensure it stays at top after render cycles
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Scroll restoration handled by AnimatePresence onExitComplete

    React.useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }
        document.documentElement.style.scrollBehavior = 'smooth';

        if (loading) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
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
            <AnimatePresence mode="wait">
                {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <Cursor />

            {/* Global Grain/Noise Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9998] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Header stays consistent across pages (or can be conditional) */}
            <Header />

            <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <main className="relative z-10">
                            <Hero />
                            <AboutNew />
                            <DepartmentsNew />
                            <ActivitiesNew />
                        </main>
                    } />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/departments" element={<DepartmentsPage />} />
                    <Route path="/department/:id" element={<DepartmentDetail />} />
                </Routes>
            </AnimatePresence>

            <FooterNew />
        </div>
    );
}

export default App;

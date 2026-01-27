import React, { useState, Suspense, lazy } from 'react';
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
import ScrollToTop from './components/ScrollToTop';

// Lazy Load Pages for Performance
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const DepartmentsPage = lazy(() => import('./pages/DepartmentsPage'));
const DepartmentDetail = lazy(() => import('./pages/DepartmentDetail'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Scroll restoration: Force manual
    React.useLayoutEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);



    // Scroll restoration handled by AnimatePresence onExitComplete

    React.useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }

        // REMOVED: document.documentElement.style.scrollBehavior = 'smooth'; 
        // We handle this via CSS or specific interactions, not globally as it breaks router scroll reset.

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
            <ScrollToTop />
            <AnimatePresence mode="wait">
                {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <Cursor />

            {/* Global Grain/Noise Texture - Optimized (Static Image instead of SVG Filter) */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.05] z-[9998] mix-blend-overlay"
                style={{
                    backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Header stays consistent across pages (or can be conditional) */}
            <Header />

            <AnimatePresence mode="wait">
                <Suspense fallback={<div className="min-h-screen bg-[#020403]" />}>
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
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </Suspense>
            </AnimatePresence>

            <FooterNew />
        </div>
    );
}

export default App;

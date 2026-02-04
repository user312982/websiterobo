import React, { useState, Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutNew from './components/AboutNew';
import ActivitiesHome from './components/ActivitiesHome';
import DepartmentsNew from './components/DepartmentsNew';
import FooterNew from './components/FooterNew';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy Load Pages for Performance
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const DepartmentsPage = lazy(() => import('./pages/DepartmentsPage'));
const DepartmentDetail = lazy(() => import('./pages/DepartmentDetail'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Consolidated scroll and loading management
    useEffect(() => {
        // Disable browser scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Clean hash on mount
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }

        // Control body overflow and scroll position based on loading state
        document.body.style.overflow = loading ? 'hidden' : 'auto';
        window.scrollTo(0, 0);

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [loading]);

    return (
        <ErrorBoundary>
            <div className="app-container">
                <ScrollToTop />
                <AnimatePresence mode="wait">
                    {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
                </AnimatePresence>

                <Cursor />

                {/* Global Grain/Noise Texture */}
                <div className="noise-overlay" />

                <Header />

                <AnimatePresence mode="wait">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={
                                <main className="relative z-10">
                                    <Hero />
                                    <AboutNew />
                                    <ActivitiesHome />
                                    <DepartmentsNew />
                                </main>
                            } />
                            <Route path="/gallery" element={<GalleryPage />} />
                            <Route path="/departments" element={<DepartmentsPage />} />
                            <Route path="/department/:id" element={<DepartmentDetail />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/activities" element={<ActivitiesPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </AnimatePresence>

                <FooterNew />
            </div>
        </ErrorBoundary>
    );
}

export default App;

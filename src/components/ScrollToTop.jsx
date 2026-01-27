import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Enforce manual scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Disable smooth scrolling temporarily to prevent fighting
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';

        // Instant scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Force instant jump
        });

        // Force check in next frame (for race conditions)
        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        });

        // Double check after small delay
        const t = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        }, 50);

        return () => clearTimeout(t);

    }, [pathname]);

    return null;
};

export default ScrollToTop;

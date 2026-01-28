import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '/src/logo/logo.webp';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (isHome) {
                setScrolled(window.scrollY > window.innerHeight - 100);
            }
        };

        if (!isHome) {
            setScrolled(true);
        } else {
            setScrolled(window.scrollY > window.innerHeight - 100);
            window.addEventListener('scroll', handleScroll);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome, location.pathname]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const handleNavClick = (path) => {
        setMenuOpen(false);
        if (path === location.pathname) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const links = [
        { name: 'Gallery', path: '/gallery' },
        { name: 'Departments', path: '/departments' },
        { name: 'Events', path: '/events' },
        { name: 'About Us', path: '/about' }
    ];

    // Marquee content for reuse
    const MarqueeContent = () => (
        <div className="flex items-center animate-marquee whitespace-nowrap w-max">
            <span className="font-black text-xs uppercase tracking-widest text-black mx-8">
                Recruitment Closed
            </span>
            <span className="font-black text-xs uppercase tracking-widest text-black mx-8">
                Recruitment Closed
            </span>
            <span className="font-black text-xs uppercase tracking-widest text-black mx-8">
                Recruitment Closed
            </span>
            <span className="font-black text-xs uppercase tracking-widest text-black mx-8">
                Recruitment Closed
            </span>
        </div>
    );

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-8 lg:px-16 py-6 transition-all duration-500`}
                style={{
                    backgroundColor: scrolled ? 'rgba(255, 204, 0, 0.15)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255, 204, 0, 0.3)' : '1px solid transparent',
                    boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <Link to="/" className="relative z-[70] group" onClick={() => handleNavClick('/')}>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#FFCC00] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                            <img src={Logo} alt='Logo' className="relative w-12 h-12 md:w-14 md:h-14 object-contain transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-rajdhani font-bold text-xl md:text-2xl tracking-widest text-white leading-none group-hover:text-[#FFCC00] transition-colors duration-300">
                                ROBOTIK <span className="text-[#FFCC00]">ITK</span>
                            </span>
                        </div>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            onClick={() => handleNavClick(link.path)}
                            className={`relative px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 group overflow-hidden rounded-full ${scrolled ? 'text-white hover:text-black' : 'text-[#88998C] hover:text-black'}`}
                        >
                            <span className="relative z-10 font-bold">{link.name}</span>
                            <span className="absolute inset-0 bg-[#FFCC00] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <button className="hidden lg:flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-[#FFCC00] rounded-none relative group overflow-hidden cursor-not-allowed min-w-[200px]">
                    <span className="relative z-10 font-black text-sm uppercase tracking-widest text-[#FFCC00] transition-colors duration-300 transform scale-x-110 group-hover:opacity-0">
                        Join Us
                    </span>

                    {/* Police Tape Hover Effect */}
                    <div className="absolute inset-0 bg-[#FFCC00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 overflow-hidden flex flex-col justify-center">
                        {/* Top Stripes */}
                        <div className="absolute top-0 left-0 right-0 h-[6px] w-full z-10"
                            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 4px, #FFCC00 4px, #FFCC00 8px)' }} />

                        {/* Center Scrolling Text */}
                        <div className="flex items-center overflow-hidden w-full">
                            <div className="flex animate-marquee whitespace-nowrap">
                                <MarqueeContent />
                                <MarqueeContent />
                            </div>
                        </div>

                        {/* Bottom Stripes */}
                        <div className="absolute bottom-0 left-0 right-0 h-[6px] w-full z-10"
                            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 4px, #FFCC00 4px, #FFCC00 8px)' }} />
                    </div>
                </button>

                <button
                    className="lg:hidden relative z-[70] w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="w-8 h-[2px] bg-[#FFCC00] origin-center transition-transform" />
                    <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} className="w-8 h-[2px] bg-[#FFCC00] transition-opacity" />
                    <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="w-8 h-[2px] bg-[#FFCC00] origin-center transition-transform" />
                </button>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-50 bg-[#020403] flex flex-col justify-center items-center lg:hidden"
                    >
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                        <div className="flex flex-col gap-8 text-center relative z-10">
                            {links.map((link, index) => (
                                <Link key={index} to={link.path} onClick={() => handleNavClick(link.path)}>
                                    <motion.span
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                                        className="text-4xl font-bold text-white uppercase tracking-widest hover:text-[#FFCC00] transition-colors font-rajdhani block"
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            ))}
                            <button className="mt-8 px-14 py-1.5 bg-transparent border border-[#FFCC00] rounded-none relative group overflow-hidden cursor-not-allowed min-w-[180px]">
                                <span className="relative z-10 font-black text-sm uppercase tracking-widest text-[#FFCC00] transition-colors duration-300 transform scale-x-110 group-hover:opacity-0">
                                    Join Us
                                </span>

                                {/* Police Tape Hover Effect */}
                                <div className="absolute inset-0 bg-[#FFCC00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 overflow-hidden flex flex-col justify-center">
                                    {/* Top Stripes */}
                                    <div className="absolute top-0 left-0 right-0 h-[6px] w-full z-10"
                                        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 4px, #FFCC00 4px, #FFCC00 8px)' }} />

                                    {/* Center Scrolling Text */}
                                    <div className="flex items-center overflow-hidden w-full">
                                        <div className="flex animate-marquee whitespace-nowrap">
                                            <MarqueeContent />
                                            <MarqueeContent />
                                        </div>
                                    </div>

                                    {/* Bottom Stripes */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[6px] w-full z-10"
                                        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 4px, #FFCC00 4px, #FFCC00 8px)' }} />
                                </div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;

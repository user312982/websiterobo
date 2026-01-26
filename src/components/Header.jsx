import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from '/src/logo/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const links = ['About', 'Departments', 'Activities', 'Contact'];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-8 lg:px-16 py-6 transition-all duration-500`}
                style={{
                    backgroundColor: scrolled ? 'rgba(255, 204, 0, 0.15)' : 'transparent', // Yellow Tint Glass
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255, 204, 0, 0.3)' : '1px solid transparent',
                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Logo Section */}
                <a href="#" className="flex items-center gap-4 group relative z-[70]">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#FFCC00] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                        <img
                            src={Logo}
                            alt="Logo"
                            className="relative w-12 h-12 md:w-14 md:h-14 object-contain transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-rajdhani font-bold text-xl md:text-2xl tracking-widest text-white leading-none group-hover:text-[#FFCC00] transition-colors duration-300">
                            ROBOTIC
                        </span>
                        <span className="font-mono text-[10px] md:text-xs text-[#FFCC00] tracking-[0.2em] md:tracking-[0.3em] font-semibold">
                            INSTITUT TEKNOLOGI KALIMANTAN
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={`relative px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 group overflow-hidden rounded-full ${scrolled ? 'text-white hover:text-black' : 'text-[#88998C] hover:text-black'}`}
                        >
                            <span className="relative z-10 font-bold">{link}</span>
                            {/* Yellow background hover effect */}
                            <span className="absolute inset-0 bg-[#FFCC00] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <button className="hidden lg:flex items-center gap-2 px-8 py-3 bg-transparent border border-[#FFCC00] rounded-none relative group overflow-hidden">
                    <span className="absolute inset-0 bg-[#FFCC00] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative z-10 font-bold text-sm uppercase tracking-widest text-[#FFCC00] group-hover:text-black transition-colors duration-300">
                        Join Team
                    </span>
                    <svg className="w-4 h-4 text-[#FFCC00] group-hover:text-black relative z-10 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-[70] w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <motion.div
                        animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                        className="w-8 h-[2px] bg-[#FFCC00] origin-center transition-transform"
                    />
                    <motion.div
                        animate={{ opacity: menuOpen ? 0 : 1 }}
                        className="w-8 h-[2px] bg-[#FFCC00] transition-opacity"
                    />
                    <motion.div
                        animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                        className="w-8 h-[2px] bg-[#FFCC00] origin-center transition-transform"
                    />
                </button>
            </motion.header>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-50 bg-[#020403] flex flex-col justify-center items-center lg:hidden"
                    >
                        {/* Background Noise */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                        />

                        <div className="flex flex-col gap-8 text-center relative z-10">
                            {links.map((link, index) => (
                                <motion.a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                                    className="text-4xl font-bold text-white uppercase tracking-widest hover:text-[#FFCC00] transition-colors font-rajdhani"
                                >
                                    {link}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 px-8 py-3 bg-[#FFCC00] text-black font-bold uppercase tracking-widest text-sm"
                            >
                                Join Team
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Logo - Robotic ITK */}
                    {/* Logo - Robotic ITK */}
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-bold text-xl flex items-center cursor-pointer">
                        <img src="/src/logo/logo.png" alt="Logo" className="w-14 h-14 mr-2 object-contain" />
                        <span className="text-black tracking-wider">ROBOTIC ITK</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800">
                    {['ABOUT', 'WHAT WE DO', 'OUR TEAM', 'JOIN US'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                            className="relative group py-1"
                            whileHover={{ scale: 1.05, color: '#003311' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="#get-started"
                    className="hidden md:inline-block bg-[#FFCC00] text-black px-6 py-2 rounded font-bold hover:bg-yellow-400 transition-colors"
                >
                    GET STARTED
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
                    <a href="#about" className="text-gray-800 font-semibold" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
                    <a href="#what-we-do" className="text-gray-800 font-semibold" onClick={() => setIsMenuOpen(false)}>WHAT WE DO</a>
                    <a href="#our-team" className="text-gray-800 font-semibold" onClick={() => setIsMenuOpen(false)}>OUR TEAM</a>
                    <a href="#join-us" className="text-gray-800 font-semibold" onClick={() => setIsMenuOpen(false)}>JOIN US</a>
                    <a href="#get-started" className="bg-[#FFCC00] text-black px-6 py-2 rounded font-bold text-center" onClick={() => setIsMenuOpen(false)}>GET STARTED</a>
                </div>
            )}
        </motion.header>
    );
};

export default Header;

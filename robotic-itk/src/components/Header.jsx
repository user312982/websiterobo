import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Logo Placeholder - Robotic ITK */}
                    <div className="font-bold text-xl flex items-center">
                        <span className="text-[#FFCC00] mr-2">⚡</span>
                        <span className="text-black">ROBOTIC ITK</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800">
                    <a href="#about" className="hover:text-[#003311] transition-colors">ABOUT</a>
                    <a href="#what-we-do" className="hover:text-[#003311] transition-colors">WHAT WE DO</a>
                    <a href="#our-team" className="hover:text-[#003311] transition-colors">OUR TEAM</a>
                    <a href="#join-us" className="hover:text-[#003311] transition-colors">JOIN US</a>
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
        </header>
    );
};

export default Header;

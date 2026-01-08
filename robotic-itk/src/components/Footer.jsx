import React from 'react';

const Footer = () => {
    return (
        <footer id="join-us" className="bg-[#001a09] text-white">
            {/* CTA Section */}
            <div className="bg-[#003311] py-16 relative overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Ready to Build the <span className="text-[#FFCC00]">Future</span>?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join RoboForce and be part of an innovative team pushing the limits of what's possible.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-[#FFCC00] text-black px-8 py-3 rounded font-bold hover:bg-yellow-400 transition-colors transform hover:-translate-y-1 duration-200">
                            JOIN OUR TEAM
                        </button>
                        <button className="bg-[#1a5c2e] text-white px-8 py-3 rounded font-bold hover:bg-[#236e3b] transition-colors border border-[#3e8a5b]">
                            GET STARTED
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-[#e5e5e5] text-gray-800 py-8 text-center pt-12 pb-12">
                {/* Using a light footer as per image bottom part seems light grey */}
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Robotic ITK. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

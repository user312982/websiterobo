import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-black">
                        Engineering <br />
                        the <span className="text-[#FFCC00]">Future</span> with <br />
                        <span className="text-[#003311]">Robotics</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 max-w-lg">
                        We're a passionate team of students and engineers pushing the boundaries of robotics through innovation, collaboration, and competition.
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    {/* Bear Gear Logo Placeholder */}
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Simplified Gear Shape */}
                            <circle cx="100" cy="100" r="90" fill="#FFCC00" />
                            <path d="M100 20 L110 5 L120 20 Z" fill="#FFCC00" transform="rotate(0 100 100)" />
                            {/* Simplified Bear Head Silhouette */}
                            <path d="M60 80 Q 50 50 80 50 Q 110 50 120 70 Q 150 90 140 130 Q 120 160 80 150 Q 50 140 60 80" fill="#001a09" />
                            <path d="M85 150 Q 100 130 110 150" fill="#FFCC00" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-xs text-center text-gray-500 bg-white/80 px-2 py-1 rounded hidden">
                                Bear Logo Placeholder
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8">
                    <h1 className="text-5xl md:text-8xl leading-tight mb-4 text-black">
                        <span className="font-normal">Engineering</span> <br />
                        <span className="font-normal">the</span> <span className="font-bold text-[#FFCC00]">Future</span> <span className="font-normal">with</span> <br />
                        <span className="font-bold text-[#003311]">Robotics</span>
                    </h1>
                    <p className="text-gray-600 text-base mb-6 max-w-md">
                        We're a passionate team of students and engineers pushing the boundaries of robotics through innovation, collaboration, and competition.
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                        <img
                            src="/src/logo/logo.png"
                            alt="Robotic ITK Logo"
                            className="w-full h-full object-contain drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

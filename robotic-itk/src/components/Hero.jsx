import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="bg-white py-12 md:py-16 overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8"
                >
                    <h1 className="text-5xl md:text-6xl leading-tight mb-4 text-black">
                        <span className="font-normal">Engineering</span> <br />
                        <span className="font-normal">the</span> <span className="font-bold text-[#FFCC00]">Future</span> <span className="font-normal">with</span> <br />
                        <span className="font-bold text-[#003311]">Robotics</span>
                    </h1>
                    <p className="text-gray-600 text-base mb-6 max-w-md">
                        We're a passionate team of students and engineers pushing the boundaries of robotics through innovation, collaboration, and competition.
                    </p>
                </motion.div>

                <div className="md:w-1/2 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-64 h-64 md:w-[350px] md:h-[350px]"
                    >
                        <motion.img
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "steps(120)"
                            }}
                            src="/src/logo/logo.png"
                            alt="Robotic ITK Logo"
                            className="w-full h-full object-contain drop-shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

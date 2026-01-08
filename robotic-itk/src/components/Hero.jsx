import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
    const logoRef = useRef(null);

    // Mouse position relative to center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Transform mouse position to rotation (limited range)
    const rotateX = useTransform(y, [-150, 150], [15, -15]);
    const rotateY = useTransform(x, [-150, 150], [-15, 15]);

    // Add spring physics for smooth movement
    const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
    const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

    const handleMouseMove = (e) => {
        if (!logoRef.current) return;
        const rect = logoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

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
                        ref={logoRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX: springRotateX,
                            rotateY: springRotateY,
                            transformStyle: "preserve-3d",
                            perspective: 1000,
                        }}
                        className="relative w-72 h-72 md:w-[400px] md:h-[400px] cursor-pointer"
                    >
                        <motion.img
                            src="/src/logo/logo.png"
                            alt="Robotic ITK Logo"
                            className="w-full h-full object-contain drop-shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        />
                        {/* Shadow effect that moves opposite */}
                        <motion.div
                            className="absolute inset-0 bg-black/10 rounded-full blur-3xl -z-10"
                            style={{
                                x: useTransform(x, [-150, 150], [20, -20]),
                                y: useTransform(y, [-150, 150], [20, -20]),
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;


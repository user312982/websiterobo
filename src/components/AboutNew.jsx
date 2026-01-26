import React from 'react';
import { motion } from 'framer-motion';

const AboutNew = () => {
    return (
        <section id="about" className="py-40 px-8 md:px-16 bg-[#020403]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
                >
                    <div>
                        <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">About Us</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                            BEYOND <br />
                            <span className="text-[#88998C]">THE HARDWARE.</span>
                        </h2>
                    </div>

                    <div>
                        <p className="text-[#F0F2F0] text-xl leading-relaxed mb-8">
                            Robotic ITK isn't just about building machines. It's about crafting intelligence. Since 2014, we've been the breeding ground for the next generation of technological leaders in Kalimantan.
                        </p>
                        <p className="text-[#88998C] text-lg leading-relaxed mb-8">
                            Our mission is simple: To demystify complex robotics and create tangible solutions that impact the real world. From deep-sea exploration prototypes to autonomous drones.
                        </p>

                        <div className="flex gap-4">
                            <div className="px-6 py-4 glass-panel rounded-lg">
                                <span className="block text-[#FFCC00] font-bold text-xl mb-1">Vision</span>
                                <span className="text-sm text-[#88998C]">World-class innovation hub</span>
                            </div>
                            <div className="px-6 py-4 glass-panel rounded-lg">
                                <span className="block text-[#FFCC00] font-bold text-xl mb-1">Mission</span>
                                <span className="text-sm text-[#88998C]">Research, Compete, Educate</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutNew;

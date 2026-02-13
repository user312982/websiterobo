import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutNew = () => {
    return (
        <section id="about" className="relative z-20 py-40 px-8 md:px-16 bg-[#020403]">
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
                            UKM Robotik ITK was born from the collective consciousness of Kalimantan Institute of Technology students regarding the importance of the young generation's role in mastering future technologies. As a concrete response to improve the quality of human resources in the field of robotics, this organization was officially established on November 11, 2019.
                        </p>
                        <p className="text-[#88998C] text-lg leading-relaxed mb-8">
                            Our mission is simple: To demystify complex robotics and create tangible solutions that impact the real world. From deep-sea exploration prototypes to autonomous drones.
                        </p>

                        <div className="flex gap-4">
                            <div className="px-6 py-4 glass-panel rounded-lg flex-1">
                                <span className="block text-[#FFCC00] font-bold text-xl mb-1">Vision</span>
                                <span className="text-sm text-[#88998C]">To realize UKM Robotik ITK as a center for research and development of science and technology in the field of robotics at ITK.</span>
                            </div>
                            <div className="px-6 py-4 glass-panel rounded-lg flex-1">
                                <span className="block text-[#FFCC00] font-bold text-xl mb-1">Mission</span>
                                <span className="text-sm text-[#88998C]">To cultivate committed and proactive members of ROBOTIK ITK, grounded in faith in God Almighty.</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link to="/about" className="inline-flex items-center gap-2 text-[#FFCC00] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors group">
                                Read Full Story
                                <span className="w-8 h-[1px] bg-[#FFCC00] group-hover:w-12 transition-all" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutNew;

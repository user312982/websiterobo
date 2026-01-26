import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
    return (
        <section id="our-team" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Join Our Community</h2>
                    <div className="w-24 h-1 bg-[#FFCC00] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Be part of a collaborative team that's shaping the future of robotics.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="rounded-xl overflow-hidden shadow-lg h-80 relative group"
                        >
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
                                <span className="text-gray-500 font-bold">Community Image {item}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[1, 2, 3, 4].map((i, index) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                            className="bg-gray-200 h-40 rounded-lg shadow-inner flex items-center justify-center transform hover:scale-105 transition-transform"
                        >
                            <span className="text-xs text-gray-400">Gallery {i}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;

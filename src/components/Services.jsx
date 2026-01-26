import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section id="what-we-do" className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black inline-block border-b-4 border-[#FFCC00] pb-2">What We Do</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        From concepts to competition, we cover every aspect of robotics engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-96 flex flex-col"
                        >
                            <div className="bg-gray-200 w-full h-48 rounded-lg mb-6 flex-shrink-0 flex items-center justify-center">
                                <span className="text-gray-400">Service Image {item}</span>
                            </div>
                            <div className="h-4 w-3/4 bg-gray-100 rounded mb-3"></div>
                            <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

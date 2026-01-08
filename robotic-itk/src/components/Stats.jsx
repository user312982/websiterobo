import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { label: 'Team Member', value: 'XXXX', bg: 'bg-[#333]' },
        { label: 'Competition Won', value: 'XXXX', bg: 'bg-[#333]' },
        { label: 'Robot Build', value: 'XXXX', bg: 'bg-[#333]' },
        { label: 'Years Active', value: 'XXXX', bg: 'bg-[#333]' },
    ];

    return (
        <section className="bg-[#003311] py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.5)' }}
                            className="bg-[#2a4d35] bg-opacity-50 p-6 rounded-lg text-center backdrop-blur-sm border border-white/10 transition-all cursor-default"
                        >
                            <h3 className="text-3xl md:text-5xl font-bold text-[#FFCC00] mb-2 select-none tracking-wider">{stat.value}</h3>
                            <p className="text-white font-medium text-sm md:text-base uppercase tracking-widest opacity-80">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

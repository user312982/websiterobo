import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { depts } from '../data/departments';

const DepartmentsPage = () => {
    return (
        <section className="min-h-screen bg-[#050806] pt-32 px-6 md:px-16 pb-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">Divisions</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">ALL DEPARTMENTS</h1>
                    <p className="text-[#88998C] text-lg max-w-2xl mx-auto">
                        Explore the specialized units that make up Robotic ITK.
                    </p>
                </motion.div>

                {/* Grid Layout Redesign */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {depts.map((dept, index) => (
                        <Link to={`/department/${dept.id}`} key={dept.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                className="group relative bg-[#111] border border-white/10 aspect-[4/5] overflow-hidden flex flex-col justify-end p-8 hover:border-[#FFCC00]/50 transition-colors duration-500"
                            >
                                {/* Background Gradient / Placeholder Image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                                {/* Hover Effect: Scale */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-xs font-mono text-[#FFCC00] mb-2 block">/{dept.id}</span>
                                    <motion.h3
                                        layoutId={`dept-title-${dept.id}`}
                                        className="text-3xl font-bold text-white mb-3 leading-tight"
                                    >
                                        {dept.name}
                                    </motion.h3>
                                    <p className="text-[#88998C] text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {dept.desc}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFCC00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepartmentsPage;

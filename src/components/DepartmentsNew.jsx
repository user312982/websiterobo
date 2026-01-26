import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { depts } from '../data/departments';

const DepartmentsNew = () => {
    return (
        <section id="departments" className="py-20 md:py-40 px-6 md:px-16 bg-[#050806] relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">Our Divisions</span>
                    <h2 className="text-4xl font-bold text-white">SPECIALIZED UNITS</h2>
                </div>

                {/* Department List */}
                <div className="border-t border-white/10">
                    {depts.map((dept) => (
                        <Link to={`/department/${dept.id}`} key={dept.id}>
                            <motion.div
                                layoutId={`dept-container-${dept.id}`}
                                className="group relative border-b border-white/10 py-12 md:py-16 cursor-pointer flex flex-col md:flex-row md:items-center justify-between transition-colors duration-500 hover:bg-white/[0.02]"
                            >
                                <div className="flex items-baseline gap-8">
                                    <span className="text-sm font-mono text-[#88998C] group-hover:text-[#FFCC00] transition-colors">/{dept.id}</span>
                                    <motion.h3
                                        layoutId={`dept-title-${dept.id}`}
                                        className="text-3xl md:text-5xl font-bold text-white group-hover:pl-4 transition-all duration-300"
                                    >
                                        {dept.name}
                                    </motion.h3>
                                </div>
                                <div className="mt-4 md:mt-0 max-w-sm text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-x-4 group-hover:translate-x-0">
                                    <p className="text-[#88998C]">{dept.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepartmentsNew;

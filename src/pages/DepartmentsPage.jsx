import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { depts } from '../data/departments';

const DepartmentsPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="min-h-screen bg-[#020403] pt-32 px-6 md:px-16 pb-20 relative overflow-hidden">
            {/* Elegant Background Gradient */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FFCC00] opacity-[0.03] blur-[200px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-500 opacity-[0.03] blur-[200px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Minimalist Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-[0.2em] mb-6 block opacity-80">Divisions</span>
                    <h1 className="text-5xl md:text-7xl font-rajdhani font-bold text-white mb-6 tracking-tight leading-none">
                        Our Specialized <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Departments</span>
                    </h1>
                    <p className="text-[#88998C] text-lg max-w-xl mx-auto font-light leading-relaxed">
                        Explore the specialized teams that drive innovation at Robotic ITK.
                    </p>
                </motion.div>

                {/* Clean Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {depts.map((dept, index) => (
                        <Link to={`/department/${dept.id}`} key={dept.id} className="group block">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.8 }}
                                className="relative bg-[#0A0C0A] border border-white/5 rounded-none p-8 h-full transition-all duration-500 hover:border-[#FFCC00]/50 hover:bg-[#0F110F]"
                            >
                                {/* Minimalist Accents */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFCC00]/0 to-transparent group-hover:via-[#FFCC00]/50 transition-all duration-700" />

                                <div className="flex flex-col h-full">
                                    {/* Numbering */}
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="text-xs font-mono text-[#88998C]/50">
                                            0{index + 1}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-[#1A1D1A] flex items-center justify-center text-[#FFCC00] text-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani tracking-wide group-hover:text-[#FFCC00] transition-colors">
                                        {dept.name}
                                    </h3>

                                    <p className="text-[#88998C] text-sm leading-relaxed mb-8 flex-grow">
                                        {dept.desc}
                                    </p>

                                    {/* Footer Stats - Clean */}
                                    <div className="border-t border-white/5 pt-6 flex justify-between items-center text-xs font-mono text-[#88998C]">
                                        <span className="group-hover:text-white transition-colors">{dept.stats.members} Members</span>
                                        <span className="w-1 h-1 bg-[#FFCC00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:text-white transition-colors">{dept.stats.projects} Projects</span>
                                    </div>
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

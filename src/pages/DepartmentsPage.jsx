import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { depts } from '../data/departments';

// Helper for unique patterns (The texture of the Keystone)
const getStripePattern = (style) => {
    const color = 'rgba(0,0,0,0.15)';
    switch (style) {
        case 'diagonal':
            return `repeating-linear-gradient(45deg, transparent, transparent 3px, ${color} 3px, ${color} 6px)`;
        case 'vertical':
            return `repeating-linear-gradient(90deg, transparent, transparent 3px, ${color} 3px, ${color} 5px)`;
        case 'double':
            return `repeating-linear-gradient(90deg, transparent, transparent 8px, ${color} 8px, ${color} 10px)`;
        case 'cross':
            return `linear-gradient(45deg, transparent 45%, ${color} 45%, ${color} 55%, transparent 55%), linear-gradient(-45deg, transparent 45%, ${color} 45%, ${color} 55%, transparent 55%)`;
        case 'horizontal':
            return `repeating-linear-gradient(0deg, transparent, transparent 3px, ${color} 3px, ${color} 6px)`;
        default:
            return 'none';
    }
};

// Helper component for Character Icons
const CrestIcon = ({ type, className }) => {
    switch (type) {
        case 'keycap': // Programming
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 5.25l-15 0a2.25 2.25 0 00-2.25 2.25l0 9a2.25 2.25 0 002.25 2.25l15 0a2.25 2.25 0 002.25-2.25l0-9a2.25 2.25 0 00-2.25-2.25z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 9h12v6H6z" />
                </svg>
            );
        case 'gear': // Mechatronics
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case 'tie': // Executive (Dasi)
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L9 4l3 2 3-2L12 2zM12 6L8 9v11l4 2 4-2V9l-4-3z" />
                </svg>
            );
        case 'palette': // Creative
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            );
        case 'globe': // Relationship
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        default: // Fallback
            return (
                <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            );
    }
};

const DepartmentsPage = () => {
    return (
        <section className="min-h-screen bg-[#050806] pt-32 px-6 md:px-16 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFCC00] opacity-[0.03] blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFCC00] opacity-[0.02] blur-[200px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">The Houses</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">CHOOSE YOUR DIVISION</h1>
                    <p className="text-[#88998C] text-lg max-w-2xl mx-auto">
                        Each department is a specialized unit with its own culture, expertise, and legacy. Where do you belong?
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {depts.map((dept, index) => (
                        <Link to={`/department/${dept.id}`} key={dept.id} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="relative h-[420px] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-[#222] transition-colors duration-500 hover:border-[#FFCC00]/30"
                                style={{
                                    boxShadow: `0 0 0 1px rgba(0,0,0,0)`
                                }}
                            >
                                {/* Theme Gradient Background (Subtle) */}
                                <div
                                    className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${dept.themeColor}, transparent 80%)`
                                    }}
                                />

                                {/* NEW: Floating Keystone Badge (Replaces Ribbon) */}
                                <div className="absolute top-0 right-6 z-20">
                                    <div
                                        className="relative w-20 h-28 flex flex-col items-center justify-center pt-2"
                                    >
                                        {/* Glow Layer */}
                                        <div
                                            className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                            style={{ background: '#FFCC00' }}
                                        />

                                        {/* Standard Banner Shape (The "Tie") */}
                                        <div
                                            className="absolute inset-0 backdrop-blur-md"
                                            style={{
                                                background: `linear-gradient(135deg, rgba(234, 179, 8, 0.95), rgba(202, 138, 4, 0.9))`,
                                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)', // Classic Banner/Tie
                                                boxShadow: 'inset 0 0 10px rgba(255,255,255,0.3)'
                                            }}
                                        >
                                            {/* Pattern Texture */}
                                            <div
                                                className="absolute inset-0 opacity-20 mix-blend-overlay"
                                                style={{ backgroundImage: getStripePattern(dept.stripeStyle) }}
                                            />
                                        </div>

                                        {/* Content inside Banner */}
                                        <div className="relative z-10 flex flex-col items-center">
                                            <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 mb-2 shadow-inner">
                                                <CrestIcon type={dept.crestIcon} className="w-5 h-5 text-white drop-shadow-md" />
                                            </div>
                                            <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded backdrop-blur">
                                                {dept.stats.level}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Corner accents (replacing ornate frame) */}
                                <div className="absolute top-0 left-0 p-4">
                                    <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-[#FFCC00] transition-colors" />
                                </div>
                                <div className="absolute bottom-0 right-0 p-4">
                                    <div className="w-8 h-8 border-r border-b border-white/10 group-hover:border-[#FFCC00]/50 transition-colors" />
                                </div>


                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end mt-12">
                                    <div className="mt-auto mb-4">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-[1px] w-6 bg-[#FFCC00]/50" />
                                            <span className="text-xs font-mono uppercase tracking-widest text-[#FFCC00]/80">
                                                Unit 0{dept.id}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                                            {dept.name}
                                        </h3>

                                        <p className="text-[#88998C] text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-white/80 transition-colors">
                                            {dept.desc}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                                            <div>
                                                <span className="block text-xl font-bold text-white">{dept.stats.projects}</span>
                                                <span className="text-[10px] text-white/30 uppercase tracking-widest">Active Projects</span>
                                            </div>
                                            <div>
                                                <span className="block text-xl font-bold text-white">{dept.stats.members}</span>
                                                <span className="text-[10px] text-white/30 uppercase tracking-widest">Specialists</span>
                                            </div>
                                        </div>
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

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const acts = [
    { id: 1, title: 'Robotik Mengajar', cat: 'Outreach', date: 'Monthly' },
    { id: 2, title: 'KRI Regional', cat: 'Competition', date: 'Aug 2024' },
    { id: 3, title: 'Embedded Systems', cat: 'Workshop', date: 'Jul 2024' },
    { id: 4, title: 'Tech Innovation', cat: 'Research', date: 'Ongoing' },
];

const ActivitiesNew = () => {
    return (
        <section id="activities" className="py-40 px-8 md:px-16 bg-[#020403]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
                    <div>
                        <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">What We Do</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white">ACTIVITIES</h2>
                    </div>
                    <p className="text-[#88998C] max-w-sm text-right mt-8 md:mt-0">
                        Engaging with the community and pushing technical limits through various programs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {acts.map((act) => (
                        <div key={act.id} className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-[#050806] border border-white/5 relative overflow-hidden mb-6 transition-all duration-500 group-hover:border-[#FFCC00]/30">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-xs font-mono text-[#88998C]">{act.cat}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFCC00] transition-colors">{act.title}</h3>
                            <div className="flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-[#003311]"></span>
                                <span className="text-sm font-mono text-[#88998C]">{act.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivitiesNew;

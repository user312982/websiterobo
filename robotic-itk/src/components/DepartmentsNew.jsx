import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const depts = [
    { id: '01', name: 'Mechatronics', desc: 'Combination of Electrical & Mechanical Engineering.' },
    { id: '02', name: 'Programming', desc: 'AI, Computer Vision, & Control Systems.' },
    { id: '03', name: 'Executive Board', desc: 'Daily Management & Organizational Administration.' },
    { id: '04', name: 'Creative Branding', desc: 'Visual Identity, Design, & Creative Media.' },
    { id: '05', name: 'Relationship & Dev', desc: 'External Partnerships & Organizational Development.' },
];

const DepartmentsNew = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="departments" className="py-20 md:py-40 px-6 md:px-16 bg-[#050806]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">Our Divisions</span>
                    <h2 className="text-4xl font-bold text-white">SPECIALIZED UNITS</h2>
                </div>

                <div className="border-t border-white/10">
                    {depts.map((dept) => (
                        <motion.div
                            key={dept.id}
                            className="group relative border-b border-white/10 py-12 md:py-16 cursor-pointer flex flex-col md:flex-row md:items-center justify-between transition-colors duration-500 hover:bg-white/[0.02]"
                            onMouseEnter={() => setHovered(dept.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className="flex items-baseline gap-8">
                                <span className="text-sm font-mono text-[#88998C] group-hover:text-[#FFCC00] transition-colors">/{dept.id}</span>
                                <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:pl-4 transition-all duration-300">
                                    {dept.name}
                                </h3>
                            </div>

                            <div className="mt-4 md:mt-0 max-w-sm text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-x-4 group-hover:translate-x-0">
                                <p className="text-[#88998C]">{dept.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepartmentsNew;

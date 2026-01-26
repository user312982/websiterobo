import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const acts = [
    {
        id: 1,
        title: 'Robotik Mengajar',
        cat: 'Outreach',
        date: 'Monthly',
        color: 'bg-blue-600/20', // Glass opacity
        desc: 'Teaching robotics to local schools.'
    },
    {
        id: 2,
        title: 'KRI Regional',
        cat: 'Competition',
        date: 'Aug 2024',
        color: 'bg-red-600/20',
        desc: 'National Robotics Contest participation.'
    },
    {
        id: 3,
        title: 'Embedded Systems',
        cat: 'Workshop',
        date: 'Jul 2024',
        color: 'bg-green-600/20',
        desc: 'Advanced microcontroller workshop.'
    },
    {
        id: 4,
        title: 'Tech Innovation',
        cat: 'Research',
        date: 'Ongoing',
        color: 'bg-purple-600/20',
        desc: 'Pushing boundaries in AI and Automation.'
    },
    {
        id: 5,
        title: 'Drone Racing',
        cat: 'Competition',
        date: 'Sep 2024',
        color: 'bg-orange-600/20',
        desc: 'High speed FPV drone racing tournament.'
    },
    {
        id: 6,
        title: 'AI Vision',
        cat: 'Research',
        date: 'Oct 2024',
        color: 'bg-cyan-600/20',
        desc: 'Computer vision research for autonomous navigation.'
    },
    {
        id: 7,
        title: 'Community Fair',
        cat: 'Outreach',
        date: 'Nov 2024',
        color: 'bg-yellow-600/20',
        desc: 'Exhibiting projects to the general public.'
    },
    {
        id: 8,
        title: 'PCB Design',
        cat: 'Workshop',
        date: 'Dec 2024',
        color: 'bg-pink-600/20',
        desc: 'Professional PCB design and manufacturing masterclass.'
    },
];

const categories = ['All', ...new Set(acts.map((act) => act.cat))];

const ActivitiesNew = () => {
    const [filter, setFilter] = useState('All');

    const filteredActs = filter === 'All' ? acts : acts.filter((act) => act.cat === filter);

    return (
        <section id="activities" className="py-32 px-4 md:px-16 bg-[#020403]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">Our Work</span>
                        <h2 className="text-huge font-bold text-white leading-[0.8]">ACTIVITIES</h2>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full border text-sm uppercase tracking-widest transition-all duration-300 ${filter === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-[#88998C] border-white/20 hover:border-white hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredActs.map((act) => (
                            <motion.div
                                layout
                                key={act.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, type: "spring" }}
                                className="group cursor-pointer font-sans"
                            >
                                {/* Image Container */}
                                <div className={`aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative border border-[#FFCC00]/30 group-hover:border-[#FFCC00] transition-colors duration-500 shadow-[0_0_15px_rgba(255,204,0,0.05)] group-hover:shadow-[0_0_30px_rgba(255,204,0,0.3)]`}>

                                    {/* Conditional Image or Blurred Placeholder */}
                                    {act.image ? (
                                        <img
                                            src={act.image}
                                            alt={act.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        /* Neutral Glass/Transparent Blurred Placeholder */
                                        <div className="w-full h-full bg-white/5 relative backdrop-blur-2xl">
                                            {/* Inner noise for texture */}
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                                            {/* Centered glow for depth (Neutral) */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                        </div>
                                    )}

                                    {/* Glass Overlay effect (Navbar style) */}
                                    <div className="absolute inset-0 bg-[#FFCC00]/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                                        <span className="px-6 py-2 bg-[#FFCC00] text-black font-bold rounded-full text-sm uppercase tracking-widest shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            View Project
                                        </span>
                                    </div>

                                    {/* Subtle Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest border border-[#FFCC00]/30 px-2 py-0.5 rounded-full">
                                            {act.cat}
                                        </span>
                                        <span className="text-[#88998C] text-xs font-mono">{act.date}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#FFCC00] transition-colors">
                                        {act.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ActivitiesNew;

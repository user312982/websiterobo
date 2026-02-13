import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const activities = [
    {
        id: 1,
        month: "FEB",
        date: "15",
        title: "Robotics Workshop",
        category: "Workshop",
        location: "Lab ITK",
        rotation: "md:-rotate-3",
        position: "md:left-0 md:top-10",
        zIndex: 10
    },
    {
        id: 2,
        month: "MAR",
        date: "10",
        title: "KRI Selection",
        category: "Competition",
        location: "Auditorium",
        rotation: "md:rotate-2",
        position: "md:left-[35%] md:top-20",
        zIndex: 20
    },
    {
        id: 3,
        month: "APR",
        date: "05",
        title: "Tech Expo",
        category: "Exhibition",
        location: "Campus Center",
        rotation: "md:-rotate-1",
        position: "md:right-0 md:top-0",
        zIndex: 10
    }
];

const ActivitiesHome = () => {
    // We use a state to track which card is hovered to bring it to front
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="py-24 md:py-40 px-4 md:px-16 bg-[#020403] relative border-t border-white/5 overflow-hidden">
            {/* Background Texture */}
            {/* Background Texture - REMOVED for performance (already global) */}
            {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" /> */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 pointer-events-none">
                    <div className="relative z-10 pointer-events-auto">
                        <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                            Agenda
                        </span>
                        <h2 className="text-5xl md:text-8xl font-bold text-white leading-none">
                            UPCOMING
                        </h2>
                    </div>
                </div>

                {/* Scattered Layout Area */}
                <div className="relative md:h-[500px] flex flex-col md:block gap-8 md:gap-0">
                    {activities.map((act) => {
                        const isHovered = hoveredId === act.id;

                        return (
                            <motion.div
                                key={act.id}
                                className={`
                                    relative md:absolute w-full md:w-[400px] 
                                    transition-all duration-500 ease-out
                                    ${act.position}
                                    ${isHovered ? 'z-50 md:scale-105 md:!rotate-0 shadow-2xl' : `z-${act.zIndex} ${act.rotation}`}
                                `}
                                onMouseEnter={() => setHoveredId(act.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                initial={{ opacity: 0, y: 100, rotate: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    rotate: window.innerWidth >= 768 ? (act.id === 1 ? -3 : act.id === 2 ? 2 : -1) : 0
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: act.id * 0.1 }}
                            >
                                <Link to="/activities" className="block group">
                                    <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-10 relative overflow-hidden h-full md:h-[320px] flex flex-col justify-between transition-colors duration-300 hover:bg-[#0F0F0F] hover:border-[#FFCC00]/50">

                                        {/* Top Tape decoration (visual only) */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/5 rotate-1 border border-white/5 opacity-50" />

                                        {/* Content */}
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-[#FFCC00] font-bold text-sm tracking-widest uppercase block mb-1">
                                                    {act.month}
                                                </span>
                                                <div className="text-white text-6xl md:text-7xl font-bold font-rajdhani leading-none">
                                                    {act.date}
                                                </div>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-[#FFCC00] group-hover:text-black group-hover:border-[#FFCC00] transition-all duration-300 transform group-hover:-rotate-45">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </div>
                                        </div>

                                        <div className="mt-8 border-t border-white/10 pt-6">
                                            <span className="inline-block px-2 py-0.5 mb-3 text-[10px] uppercase tracking-widest text-[#88998C] border border-white/10 rounded group-hover:text-white transition-colors">
                                                {act.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-[#FFCC00] transition-colors leading-tight">
                                                {act.title}
                                            </h3>
                                            <p className="text-[#88998C] text-sm mt-2 flex items-center gap-2">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                {act.location}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile View All */}
                <div className="mt-16 md:hidden flex justify-center">
                    <Link to="/activities" className="text-sm font-bold text-white uppercase tracking-widest underline decoration-[#FFCC00] underline-offset-4">
                        View Full Schedule
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesHome;

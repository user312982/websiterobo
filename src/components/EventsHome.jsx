import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventsHome = () => {
    // Synchronized data with EventsPage (but visualized differently)
    // Displaying only 2 main upcoming events for the homepage
    const events = [
        {
            id: 1,
            title: "Robotics Workshop",
            date: "Feb 15, 2026",
            category: "Workshop",
            placeholderColor: "from-[#FFCC00]/20 to-transparent"
        },
        {
            id: 2,
            title: "KRI Selection",
            date: "Mar 10, 2026",
            category: "Competition",
            placeholderColor: "from-blue-500/20 to-transparent"
        }
    ];

    return (
        <section className="py-32 px-6 md:px-16 bg-[#020403] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">
                            Mark Your Calendar
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-none">
                            UPCOMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#FFE066]">EVENTS</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link to="/events" className="group flex items-center gap-4 text-white hover:text-[#FFCC00] transition-colors">
                            <span className="text-sm font-bold uppercase tracking-widest">View All Events</span>
                            <div className="w-12 h-[1px] bg-white/30 group-hover:bg-[#FFCC00] transition-colors" />
                        </Link>
                    </motion.div>
                </div>

                {/* Horizontal Layout for Home (Distinct from Grid on Events Page) */}
                <div className="flex flex-col md:flex-row gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="relative flex-1 group overflow-hidden h-[400px] border border-white/10"
                        >
                            <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${event.placeholderColor}`}>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 bg-[#FFCC00] text-black text-xs font-bold uppercase tracking-widest mb-4">
                                    {event.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                                    {event.title}
                                </h3>
                                <p className="text-[#88998C] text-sm font-mono mb-6 flex items-center gap-2">
                                    <span>//</span> {event.date}
                                </p>

                                <Link to="/events" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#FFCC00] transition-colors">
                                    See Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                    {/* "More" Card Teaser */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex-1 bg-[#111] border border-white/5 flex flex-col justify-center items-center text-center p-8 group hover:bg-[#FFCC00] transition-colors duration-500"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-black">More Activities</h3>
                        <p className="text-[#88998C] mb-8 max-w-xs group-hover:text-black/70">
                            Discover workshops, research showcases, and community gatherings.
                        </p>
                        <Link to="/events" className="w-12 h-12 rounded-full border border-white/20 group-hover:border-black flex items-center justify-center text-white group-hover:text-black transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EventsHome;

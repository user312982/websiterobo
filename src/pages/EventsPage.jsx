import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventsPage = () => {
    // Mock Data for Events
    const upcomingEvents = [
        {
            id: 1,
            title: "Robotics Workshop: Arduino Basics",
            date: "Feb 15, 2026",
            time: "09:00 AM - 12:00 PM",
            location: "Lab Robotika ITK",
            category: "Workshop",
            placeholderColor: "from-[#FFCC00]/20 to-transparent" // Placeholder gradient
        },
        {
            id: 2,
            title: "KRI Region II Selection",
            date: "Mar 10, 2026",
            time: "08:00 AM - 05:00 PM",
            location: "Auditorium ITK",
            category: "Competition",
            placeholderColor: "from-blue-500/20 to-transparent"
        },
        {
            id: 3,
            title: "Tech Talk: AI in Robotics",
            date: "Mar 25, 2026",
            time: "01:00 PM - 03:00 PM",
            location: "Zoom Meeting",
            category: "Seminar",
            placeholderColor: "from-purple-500/20 to-transparent"
        }
    ];

    const pastEvents = [
        {
            id: 101,
            title: "KRTI National 2025",
            date: "Nov 20, 2025",
            desc: "Tim Asmawarman berhasil meraih juara harapan di divisi Fixed Wing.",
            placeholderColor: "bg-[#FFCC00]/10"
        },
        {
            id: 102,
            title: "Open Recruitment Gen 12",
            date: "Aug 15, 2025",
            desc: "Penerimaan anggota baru angkatan 2025 dengan total pendaftar 200+ mahasiswa.",
            placeholderColor: "bg-white/10"
        }
    ];

    return (
        <div className="min-h-screen bg-[#020403] pt-32 pb-20 px-6 md:px-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFCC00] blur-[150px] opacity-10 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero / Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">Calendar & Updates</span>
                    <h1 className="text-5xl md:text-7xl font-rajdhani font-bold text-white mb-6">
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#FFE066]">EVENTS</span>
                    </h1>
                    <p className="text-[#88998C] text-lg max-w-2xl mx-auto leading-relaxed">
                        Join us in our upcoming workshops, competitions, and gatherings.
                        Don't miss the chance to learn and innovate with us.
                    </p>
                </motion.div>

                {/* Upcoming Events Grid */}
                <div className="mb-32">
                    <div className="flex items-center justify-between mb-12 border-b border-[#FFCC00]/20 pb-4">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
                            Upcoming Events
                        </h2>
                        <div className="hidden md:flex gap-4">
                            <button className="px-4 py-2 border border-[#FFCC00] text-[#FFCC00] text-sm uppercase tracking-widest hover:bg-[#FFCC00] hover:text-black transition-colors">
                                View Calendar
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative bg-[#0A0C0A] border border-white/10 overflow-hidden hover:border-[#FFCC00]/50 transition-colors"
                            >
                                {/* Placeholder Image Area */}
                                <div className={`h-48 overflow-hidden relative bg-gradient-to-br ${event.placeholderColor}`}>
                                    <div className="absolute top-4 right-4 bg-[#FFCC00] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
                                        {event.category}
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 relative">
                                    <div className="mb-4 flex items-center gap-4 text-[#88998C] text-sm border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-[#FFCC00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-[#FFCC00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            {event.time}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFCC00] transition-colors leading-tight">
                                        {event.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-[#88998C] text-sm mb-6">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        {event.location}
                                    </div>

                                    <button className="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-[#FFCC00] hover:text-black hover:border-[#FFCC00] transition-all duration-300">
                                        Register Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Past Events / Highlights */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-wider text-center">
                        Past Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {pastEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row gap-6 items-center bg-[#111] p-6 rounded-lg border border-white/5"
                            >
                                <div className={`w-full md:w-48 h-32 overflow-hidden rounded ${event.placeholderColor} flex items-center justify-center`}>
                                    <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest block mb-1">{event.date}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                    <p className="text-[#88998C] text-sm leading-relaxed">{event.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-32 text-center p-12 border border-[#FFCC00]/20 bg-[#FFCC00]/5 relative overflow-hidden">
                    {/* Authentic Police Tape Styling for CTA Border */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#000_0,#000_10px,#FFCC00_10px,#FFCC00_20px)]" />
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,#000_0,#000_10px,#FFCC00_10px,#FFCC00_20px)]" />

                    <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-white mb-6">
                        Don't Miss Out
                    </h2>
                    <p className="text-[#88998C] text-lg max-w-xl mx-auto mb-8">
                        Stay updated with our latest activities. Follow our Instagram for real-time announcements.
                    </p>
                    <a href="https://instagram.com/robotik.itk" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#FFCC00] text-black font-black tracking-widest hover:bg-white transition-colors duration-300 transform hover:-translate-y-1">
                        FOLLOW @ROBOTIK.ITK
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;

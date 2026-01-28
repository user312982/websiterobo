import React from 'react';
import { motion } from 'framer-motion';

const activities = [
    {
        id: 1,
        title: "Robotics Workshop: Arduino Basics",
        date: "Feb 15, 2026",
        location: "Lab Robotika ITK",
        category: "Workshop",
        description: "Hands-on experience building your first robot with Arduino microcontrollers. Learn basic programming, sensor integration, and motor control.",
        imageGrad: "from-neutral-800 to-neutral-900",
    },
    {
        id: 2,
        title: "KRI Region II Selection",
        date: "Mar 10, 2026",
        location: "Auditorium ITK",
        category: "Competition",
        description: "Internal team selection for the Kontes Robot Indonesia. Showcase your skills and get a chance to represent ITK at the national level.",
        imageGrad: "from-neutral-800 to-neutral-900",
    },
    {
        id: 3,
        title: "Tech Talk: AI in Robotics",
        date: "Mar 25, 2026",
        location: "Zoom Meeting",
        category: "Seminar",
        description: "A deep dive into Computer Vision and Machine Learning applications in modern robotics, featuring industry professionals.",
        imageGrad: "from-neutral-800 to-neutral-900",
    },
    {
        id: 4,
        title: "KRTI National 2025 Highlights",
        date: "Nov 20, 2025",
        location: "Yogyakarta",
        category: "Achievement",
        description: "Recap of our team's performance at the National Drone Competition. Celebrating our achievements and lessons learned.",
        imageGrad: "from-neutral-800 to-neutral-900",
    },
    {
        id: 5,
        title: "Open Recruitment Gen 12",
        date: "Aug 15, 2025",
        location: "Campus ITK",
        category: "Recruitment",
        description: "Join the next generation of robotics enthusiasts. Open to all ITK students passionate about technology and innovation.",
        imageGrad: "from-neutral-800 to-neutral-900",
    },
    {
        id: 6,
        title: "Line Tracer Competition",
        date: "Jul 01, 2025",
        location: "Balikpapan",
        category: "Competition",
        description: "Annual line follower robot competition. Put your design and programming skills to the test against teams from across the region.",
        imageGrad: "from-neutral-800 to-neutral-900",
    }
];

const ActivitiesPage = () => {
    return (
        <div className="min-h-screen bg-[#020403] pt-32 selection:bg-[#FFCC00] selection:text-black">

            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-0 border-t border-white/10">

                {/* LEFT CONTENT (Dynamic Feed) */}
                <div className="border-r border-white/10 p-6 md:p-16 flex flex-col gap-24 md:gap-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight mb-8">
                            LATEST<br />
                            <span className="text-[#FFCC00]">ACTIVITIES</span>
                        </h1>
                    </motion.div>

                    <div className="flex flex-col gap-24">
                        {activities.map((act, index) => (
                            <motion.div
                                key={act.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="group cursor-pointer"
                            >
                                {/* Large Image Block */}
                                <div className="aspect-[16/9] bg-[#0A0A0A] relative overflow-hidden mb-8 group-hover:opacity-90 transition-opacity">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${act.imageGrad}`} />
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                                </div>

                                {/* Content */}
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-4 text-sm font-mono text-[#88998C] mb-4 uppercase tracking-widest">
                                        <span className="text-[#FFCC00]">{act.date}</span>
                                        <span className="w-px h-3 bg-white/20"></span>
                                        <span>{act.category}</span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-[#FFCC00] transition-colors leading-tight">
                                        {act.title}
                                    </h2>

                                    <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                                        {act.description}
                                    </p>

                                    <div className="mt-8 flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
                                        Read More <span className="text-[#FFCC00]">&rarr;</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDEBAR (Static Info) */}
                <div className="hidden lg:block relative">
                    <div className="sticky top-32 p-12 pr-16 h-[calc(100vh-8rem)] flex flex-col justify-between bg-[#050505]">
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                                Info
                            </h3>
                            <p className="text-[#88998C] text-lg leading-relaxed mb-12">
                                We regularly host workshops, competitions, and seminars to foster innovation in robotics. Stay updated with our latest agenda.
                            </p>

                            <h3 className="text-white font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                                Categories
                            </h3>
                            <ul className="space-y-4 text-[#88998C] text-lg">
                                <li className="hover:text-[#FFCC00] cursor-pointer transition-colors">Workshops</li>
                                <li className="hover:text-[#FFCC00] cursor-pointer transition-colors">Competitions</li>
                                <li className="hover:text-[#FFCC00] cursor-pointer transition-colors">Seminars</li>
                                <li className="hover:text-[#FFCC00] cursor-pointer transition-colors">Achievements</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest mb-6">
                                Join Us?
                            </h3>
                            <a href="#contact" className="block w-full py-4 bg-[#FFCC00] text-black font-bold text-center uppercase tracking-widest hover:bg-white transition-colors">
                                Become a Member
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ActivitiesPage;

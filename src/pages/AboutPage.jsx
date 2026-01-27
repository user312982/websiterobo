import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-[#020403] pt-32 pb-20 px-6 md:px-16 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#FFCC00]/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">Est. 2014</span>
                    <h1 className="text-5xl md:text-7xl font-rajdhani font-bold text-white mb-6">
                        ROBOTIK <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#FFE066]">ITK</span>
                    </h1>
                    <p className="text-[#88998C] text-lg max-w-2xl mx-auto leading-relaxed">
                        Pioneering the future of automation and robotics technology in Kalimantan.
                        From humble beginnings to national competitors.
                    </p>
                </motion.div>

                {/* History Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-[#FFCC00] pl-6">
                            History
                        </h2>
                        <p className="text-[#F0F2F0] leading-loose mb-6">
                            Unit Kegiatan Mahasiswa (UKM) Robotik di Institut Teknologi Kalimantan (ITK) bermula dari semangat mahasiswa untuk mengembangkan minat dan bakat di bidang teknologi, khususnya robotika. Sejak berdirinya ITK pada tahun 2014, komunitas robotika telah menjadi wadah utama bagi mahasiswa teknik untuk berinovasi.
                        </p>
                        <p className="text-[#88998C] leading-loose">
                            Kami terus berkembang menjadi salah satu UKM paling berprestasi di ITK, dengan fokus pada pengembangan teknologi tepat guna dan kompetisi robotika nasional seperti Kontes Robot Indonesia (KRI) dan Kontes Robot Terbang Indonesia (KRTI).
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] border border-[#FFCC00]/20 bg-[#FFCC00]/5 rounded-lg overflow-hidden group"
                    >
                        {/* Placeholder for history image - using CSS pattern for now */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(circle, #FFCC00 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-rajdhani font-bold text-9xl text-[#FFCC00]/10">2014</span>
                        </div>
                    </motion.div>
                </div>

                {/* Divisions / Asmawarman Section */}
                <div className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-white mb-16 uppercase tracking-wider"
                    >
                        Our Divisions & Teams
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Asmawarman (Flying Robot) */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-[#0A0C0A] border border-[#FFCC00]/20 p-8 rounded-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <svg className="w-24 h-24 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#FFCC00] mb-4">ASMAWARMAN</h3>
                            <p className="text-[#88998C] text-sm mb-6">
                                Tim spesialis Robot Terbang (UAV/Drone). Berfokus pada divisi Fixed Wing, Racing Plane, dan VTOL untuk kompetisi KRTI. Menjadi ujung tombak inovasi kedirgantaraan ITK.
                            </p>
                            <div className="h-1 w-12 bg-[#FFCC00] rounded-full" />
                        </motion.div>

                        {/* Card 2: KRI Teams (Wheeled/Legged) */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-[#0A0C0A] border border-[#FFCC00]/20 p-8 rounded-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <svg className="w-24 h-24 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-4.41-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.22-3.22-7.51-7.51 3.22 3.22 7.51z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#FFCC00] mb-4">KRI DIVISION</h3>
                            <p className="text-[#88998C] text-sm mb-6">
                                Fokus pada Robot SAR, Robot Sepak Bola Beroda/Humanoid, dan Robot Seni Tari. Mengikuti ajang bergengsi Kontes Robot Indonesia setiap tahunnya.
                            </p>
                            <div className="h-1 w-12 bg-[#FFCC00] rounded-full" />
                        </motion.div>

                        {/* Card 3: Research & Tech */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-[#0A0C0A] border border-[#FFCC00]/20 p-8 rounded-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                <svg className="w-24 h-24 text-[#FFCC00]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#FFCC00] mb-4">R&D TEAM</h3>
                            <p className="text-[#88998C] text-sm mb-6">
                                Departemen Penelitian dan Pengembangan yang menciptakan teknologi baru, mengadakan workshop, dan pelatihan untuk regenerasi anggota.
                            </p>
                            <div className="h-1 w-12 bg-[#FFCC00] rounded-full" />
                        </motion.div>
                    </div>
                </div>

                {/* Vision Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 border-l-2 border-[#FFCC00] bg-[#FFCC00]/5">
                        <h3 className="text-2xl font-bold text-white mb-4">VISION</h3>
                        <p className="text-[#F0F2F0]">
                            Menjadi pusat unggulan pengembangan teknologi robotika di Kalimantan yang inovatif, kompetitif, dan berkontribusi nyata bagi masyarakat dan bangsa.
                        </p>
                    </div>
                    <div className="p-8 border-l-2 border-[#FFCC00] bg-[#FFCC00]/5">
                        <h3 className="text-2xl font-bold text-white mb-4">MISSION</h3>
                        <ul className="text-[#F0F2F0] list-disc list-inside space-y-2">
                            <li>Mengembangkan potensi mahasiswa di bidang teknologi robotika.</li>
                            <li>Berpartisipasi aktif dan berprestasi dalam kompetisi tingkat nasional dan internasional.</li>
                            <li>Melakukan riset dan pengabdian masyarakat berbasis teknologi tepat guna.</li>
                        </ul>
                    </div>
                </div>

                {/* Back to Home CTA */}
                <div className="text-center">
                    <Link to="/" className="inline-block px-10 py-4 border border-[#FFCC00] text-[#FFCC00] font-bold tracking-widest hover:bg-[#FFCC00] hover:text-black transition-all duration-300">
                        BACK TO HOME
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

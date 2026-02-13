import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ketuaImg from '../photos/ketua.JPG';
import wakilImg from '../photos/wakil.JPG';
import sekretarisImg from '../photos/sekretaris.jpeg';
import bendaharaImg from '../photos/bendahara.jpeg';
import aboutIMG from '../assets/image/about/about.jpeg';

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
                    <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">Est. 2019</span>
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
                            UKM Robotik ITK was born from the collective consciousness of Kalimantan Institute of Technology students regarding the importance of the young generation's role in mastering future technologies. As a concrete response to improve the quality of human resources in the field of robotics, this organization was officially established on November 11, 2019.
                        </p>
                        <p className="text-[#88998C] leading-loose">
                            Since its inception, UKM Robotik ITK was not only designed as a gathering place but as a strategic platform for students to explore, innovate, and develop their talents. Starting from the spirit to contribute to the nation's technological advancement, UKM Robotik ITK has now grown into a home for young innovators to achieve greatness and create tangible works.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] border border-[#FFCC00]/20 bg-[#FFCC00]/5 rounded-lg overflow-hidden group"
                    >
                        {/* Placeholder for history - SVG Icon */}
                        <div className="absolute inset-0 bg-[#FFCC00]/5 flex items-center justify-center">
                            <img
                                src={aboutIMG}
                                alt="Ketua"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                        </div>
                    </motion.div>
                </div>


                {/* Vision Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 border-l-2 border-[#FFCC00] bg-[#FFCC00]/5">
                        <h3 className="text-2xl font-bold text-white mb-4">VISION</h3>
                        <p className="text-[#F0F2F0]">
                            To realize UKM Robotik ITK as a center for research and development of science and technology in the field of robotics at the Kalimantan Institute of Technology.
                        </p>
                    </div>
                    <div className="p-8 border-l-2 border-[#FFCC00] bg-[#FFCC00]/5">
                        <h3 className="text-2xl font-bold text-white mb-4">MISSION</h3>
                        <ul className="text-[#F0F2F0] list-disc list-inside space-y-2">
                            <li>To cultivate committed and proactive members of ROBOTIK ITK, grounded in faith in God Almighty.</li>
                            <li>To foster a fighting spirit to achieve achievements for the organization and the ITK alma mater.</li>
                            <li>To shape ROBOTIK ITK members into creative and innovative students.</li>
                            <li>To integrate SPECTA values into science and technology development activities.</li>

                        </ul>
                    </div>
                </div>

                {/* Organizational Structure Placeholder */}
                <div className="mb-32 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wider">
                        Leadership
                    </h2>
                    <div className="inline-block p-8 border border-[#FFCC00]/30 rounded-lg bg-[#FFCC00]/5 max-w-2xl">
                        <p className="text-[#88998C] italic">
                            "Our organizational structure is designed for efficiency and innovation."
                        </p>
                        <div className="mt-6 grid grid-cols-4 gap-4 text-sm">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-[#222] rounded-full mb-3 overflow-hidden border-2 border-[#FFCC00]/30">
                                    <img
                                        src={ketuaImg}
                                        alt="Ketua"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="w-full h-full hidden items-center justify-center text-[#FFCC00] font-bold text-2xl">K</div>
                                </div>
                                <span className="text-white font-bold">Ketua</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-[#222] rounded-full mb-3 overflow-hidden border-2 border-[#FFCC00]/30">
                                    <img
                                        src={wakilImg}
                                        alt="Wakil Ketua"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="w-full h-full hidden items-center justify-center text-[#FFCC00] font-bold text-2xl">W</div>
                                </div>
                                <span className="text-white font-bold">Wakil</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-[#222] rounded-full mb-3 overflow-hidden border-2 border-[#FFCC00]/30">
                                    <img
                                        src={sekretarisImg}
                                        alt="Sekretaris"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="w-full h-full hidden items-center justify-center text-[#FFCC00] font-bold text-2xl">S</div>
                                </div>
                                <span className="text-white font-bold">Sekretaris</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-[#222] rounded-full mb-3 overflow-hidden border-2 border-[#FFCC00]/30">
                                    <img
                                        src={bendaharaImg}
                                        alt="Bendahara"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextElementSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="w-full h-full hidden items-center justify-center text-[#FFCC00] font-bold text-2xl">B</div>
                                </div>
                                <span className="text-white font-bold">Bendahara</span>
                            </div>

                        </div>
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

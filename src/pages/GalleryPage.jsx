import React, { useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Reverted to placeholder/abstract style, removing specific Unsplash images.
    // "Code Matrix" is now 'wide'.
    const galleryItems = [
        { id: 1, type: 'image', size: 'large', title: 'Robotic Research', category: 'Innovation' },
        { id: 2, type: 'image', size: 'regular', title: 'Circuit Design', category: 'Engineering' },
        // Decorative Block: Typography
        { id: 3, type: 'text', size: 'regular', title: 'EST. 2024', category: 'Legacy', content: 'EST.\n2024' },

        { id: 4, type: 'image', size: 'wide', title: 'Cyber Security', category: 'Software' },
        { id: 5, type: 'image', size: 'regular', title: 'Automation', category: 'Robotics' },
        { id: 6, type: 'image', size: 'regular', title: 'Future Tech', category: 'Competition' },

        // Decorative Block: Quote/Mission
        { id: 7, type: 'quote', size: 'large', title: 'Our Mission', category: 'Vision', content: '"Innovating the Future through Robotics."' },

        { id: 8, type: 'image', size: 'wide', title: 'Team Collaboration', category: 'Community' },
        { id: 9, type: 'image', size: 'regular', title: 'Precision', category: 'Hardware' },

        // Decorative Block: Pattern/Icon
        { id: 10, type: 'pattern', size: 'regular', title: 'System', category: 'Core', content: 'SYSTEM' },

        { id: 11, type: 'image', size: 'large', title: 'Micro Soldering', category: 'Electronics' },
        // Made 'wide' as requested
        { id: 12, type: 'image', size: 'wide', title: 'Code Matrix', category: 'Software' },
    ];

    return (
        <section className="min-h-screen bg-[#050806] pt-32 px-4 md:px-8 pb-20 relative overflow-hidden">
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
                    <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-4 block">Our Memories</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">GALLERY</h1>
                    <p className="text-[#88998C] text-lg max-w-2xl mx-auto">
                        A visual journey through our competitions, workshops, and team activities.
                    </p>
                </motion.div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className={`group relative rounded-xl overflow-hidden border border-white/10 bg-[#111] transition-colors duration-500 hover:border-[#FFCC00]/30
                                ${item.size === 'large' ? 'lg:row-span-2' : ''}
                                ${item.size === 'wide' ? 'md:col-span-2' : ''}
                            `}
                        >
                            {/* RENDER BASED ON TYPE */}
                            {item.type === 'image' && (
                                <>
                                    {/* Abstract Placeholder Visuals (Gradients/Noise) */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black" />
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="text-[#FFCC00] text-xs font-mono uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {item.category}
                                        </span>
                                        <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Decorative Icon */}
                                    <div className="absolute top-4 right-4 text-white/20 group-hover:text-[#FFCC00] transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </>
                            )}

                            {/* TEXT / TYPOGRAPHY BLOCK */}
                            {item.type === 'text' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A] group-hover:bg-[#151515] transition-colors duration-500">
                                    <div className="absolute top-0 right-0 p-4 opacity-50">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#FFCC00]">
                                            <path d="M0 0H40V1H0V0Z" fill="currentColor" />
                                            <path d="M39 0V40H40V0H39Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <h2 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] group-hover:text-white/10 transition-colors duration-500 leading-none text-center whitespace-pre-line select-none">
                                        {item.content}
                                    </h2>
                                    <div className="absolute bottom-6 left-6">
                                        <span className="text-[#FFCC00] text-xs tracking-widest uppercase border-0 border-white/20 pb-1">{item.category}</span>
                                    </div>
                                </div>
                            )}

                            {/* QUOTE BLOCK */}
                            {item.type === 'quote' && (
                                <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#0A0A0A] group-hover:bg-[#FFCC00] transition-colors duration-500 group">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

                                    <div className="relative text-center">
                                        <svg className="w-8 h-8 text-[#FFCC00] group-hover:text-black mb-4 mx-auto transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21L14.017 18C14.017 16.096 15.3195 14.6533 16.7115 14.6533H19.2385L19.2385 10.9707H14.0045L14.0045 3.00002H23.0035L23.0035 15.1953C23.0035 18.068 20.8655 21 17.5815 21H14.017ZM3.0035 21L3.0035 18C3.0035 16.096 4.3065 14.6533 5.6975 14.6533H8.2245L8.2245 10.9707H2.9905L2.9905 3.00002H11.9895L11.9895 15.1953C11.9895 18.068 9.8515 21 6.5685 21H3.0035Z"></path>
                                        </svg>
                                        <p className="text-2xl font-light text-white group-hover:text-black transition-colors duration-500">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* PATTERN / ICON BLOCK */}
                            {item.type === 'pattern' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-[#111] overflow-hidden">
                                    <div className="absolute inset-0 opacity-10" style={{
                                        backgroundImage: 'radial-gradient(#FFCC00 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                    <div className="w-24 h-24 border border-[#FFCC00] rotate-45 group-hover:rotate-90 transition-transform duration-700 flex items-center justify-center">
                                        <div className="w-16 h-16 border border-white/30" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPage;

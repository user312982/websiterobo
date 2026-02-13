import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RobotikImage from '../assets/robotik.svg';
import LoveImage from '../assets/love.svg';

const EasterEgg = () => {
    const [activeMode, setActiveMode] = useState(null); // 'robotik' | 'lylla' | null

    const triggerLove = (mode) => {
        if (activeMode) return;
        setActiveMode(mode);
        // Duration depends on mode: Lylla 4s, Robotik 3s
        const duration = mode === 'lylla' ? 4000 : 3000;
        setTimeout(() => setActiveMode(null), duration);
    };

    useEffect(() => {
        let keySequence = [];
        const robotikTarget = ['r', 'o', 'b', 'o', 't', 'i', 'k'];
        const lyllaTarget = ['l', 'y', 'l', 'l', 'a'];

        const handleKeyDown = (e) => {
            keySequence.push(e.key.toLowerCase());
            // Keep buffer long enough for 'robotik' (7 chars)
            if (keySequence.length > 10) keySequence.shift();

            // Check endsWith for robustness
            const seqString = keySequence.join('');
            if (seqString.endsWith(robotikTarget.join(''))) {
                triggerLove('robotik');
                keySequence = [];
            } else if (seqString.endsWith(lyllaTarget.join(''))) {
                triggerLove('lylla');
                keySequence = [];
            }
        };

        const handleCustomTrigger = () => triggerLove('robotik');

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('trigger-love', handleCustomTrigger);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('trigger-love', handleCustomTrigger);
        };
    }, [activeMode]);

    return (
        <div className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden ${activeMode ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <AnimatePresence mode="wait">
                {activeMode && (
                    <>
                        {/* Black Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-black z-10"
                        />

                        {/* CONTENT CONTAINER - Full Screen Center */}
                        <div className="relative z-20 w-full h-full flex items-center justify-center">

                            {/* MODE: ROBOTIK (Instant Robot) */}
                            {activeMode === 'robotik' && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: [0, 3.5, 3.5, 3.5],
                                        opacity: [0, 1, 1, 0]
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 3,
                                        times: [0, 0.6, 0.8, 1],
                                        ease: "easeInOut"
                                    }}
                                >
                                    <img
                                        src={RobotikImage}
                                        alt="Robotik"
                                        className="w-64 h-64 object-contain filter drop-shadow-[0_0_50px_rgba(100,100,255,0.5)]"
                                    />
                                </motion.div>
                            )}

                            {/* MODE: LYLLA (Envelope Animation) */}
                            {activeMode === 'lylla' && (
                                <>
                                    {/* Envelope Group - Fades OUT completely before Heart starts */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <motion.div
                                            animate={{ opacity: 0 }}
                                            transition={{ delay: 1.5, duration: 0.5 }} // Completely gone by t=2.0s
                                            className="relative w-64 h-48"
                                        >
                                            {/* Envelope Body (Back) */}
                                            <div className="absolute inset-x-0 bottom-0 h-32 bg-[#e0e0e0] border-2 border-gray-300 rounded-b-lg shadow-2xl z-20" />

                                            {/* Envelope Flap (Top) - Opens */}
                                            <motion.div
                                                initial={{ rotateX: 0, zIndex: 30 }}
                                                animate={{ rotateX: 180, zIndex: 10 }}
                                                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                                                style={{ originY: 0, clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
                                                className="absolute inset-x-0 top-16 h-16 bg-[#d1d1d1] border-2 border-gray-400 opacity-90"
                                            />

                                            {/* Envelope Front (Cover) */}
                                            <div className="absolute inset-x-0 bottom-0 h-32 z-40 pointer-events-none">
                                                <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-md" preserveAspectRatio="none">
                                                    <path d="M0,0 L50,30 L100,0 L100,60 L0,60 Z" fill="#f5f5f5" stroke="#d1d1d1" strokeWidth="0.5" />
                                                </svg>
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Heart - Starts AFTER envelope is gone (delay > 2.0s) */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: [0, 3.5, 3.5, 3.5],
                                            opacity: [0, 1, 1, 0]
                                        }}
                                        transition={{
                                            delay: 2.0, // Start exactly when envelope is faded out
                                            duration: 3,
                                            times: [0, 0.6, 0.8, 1],
                                            ease: "easeInOut"
                                        }}
                                        className="absolute z-50 pointer-events-none"
                                    >
                                        <img
                                            src={LoveImage}
                                            alt="Love"
                                            className="w-64 h-64 object-contain filter drop-shadow-[0_0_50px_rgba(255,20,20,0.5)]"
                                        />
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EasterEgg;

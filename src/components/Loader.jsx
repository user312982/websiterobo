import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from '/src/logo/logo.webp';

const Loader = ({ onLoadingComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds total load time
        const steps = 100;
        const interval = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= 100) {
                clearInterval(timer);
                setTimeout(onLoadingComplete, 800); // Delay before curtain rise
            }
        }, interval);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#020403] flex flex-col items-center justify-center"
            initial={{ y: 0 }}
            exit={{
                y: '-100%',
                transition: {
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1] // Custom quint ease for dramatic reveal
                }
            }}
        >
            {/* Background Texture for Loader */}
            <div className="absolute inset-0 bg-[#FFCC00]/5 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at center, transparent 0%, #020403 70%)` }}
            />

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo with pulse */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: [1, 1.05, 1],
                        filter: ['drop-shadow(0 0 0px #FFCC00)', 'drop-shadow(0 0 20px #FFCC00)', 'drop-shadow(0 0 0px #FFCC00)']
                    }}
                    transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity }}
                    className="mb-12"
                >
                    <img src={Logo} alt="Logo" className="w-24 h-24 object-contain" />
                </motion.div>

                {/* Massive Lusion-style Counter */}
                <div className="overflow-hidden">
                    <motion.h1
                        className="text-[12rem] md:text-[16rem] font-bold text-[#FFCC00] leading-none font-rajdhani tracking-tighter"
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {count}%
                    </motion.h1>
                </div>

                <motion.div
                    className="mt-8 flex items-center gap-4 text-[#88998C] font-mono text-sm tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span>Initializing Systems</span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >_</motion.span>
                </motion.div>
            </div>

            {/* Progress line at bottom */}
            <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#FFCC00]"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
            />
        </motion.div>
    );
};

export default Loader;

import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, color = '#FFCC00' }) => {
    return (
        <>
            {/* The Transition Curtain */}
            {/* We use a fixed overlay that animates OUT when the component mounts */}
            <motion.div
                className="fixed inset-0 z-[9999] pointer-events-none flex"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, transition: { delay: 0.8, duration: 0.1 } }}
                exit={{ opacity: 0 }} // On exit we don't need this wrapper to do much if we use the same effect in reverse
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="h-full flex-1 bg-[#050806] relative"
                        initial={{ scaleY: 1, transformOrigin: "bottom" }}
                        animate={{
                            scaleY: 0,
                            transformOrigin: "bottom",
                            transition: {
                                duration: 0.8,
                                delay: 0.1 * i,
                                ease: [0.76, 0, 0.24, 1] // Custom ease for premium feel
                            }
                        }}
                        exit={{
                            scaleY: 1,
                            transformOrigin: "top",
                            transition: {
                                duration: 0.5,
                                delay: 0.05 * i,
                                ease: [0.76, 0, 0.24, 1]
                            }
                        }}
                    >
                        {/* Safe Color Accent at the bottom/top of the strip */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-1"
                            style={{ backgroundColor: color }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* The Actual Page Content */}
            {/* We hide the content briefly or animate it in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.4 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageTransition;

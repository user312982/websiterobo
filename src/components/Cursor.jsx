import React, { useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const Cursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[9999] transition duration-300"
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(255, 255, 255, 0.10),
                        transparent 80%
                    )
                `,
            }}
        />
    );
};

export default Cursor;

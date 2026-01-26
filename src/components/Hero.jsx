import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import Logo from '/src/logo/logo.png';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const logoY = useTransform(scrollY, [0, 500], [0, 100]);

    // 3D Tilt Effect for Logo
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden perspective-[1000px]">
            {/* Alive Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[80vw] md:w-[60vw] h-[60vh] md:h-[80vh] bg-gradient-to-b from-[#003311]/30 to-transparent blur-[80px] md:blur-[120px] pointer-events-none rounded-full"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -30, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-0 left-0 w-[80vw] md:w-[50vw] h-[50vh] md:h-[70vh] bg-gradient-to-t from-[#FFCC00]/10 to-transparent blur-[60px] md:blur-[100px] pointer-events-none rounded-full"
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 items-center">
                {/* Text Content */}
                <motion.div
                    className="md:col-span-7 order-2 md:order-1 text-center md:text-left"
                    style={{ y: y1 }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[2px] w-12 bg-[#FFCC00]"></div>
                        <span className="text-[#FFCC00] font-mono text-sm tracking-widest uppercase">Pusat Riset Robotika</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-huge font-bold text-white leading-[0.9] mb-8 tracking-tight"
                    >
                        ENGINEERING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#FFE066]">THE FUTURE</span>
                    </motion.h1>

                    <div className="flex flex-col md:flex-row items-start gap-12 border-t border-white/10 pt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-md"
                        >
                            <p className="text-[#88998C] text-lg leading-relaxed">
                                We are Robotic ITK. A collective of engineers, designers, and innovators pushing the boundaries of autonomous systems.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* LOGO Section - Interactive 3D Tilt */}
                <motion.div
                    className="md:col-span-5 flex justify-center md:justify-end relative perspective-[1000px] order-1 md:order-2 mb-12 md:mb-0"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
                    style={{ y: logoY }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="relative w-64 h-64 md:w-[500px] md:h-[500px]"
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Depth Layers for Parallax Feel */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-[#FFCC00]/30"
                            style={{ translateZ: "50px" }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute inset-8 rounded-full border border-dashed border-[#FFCC00]/20"
                            style={{ translateZ: "20px" }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />

                        {/* The Logo with strong drop shadow for depth */}
                        <div className="absolute inset-0 flex items-center justify-center p-12" style={{ transform: "translateZ(80px)" }}>
                            <img
                                src={Logo}
                                alt="Robotic ITK Logo"
                                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,204,0,0.4)]"
                            />
                        </div>

                        {/* Floating particles */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-6 h-6 bg-[#FFCC00] rounded-full blur-[2px]"
                            style={{ translateZ: "100px" }}
                            animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-10 -left-8 w-4 h-4 bg-white/50 rounded-full blur-[1px]"
                            style={{ translateZ: "60px" }}
                            animate={{ y: [0, 40, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

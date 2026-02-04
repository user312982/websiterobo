import React, { useRef, useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { depts } from "../data/departments";
import PageTransition from "../components/PageTransition";

const DepartmentDetail = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const dept = depts.find((d) => d.id === id);
  const containerRef = useRef(null);

  // Calculate Scroll Mapping
  // We want the horizontal scroll to happen as we scroll DOWN the page.
  // The "height" of the scrollable area determines the speed/length of the horizontal scroll.
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Transform vertical progress (0 to 1) into horizontal displacement (0 to -100%)
  // But we need to account for the viewport width to not scroll completely off screen.
  // We want the end state to be: right edge of last card aligns with right edge of screen.
  // Simplifying: Move just enough to show all cards.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  if (!dept) {
    return (
      <div className="min-h-screen bg-[#020403] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Department Not Found</h2>
          <Link to="/" className="text-[#FFCC00] underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition color={dept.themeColor}>
      {/* 
              Outer Container: Very tall to enable scrolling. 
              The content inside will be Sticky. 
            */}
      <section ref={containerRef} className="relative h-[300vh] bg-[#050806]">
        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row">
          {/* Left Info Panel (Static width) */}
          <div className="w-full pt-32 md:pt-0 md:w-[400px] lg:w-[500px] flex-shrink-0 p-8 md:p-16 flex flex-col justify-center border-r border-white/10 bg-[#050806] z-20 relative shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => navigate("/departments")}
              className="group flex items-center gap-2 text-sm font-bold text-white hover:text-[#FFCC00] transition-colors uppercase tracking-widest mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to Departments</span>
            </motion.button>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-[#FFCC00] font-mono text-sm mb-4 block"
            >
              /{dept.id}
            </motion.span>

            {/* Shared Element Title */}
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {dept.name}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <p className="text-[#88998C] text-lg leading-relaxed mb-8">
                {dept.desc}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-white/50 uppercase tracking-widest mb-8">
                <div className="h-[1px] w-12 bg-[#FFCC00]" />
                <span>Scroll Down to Explore Team</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Horizontal Scroll Panel */}
          <div className="flex-1 h-full relative overflow-hidden bg-[#020403] flex items-center">
            <motion.div
              style={{ x }}
              className="flex gap-12 px-16 items-center"
            >
              {dept.members.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative min-w-[300px] md:min-w-[400px] aspect-[3/4] group flex-shrink-0 perspective-[1000px]"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    duration: 0.5,
                    ease: "backOut",
                  }}
                >
                  {/* Card Content with 3D Hover */}
                  <div className="w-full h-full bg-[#111] border border-white/10 overflow-hidden relative shadow-2xl transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                    {/* Member Image Fallback */}
                    <div className="absolute inset-0 bg-neutral-900">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        /* Neutral Glass */
                        <div className="w-full h-full bg-white/5 relative backdrop-blur-2xl">
                          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      )}
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-24 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span
                        className={`text-xs font-mono uppercase tracking-widest mb-2 block ${index === 0 ? "text-[#FFCC00]" : "text-[#88998C]"}`}
                      >
                        {member.role}
                      </span>
                      <h4 className="text-3xl font-bold text-white mb-2">
                        {member.name}
                      </h4>
                      <div className="w-0 group-hover:w-full h-[2px] bg-[#FFCC00] transition-all duration-500" />
                    </div>

                    {/* Kadep Indicator */}
                    {index === 0 && (
                      <div className="absolute top-6 left-6 z-20">
                        <div className="bg-[#FFCC00] text-black text-xs font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
                          Head
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extra space at bottom to ensure scroll finishes comfortably */}
      <div className="h-screen bg-[#050806] flex items-center justify-center border-t border-white/10">
        <div className="text-center opacity-50">
          <p className="text-white text-sm tracking-widest uppercase mb-4">
            You've reached the end
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#FFCC00] underline"
          >
            Back to Top
          </button>
        </div>
      </div>
    </PageTransition>
  );
};

export default DepartmentDetail;

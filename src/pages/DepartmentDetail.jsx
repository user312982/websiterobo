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
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0a0a;
          border-radius: 10px;
          margin: 0 24px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #FFCC00, #FFD633);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #FFD633, #FFE066);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #FFCC00 #0a0a0a;
        }
      `}</style>
      <section className="min-h-screen bg-[#050806]">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Info Panel */}
          <div className="w-full pt-20 md:pt-0 md:w-[400px] lg:w-[500px] flex-shrink-0 p-6 md:p-16 flex flex-col justify-center md:border-r border-white/10 bg-[#050806] z-20 relative md:shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => navigate("/departments")}
              className="group flex items-center gap-2 text-xs md:text-sm font-bold text-white hover:text-[#FFCC00] transition-colors uppercase tracking-widest mb-6 md:mb-8"
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
              className="text-3xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight"
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
              <p className="text-[#88998C] text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                {dept.desc}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-white/50 uppercase tracking-widest mb-6 md:mb-8">
                <div className="h-[1px] w-12 bg-[#FFCC00]" />
                <span className="hidden md:inline">Scroll to Explore Team</span>
                <span className="md:hidden">Swipe to Explore Team</span>
              </div>
            </motion.div>
          </div>

          {/* Right Horizontal Scroll Panel */}
          <div className="flex-1 relative overflow-x-auto bg-[#020403] flex items-center py-8 md:py-0 custom-scrollbar">
            <div className="flex gap-6 md:gap-12 px-6 md:px-16 items-center">
              {dept.members.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative min-w-[280px] md:min-w-[400px] aspect-[3/4] group flex-shrink-0"
                  style={{ perspective: '2000px' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    duration: 0.5,
                    ease: "backOut",
                  }}
                >
                  {/* Card Content with 3D Hover */}
                  <div
                    className="w-full h-full bg-[#111] border border-white/10 overflow-hidden relative shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{
                      transformStyle: 'preserve-3d',
                      WebkitTransformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Member Image */}
                    <div
                      className="absolute inset-0 bg-neutral-900"
                      style={{
                        transform: 'translate3d(0, 0, 0)',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                      }}
                    >
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          style={{
                            transform: 'translate3d(0, 0, 0)',
                            WebkitTransform: 'translate3d(0, 0, 0)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            imageOrientation: 'from-image',
                          }}
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
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 pt-16 md:pt-24 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span
                        className={`text-xs font-mono uppercase tracking-widest mb-1 md:mb-2 block ${index === 0 ? "text-[#FFCC00]" : "text-[#88998C]"}}`}
                      >
                        {member.role}
                      </span>
                      <h4 className="text-xl md:text-3xl font-bold text-white mb-2">
                        {member.name}
                      </h4>
                      <div className="w-0 group-hover:w-full h-[2px] bg-[#FFCC00] transition-all duration-500" />
                    </div>

                    {/* Kadep Indicator */}
                    {index === 0 && (
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                        <div className="bg-[#FFCC00] text-black text-xs font-bold px-2 py-1 md:px-3 md:py-1 uppercase tracking-widest shadow-lg">
                          Head
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="h-40 md:h-60 bg-[#050806] flex items-center justify-center border-t border-white/10">
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

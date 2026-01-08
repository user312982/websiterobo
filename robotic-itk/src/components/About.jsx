import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 order-2 md:order-1">
                    {/* Image Placeholder */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="bg-gray-200 w-full h-80 flex items-center justify-center">
                            <span className="text-gray-400 font-bold text-xl">Team Photo Placeholder</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 order-1 md:order-2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black border-l-4 border-[#FFCC00] pl-4">
                        Who Are We?
                    </h2>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Robotic ITK is a dynamic robotics team dedicated to designing, building, and programming cutting-edge robots. We bring together students passionate about STEM to collaborate on innovative projects and compete at the highest levels.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our mission is to inspire the next generation of engineers and problem-solvers through hands-on robotics experience, fostering creativity, technical skills, and teamwork.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

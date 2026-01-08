import React from 'react';

const Community = () => {
    return (
        <section id="our-team" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Join Our Community</h2>
                    <div className="w-24 h-1 bg-[#FFCC00] mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Be part of a collaborative team that's shaping the future of robotics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-xl overflow-hidden shadow-lg h-80 relative group">
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
                            <span className="text-gray-500 font-bold">Community Image 1</span>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg h-80 relative group">
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
                            <span className="text-gray-500 font-bold">Community Image 2</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-gray-200 h-40 rounded-lg shadow-inner flex items-center justify-center">
                            <span className="text-xs text-gray-400">Gallery {i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Community;

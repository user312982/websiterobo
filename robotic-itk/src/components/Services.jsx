import React from 'react';

const Services = () => {
    return (
        <section id="what-we-do" className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black inline-block border-b-4 border-[#FFCC00] pb-2">What We Do</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        From concepts to competition, we cover every aspect of robotics engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-96 flex flex-col">
                            <div className="bg-gray-200 w-full h-48 rounded-lg mb-6 flex-shrink-0 flex items-center justify-center">
                                <span className="text-gray-400">Service Image {item}</span>
                            </div>
                            <div className="h-4 w-3/4 bg-gray-100 rounded mb-3"></div>
                            <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

import React from 'react';

const Stats = () => {
    const stats = [
        { label: 'Team Member', value: 'XXXX', bg: 'bg-[#333]' },
        { label: 'Competition Won', value: 'XXXX', bg: 'bg-[#333]' },
        { label: 'Robot Build', value: 'XXXX', bg: 'bg-[#333]' },
        { label: 'Years Active', value: 'XXXX', bg: 'bg-[#333]' },
    ];

    return (
        <section className="bg-[#003311] py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-[#2a4d35] bg-opacity-50 p-6 rounded-lg text-center backdrop-blur-sm border border-white/10 hover:border-white/30 transition-colors">
                            <h3 className="text-3xl md:text-4xl font-bold text-black mb-2 select-none">{stat.value}</h3>
                            <p className="text-white font-medium text-sm md:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

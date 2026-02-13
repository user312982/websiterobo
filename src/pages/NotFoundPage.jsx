import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-[#020403] flex items-center justify-center px-4 pt-20"
        >
            <div className="max-w-2xl w-full text-center">
                {/* 404 Number */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-[150px] md:text-[200px] font-bold text-[#FFCC00] leading-none">
                        404
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/"
                        className="bg-[#FFCC00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD633] transition-colors"
                    >
                        Back to Home
                    </Link>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-gray-800 text-8xl"
                >
                    🤖
                </motion.div>
            </div>
        </motion.div>
    );
};

export default NotFoundPage;

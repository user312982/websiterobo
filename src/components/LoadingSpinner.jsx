import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen bg-[#020403] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-gray-800 border-t-[#FFCC00] rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-[#FFCC00] rounded-full animate-spin-slow"></div>
                </div>
                
                {/* Loading text */}
                <p className="text-gray-400 text-sm font-medium animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner;

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div>
            {/* Hero Image Section */}
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
                {/* Hero Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/hero.jpg"
                        alt="Delicious Food"
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                    />
                </div>

                {/* Optional Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
                        Delicious Food Awaits You!
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;

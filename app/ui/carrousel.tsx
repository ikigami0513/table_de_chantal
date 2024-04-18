"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Carrousel({images} : { images: Array<string>}) {
    // State and ref initialization
    const [currentImg, setCurrentImg] = useState(0);
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
    const carouselRef = useRef(null);

    // useEffect to get the initial carousel size
    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement;
        let { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            });
        }
    }, []);

    return (
        <div className="w-3/4 bg-white mb-8 rounded-xl">
            {/* Carousel container */}
            <div className="w-full h-96 rounded-md overflow-hidden relative">
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width
                    }}
                    className="w-full h-full absolute flex transition-all duration-300"
                >
                    {/* Map through data to render images */}
                    {images.map((v, i) => (
                        <div key={i} className="relative shrink-0 w-full h-full flex justify-center items-center">
                            <Image 
                                className="pointer-events-none"
                                alt={`carousel-image-${i}`}
                                src={v}
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-3">
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
                >
                    {"<"}
                </button>
                <button
                    disabled={currentImg === images.length - 1}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === images.length - 1 && 'opacity-50'}`}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};
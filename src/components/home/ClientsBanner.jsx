'use client';
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const ClientsBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const slidesRef = useRef(null);

  const clients = [
    {
      id: 1,
      image: "/assets/client-banner/myro-banner.png",
      website: "https://myro.bot"
    },
    {
      id: 2,
      image: "/assets/client-banner/goldstar-banner.png",
      website: "https://goldstar.com"
    },
    {
      id: 3,
      image: "/assets/client-banner/rabbit-banner.png",
      website: "https://rabbitautocare.com"
    }
  ];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % clients.length;
    animateSlide(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + clients.length) % clients.length;
    animateSlide(prevIndex);
  };

  const animateSlide = (newIndex) => {
    const slideWidth = 968; // Fixed width for each slide matching banner width
    
    gsap.to(slidesRef.current, {
      x: -newIndex * slideWidth,
      duration: 0.8,
      ease: "power2.inOut"
    });

    setCurrentIndex(newIndex);
  };

  const handleBannerClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    // Set initial position
    if (slidesRef.current) {
      gsap.set(slidesRef.current, { x: 0 });
    }
  }, []);

  return (
    <div className="relative w-full flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/assets/client-banner/client-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 mt-6">
        {/* Header Badge */}
        <div className="flex justify-center">
          <Image 
            src="/assets/client-banner/header-badge.png" 
            alt="Kaisa to छाप छोड़" 
            width={394} 
            height={230}
            className="object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>

        {/* Banner Container */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-[968px] mx-auto overflow-hidden my-6"
        >
          <div 
            ref={slidesRef}
            className="flex"
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 w-[968px] flex justify-center items-center cursor-pointer"
                onClick={() => handleBannerClick(client.website)}
              >
                <Image 
                  src={client.image} 
                  alt={`Client banner ${client.id}`}
                  width={968}
                  height={508}
                  className="w-full max-w-[968px] h-[508px] object-contain hover:opacity-90 transition-opacity"
                  style={{ mixBlendMode: 'multiply' }}
                  priority={client.id === 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mb-16">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="relative h-12 flex items-center "
          >
            <Image 
              src="/assets/client-banner/previous-btn.png"
              alt="Previous"
              width={110}
              height={48}
              className={`object-contain h-12 w-auto transition-all ${
                currentIndex === 0 
                  ? 'opacity-100' 
                  : 'hover:scale-105 cursor-pointer'
              }`}
              style={{ mixBlendMode: 'multiply' }}
            />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === clients.length - 1}
            className="relative h-12 flex items-center "
          >
            <Image 
              src="/assets/client-banner/next-btn.png"
              alt="Next"
              width={110}
              height={48}
              className={`object-contain h-12 w-auto transition-all ${
                currentIndex === clients.length - 1 
                  ? 'opacity-100' 
                  : 'hover:scale-105 cursor-pointer'
              }`}
              style={{ mixBlendMode: 'multiply' }}
            />
          </button>
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center gap-3">
          {clients.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-500 w-8' 
                  : 'bg-gray-400 w-3'
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ClientsBanner;
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import { gsap } from 'gsap';

const SmartNation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // App icons data with corresponding mockups
  const appIcons = [
    { 
      name: 'Beta', 
      src: '/images/WorkImages/smartNationImages/app-occations/beta.png',
      mockup: '/images/WorkImages/smartNationImages/mobileMockUP/beta-mockup.png'
    },
    { 
      name: 'Default', 
      src: '/images/WorkImages/smartNationImages/app-occations/default.png',
      mockup: '/images/WorkImages/smartNationImages/mobileMockUP/default-mockup.png'
    },
    { 
      name: 'V2', 
      src: '/images/WorkImages/smartNationImages/app-occations/v2.png',
      mockup: '/images/WorkImages/smartNationImages/mobileMockUP/v2-mockup.png'
    },
    { 
      name: 'National Festival', 
      src: '/images/WorkImages/smartNationImages/app-occations/national-fest.png',
      mockup: '/images/WorkImages/smartNationImages/mobileMockUP/national-fest-mockup.png'
    },
    { 
      name: 'Product Launch', 
      src: '/images/WorkImages/smartNationImages/app-occations/product-launch.png',
      mockup: '/images/WorkImages/smartNationImages/mobileMockUP/product-launch-mockup.png'
    },
    { 
      name: 'Deepawali', 
      src: '/images/WorkImages/smartNationImages/app-occations/deepawali.png',
      mockup: '/images/WorkImages/smartNationImages/mobileMockUP/deepawali-mockup.png'
    },
    { 
      name: 'Save Energy', 
      src: '/images/WorkImages/smartNationImages/app-occations/save-energy.png',
      mockup: '/images/WorkImages/smartNationImages/mobileMockUP/save-energy-mockup.png'
    },
    { 
      name: 'Christmas', 
      src: '/images/WorkImages/smartNationImages/app-occations/crismas.png',
      mockup: '/images/WorkImages/smartNationImages/mobileMockUP/crismas-mockup.png'
    }
  ];

  // State for selected icon
  // const [selectedIcon, setSelectedIcon] = useState(appIcons[1]); // Default to 'Default' icon

  useEffect(() => {
    if (!containerRef.current) return;

    // Work page entrance animation (from bottom)
    gsap.fromTo(containerRef.current,
      {
        y: '100vh',
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Staggered animation for content sections
    const sections = containerRef.current.querySelectorAll('.section-animate');
    gsap.fromTo(sections,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.4
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Main Container with Grid Lines */}
      <div className="max-w-6xl mx-auto rounded-t-lg border-l border-r border-t border-gray-300 h-full">
        
        {/* Header Section */}
        <div className="pb-8 border-b border-gray-300 section-animate">
          {/* Top Header with Logo and Title */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-zinc-50 rounded-t-lg border-gray-300">
            <div className="w-16 h-16 flex items-center justify-between">
              <Image 
                src="/images/WorkImages/smartNationImages/sn-header-logo.png" 
                alt="Smart Nation Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-center flex-1">
              <h1 className="text-5xl font-light" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                Smart Nation
              </h1>
            </div>
            
            <div className="w-12 h-12 flex opacity-25 items-center justify-center">
              <Image 
                src="/images/WorkImages/smartNationImages/sa-header-logo.svg" 
                alt="SA Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-0 px-6 py-16">
            {/* Left Column - Text */}
            <div className="pr-8">
              <p className="text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                At Abiyantrik Solutions, I led the end-to-end design for Smart Nation, a home automation brand offering smart touch switches and smart MCBs. I worked across product branding, UI/UX design, and visual design—designing the complete mobile app experience along with custom icons, illustrations, micro-animations, and motion graphics. I also completely redesigned and developed the company&apos;s website using React and Next.js (thanks to AI), aligning it with the brand&apos;s modern and connected identity. Every element was crafted to reflect Smart Nation&apos;s vision of enabling a seamless and modern smart living experience.
              </p>
            </div>
            {/* Right Column - Video */}
            <div className="pl-8 flex items-center justify-center">
              <video 
                className="w-full h-auto max-w-md"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/images/WorkImages/smartNationImages/smart-nation-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* App UI/UX Section */}
        <div className="border-b border-gray-300 section-animate">
          {/* Section Header */}
          <div className="px-6 py-8 border-b border-gray-300 bg-zinc-50">
            <h2 className="text-4xl font-light text-left" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
              App UI/UX
            </h2>
          </div>

          {/* App Mockup with Grid Background */}
          <div 
            className="px-6 py-16 flex items-center justify-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, .05) .1em, transparent .1em), linear-gradient(90deg, rgba(0, 0, 0, .05) .1em, transparent .1em)',
              backgroundSize: '3em 3em',
              backgroundPosition: '1.5em 1.5em'
            }}
          >
            <div className="max-w-4xl">
              <Image 
                src="/images/WorkImages/smartNationImages/AppMockups-3screens.png" 
                alt="Smart Nation App Mockups" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Switch States Section */}
          <div className="px-6 py-8 bg-white border-t border-gray-300">
            {/* Horizontal Layout - Description and Switch States */}
            <div className="flex items-center justify-between gap-16">
              {/* Left Side - Description */}
              <div className="flex-shrink-0 max-w-lg">
                <p className="text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                  Switch states reflect device status—On is bold and active, Off is minimal, and Offline signals disconnection with alert cues.
                </p>
              </div>

              {/* Right Side - Switch States Grid */}
              <div className="flex gap-8">
                {/* On State */}
                <div className="text-center">
                  <div className="mb-4">
                    <Image 
                      src="/images/WorkImages/smartNationImages/switchOn.png" 
                      alt="Switch On State" 
                      className="h-24 mx-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                    On state
                  </p>
                </div>

                {/* Off State */}
                <div className="text-center">
                  <div className="mb-4">
                    <Image 
                      src="/images/WorkImages/smartNationImages/switchOff.png" 
                      alt="Switch Off State" 
                      className="h-24 mx-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                    Off state
                  </p>
                </div>

                {/* Offline State */}
                <div className="text-center">
                  <div className="mb-4">
                    <Image 
                      src="/images/WorkImages/smartNationImages/switchOffline.png" 
                      alt="Switch Offline State" 
                      className="h-24 mx-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                    Offline state
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional sections with section-animate class for staggered animations */}
        {/* ... (rest of your existing sections, each wrapped with section-animate class) ... */}

       {/* Ready to Collab Section */}
          <div className="rounded-b-lg section-animate">
            {/* Content Layout */}
            <div className="px-6 py-16">
              {/* Two Column Layout */}
              <div className="grid grid-cols-2 gap-16 items-center">
                {/* Left Column - Text Content */}
                <div>
                  <h3 className="text-5xl font-light mb-8" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                    Ready to Collab?
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                      Currently working at Abhiyantrik Solutions.
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                      Always open to exciting projects, collaborations, and connecting with creative minds.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-black text-lg font-medium" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                      satishhebbal000@gmail.com
                    </p>
                    <p className="text-black text-lg font-medium" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                      +91 8722519704
                    </p>
                  </div>
                </div>

                {/* Right Column - Footer Logo */}
                <div className="flex items-center justify-center">
                  <Image 
                    src="/images/WorkImages/smartNationImages/sa-footer-logo.svg" 
                    alt="SA Footer Logo" 
                    className="w-80 h-80 object-contain opacity-15"
                  />
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>           
  );
};

export default SmartNation;
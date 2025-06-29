"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CornerTable = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      // Generate ruler numbers - ONLY TOP for desktop
      const generateRulerNumbers = () => {
        const topRuler = document.querySelector('.ruler-numbers-top');
        
        if (topRuler) {
          topRuler.innerHTML = '';
          
          // Generate top ruler numbers (every 100px) and half numbers (every 50px)
          for (let i = 1; i <= 500; i++) {
            // Main numbers
            const numberEl = document.createElement('div');
            numberEl.className = 'ruler-number-top';
            numberEl.textContent = i.toString();
            numberEl.style.left = (i * 100) + 'px';
            topRuler.appendChild(numberEl);
            
            // Half numbers (1.5, 2.5, etc.)
            if (i < 500) {
              const halfEl = document.createElement('div');
              halfEl.className = 'ruler-number-top-half';
              halfEl.textContent = i + '.5';
              halfEl.style.left = (i * 100 + 50) + 'px';
              topRuler.appendChild(halfEl);
            }
          }
        }
      };
      
      generateRulerNumbers();
    }
  }, [isMobile]);

  // Mobile component
  const MobileLayout = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-900 px-4 py-6 relative">
      {/* Mobile Grid Background */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 19px,
              rgba(255, 255, 255, 0.1) 19px,
              rgba(255, 255, 255, 0.1) 21px,
              transparent 21px,
              transparent 39px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 19px,
              rgba(255, 255, 255, 0.1) 19px,
              rgba(255, 255, 255, 0.1) 21px,
              transparent 21px,
              transparent 39px
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 99px,
              rgba(255, 255, 255, 0.15) 99px,
              rgba(255, 255, 255, 0.15) 101px,
              transparent 101px,
              transparent 199px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 99px,
              rgba(255, 255, 255, 0.15) 99px,
              rgba(255, 255, 255, 0.15) 101px,
              transparent 101px,
              transparent 199px
            )
          `,
          backgroundSize: '20px 20px, 20px 20px, 100px 100px, 100px 100px'
        }}
      />
      {/* Fixed header */}
      <div className="fixed hidden top-0 left-0 right-0 bg-gradient-to-r from-emerald-800/95 to-emerald-900/95 backdrop-blur-sm z-50 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-light text-white" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            The Corner table
          </h1>
          <Image 
            src="/images/Unplugged/table/sa-white.svg" 
            alt="SA Logo" 
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
      </div>

      {/* Content with proper spacing from fixed header */}
      <div className="pt-20 space-y-8 z-10 relative">
        
        {/* Section 1: Reason for this project */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            Reason for this project
          </h2>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            My desk setup had become a nightmare of tangled wires, scattered extensions, and a woofer box sitting awkwardly on the floor. It looked messy and felt chaotic every time I sat down to work.
          </p>
          <div className="w-full">
            <Image 
              src="/images/Unplugged/table/problem.png" 
              alt="Messy desk setup"
              width={375}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Section 2: First of all the Design */}
        <section className="space-y-4">
          <h2 className="text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            First of all the Design
          </h2>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            I sketched out a simple corner table design - one that could hide all the wires, give my woofer a proper home, and add some storage shelves for my daily essentials like phone, watch, and earphones.
          </p>
          <div className="w-full">
            <Image 
              src="/images/Unplugged/table/sketch.png" 
              alt="Corner table sketch"
              width={420}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Section 3: Unplanned Arm Day */}
        <section className="space-y-4">
          <h2 className="text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            Unplanned Arm Day💪
          </h2>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            I had some wood strips lying around for months, so this project cost me nothing but time. Measured twice, cut once - carefully cutting each piece to exact dimensions.
          </p>
          <div className="w-full">
            <Image 
              src="/images/Unplugged/table/cut.png" 
              alt="Wood cutting process"
              width={420}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Section 4: Assembly Time */}
        <section className="space-y-4">
          <h2 className="text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            Assembly Time
          </h2>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            The satisfying part - watching separate pieces come together into something functional. A bit of wood glue and some strategic nailing did the trick.
          </p>
          <div className="w-full">
            <Image 
              src="/images/Unplugged/table/assemble.png" 
              alt="Assembly process"
              width={420}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Section 5: Adding Character */}
        <section className="space-y-4">
          <h2 className="text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            Adding Character
          </h2>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            Cut the shelves from an old plywood sheet I had stored away. Added rounded corners because details matter - it's these small touches that make something look intentional rather than thrown together.
          </p>
          <div className="w-full">
            <Image 
              src="/images/Unplugged/table/character.png" 
              alt="Adding character to shelves"
              width={420}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Section 6: The Finishing Touch */}
        <section className="space-y-4">
          <h2 className="text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            The Finishing Touch
          </h2>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            A coat of dark brown wood stain brought out the natural grain and gave it that rich, finished look. Sometimes the simplest finishes work best.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image 
              src="/images/Unplugged/table/roller.png" 
              alt="Paint roller"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <Image 
              src="/images/Unplugged/table/paint.png" 
              alt="Finished corner table"
              width={420}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Section 7: Problem Solved! */}
        <section className="space-y-4">
          <h2 className="text-4xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            Problem Solved!
          </h2>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            Set it up in the corner, tucked away all those messy wires, gave my woofer a proper spot, and suddenly my workspace felt organized again. Clean setup, clear mind.
          </p>
          <div className="w-full">
            <Image 
              src="/images/Unplugged/table/finish.png" 
              alt="Final organized workspace"
              width={450}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Section 8: Final Result */}
        <section className="space-y-4">
          <div className="w-full">
            <Image 
              src="/images/Unplugged/table/setup.png" 
              alt="Complete setup"
              width={420}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            From chaos to order. Sometimes the best solutions are the ones you build yourself, exactly the way you need them.
          </p>
        </section>

        {/* Section 9: Thanks */}
        <section className="text-center space-y-4 pb-8">
          <div className="w-full">
            <Image 
              src="/images/Unplugged/table/pose.png" 
              alt="Proud moment with finished project"
              width={420}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <h2 className="text-5xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
            Peees✌️
          </h2>
        </section>

      </div>
    </div>
  );

  // Desktop component (unchanged)
  const DesktopLayout = () => (
    <>
      <style jsx global>{`
        .cutting-mat-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cutting-mat-page {
          font-family: Arial, sans-serif;
          overflow-x: auto;
          overflow-y: hidden;
          background: #2a8c5a;
          height: 100vh;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .cutting-mat-page::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .cutting-mat-page {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .cutting-mat {
          position: relative;
          height: 100vh;
          width: 800vw;
          
          /* Use the same grid pattern colors but keep it subtle */
          background: linear-gradient(135deg, 
            #f8f8f8 0%, 
            #ffffff 25%, 
            #f5f5f5 50%, 
            #f0f0f0 75%, 
            #eeeeee 100%);
          
          /* Create the subtle texture and matte finish */
          background-image: 
            /* Fine noise texture for matte surface */
            radial-gradient(circle at 20% 80%, rgba(0,0,0,0.015) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(0,0,0,0.01) 1px, transparent 1px),
            radial-gradient(circle at 40% 40%, rgba(0,0,0,0.02) 1px, transparent 1px),
            
            /* Subtle wear patterns */
            linear-gradient(45deg, 
              transparent 40%, 
              rgba(0,0,0,0.008) 50%, 
              transparent 60%),
            
            /* Grid pattern - major lines using darker tones */
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 99px,
              rgba(102, 68, 34, 0.15) 99px,
              rgba(102, 68, 34, 0.15) 101px,
              transparent 101px,
              transparent 199px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 99px,
              rgba(102, 68, 34, 0.15) 99px,
              rgba(102, 68, 34, 0.15) 101px,
              transparent 101px,
              transparent 199px
            ),
            
            /* Half measurement grid lines */
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 49px,
              rgba(102, 68, 34, 0.1) 49px,
              rgba(102, 68, 34, 0.1) 51px,
              transparent 51px,
              transparent 99px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 49px,
              rgba(102, 68, 34, 0.1) 49px,
              rgba(102, 68, 34, 0.1) 51px,
              transparent 51px,
              transparent 99px
            ),
            
            /* Quarter measurement grid lines */
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 24px,
              rgba(102, 68, 34, 0.08) 24px,
              rgba(102, 68, 34, 0.08) 26px,
              transparent 26px,
              transparent 49px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 24px,
              rgba(102, 68, 34, 0.08) 24px,
              rgba(102, 68, 34, 0.08) 26px,
              transparent 26px,
              transparent 49px
            ),
            
            /* Fine grid overlay aligned with fine measurements */
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 9px,
              rgba(102, 68, 34, 0.05) 9px,
              rgba(102, 68, 34, 0.05) 11px,
              transparent 11px,
              transparent 19px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 9px,
              rgba(102, 68, 34, 0.05) 9px,
              rgba(102, 68, 34, 0.05) 11px,
              transparent 11px,
              transparent 19px
            );
          
          background-size: 
            3px 3px,
            5px 5px,
            7px 7px,
            200px 200px,
            100px 100px,
            100px 100px,
            50px 50px,
            50px 50px,
            25px 25px,
            25px 25px,
            10px 10px,
            10px 10px;
          
          /* Surface effects */
          box-shadow: 
            inset 0 0 100px rgba(0,0,0,0.05),
            inset 0 0 50px rgba(0,0,0,0.02);
        }

        /* Add subtle depth and texture variations with wear patterns */
        .cutting-mat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            /* Central wear fade - lighter in middle from use */
            radial-gradient(ellipse 800px 600px at 50% 50%, 
              rgba(255,255,255,0.03) 0%, 
              rgba(255,255,255,0.015) 40%, 
              transparent 70%),
            
            /* Random wear spots from cutting */
            radial-gradient(ellipse at 25% 35%, rgba(255,255,255,0.02) 40px, transparent 120px),
            radial-gradient(ellipse at 65% 25%, rgba(255,255,255,0.015) 30px, transparent 90px),
            radial-gradient(ellipse at 40% 70%, rgba(255,255,255,0.018) 35px, transparent 100px),
            radial-gradient(ellipse at 75% 80%, rgba(255,255,255,0.012) 25px, transparent 80px),
            
            /* Edge darkening from handling */
            linear-gradient(0deg, rgba(0,0,0,0.02) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.02) 100%),
            linear-gradient(90deg, rgba(0,0,0,0.02) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.02) 100%);
          pointer-events: none;
        }

        /* Enhancement layer for ultra-realism with knife marks */
        .cutting-mat::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            /* Subtle knife score marks */
            repeating-linear-gradient(
              23deg,
              transparent 0px,
              transparent 180px,
              rgba(0,0,0,0.008) 180px,
              rgba(0,0,0,0.008) 181px,
              transparent 181px,
              transparent 320px
            ),
            repeating-linear-gradient(
              67deg,
              transparent 0px,
              transparent 240px,
              rgba(0,0,0,0.006) 240px,
              rgba(0,0,0,0.006) 241px,
              transparent 241px,
              transparent 400px
            ),
            /* Random shallow cuts */
            repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 350px,
              rgba(0,0,0,0.01) 350px,
              rgba(0,0,0,0.01) 351px,
              transparent 351px,
              transparent 600px
            );
          pointer-events: none;
        }

        /* Subtle integrated rulers that scroll with content - ONLY TOP */
        .ruler-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: inherit;
          z-index: 1000;
          overflow: hidden;
        }

        /* Subtle measurement markings using darker yellow/amber tones - ONLY TOP */
        .ruler-top::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: 
            /* Major marks - darker amber/yellow */
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 98px,
              rgba(153, 102, 51, 0.25) 98px,
              rgba(153, 102, 51, 0.25) 102px,
              transparent 102px,
              transparent 198px
            ),
            /* Half marks - lighter amber */
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 48px,
              rgba(153, 102, 51, 0.15) 48px,
              rgba(153, 102, 51, 0.15) 52px,
              transparent 52px,
              transparent 98px
            ),
            /* Fine marks - very subtle amber */
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 23px,
              rgba(153, 102, 51, 0.08) 23px,
              rgba(153, 102, 51, 0.08) 27px,
              transparent 27px,
              transparent 48px
            );
        }

        /* Subtle numbers blended into the mat - ONLY TOP */
        .ruler-numbers-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          pointer-events: none;
        }

        .ruler-number-top {
          position: absolute;
          top: 8px;
          font-size: 11px;
          font-weight: normal;
          color: rgba(102, 68, 34, 0.6);
          transform: translateX(-50%);
          font-family: 'Arial', sans-serif;
        }

        .ruler-number-top-half {
          position: absolute;
          top: 18px;
          font-size: 8px;
          font-weight: normal;
          color: rgba(102, 68, 34, 0.4);
          transform: translateX(-50%);
          font-family: 'Arial', sans-serif;
        }

        /* Main content area */
        .content-area {
          position: relative;
          z-index: 10;
          height: 100vh;
          width: 500vw;
          padding-top: 30px;
        }

        /* Welcome text styling */
        .welcome-text {
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translate(-50%, -50%);
          font-size: 6rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.95);
          font-family: 'Garamond', Georgia, serif;
          text-shadow: 
            0 4px 15px rgba(0,0,0,0.4),
            0 2px 8px rgba(0,0,0,0.3);
          z-index: 100;
          text-align: center;
        }

        @media (min-width: 768px) {
          .welcome-text {
            font-size: 8rem;
          }
        }
      `}</style>
      
      <div className="cutting-mat-page">
        <div className="cutting-mat scrollbar-hide">
          {/* Only top ruler */}
          <div className="ruler-top">
            <div className="ruler-numbers-top"></div>
          </div>
          
          <div className="content-area left-16">
            {/* Desktop Table Contents */}
            <>
              {/* Fixed Corner table heading at top left */}
              <h1 className="fixed top-4 left-16 text-4xl font-light text-white leading-tight m-0 z-[1000]" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                The Corner table
              </h1>
              
              {/* Fixed SA Logo at top right */}
              <div className="fixed top-6 right-16 m-0 z-[1000]">
                <Image 
                  src="/images/Unplugged/table/sa-white.svg" 
                  alt="SA Logo" 
                  width={64}
                  height={64}
                  className="w-full h-full object-contain text-white"
                />
              </div>

              <div className="flex w-max h-screen items-center px-12 py-12 gap-32">

                {/* Section 1: Reason for this project */}
                <div className="flex flex-col gap-3 ml-16 w-[525px]">
                  <h2 className="text-4xl font-light text-white leading-tight text-left" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                    Reason for this project
                  </h2>

                  <p className="text-lg w-96 text-white leading-relaxed text-left" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                    My desk setup had become a nightmare of tangled wires, scattered extensions, and a woofer box sitting awkwardly on the floor. It looked messy and felt chaotic every time I sat down to work.
                  </p>

                  <Image 
                    src="/images/Unplugged/table/problem.png" 
                    alt="Messy desk setup"
                    width={375}
                    height={300}
                    className="w-[575px] h-auto"
                  />
                </div>

                {/* Section 2: First of all the Design */}
                <div className="flex items-center ">
                  <div className="flex flex-col gap-12 w-[525px]">
                    <h2 className="text-6xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      First of all <br/>the Design
                    </h2>
                    
                    <p className="text-2xl text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      I sketched out a simple corner table design - one that could hide all the wires, give my woofer a proper home, and add some storage shelves for my daily essentials like phone, watch, and earphones.
                    </p>
                    <p className='text-white opacity-50' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                      scroll horizontally  →
                    </p>
                  </div>

                  <Image 
                    src="/images/Unplugged/table/sketch.png" 
                    alt="Corner table sketch"
                    width={420}
                    height={300}
                    className="w-[650px] h-auto -translate-x-36 "
                  />
                </div>

                {/* Section 3: Unplanned Arm Day */}
                <div className="flex items-center">
                  <div className="w-[525px]">
                    <h2 className="text-6xl font-light text-white leading-tight mb-9" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      Unplanned<br/> Arm Day💪
                    </h2>
                    
                    <p className="text-2xl text-white leading-relaxed m-0" style={{ fontFamily: 'Garamond, Georgia, serif'}}>
                      I had some wood strips lying around for months, so this project cost me nothing but time. Measured twice, cut once - carefully cutting each piece to exact dimensions.
                    </p>
                  </div>

                  <Image 
                    src="/images/Unplugged/table/cut.png" 
                    alt="Wood cutting process"
                    width={420}
                    height={300}
                    className="w-[920px] h-auto -translate-x-36"
                  />
                </div>

                {/* Section 4: Assembly Time */}
                <div className="flex items-center">
                  <div className="w-[525px]">
                    <h2 className="text-6xl font-light text-white leading-tight mb-9" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      Assembly Time
                    </h2>

                    <p className="text-2xl text-white leading-relaxed m-0" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      The satisfying part - watching separate pieces come together into something functional. A bit of wood glue and some strategic nailing did the trick.
                    </p>
                  </div>

                  <Image 
                    src="/images/Unplugged/table/assemble.png" 
                    alt="Assembly process"
                    width={420}
                    height={300}
                    className="w-[820px] h-auto -translate-y-26 -translate-x-36"
                  />
                </div>

                {/* Section 5: Adding Character */}
                <div className="flex items-center gap-16">
                  <div className="w-[525px]">
                    <h2 className="text-6xl font-light text-white leading-tight mb-9" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      Adding Character
                    </h2>
                    
                    <p className="text-2xl text-white leading-relaxed m-0" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      Cut the shelves from an old plywood sheet I had stored away. Added rounded corners because details matter - it's these small touches that make something look intentional rather than thrown together.
                    </p>
                  </div>

                  <Image 
                    src="/images/Unplugged/table/character.png" 
                    alt="Adding character to shelves"
                    width={420}
                    height={300}
                    className="w-[820px] h-auto translate-y-6"
                  />
                </div>

                {/* Section 6: The Finishing Touch */}
                <div className="flex items-center">
                  <div className='flex flex-col translate-y-36'>
                    <div className="w-[525px]">
                      <h2 className="text-6xl font-light text-white leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                        The Finishing Touch
                      </h2>
                      
                      <p className="text-2xl text-white leading-relaxed" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                        A coat of dark brown wood stain brought out the natural grain and gave it that rich, finished look. Sometimes the simplest finishes work best.
                      </p>
                    </div>
                    <Image 
                      src="/images/Unplugged/table/roller.png" 
                      alt="Paint roller"
                      width={300}
                      height={200}
                      className="w-[300px] h-auto translate-y-26"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <Image 
                      src="/images/Unplugged/table/paint.png" 
                      alt="Finished corner table"
                      width={420}
                      height={300}
                      className="w-[720px] h-auto"
                    />
                  </div>
                </div>

                {/* Section 7: Problem Solved! */}
                <div className="flex items-center gap-16">
                  <div className="w-[525px]">
                    <h2 className="text-7xl font-light text-white leading-tight mb-9" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      Problem Solved!
                    </h2>
                    
                    <p className="text-3xl text-white leading-relaxed m-0" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      Set it up in the corner, tucked away all those messy wires, gave my woofer a proper spot, and suddenly my workspace felt organized again. Clean setup, clear mind.
                    </p>
                  </div>

                  <Image 
                    src="/images/Unplugged/table/finish.png" 
                    alt="Final organized workspace"
                    width={450}
                    height={300}
                    className="w-[750px] h-auto"
                  />
                </div>

                {/* Section 8: Final Result */}
                <div className="flex flex-col">
                   <Image 
                    src="/images/Unplugged/table/setup.png" 
                    alt="Proud moment with finished project"
                    width={420}
                    height={300}
                    className="w-[920px] h-auto"
                  />
                  <div className="w-[920px] translate-x-10">
                    <p className="text-3xl text-white leading-relaxed " style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                      From chaos to order. Sometimes the best solutions are the ones you build yourself, exactly the way you need them.
                    </p>
                  </div>
                </div>

                {/* Section 9: Thanks */}
                <div className="flex items-center gap-42">
                  <Image 
                    src="/images/Unplugged/table/pose.png" 
                    alt="Proud moment with finished project"
                    width={420}
                    height={300}
                    className="w-[820px] h-auto translate-y-36"
                  />
                  <h2 className="text-8xl font-light text-white leading-tight m-0" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                    Peees✌️
                  </h2>
                </div>

              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default CornerTable;
import React from 'react';
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto h-full">
        {/* Main Grid Container with visible borders */}
        <div className="grid grid-cols-2 gap-0 h-full min-h-[calc(100vh-8rem)] rounded-xl border border-gray-300">
          
          {/* Left Column */}
          <div className="grid border-r border-gray-300" style={{ gridTemplateRows: '30% 70%' }}>
            
            {/* Top Left - Introduction Text (Grid 1) */}
            <div className="flex items-center justify-center rounded-t-xl p-6 border-b border-gray-300 bg-zinc-50">
            <h1 className="text-4xl leading-tight" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                <span className="text-gray-500">Hey,</span> I&apos;m Satish Hebbal
                <br />
                <span className="text-gray-500">a</span> Product Designer
                <br />
                <span className="text-gray-500">based in</span>{' '}
                <span className="text-black">Hubli, Karnataka.</span>
            </h1>
            </div>


            {/* Bottom Left - Profile Image (Grid 3) */}
            <div className="flex justify-center items-end p-6 pb-0">
              <div className="w-80 h-96 rounded-lg ">
                <Image 
                  src="/images/homeimages/myimage.png" 
                  alt="Satish Hebbal"
                  className="w-full h-full object-contain object-top"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid" style={{ gridTemplateRows: '30% 70%' }}>
            
            {/* Top Right - Logo (Grid 2) */}
            <div className="flex items-center justify-center p-6 border-b border-gray-300">
              <div className="w-full h-28">
                <Image 
                  src="/images/homeimages/sa.svg" 
                  alt="SA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Bottom Right - Description and Message Box (Grid 4) */}
            <div className="flex items-center justify-center p-10 rounded-b-xl bg-zinc-50">
              <div className="max-w-md flex flex-col items-center  text-center justify-between h-full">
                
                {/* Description Text */}
                <div className="mb-8 flex flex-col gap-12 ">
                  <p className="text-gray-500 text-base leading-relaxed mb-4 text-left" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                    Immersed in the design world for several years now, constantly chasing that perfect balance between form and function, one interface at a time.
                  </p>
                  
                  <p className="text-gray-500 text-base leading-relaxed text-right" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                    Mobile apps, web platforms, digital products — that&apos;s where I live and breathe, pouring my energy into creating experiences that just feel right.
                  </p>
                </div>

                {/* Message Input Box */}
                <div className="relative w-full">
                  <div className="bg-gray-100 border border-gray-300 rounded-3xl  px-5 py-3 flex items-center w-full">
                    <input 
                      type="text" 
                      placeholder="Say Hello"
                      className="bg-transparent flex-1 outline-none text-gray-600 placeholder-gray-400 text-sm"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
                    />
                    <button className="ml-3 w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="m5 12 7-7 7 7M12 5v14"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
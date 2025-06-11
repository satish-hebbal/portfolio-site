import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container with Grid Lines */}
      <div className="max-w-6xl mx-auto rounded-lg border border-gray-300 h-full">

        {/* Ready to Collab Section */}
        <div className="rounded-b-lg">
          {/* Content Layout */}
          <div className="px-12 py-12">
            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div>
                <h2 className="text-6xl font-light mb-8" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                  Ready to Collab?
                </h2>
                
                <div className="space-y-4 mb-12">
                  <p className="text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                    Currently working at Abhiyantrik Solutions.
                  </p>
                  <p className="text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                    Always open to exciting projects, collaborations, and connecting with creative minds.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-3">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className="text-gray-500 flex-shrink-0"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <p className="text-black text-lg font-medium" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                      satishhebbal000@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className="text-gray-500 flex-shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <p className="text-black text-lg font-medium" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                      +91 8722519704
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-regular text-zinc-00 mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                    Follow Me
                  </h3>
                  <div className="flex gap-6">
                    {/* Instagram */}
                    <Link 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="flex-shrink-0"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                        Instagram
                      </span>
                    </Link>

                    {/* LinkedIn */}
                    <Link 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="flex-shrink-0"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                        LinkedIn
                      </span>
                    </Link>

                    {/* X (Twitter) */}
                    <Link 
                      href="https://x.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="flex-shrink-0"
                      >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                      </svg>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                        X/Twitter
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - Logo */}
              <div className="flex items-center justify-center">
                <img 
                  src="/images/HomeImages/sa-flower-logo.png" 
                  alt="SA Flower Logo" 
                  className="w-80 h-80 object-contain"
                />
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-16 pt-8  text-center">
              <p className="text-gray-400 text-md" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
                Let's create something amazing together !
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>           
  );
};

export default Contact;
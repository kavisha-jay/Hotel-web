'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect if we are on the Home Page
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the sticky state after scrolling 80px
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Logic for Background Color and Text Color
  // Home (Top): Transparent, White Text
  // Home (Scrolled) & Other Pages: Deep Teal (#2c8a8c), White Text
  const isStickyState = !isHomePage || isScrolled;

  const navLinks = ["Home", "Rooms", "About", "Contact"];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex flex-col items-center ${
          isStickyState 
            ? "bg-[#2c8a8c] py-8 shadow-lg" // The Sticky Bar Style
            : "bg-transparent pt-4"        // The Initial Home Hero Style
        }`}
      >
        {/* Logo Section 
            Visibility: Only visible on Home Page when NOT scrolled 
        */}
        <div className={`transition-all duration-500 overflow-hidden flex flex-col items-center ${
          isStickyState ? "max-h-0 opacity-0 mb-0" : "max-h-[200px] opacity-100 mb-8"
        }`}>
          <Link href="/" className="flex flex-col items-center group cursor-pointer text-white">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="w-12 h-12 mb-2 opacity-90 transition-transform duration-500 group-hover:scale-110"
            >
              <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 1-9-9Z" />
              <path d="M4 18c2-2 4-2 6 0s4 2 6 0 2-2 2-2" strokeLinecap="round" />
            </svg>
            
            <div className="text-center">
              <p className="text-[10px] tracking-[0.4em] font-light uppercase opacity-80 mb-1">
                Maison D'hotes
              </p>
              <h1 className="text-4xl font-serif tracking-[0.15em] leading-tight">
                SANDA BEACH
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        <ul className={`hidden md:flex gap-12 text-[11px] font-medium tracking-[0.3em] uppercase text-white transition-all duration-300`}>
          {navLinks.map((item) => (
            <li key={item} className="relative group">
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="block">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden absolute top-4 right-4 z-50 flex flex-col gap-1.5 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-8 md:hidden z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {navLinks.map((item) => (
          <Link 
            key={item} 
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-2xl font-serif tracking-widest uppercase text-white hover:text-gray-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Full Navbar - Shows when not scrolled */}
      <nav className={`relative bg-transparent text-white p-4 border-b border-gray-800 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        {/* Navbar background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent"></div>
        
        {/* Navbar floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-white/10 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-purple-400/15 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className='w-10 h-10'>
              <img src="https://www.dimension.dev/build/q-715f17d1.png" alt="D" className='w-full h-full object-cover' />
            </div>
            <span className="text-xl font-bold text-white">Dimension</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <div className=" rounded-full px-6 py-3 text-sm font-light border border-gray-800">
              <div className='flex items-center space-x-2'>
                <div className="flex items-center text-gray-400 space-x-7">
                  <Link href="/about" className="hover:text-gray-300">About</Link>
                  <div className='space-x-1'>
                    <Link href="/careers">Careers</Link>
                    <span className="bg-gray-600 text-gray-300 text-xs rounded-full px-2 py-1">2</span>
                  </div>
                  <Link href="/blog">Blog</Link>
                  <Link href="/changelog">Changelog</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
              Join waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/about" className="block text-white hover:text-gray-300">About</Link>
            <div className="flex items-center space-x-2">
              <Link href="/careers" className="block text-white hover:text-gray-300">Careers</Link>
              <span className="bg-gray-600 text-gray-300 text-xs rounded-full px-2 py-1">2</span>
            </div>
            <Link href="/blog" className="block text-white hover:text-gray-300">Blog</Link>
            <Link href="/changelog" className="block text-white hover:text-gray-300">Changelog</Link>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg w-full mt-4">
              Join waitlist
            </button>
          </div>
        )}
      </nav>

      {/* Sticky Navigation - Shows when scrolled */}
      <div className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="relative rounded-full px-6 py-3 text-sm font-light border border-gray-800 overflow-hidden">
            {/* Sticky navbar gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-md"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
            <div className='relative z-10 flex items-center space-x-2'>
              <div className="flex items-center text-gray-400 space-x-7">
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <div className='space-x-1'>
                  <Link href="/careers">Careers</Link>
                  <span className="bg-gray-600 text-gray-300 text-xs rounded-full px-2 py-1">2</span>
                </div>
                <Link href="/blog">Blog</Link>
                <Link href="/changelog">Changelog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

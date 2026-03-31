"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-center md:justify-between">
        <Link href="/" className="flex items-center justify-center gap-2">
          <div className="relative w-[150px] h-[50px]">
            <Image 
              src="/logo.png" 
              alt="Olympia Gym Logo" 
              fill 
              className="object-contain object-center md:object-left scale-125"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-ui text-sm uppercase tracking-wider font-bold">
          <Link href="/" className="text-[var(--color-accent-red)] hover:text-white transition-colors">Home</Link>
          <Link href="#about" className="text-gray-300 hover:text-[var(--color-accent-red)] transition-colors">About</Link>
          <Link href="#services" className="text-gray-300 hover:text-[var(--color-accent-red)] transition-colors">Services</Link>
          <Link href="#contact" className="text-gray-300 hover:text-[var(--color-accent-red)] transition-colors">Contact Us</Link>
        </nav>

        <div className="hidden md:block">
          <a 
            href="https://wa.me/923000033232?text=Hello! I'm interested in joining Olympia Gym. Please provide more information about the memberships." 
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-[var(--color-accent-red)] text-white font-ui font-bold text-sm tracking-widest hover:bg-[var(--color-accent-maroon)] transition-all"
          >
            JOIN NOW
          </a>
        </div>
      </div>
    </header>
  );
}

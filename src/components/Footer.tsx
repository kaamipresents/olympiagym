"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  return (
    <>
      {/* Target wavy banner CTA before Footer */}
      <section className="bg-[var(--color-accent-red)] py-20 wavy-bg relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
         <div className="relative z-10 w-full max-w-4xl mx-auto">
            <h2 className="font-headline text-5xl md:text-7xl uppercase text-white mb-8 tracking-wider drop-shadow-lg">
              Ready to get started?
            </h2>
            <a 
              href="#pricing"
              className="inline-flex items-center justify-center px-10 py-5 font-ui font-extrabold text-[#000000] uppercase tracking-widest bg-white hover:bg-gray-200 transition-colors duration-300 rounded-full shadow-2xl"
            >
              START MY TRANSFORMATION
            </a>
         </div>
      </section>

      {/* 5-Column Digisoldev Styled Footer */}
      <footer className="bg-[#0a0a0a] border-t border-gray-900 pt-20 pb-10 text-gray-400 font-body">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Col 1: Logo & About */}
            <div className="lg:col-span-2 pr-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative w-[180px] h-[80px] mb-6 mx-auto md:mx-0">
                <Image 
                  src="/logo.png" 
                  alt="Olympia Gym Logo" 
                  fill 
                  className="object-contain object-center md:object-left scale-125"
                />
              </div>
              <p className="mb-6 max-w-sm">
                Olympia Gym (Muscle Factory) – Explore Fitness, Yoga, and Exercise. The largest and most equipped training facility in Faisalabad.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-accent-red)] flex items-center justify-center text-white hover:bg-[var(--color-accent-maroon)] transition-colors">
                  <FacebookIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-accent-red)] flex items-center justify-center text-white hover:bg-[var(--color-accent-maroon)] transition-colors">
                  <InstagramIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-accent-red)] flex items-center justify-center text-white hover:bg-[var(--color-accent-maroon)] transition-colors">
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>

            {/* Col 2: Useful Links */}
            <div>
              <h4 className="font-headline text-2xl text-[var(--color-accent-red)] uppercase mb-6 tracking-wide">Explore</h4>
              <ul className="space-y-3 font-ui font-medium">
                <li><Link href="#about" className="hover:text-[var(--color-accent-red)] transition-colors">About Us</Link></li>
                <li><Link href="#services" className="hover:text-[var(--color-accent-red)] transition-colors">Services</Link></li>
                <li><Link href="#pricing" className="hover:text-[var(--color-accent-red)] transition-colors">Memberships</Link></li>
                <li><Link href="#gallery" className="hover:text-[var(--color-accent-red)] transition-colors">Transformations</Link></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="font-headline text-2xl text-[var(--color-accent-red)] uppercase mb-6 tracking-wide">Services</h4>
              <ul className="space-y-3 font-ui font-medium">
                <li><Link href="#" className="hover:text-[var(--color-accent-red)] transition-colors">Personal Training</Link></li>
                <li><Link href="#" className="hover:text-[var(--color-accent-red)] transition-colors">Nutrition Plans</Link></li>
                <li><Link href="#" className="hover:text-[var(--color-accent-red)] transition-colors">IFBB Coaching</Link></li>
                <li><Link href="#" className="hover:text-[var(--color-accent-red)] transition-colors">Crossfit</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="font-headline text-2xl text-[var(--color-accent-red)] uppercase mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4 font-ui font-medium">
                <li className="flex gap-3">
                  <MapPin className="top-1 relative text-[var(--color-accent-red)] flex-shrink-0" size={18} />
                  <span>Canal Road, Faisalabad, Pakistan</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="text-[var(--color-accent-red)] flex-shrink-0" size={18} />
                  <span>+92 300 0033232</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="text-[var(--color-accent-red)] flex-shrink-0" size={18} />
                  <span>info@olympiagym.pk</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Line */}
          <div className="border-t border-[var(--color-accent-red)] border-opacity-30 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-[var(--color-accent-red)] font-ui font-bold mb-4 md:mb-0">
              © {new Date().getFullYear()} Olympia Gym. All rights reserved.
            </p>
            <div className="flex items-center gap-6 font-ui">
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  data: {
    headline: string;
    subheadline: string;
    ctaText: string;
    bgImage: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-12 lg:pt-32 lg:pb-16 bg-[var(--background)] overflow-hidden">
        {/* Wavy Background shape placed behind the text */}
        <div className="absolute inset-0 z-0 wavy-bg opacity-20 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.h1 
                className="font-headline text-5xl md:text-7xl lg:text-[100px] leading-[0.9] text-white uppercase tracking-wider mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {data.headline}
              </motion.h1>

              <motion.p 
                className="font-body text-gray-400 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed px-4 lg:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {data.subheadline}
              </motion.p>

              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Dual Buttons (Digisoldev Style) */}
                <a 
                  href="https://wa.me/923000033232?text=Hello! I'm interested in joining Olympia Gym. Please provide more information about the training programs."
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-ui font-extrabold text-white uppercase tracking-widest rounded-full bg-[var(--color-accent-red)] hover:bg-[var(--color-accent-maroon)] transition-colors shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    START NOW
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <a 
                  href="#services"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-ui font-extrabold text-white uppercase tracking-widest rounded-full border border-[var(--color-accent-red)] hover:bg-[var(--color-accent-red)]/10 transition-colors"
                >
                  LEARN MORE
                </a>
              </motion.div>
            </div>

            {/* Right Column Image Content */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[380px] md:h-[500px] lg:h-[600px]">
              {/* Organic/Blob Background Shape in Digisoldev red */}
              <motion.div 
                className="absolute inset-0 bg-[#FF0000] blob-shape opacity-20 filter blur-3xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1.2 }}
              />

              <motion.div 
                className="relative w-full h-full aspect-[4/5] md:aspect-auto rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  src={data.bgImage}
                  alt={data.headline}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-all duration-700 hover:scale-105 grayscale hover:grayscale-0"
                />
              </motion.div>

              {/* Floating Success Badge (Mimicking Claimable "Appeal Approved") */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:bottom-24 md:-left-12 lg:left-0 lg:-translate-x-1/2 bg-black/60 backdrop-blur-xl border border-white/10 text-white px-6 py-4 rounded-xl shadow-2xl z-20 flex items-center gap-3 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                 <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                 </div>
                 <div>
                    <p className="font-ui font-bold text-xs md:text-sm uppercase tracking-wider leading-tight">Transformation<br/>Guaranteed</p>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Digisoldev Red Scrolling Ticker */}
      <div className="bg-[var(--color-accent-red)] py-3 overflow-hidden border-y border-red-900 relative z-20">
        <div className="inline-flex items-center animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {/* Repeat content to ensure continuous scrolling effect */}
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center text-white font-ui font-extrabold uppercase text-sm md:text-base mx-6 whitespace-nowrap">
              PERSONAL TRAINING <span className="mx-6 opacity-50 text-xl font-light">|</span> 
              NUTRITION PLANS <span className="mx-6 opacity-50 text-xl font-light">|</span> 
              IFBB COACHING <span className="mx-6 opacity-50 text-xl font-light">|</span>
              CROSSFIT
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

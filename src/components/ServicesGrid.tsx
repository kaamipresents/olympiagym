"use client";

import { motion } from "framer-motion";
import { Dumbbell, Apple, Trophy, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

interface ServicesGridProps {
  services: ServiceItem[];
}

const iconMap: Record<string, React.ElementType> = {
  Dumbbell: Dumbbell,
  Apple: Apple,
  Trophy: Trophy
};

export default function ServicesGrid({ services }: ServicesGridProps) {
  const [activePill, setActivePill] = useState("All");

  return (
    <section id="services" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-5xl md:text-6xl mb-4 text-white uppercase tracking-wider"
          >
            Elite Training Services Unlocked
          </motion.h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Complete fitness solutions tailored for high-performance transformations.
          </p>

          {/* Categories Slider - Max 2-3 tabs as requested */}
          <div className="flex overflow-x-auto pb-4 mb-10 no-scrollbar md:justify-center">
            <div className="flex gap-4 px-6 whitespace-nowrap">
              {["All", ...Array.from(new Set(services.map(s => s.category)))].map((pill) => (
                <button 
                  key={pill} 
                  onClick={() => setActivePill(pill)}
                  className={`px-10 py-3 rounded-full font-ui text-xs font-bold uppercase transition-all duration-300 border ${
                    activePill === pill 
                      ? 'bg-[var(--color-accent-red)] text-white border-[var(--color-accent-red)] shadow-lg shadow-red-500/30' 
                      : 'glass-panel text-gray-400 border-white/10 hover:border-[var(--color-accent-red)] hover:text-white'
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid with reduced height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services
            .filter(service => activePill === "All" || service.category === activePill)
            .map((service, index) => {
              const IconComponent = iconMap[service.icon] || Dumbbell;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative glass-panel rounded-[2rem] p-8 min-h-[260px] flex flex-col justify-between group overflow-hidden transition-all duration-500 hover:border-white/20"
                >
                  {/* Subtle Background Icon */}
                  <div className="absolute -top-6 -right-6 opacity-[0.03] text-white group-hover:opacity-[0.08] transition-opacity duration-500">
                    <IconComponent size={180} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-headline text-3xl uppercase mb-3 text-white tracking-wide">
                      {service.title}
                    </h3>
                    <p className="font-body text-gray-400 leading-relaxed font-light text-sm max-w-[90%]">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex justify-end">
                    <a 
                      href={`https://wa.me/923000033232?text=Hello! I'm interested in the ${service.title} service at Olympia Gym.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-[var(--color-accent-red)] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                      <ArrowUpRight strokeWidth={3} size={22} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

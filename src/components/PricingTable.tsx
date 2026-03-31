"use client";

import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import Image from "next/image";

interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  joiningFee: string;
  highlight: boolean;
  badge?: string;
}

interface PricingProps {
  plans: Plan[];
}

export default function PricingTable({ plans }: PricingProps) {
  // Use the premium plan for the featured layout
  const featuredPlan = plans.find(p => p.id === "premium") || plans[1];

  return (
    <section id="pricing" className="py-24 bg-[var(--background)] border-t border-gray-900 border-opacity-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Big Image + Wavy Red Background (Claimable style) */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex justify-center items-center">
            {/* Wavy Olympia Red Shape */}
            <motion.div 
              className="absolute inset-0 blob-shape bg-[var(--color-accent-red)] lg:-translate-x-12 opacity-80 z-0"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            {/* Hero Image inside */}
            <motion.div 
              className="relative z-10 w-[80%] h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0a0a0a]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <Image 
                 src="/after-1.png"
                 alt="VIP Gym Member"
                 fill
                 className="object-cover"
               />
            </motion.div>
          </div>

            {/* Pricing Details Card */}
            <motion.div 
              className="w-full lg:w-1/2 glass-panel p-8 md:p-12 rounded-[2.5rem] border-white/10 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-red)] opacity-10 blur-[80px]" />
              
              <h2 className="font-headline text-5xl md:text-7xl uppercase text-white tracking-widest leading-tight mb-6">
                Membership <span className="text-[var(--color-accent-red)]">Plans</span>
              </h2>
              
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-ui text-5xl md:text-6xl font-extrabold text-white">
                  {featuredPlan.price}
                </span>
                <span className="font-body text-gray-400 capitalize text-xl">
                  {featuredPlan.duration}
                </span>
              </div>
              
              <p className="font-ui text-gray-500 font-bold mb-10 tracking-widest uppercase">
                + {featuredPlan.joiningFee}
              </p>

              <div className="space-y-4 mb-10 divider-y border-white/5">
                {featuredPlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
                    <span className="font-ui font-extrabold text-lg text-gray-300 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                    <Plus className="text-gray-600 group-hover:text-[var(--color-accent-red)] transition-colors" size={20} />
                  </div>
                ))}
              </div>

              <motion.a 
                href={`https://wa.me/923000033232?text=Hello! I'm interested in the ${featuredPlan.name} transformation plan.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-12 py-5 font-ui font-bold text-white uppercase tracking-[0.2em] bg-[var(--color-accent-red)] hover:bg-white hover:text-black transition-all duration-500 rounded-full shadow-lg w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                START MY TRANSFORMATION
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
  );
}

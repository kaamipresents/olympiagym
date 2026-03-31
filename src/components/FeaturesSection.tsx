"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="about" className="py-24 bg-[var(--background)] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-headline uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Olympia Gym?
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto font-body text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            With the right equipment and pro coaching, you can shatter your limits, build unparalleled strength, and transform your body securely.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - 2 Stacked Cards */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
            <motion.div 
              className="bg-[#111111] p-10 rounded-[30px] shadow-lg border border-gray-800 flex-1 hover:border-[var(--color-accent-red)] transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-headline tracking-wide uppercase mb-3">10+ Years Experience</h3>
              <p className="text-gray-400 font-body">Since our founding, we have transformed hundreds of athletes and fitness enthusiasts. Let our experience be your guide.</p>
            </motion.div>

            <motion.div 
              className="bg-[#111111] p-10 rounded-[30px] shadow-lg border border-gray-800 flex-1 hover:border-[var(--color-accent-red)] transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-3xl font-headline tracking-wide uppercase mb-3 text-[var(--color-accent-red)]">24/7 Access</h3>
              <p className="text-gray-400 font-body">Your workouts shouldn't wait. Access the muscle factory any time of the day or night to fit your intense schedule.</p>
            </motion.div>
          </div>

          {/* Right Column - 1 Large Card */}
          <motion.div 
            className="md:col-span-12 lg:col-span-7 bg-gradient-to-br from-[#1a0505] to-[var(--color-accent-maroon)] rounded-[30px] p-10 relative overflow-hidden flex flex-col justify-between min-h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 max-w-sm mb-10">
              <h3 className="text-4xl md:text-5xl font-headline tracking-wide uppercase mb-4 text-white">
                100% Guaranteed Transformation
              </h3>
              <p className="text-gray-200 font-body">
                Over 90% of dedicated Olympia members reach their peak physique within 12 weeks of our IFBB coaching protocols – delivering industry-leading results.
              </p>
            </div>

            {/* Embedded Subject Image */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[80%] z-0">
              <Image 
                src="/after-1.png"
                alt="Gym member transformation"
                fill
                className="object-contain object-bottom filter drop-shadow-2xl"
              />
            </div>
            
            {/* Red shape accent inside the right card */}
             <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[var(--color-accent-red)] opacity-20 blob-shape z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

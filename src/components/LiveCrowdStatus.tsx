"use client";

import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function LiveCrowdStatus() {
  const [isPeak, setIsPeak] = useState(false);

  useEffect(() => {
    // Determine peak hours (roughly 17:00 to 21:00)
    const hour = new Date().getHours();
    setIsPeak(hour >= 17 && hour <= 21);
  }, []);

  return (
    <section className="py-16 px-4 bg-[var(--color-neutral-dark)] border-b border-[#000000]">
      <div className="max-w-4xl mx-auto bg-[#000000] border border-gray-800 p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 group hover:border-gray-600 transition-colors">
        
        <div className="flex items-center gap-6">
          <div className="bg-gray-900 p-4 rounded-full relative">
            <Users className={`w-8 h-8 ${isPeak ? "text-[var(--color-accent-red)]" : "text-green-500"}`} />
            {/* Pulsing UI Mock indicator */}
            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${isPeak ? "bg-[var(--color-accent-red)]" : "bg-green-500"} animate-ping`} />
            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${isPeak ? "bg-[var(--color-accent-red)]" : "bg-green-500"}`} />
          </div>
          <div>
            <h3 className="font-ui font-extrabold uppercase text-white tracking-widest mb-1">Live Crowd Status</h3>
            <p className="font-body text-gray-400 text-sm">Real-time gym capacity overview</p>
          </div>
        </div>

        <div className="h-px md:h-12 w-full md:w-px bg-gray-800" />

        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="font-ui font-bold text-sm text-gray-300">
              {isPeak ? "Peak Hours (High Capacity)" : "Quiet Hours (Low Capacity)"}
            </span>
          </div>
          
          {/* Progress Bar Mock */}
          <div className="w-full md:w-64 bg-gray-900 h-3 rounded-full overflow-hidden">
            <motion.div 
              className={`h-full ${isPeak ? "bg-[var(--color-accent-red)]" : "bg-green-500"}`}
              initial={{ width: 0 }}
              whileInView={{ width: isPeak ? "85%" : "30%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="w-full flex justify-between mt-2 font-body text-xs text-gray-600">
            <span>Empty</span>
            <span>Full Capacity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

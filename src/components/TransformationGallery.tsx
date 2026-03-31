"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Transformation {
  id: string;
  name: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  labelBefore: string;
  labelAfter: string;
}

interface TransformationGalleryProps {
  transformations: Transformation[];
}

export default function TransformationGallery({ transformations }: TransformationGalleryProps) {
  // We'll show the first transformation as the highlighted one
  const item = transformations[0];

  return (
    <section className="py-24 px-4 bg-[#000000] border-y border-[var(--color-neutral-dark)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline text-5xl md:text-7xl mb-4 uppercase text-white"
          >
            Real <span className="text-[var(--color-accent-red)]">Results</span>
          </motion.h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto text-lg">
            No retouched photos. Just hard work, consistency, and expert coaching.
          </p>
        </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Before */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-2xl border border-white/5">
              <Image 
                src={item.beforeImage}
                alt={`${item.name} Before`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="inline-block bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10 rounded-lg font-ui font-bold uppercase text-xs tracking-widest text-white">
                  {item.labelBefore}
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-2xl border border-white/5">
              <Image 
                src={item.afterImage}
                alt={`${item.name} After`}
                fill
                className="object-cover scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-right">
                <div className="inline-block bg-[var(--color-accent-red)]/80 backdrop-blur-md px-4 py-2 border border-white/20 rounded-lg font-ui font-bold uppercase text-xs tracking-widest text-white">
                  {item.labelAfter}
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}

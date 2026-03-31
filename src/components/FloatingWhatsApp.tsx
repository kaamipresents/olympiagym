"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  whatsapp: string;
}

export default function FloatingWhatsApp({ whatsapp }: FloatingWhatsAppProps) {
  return (
    <motion.a
      href={`https://wa.me/${whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[var(--color-accent-red)] hover:bg-[var(--color-accent-maroon)] shadow-[0_4px_30px_rgba(255,0,0,0.4)] text-white p-4 rounded-full transition-colors group overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 origin-center" />
      <MessageCircle className="w-8 h-8 relative z-10" />
    </motion.a>
  );
}

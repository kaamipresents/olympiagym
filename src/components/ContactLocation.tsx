"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone } from "lucide-react";

interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
}

interface LocationInfo {
  street: string;
  city: string;
  country: string;
}

interface ContactLocationProps {
  contact: ContactInfo;
  location: LocationInfo;
}

export default function ContactLocation({ contact, location }: ContactLocationProps) {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-t from-[#000000] to-[var(--color-neutral-dark)] border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24 w-full"
          >
            <h2 className="font-headline text-5xl md:text-6xl mb-12 uppercase text-white">
              Get in <span className="text-[var(--color-accent-red)]">Touch</span>
            </h2>

            <div className="space-y-10 font-ui font-bold flex flex-col items-center md:items-start justify-center w-full">
              <a href={`tel:${contact.phone}`} className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-xl md:text-2xl hover:text-[var(--color-accent-red)] transition-all group">
                <div className="glass-panel p-5 rounded-2xl group-hover:border-[var(--color-accent-red)]/50 group-hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-8 h-8 md:w-6 md:h-6 text-white" />
                </div>
                <span className="tracking-tight">{contact.phone}</span>
              </a>

              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-xl md:text-2xl hover:text-green-400 transition-all group">
                <div className="glass-panel p-5 rounded-2xl group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all duration-300">
                  <MessageCircle className="w-8 h-8 md:w-6 md:h-6 text-white" />
                </div>
                <span className="tracking-tight">WhatsApp Us</span>
              </a>

              <div className="flex flex-col md:flex-row items-center gap-6 text-xl">
                <div className="glass-panel p-4 rounded-2xl border-white/5">
                  <MapPin className="w-6 h-6 text-[var(--color-accent-red)]" />
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="text-white text-lg leading-tight">{location.street}</span>
                  <span className="text-gray-500 font-body text-sm font-medium tracking-wide uppercase mt-1">{location.city}, {location.country}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <div className="w-full md:w-2/3 h-96 md:h-auto min-h-[500px] border border-gray-800 bg-[#000000] p-4 relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 top-auto h-2 bg-[var(--color-accent-red)] z-10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.6262446738914!2d73.157333475!3d31.454136175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269e3ebd88e13%3A0xac223adff1635c13!2sOlympia%20Gym%20(Muscle%20Factory)!5e0!3m2!1sen!2s!4v1711911000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(120%) invert(90%)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

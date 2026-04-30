'use client';

import { motion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end space-y-4">
      {/* Label Tooltip on Hover */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 hidden md:block"
      >
        <p className="text-sm font-black text-brand-dark">Besoin d'aide ?</p>
      </motion.div>

      {/* Main Floating Button */}
      <motion.a
        href="https://wa.me/237699808187?text=Bonjour,%20j’ai%20besoin%20d’un%20plombier%20à%20Douala."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all"
        id="floating-whatsapp-btn"
      >
        {/* Pulsing ring effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none" />
        
        <WhatsAppIcon className="w-8 h-8 md:w-10 md:h-10" />
      </motion.a>
    </div>
  );
}

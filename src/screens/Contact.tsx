'use client';

import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send, User, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
} as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app we'd send this to an API
    alert('Message envoyé avec succès ! Nous vous recontacterons bientôt.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <main className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="max-w-4xl mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-6xl font-display font-black text-brand-dark mb-4 sm:mb-6">Contactez SMG Plombier</h1>
          <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">Nous sommes à votre service 24h/24 et 7j/7 pour toutes vos urgences plomberie à Douala.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Info and Buttons */}
          <div className="space-y-8 sm:space-y-12">
            <motion.div {...fadeInUp} className="space-y-4 sm:space-y-6">
              {[
                { icon: MapPin, label: 'Localisation', value: 'Yassa, Douala, Cameroun' },
                { icon: Phone, label: 'Téléphone', value: '+237 6 99 80 81 87' },
                { icon: Clock, label: 'Disponibilité', value: '24h/24 – 7j/7' }
              ].map((info) => (
                <div key={info.label} className="flex p-5 sm:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-base sm:text-lg font-black text-brand-dark">{info.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-display font-black text-brand-dark">Contactez-nous en 1 clic</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+237699808187"
                  className="h-14 sm:h-16 flex items-center justify-center space-x-3 bg-brand-blue text-white rounded-2xl text-base sm:text-lg font-bold shadow-lg shadow-brand-blue/20 hover:scale-[1.02] transition-transform active:scale-95"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appel direct</span>
                </a>
                <a
                  href="https://wa.me/237699808187?text=Bonjour,%20j’ai%20besoin%20d’un%20plombier%20à%20Douala."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 sm:h-16 flex items-center justify-center space-x-3 bg-green-500 text-white rounded-2xl text-base sm:text-lg font-bold shadow-lg shadow-green-500/20 hover:scale-[1.02] transition-transform active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-6 sm:p-12 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-blue/5 rounded-bl-[4rem]" />
             <h2 className="text-xl sm:text-2xl font-display font-black text-brand-dark mb-8 relative">Envoyez-nous un message</h2>
             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                   <label className="text-xs sm:text-sm font-bold text-slate-500 flex items-center space-x-2">
                     <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                     <span>Nom complet</span>
                   </label>
                   <input
                     required
                     type="text"
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 sm:px-5 py-3 font-semibold focus:border-brand-blue focus:outline-none transition-colors text-sm sm:text-base"
                     placeholder="Votre nom"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-xs sm:text-sm font-bold text-slate-500 flex items-center space-x-2">
                     <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                     <span>Téléphone</span>
                   </label>
                   <input
                     required
                     type="tel"
                     value={formData.phone}
                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
                     className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 sm:px-5 py-3 font-semibold focus:border-brand-blue focus:outline-none transition-colors text-sm sm:text-base"
                     placeholder="+237 ..."
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-xs sm:text-sm font-bold text-slate-500 flex items-center space-x-2">
                     <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                     <span>Message</span>
                   </label>
                   <textarea
                     required
                     rows={4}
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 sm:px-5 py-3 font-semibold focus:border-brand-blue focus:outline-none transition-colors resize-none text-sm sm:text-base"
                     placeholder="Expliquez-nous votre besoin..."
                   />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 sm:h-14 bg-brand-dark text-white rounded-xl font-black text-base sm:text-lg flex items-center justify-center space-x-3 hover:bg-slate-800 transition-colors shadow-lg active:scale-95 transition-transform"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Envoyer</span>
                </button>
             </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.section {...fadeInUp} className="mt-20 sm:mt-32">
           <h2 className="text-xl sm:text-2xl font-display font-black text-brand-dark mb-6 sm:mb-8 text-center px-4">Où nous trouver ?</h2>
           <div className="w-full aspect-[4/3] sm:aspect-[21/9] bg-slate-100 border border-slate-200 rounded-3xl sm:rounded-[2.5rem] overflow-hidden group">
              <iframe
                title="SMG Plombier location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.34444!2d9.78!3d4.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610f!2sYassa%2C%20Douala%2C%20Cameroun!5e0!3m2!1sen!2s!4v1"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                loading="lazy"
              />
           </div>
           <p className="mt-6 text-center text-slate-400 font-bold text-sm">Basé à Yassa, Douala – Intervention rapide garantie</p>
        </motion.section>
      </div>
    </main>
  );
}

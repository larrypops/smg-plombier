'use client';

import { motion } from 'motion/react';
import { Phone, CheckCircle2, Droplets, Wrench, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
} as const;

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-brand-dark/60 z-10" />
        <img
          src="/images/image-02.jpg"
          alt="Plombier professionnel à Douala"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-brand-blue text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6"
            >
              <Zap className="w-4 h-4" />
              <span>Intervention Rapide 24h/24 à Douala</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-6xl lg:text-8xl font-display font-black text-white mb-6 leading-[1.1]"
            >
              Plombier à Douala Expert à <span className="text-brand-blue">Yassa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Dépannage, installation et entretien plomberie avec un service fiable, rapide et sans surprise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none"
            >
              <a
                href="tel:+237699808187"
                className="inline-flex items-center justify-center space-x-3 bg-brand-blue text-white py-4 sm:py-5 px-8 rounded-2xl text-lg sm:text-xl font-bold shadow-2xl shadow-brand-blue/40 hover:bg-white hover:text-brand-blue transition-all transform active:scale-95"
                id="cta-call-hero"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Appeler</span>
              </a>
              <a
                href="https://wa.me/237699808187?text=Bonjour,%20j’ai%20besoin%20d’un%20plombier%20à%20Douala."
                className="inline-flex items-center justify-center space-x-3 bg-white text-slate-900 py-4 sm:py-5 px-8 rounded-2xl text-lg sm:text-xl font-bold shadow-xl hover:bg-green-500 hover:text-white transition-all transform active:scale-95"
                id="cta-whatsapp-hero"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem -> Solution Section */}
      <section className="py-20 bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-brand-dark mb-8 leading-tight">
                Un problème de plomberie ? On intervient immédiatement.
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Fuite d’eau, canalisation bouchée, problème de pression ou installation sanitaire ? 
                Chez SMG Plombier, nous intervenons rapidement à Douala (Yassa et environs) pour résoudre vos problèmes efficacement.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  'Intervention rapide',
                  'Travail propre et durable',
                  'Disponible 24h/24 – 7j/7'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-black text-slate-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative group">
              <div className="absolute inset-0 bg-brand-blue/20 rounded-[3rem] rotate-3 -z-10 group-hover:rotate-6 transition-transform" />
              <img
                src="/images/image-01.jpg"
                alt="Plombier en intervention urgente"
                className="relative z-10 aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl sm:rounded-[3.5rem]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 hidden sm:block">
                 <div className="flex items-center space-x-3">
                   <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center animate-pulse">
                     <Zap className="w-6 h-6" />
                   </div>
                   <div>
                     <p className="text-sm font-black text-brand-dark">Urgence ?</p>
                     <p className="text-xs text-slate-500 font-bold">Intervention en 30 min</p>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark mb-16 px-4">
            Nos services de plomberie à Douala
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                title: 'Dépannage d’urgence',
                items: ['Fuite d’eau', 'Canalisation bouchée', 'WC ou évier bloqué'],
                icon: Phone,
                color: 'bg-red-50 text-red-600'
              },
              {
                title: 'Installation plomberie',
                items: ['Lavabo, douche, WC', 'Chauffe-eau', 'Systèmes complets'],
                icon: Wrench,
                color: 'bg-brand-blue/10 text-brand-blue'
              },
              {
                title: 'Entretien & rénovation',
                items: ['Vérification installations', 'Rénovation salle de bain', 'Mise aux normes'],
                icon: ShieldCheck,
                color: 'bg-green-50 text-green-600'
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="mb-6 flex items-center gap-4 text-left">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${service.color} transition-transform group-hover:scale-110`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-black leading-tight text-brand-dark">{service.title}</h3>
                </div>
                <ul className="space-y-3 text-left text-sm font-medium text-slate-600">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                       <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                       <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-brand-dark text-white rounded-[2rem] sm:rounded-[4rem] mx-4 my-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-black mb-6 px-4">Pourquoi choisir SMG Plombier ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Intervention rapide et efficace',
              'Techniciens qualifiés',
              'Devis clair et transparent',
              'Disponible 24h/24',
              'Travail soigné et durable',
              'Service client à l’écoute'
            ].map((text, i) => (
              <motion.div
                key={text}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4 bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                <span className="font-bold text-slate-100">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-16 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden relative">
             <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10">
                <MapPin className="w-20 h-20 sm:w-32 sm:h-32 text-brand-blue" />
             </div>
             <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-dark mb-8 px-4">Nous intervenons à Douala</h2>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-10 px-4">
               Basé à <span className="text-brand-blue font-bold">Yassa</span>, SMG Plombier intervient dans toute la ville de Douala : Yassa, Logpom, PK8, Bonamoussadi, Akwa, Deido et alentours.
             </p>
             <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 text-xs sm:text-sm font-bold text-slate-500">
               {['Yassa', 'Logpom', 'PK8', 'Bonamoussadi', 'Akwa', 'Deido', 'Bonapriso', 'New Bell'].map(city => (
                 <span key={city} className="bg-slate-50 px-3 sm:px-4 py-2 rounded-lg border border-slate-100">{city}</span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 sm:py-32 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
           <motion.h2 {...fadeInUp} className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-brand-dark mb-8">
             Besoin d’un plombier maintenant ?
           </motion.h2>
           <motion.p {...fadeInUp} className="text-xl text-slate-600 mb-12 font-medium">
             Contactez-nous immédiatement pour une intervention rapide.
           </motion.p>
           <motion.div
             {...fadeInUp}
             className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
           >
              <a
                href="tel:+237699808187"
                className="w-full sm:w-auto h-16 inline-flex items-center justify-center space-x-3 bg-brand-blue text-white px-10 rounded-2xl text-xl font-bold shadow-xl shadow-brand-blue/20 hover:scale-105 transition-all"
              >
                <Phone className="w-6 h-6" />
                <span>Appeler</span>
              </a>
              <a
                href="https://wa.me/237699808187?text=Bonjour,%20j’ai%20besoin%20d’un%20plombier%20à%20Douala."
                className="w-full sm:w-auto h-16 inline-flex items-center justify-center space-x-3 bg-green-500 text-white px-10 rounded-2xl text-xl font-bold shadow-xl shadow-green-500/20 hover:scale-105 transition-all"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
           </motion.div>
        </div>
      </section>
    </main>
  );
}

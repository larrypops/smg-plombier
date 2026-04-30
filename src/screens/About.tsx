'use client';

import { motion } from 'motion/react';
import { Target, Lightbulb, ShieldCheck, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
} as const;

export default function About() {
  return (
    <main className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <section className="mb-20 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-3xl sm:text-6xl font-display font-black text-brand-dark mb-6 sm:mb-8 leading-tight">
                SMG Plombier – Votre expert plomberie à Douala
              </h1>
              <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
                SMG Plombier est une entreprise spécialisée dans les services de plomberie à Douala, basée à Yassa. 
                Nous accompagnons particuliers et professionnels pour tous leurs besoins : dépannage, installation et entretien.
              </p>
              <p className="text-base sm:text-lg text-slate-500 leading-relaxed italic border-l-4 border-brand-blue pl-6">
                "Notre mission est simple : offrir un service rapide, fiable et de qualité."
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
               <div className="absolute inset-0 bg-brand-blue/10 rounded-[2.5rem] sm:rounded-[3rem] -rotate-3 -z-10" />
               <img
                 src="/images/images-04.jpg"
                 alt="Expertise SMG Plombier"
                 className="rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl object-cover w-full h-[300px] sm:h-[500px]"
               />
            </motion.div>
          </div>
        </section>

        {/* Mission & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 mb-20 sm:mb-32">
          <motion.div {...fadeInUp} className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
              <Target className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-black text-brand-dark mb-4 sm:mb-6">Notre Mission</h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Fournir des solutions durables en plomberie avec un service professionnel et accessible à tous les habitants de Douala.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
              <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-black mb-4 sm:mb-6 text-white">Notre Approche</h2>
            <ul className="space-y-3 sm:space-y-4">
              {['Analyse rapide du problème', 'Intervention efficace', 'Solution durable', 'Satisfaction client'].map((text) => (
                <li key={text} className="flex items-center space-x-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                  <span className="font-semibold text-sm sm:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Expertise */}
        <section className="mb-32 px-4">
          <motion.h2 {...fadeInUp} className="text-3xl font-display font-black text-brand-dark mb-12 text-center text-[28px] sm:text-3xl">Notre Expertise</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Plomberie résidentielle',
              'Plomberie commerciale',
              'Rénovation sanitaire',
              'Dépannage urgent'
            ].map((text, i) => (
              <motion.div
                key={text}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-4">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-black text-brand-dark">{text}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Commitment */}
        <section className="bg-brand-blue/5 p-8 sm:p-16 rounded-[4rem] px-6">
           <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
             <h2 className="text-3xl font-display font-black text-brand-dark mb-12">Notre Engagement</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  'Respect des délais',
                  'Transparence totale',
                  'Travail propre',
                  'Satisfaction garantie'
                ].map((text) => (
                  <div key={text} className="flex items-center justify-center space-x-3 bg-white p-6 rounded-2xl shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="font-bold text-slate-700">{text}</span>
                  </div>
                ))}
             </div>
           </motion.div>
        </section>
      </div>
    </main>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À Propos', path: '/a-propos' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex shrink-0 items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Logo SMG Plombier"
              width={48}
              height={48}
              priority
              className="h-11 w-11 rounded-lg object-contain sm:h-14 sm:w-14"
            />
            <span className="hidden font-display text-xl font-bold text-brand-dark min-[380px]:block">
              Plombier
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-bold transition-colors hover:text-brand-blue relative py-2 ${
                  pathname === item.path ? 'text-brand-blue' : 'text-slate-600'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Contact CTA & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="tel:+237699808187"
              className="hidden sm:flex items-center space-x-2 bg-brand-blue text-white px-4 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-blue/20"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler</span>
            </a>
            <a
              href="https://wa.me/237699808187?text=Bonjour,%20j’ai%20besoin%20d’un%20plombier%20à%20Douala."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden xs:block">WhatsApp</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-brand-dark hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Ouvrir le menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block text-lg font-bold p-2 rounded-xl ${
                    pathname === item.path 
                      ? 'bg-brand-blue/10 text-brand-blue' 
                      : 'text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 gap-4">
                <a
                  href="tel:+237699808187"
                  className="flex items-center justify-center space-x-3 bg-brand-blue text-white py-4 rounded-xl font-bold shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appeler SMG Plombier</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo SMG Plombier"
                width={40}
                height={40}
                className="h-10 w-10 rounded bg-white object-contain"
              />
              <span className="font-display font-bold text-xl">SMG Plombier</span>
            </div>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
              Votre expert plomberie à Douala. Intervention rapide 24h/24 pour tous vos besoins sanitaires à Yassa et environs.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Yassa, Douala, Cameroun</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <span>+237 6 99 80 81 87</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Disponible 24h/24 – 7j/7</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Navigation</h3>
            <ul className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} SMG Plombier. Tous droits réservés.</p>
          <p className="mt-2">Plombier Douala - Plombier Yassa - Dépannage Urgence</p>
        </div>
      </div>
    </footer>
  );
}

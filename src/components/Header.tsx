// src/components/Header.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
  setShowDemoForm: (show: boolean) => void;
}

export function Header({ setActiveSection, activeSection, setShowDemoForm }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F0F2F5] bg-opacity-95 shadow-sm z-30 px-4 py-3 md:py-4">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo (WhatsApp-like à gauche) */}
        <button 
          onClick={() => setActiveSection('')}
          className="flex items-center space-x-2 text-gray-800 hover:text-green-600 transition"
        >
          <img 
            src="icon.png" // Remplacez par le chemin réel de votre logo
            alt="XStore Logo" 
            className="h-15 w-15 md:h-12 md:w-12 object-contain" // Plus grand sur desktop
          />
          <span className="text-lg md:text-2xl font-semibold">XStore</span>
        </button>

        {/* Bouton Hamburger (mobile uniquement) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* Menu Desktop (WhatsApp-like avec onglets) */}
        <div className="hidden md:flex items-center space-x-6 bg-white bg-opacity-95 rounded-full shadow-md px-6 py-3">
          <button 
            onClick={() => setActiveSection('')}
            className={`px-5 py-3 text-base font-medium rounded-full transition ${activeSection === '' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            Accueil
          </button>
          <button 
            onClick={() => setActiveSection('features')}
            className={`px-5 py-3 text-base font-medium rounded-full transition ${activeSection === 'features' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            Fonctionnalités
          </button>
          <button 
            onClick={() => setActiveSection('tutorials')}
            className={`px-5 py-3 text-base font-medium rounded-full transition ${activeSection === 'tutorials' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            Tutoriels
          </button>
          <button 
            onClick={() => setActiveSection('partners')}
            className={`px-5 py-3 text-base font-medium rounded-full transition ${activeSection === 'partners' ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-200'}`}
          >
            Partenaires
          </button>
          <button 
            onClick={() => setShowDemoForm(true)}
            className="ml-4 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition font-semibold text-base shadow-lg"
          >
            Démarrer
          </button>
        </div>
      </nav>

      {/* Menu Mobile (plein écran) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 text-center">
          <button 
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-8 w-8 text-gray-600" />
          </button>
          <button 
            onClick={() => { setActiveSection(''); setIsMenuOpen(false); }}
            className={`text-xl font-medium hover:text-green-600 transition ${activeSection === '' ? 'text-green-600' : 'text-gray-600'}`}
          >
            Accueil
          </button>
          <button 
            onClick={() => { setActiveSection('features'); setIsMenuOpen(false); }}
            className={`text-xl font-medium hover:text-green-600 transition ${activeSection === 'features' ? 'text-green-600' : 'text-gray-600'}`}
          >
            Fonctionnalités
          </button>
          <button 
            onClick={() => { setActiveSection('tutorials'); setIsMenuOpen(false); }}
            className={`text-xl font-medium hover:text-green-600 transition ${activeSection === 'tutorials' ? 'text-green-600' : 'text-gray-600'}`}
          >
            Tutoriels
          </button>
          <button 
            onClick={() => { setActiveSection('partners'); setIsMenuOpen(false); }}
            className={`text-xl font-medium hover:text-green-600 transition ${activeSection === 'partners' ? 'text-green-600' : 'text-gray-600'}`}
          >
            Partenaires
          </button>
          <button 
            onClick={() => { setShowDemoForm(true); setIsMenuOpen(false); }}
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition font-semibold text-xl shadow-md"
          >
            Démarrer
          </button>
        </div>
      )}
    </header>
  );
}
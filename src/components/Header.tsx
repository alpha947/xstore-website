// src/components/Header.tsx
import React, { useState } from 'react';
import { Store, Menu, X } from 'lucide-react';

interface HeaderProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
  setShowDemoForm: (show: boolean) => void;
}

export function Header({ setActiveSection, activeSection, setShowDemoForm }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4 py-4 md:px-6 md:py-6">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Store className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
          <span className="text-xl md:text-2xl font-bold text-gray-900">XStore</span>
        </div>

        {/* Bouton Hamburger (mobile uniquement) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => setActiveSection('')}
            className={`text-base font-medium hover:text-green-600 transition ${activeSection === '' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`}
          >
            Accueil
          </button>
          <button 
            onClick={() => setActiveSection('features')}
            className={`text-base font-medium hover:text-green-600 transition ${activeSection === 'features' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`}
          >
            Fonctionnalités
          </button>
          <button 
            onClick={() => setActiveSection('partners')}
            className={`text-base font-medium hover:text-green-600 transition ${activeSection === 'partners' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'}`}
          >
            Partenaires
          </button>
          <button 
            onClick={() => setShowDemoForm(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition font-semibold text-base shadow-md"
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
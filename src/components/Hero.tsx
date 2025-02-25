// src/components/Hero.tsx
import React from 'react';
import { Shield, Star } from 'lucide-react';

interface HeroProps {
  setShowDemoForm: (show: boolean) => void;
}

export function Hero({ setShowDemoForm }: HeroProps) {
  return (
    <div className="container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-16 items-center">
        {/* Texte */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full w-fit shadow-sm mx-auto md:mx-0">
            <Star className="h-4 w-4" />
            <span className="text-xs font-medium">+500 magasins en Guinée</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Connectez vos boutiques avec XStore
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
            Gérez vos stocks en temps réel et prospérez au Marché Madina.
          </p>
          <button 
            onClick={() => setShowDemoForm(true)}
            className="bg-green-600 text-white px-6 py-3 md:px-10 md:py-4 rounded-full hover:bg-green-700 transition font-semibold text-base md:text-lg shadow-lg w-full md:w-auto"
          >
            Essayer gratuitement
          </button>
          <p className="text-xs md:text-sm text-gray-500">Support 24/7 • Conçu pour la Guinée</p>
        </div>

        {/* Image */}
        <div className="relative w-full">
          <img 
            src="utilisateur1.jpg" // Remplacez par votre image réelle
            alt="Propriétaire de boutique au Marché Madina utilisant XStore"
            className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video"
          />
          <div className="absolute -bottom-4 left-0 md:-bottom-8 md:-left-8 bg-white p-2 md:p-4 rounded-lg shadow-xl border border-gray-100">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 md:h-8 md:w-8 text-green-600" />
              <div>
                <p className="font-semibold text-xs md:text-base text-gray-900">Automatisation</p>
                <p className="text-[10px] md:text-sm text-gray-600">Temps réel</p>
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-full shadow-md">
            <p className="text-[10px] md:text-sm font-semibold">Marché Madina</p>
          </div>
        </div>
      </div>
    </div>
  );
}
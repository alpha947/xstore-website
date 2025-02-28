// src/components/Hero.tsx
import React from 'react';
import { Shield, Star } from 'lucide-react';

interface HeroProps {
  setShowDemoForm: (show: boolean) => void;
}

export function Hero({ setShowDemoForm }: HeroProps) {
  return (
    <div className="container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-20 font-sans"> {/* Augmentation du pt pour éloigner du header */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-18 items-center"> {/* Augmentation du gap en mobile */}
        {/* Texte */}
        <div className="space-y-0 text-center md:text-left"> {/* Augmentation du space-y */}
          <h2 className="text-xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight md:mb-10">  
            Connectez vos boutiques avec <span className="text-green-600 font-extrabold tracking-wide">XStore</span>
          </h2>
        </div>

        {/* Image */}
        <div className="relative w-full">
          <img 
            src="utilisateur1.jpg" // Remplacez par votre image réelle
            alt="Propriétaire de boutique au Marché Madina utilisant XStore"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video"
          />
          {/* Drapeau de la Guinée */}
          <img 
            src="guinee.jpeg" // Remplacez par l'image du drapeau
            alt="Drapeau de la Guinée"
            className="absolute top-2 right-2 w-8 h-5 md:w-10 md:h-6   rounded-sm shadow-md"
          />
          <div className="absolute -bottom-4 left-2 md:-bottom-8 md:-left-8 bg-white p-2 md:p-4 rounded-lg shadow-xl border border-gray-100">
            <div className="flex items-center gap-1">
              <Shield className="h-5 w-5 md:h-8 md:w-8 text-green-600" />
              <div>
                <p className="font-semibold text-sm md:text-base text-gray-900">Automatisez vos activités</p>
                <p className="text-xs md:text-sm text-gray-600">En temps réel</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
// src/components/WhyChooseUsSection.tsx
import React from 'react';
import { CheckCircle, Globe, Clock, Smartphone } from 'lucide-react';

export function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 leading-tight">
          Pourquoi <span className="text-green-600">Stock Connecter</span> ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Conçu pour la Guinée */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Globe className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Conçu pour la Guinée</h3>
            <p className="text-gray-600 text-sm">Adapté aux réalités locales, avec données sécurisées en Guinée.</p>
          </div>

          {/* Simple et puissant */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Smartphone className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simple et puissant</h3>
            <p className="text-gray-600 text-sm">Une interface intuitive pour gérer tout, partout.</p>
          </div>

          {/* Support 24/7 */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Clock className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support 24/7</h3>
            <p className="text-gray-600 text-sm">Notre équipe est toujours là pour vous.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
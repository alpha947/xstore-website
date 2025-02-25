// src/components/WhyChooseUsSection.tsx
import React from 'react';
import { CheckCircle, Globe, Clock } from 'lucide-react';

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Pourquoi Stock Connecter ?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center p-6">
            <Globe className="h-14 w-14 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Conçu pour la Guinée</h3>
            <p className="text-gray-600">Adapté aux réalités locales, avec données sécurisées en Guinée.</p>
          </div>
          <div className="text-center p-6">
            <CheckCircle className="h-14 w-14 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Simple et puissant</h3>
            <p className="text-gray-600">Une interface intuitive pour gérer tout, partout.</p>
          </div>
          <div className="text-center p-6">
            <Clock className="h-14 w-14 text-green-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Support 24/7</h3>
            <p className="text-gray-600">Notre équipe est toujours là pour vous.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
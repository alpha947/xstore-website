// src/components/TestimonialsSection.tsx
import React from 'react';
import { User } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <User className="h-12 w-12 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">Fatoumata Diallo</p>
                <p className="text-sm text-gray-600">Directrice, Conakry Retail</p>
              </div>
            </div>
            <p className="text-gray-600">"xstore a transformé notre gestion de stock. Nous avons réduit nos pertes de 30% en seulement 3 mois !"</p>
          </div>
          {/* Ajoutez d'autres témoignages */}
        </div>
      </div>
    </section>
  );
}
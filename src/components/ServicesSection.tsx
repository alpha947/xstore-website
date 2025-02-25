// src/components/ServicesSection.tsx
import React from 'react';
import { ServiceCard } from './ServiceCard';
import { BookOpen, Headphones } from 'lucide-react';

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Nos services</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ServiceCard
            icon={<BookOpen className="h-14 w-14 text-green-600" />}
            title="Formation complète"
            description="Nous formons votre équipe sur place pour une prise en main rapide."
          />
          <ServiceCard
            icon={<Headphones className="h-14 w-14 text-green-600" />}
            title="Support 24/7"
            description="Assistance technique à toute heure, par téléphone ou sur site."
          />
        </div>
      </div>
    </section>
  );
}
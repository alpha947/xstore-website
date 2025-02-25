// src/components/PartnersMap.tsx
import React, { useState } from 'react';

interface Partner {
  name: string;
  lat: number;
  lng: number;
  type: string;
  contact: string;
  description: string;
  employees: number;
}

const partners: Partner[] = [
  { name: "Alpha Commerce", lat: 9.6412, lng: -13.5784, type: "Distributeur", contact: "+224 620 123 456", description: "Leader en distribution alimentaire", employees: 25 },
  { name: "Guinée Tech", lat: 10.0569, lng: -12.8658, type: "Revendeur", contact: "+224 621 789 123", description: "Solutions tech pour entreprises", employees: 15 },
  { name: "Mamou Retail", lat: 10.3755, lng: -12.0915, type: "Détaillant", contact: "+224 622 456 789", description: "Réseau de boutiques locales", employees: 40 },
  { name: "Kankan Supplies", lat: 10.3854, lng: -9.3057, type: "Fournisseur", contact: "+224 623 321 654", description: "Matériel industriel", employees: 30 },
];

export function PartnersMap() {
  const [hoveredPartner, setHoveredPartner] = useState<Partner | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Nos partenaires à travers la Guinée</h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Plus de 50 entreprises guinéennes utilisent Stock Connecter pour leur gestion quotidienne.
        </p>
        
        <div className="relative w-full h-[600px] bg-green-50 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <div className="absolute inset-0 bg-[url('https://via.placeholder.com/800x600?text=Carte+Guinée')] bg-cover opacity-20"></div>
          
          {partners.map((partner, index) => (
            <div
              key={index}
              className="absolute w-5 h-5 bg-green-600 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform z-10 shadow-md"
              style={{
                left: `${((partner.lng + 15) / 30) * 100}%`,
                top: `${((13 - partner.lat) / 6) * 100}%`
              }}
              onMouseEnter={() => setHoveredPartner(partner)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              {hoveredPartner === partner && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white p-6 rounded-lg shadow-2xl border border-gray-100 w-80 z-20 animate-fade-in">
                  <h3 className="text-xl font-semibold text-green-600">{partner.name}</h3>
                  <p className="text-sm text-gray-600"><span className="font-medium">Type :</span> {partner.type}</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">Contact :</span> {partner.contact}</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">Employés :</span> {partner.employees}</p>
                  <p className="text-sm text-gray-500 mt-2">{partner.description}</p>
                  <button className="mt-4 text-sm bg-green-100 text-green-600 px-4 py-2 rounded-full hover:bg-green-200 transition">
                    Contacter
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-3 p-3 hover:bg-green-50 rounded-lg transition">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
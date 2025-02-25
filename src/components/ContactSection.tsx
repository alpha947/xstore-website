// src/components/ContactSection.tsx
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Contactez notre équipe commerciale</h2>
        <div className="max-w-lg mx-auto">
          {/* Carte de visite premium */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8 transform hover:shadow-2xl transition duration-300">
            <div className="flex flex-col items-center space-y-6">
              {/* Logo ou nom de l'entreprise */}
              <div className="flex items-center gap-2">
                <img 
                  src="/images/xstore-logo.png" // Remplacez par votre logo si disponible
                  alt="XStore Logo"
                  className="h-10 w-10"
                  onError={(e) => (e.currentTarget.style.display = 'none')} // Cache si pas de logo
                />
                <span className="text-2xl font-bold text-gray-900">XStore</span>
              </div>

              {/* Nom et titre */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Mamadou Diallo</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Responsable Commercial</p>
              </div>

              {/* Informations de contact */}
              <div className="w-full space-y-4">
                {/* Téléphone */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Téléphone</span>
                  </div>
                  <a 
                    href="tel:+224620123456" 
                    className="text-green-600 font-medium hover:underline"
                  >
                    +224 620 123 456
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">WhatsApp</span>
                  </div>
                  <a 
                    href="https://wa.me/224620123456" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-600 font-medium hover:underline"
                  >
                    +224 620 123 456
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Email</span>
                  </div>
                  <a 
                    href="mailto:commercial@xstore.com" 
                    className="text-green-600 font-medium hover:underline"
                  >
                    commercial@xstore.com
                  </a>
                </div>

                {/* Adresse */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Bureau</span>
                  </div>
                  <span className="text-gray-800 font-medium">Conakry, Guinée</span>
                </div>
              </div>

              {/* Bouton WhatsApp */}
              <a 
                href="https://wa.me/224620123456" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="h-5 w-5" />
                Contacter via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
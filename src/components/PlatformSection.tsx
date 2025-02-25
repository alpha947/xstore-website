// src/components/PlatformSection.tsx
import React from 'react';
import { Smartphone, Monitor, Laptop } from 'lucide-react';

export function PlatformSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Disponible sur toutes vos plateformes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="flex justify-center mb-6">
              <Smartphone className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Application Mobile</h3>
            <p className="text-gray-600 mb-4">Gérez votre entreprise où que vous soyez avec nos applications Android et iOS</p>
            <div className="flex justify-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-12" />
            </div>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-6">
              <Monitor className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Application Web</h3>
            <p className="text-gray-600">Accédez à XStore depuis n'importe quel navigateur web moderne, sans installation requise</p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-6">
              <Laptop className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Application Bureau</h3>
            <p className="text-gray-600">Installez XStore directement sur votre ordinateur pour une expérience optimale</p>
          </div>
        </div>
      </div>
    </section>
  );
}
// src/components/ContactSection.tsx
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-4xl text-center mb-12 text-gray-900">Contactez notre équipe commerciale</h2>
        
        {/* Conteneur avec défilement horizontal fluide */}
        <div className="overflow-x-auto scroll-smooth flex gap-6 w-full">
          <div className="flex gap-6 min-w-max">
            {/* Aissata Balde 1*/}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl border border-yellow-500 p-6 transform hover:scale-105 transition duration-300 relative overflow-hidden w-96">
              {/* Badge Premium */}
              <div className="absolute top-2 right-2 bg-white text-yellow-600 px-3 py-1 text-xs font-bold rounded-full shadow">PREMIUM</div>
              
              <div className="flex flex-row items-center space-x-6 relative">
                {/* Colonne gauche : Photo, badge et nom */}
                <div className="relative flex flex-col items-center">
                  {/* Photo de profil */}
                  <div className="relative">
                    <img 
                      src="aissata.png" // Remplacez par votre image
                      alt="Aissata BALDE"
                      className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = 'none')} // Cache si pas de photo
                    />
                    {/* Badge de vérification Vert */}
                    <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Nom et titre */}
                  <div className="text-center mt-2">
                    <p className="text-sm text-yellow-200 uppercase tracking-wide">AISSATA BALDE</p>
                  </div>
                </div>

                {/* Colonne droite : Informations de contact */}
                <div className="flex flex-col space-y-3 text-white">
                  {/* Téléphone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <a href="tel:+224611694878" className="hover:underline">+224 611 69 48 78</a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    <a href="https://wa.me/224611694878" target="_blank" rel="noopener noreferrer" className="hover:underline">+224 611 69 48 78</a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:aissabalde944@gmail.com" className="hover:underline">xstore@assistant1.com</a>
                  </div>

                  {/* Adresse */}
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>Conakry, Guinée</span>
                  </div>
                </div>
              </div>

              {/* Bouton WhatsApp */}
              <a 
                href="https://wa.me/224612349177" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold flex items-center justify-center gap-2 shadow-md mt-6"
              >
                <MessageCircle className="h-5 w-5" />
                Contacter via WhatsApp
              </a>
            </div>

            {/* Mohamed Youssouf Souare  2 */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl border border-yellow-500 p-6 transform hover:scale-105 transition duration-300 relative overflow-hidden w-96">
              {/* Badge Premium */}
              <div className="absolute top-2 right-2 bg-white text-yellow-600 px-3 py-1 text-xs font-bold rounded-full shadow">PREMIUM</div>
              
              <div className="flex flex-row items-center space-x-6 relative">
                {/* Colonne gauche : Photo, badge et nom */}
                <div className="relative flex flex-col items-center">
                  {/* Photo de profil */}
                  <div className="relative">
                    <img 
                      src="youssouf.jpg" // Remplacez par votre image
                      alt="Aissata BALDE"
                      className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = 'none')} // Cache si pas de photo
                    />
                    {/* Badge de vérification Vert */}
                    <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Nom et titre */}
                  <div className="text-center mt-2">
                    <p className="text-sm text-yellow-200 uppercase tracking-wide">Youssouf SOUARE</p>
                  </div>
                </div>

                {/* Colonne droite : Informations de contact */}
                <div className="flex flex-col space-y-3 text-white">
                  {/* Téléphone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <a href="tel:+224625751207" className="hover:underline">+224 625 75 12 07</a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    <a href="https://wa.me/224625751207" target="_blank" rel="noopener noreferrer" className="hover:underline">+224 625 75 12 07</a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:youssoufsouare.ys@gmail.com" className="hover:underline">xstore@assistant2.com</a>
                  </div>

                  {/* Adresse */}
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>Conakry, Guinée</span>
                  </div>
                </div>
              </div>

              {/* Bouton WhatsApp */}
              <a 
                href="https://wa.me/224628897331" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold flex items-center justify-center gap-2 shadow-md mt-6"
              >
                <MessageCircle className="h-5 w-5" />
                Contacter via WhatsApp
              </a>
            </div>

 

            {/* Alpha Amadou DIALLO 3*/}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl border border-yellow-500 p-6 transform hover:scale-105 transition duration-300 relative overflow-hidden w-96">
              {/* Badge Premium */}
              <div className="absolute top-2 right-2 bg-white text-yellow-600 px-3 py-1 text-xs font-bold rounded-full shadow">PREMIUM</div>
              
              <div className="flex flex-row items-center space-x-6 relative">
                {/* Colonne gauche : Photo, badge et nom */}
                <div className="relative flex flex-col items-center">
                  {/* Photo de profil */}
                  <div className="relative">
                    <img 
                      src="alpha.jpeg" // Remplacez par votre image
                      alt="Aissata BALDE"
                      className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                      onError={(e) => (e.currentTarget.style.display = 'none')} // Cache si pas de photo
                    />
                    {/* Badge de vérification Vert */}
                    <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Nom et titre */}
                  <div className="text-center mt-2">
                    <p className="text-sm text-yellow-200 uppercase tracking-wide">Alpha DIALLO</p>
                  </div>
                </div>

                {/* Colonne droite : Informations de contact */}
                <div className="flex flex-col space-y-3 text-white">
                  {/* Téléphone */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <a href="tel:+224626 92 91 78" className="hover:underline">+224 626 92 91 78</a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    <a href="https://wa.me/224626929178" target="_blank" rel="noopener noreferrer" className="hover:underline">+224 626 92 91 78</a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:alpha@xstore.com" className="hover:underline">alpha@istock.com</a>
                  </div>

                  {/* Adresse */}
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>Conakry, Guinée</span>
                  </div>
                </div>
              </div>

              {/* Bouton WhatsApp */}
              <a 
                href="https://wa.me/224626929178" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold flex items-center justify-center gap-2 shadow-md mt-6"
              >
                <MessageCircle className="h-5 w-5" />
                Contacter via WhatsApp
              </a>
            </div>

            {/* Ajoute d'autres cartes ici si nécessaire */}
          </div>
        </div>
      </div>
    </section>
  );
}


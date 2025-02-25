// src/components/Footer.tsx
import React from 'react';
import { Store, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Store className="h-8 w-8" />
              <span className="text-2xl font-bold">Stock Connecter</span>
            </div>
            <p className="text-gray-400 mb-4">
              La solution SaaS de gestion de stock conçue pour la Guinée, par des Guinéens.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <Clock className="h-5 w-5" />
              <span>Support 24h/24, 7j/7</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Conakry, Guinée
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +224 620 123 456
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                support@stockconnecter.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Ressources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#tutorials" className="hover:text-white transition">Tutoriels vidéo</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Suivez-nous</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2025 Stock Connecter. Tous droits réservés. Conçu avec ❤️ en Guinée.
        </div>
      </div>
    </footer>
  );
}
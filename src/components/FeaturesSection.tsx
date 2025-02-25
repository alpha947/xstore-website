// src/components/FeaturesSection.tsx
import React, { useState } from 'react';
import { FeatureCard } from './FeatureCard';
import { 
  Database, ShoppingCart, BarChart, Smartphone, AlertTriangle, Settings, 
  Users, Boxes, TrendingUp, Briefcase, CreditCard, FileText, UserCheck, 
  Layers, ClipboardCheck, ShieldCheck, Clock, Truck, Zap, Globe, Package, 
  ClipboardList, DollarSign, Warehouse, PieChart, CheckCircle, List, Grid, ChevronDown, ChevronUp 
} from 'lucide-react';

export function FeaturesSection() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  interface Section {
    title: string;
    key: string;
    features: Feature[];
  }

  const toggleSection = (section: string): void => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="py-20 bg-white min-h-screen">
    <div className="container mx-auto px-4">
      <h4 className="text-xl font-bold text-center mb-8 text-gray-900">Fonctionnalités de Xstock</h4>

        {/* Accordion Section */}
        {[
          {
            title: 'Gestion des Stocks',
            key: 'stocks',
            features: [
              { icon: <Boxes className="h-10 w-10 text-green-500" />, title: "Connexion des stocks", description: "Synchronisez vos stocks entre différentes boutiques en temps réel." },
              { icon: <Package className="h-10 w-10 text-blue-500" />, title: "Gestion des articles", description: "Ajouter, lister, imprimer des codes-barres, compter le stock, gérer les catégories, marques et unités." },
              { icon: <Settings className="h-10 w-10 text-yellow-500" />, title: "Ajustement des stocks", description: "Corrigez facilement les écarts d'inventaire avec précision." },
            ]
          },
          {
            title: 'Dashboard et Gestion des ventes',
            key: 'dashboard',
            features: [
              { icon: <Smartphone className="h-10 w-10 text-purple-500" />, title: "Dashboard réactif", description: "Un tableau de bord intelligent et réactif pour une meilleure prise de décision." },
              { icon: <ShoppingCart className="h-10 w-10 text-orange-500" />, title: "Entrées et Sorties", description: "Suivez les achats et ventes avec une interface intuitive." },
              { icon: <Truck className="h-10 w-10 text-pink-500" />, title: "Transfert entre boutiques", description: "Transférez vos stocks entre points de vente sans effort." },
            ]
          },
          {
            title: 'Gestion de la Comptabilité',
            key: 'comptabilite',
            features: [
              { icon: <CreditCard className="h-10 w-10 text-indigo-500" />, title: "Gestion des comptes", description: "Listez les comptes, transférez de l'argent, gérez les dépenses et les dépôts." },
              { icon: <DollarSign className="h-10 w-10 text-teal-500" />, title: "Dépenses et Revenus", description: "Suivez les dépenses et les revenus pour une gestion optimale." },
            ]
          },
          {
            title: 'Gestion des Ressources Humaines',
            key: 'rh',
            features: [
              { icon: <Users className="h-10 w-10 text-lime-500" />, title: "Gestion des personnes", description: "Employés, utilisateurs, clients et fournisseurs sous contrôle." },
              { icon: <UserCheck className="h-10 w-10 text-emerald-500" />, title: "Suivi RH", description: "Suivi de la présence, des congés, des salaires et des performances." },
            ]
          },
          {
            title: 'Paramétrage et Rapports',
            key: 'parametres',
            features: [
              { icon: <Settings className="h-10 w-10 text-red-500" />, title: "Paramétrage complet", description: "Personnalisez SMS, emails, points de vente, passerelles de paiement et plus." },
              { icon: <BarChart className="h-10 w-10 text-cyan-500" />, title: "Rapports avancés", description: "Générez des rapports détaillés sur vos ventes, stocks et performances." },
              { icon: <ClipboardList className="h-10 w-10 text-amber-500" />, title: "Alertes et Suivi", description: "Recevez des alertes sur les niveaux de stock et suivez les performances des vendeurs." },
            ]
          },
          {
            title: 'Gestion de Projets et Tâches',
            key: 'projets',
            features: [
              { icon: <Briefcase className="h-10 w-10 text-violet-500" />, title: "Gestion de projets", description: "Planifiez et suivez vos projets d'entreprise du début à la fin." },
              { icon: <FileText className="h-10 w-10 text-rose-500" />, title: "Gestion des tâches", description: "Assignez et gérez les tâches pour une meilleure productivité." },
            ]
          },
          {
            title: 'Importation et Exportation',
            key: 'importexport',
            features: [
              { icon: <AlertTriangle className="h-10 w-10 text-yellow-600" />, title: "Import/Export", description: "Importez et exportez vos marchandises avec des rapports précis." },
            ]
          },
          {
            title: 'Support et Assistance',
            key: 'assistance',
            features: [
              { icon: <Clock className="h-10 w-10 text-gray-600" />, title: "Support 24/7", description: "Notre équipe est disponible 24h/24 et 7j/7 pour vous aider." },
              { icon: <Globe className="h-10 w-10 text-blue-600" />, title: "Développé pour la Guinée", description: "Une solution pensée pour répondre aux réalités guinéennes." },
            ]
          },
        ].map(({ title, key, features }) => (
          <div key={key} className="mb-6 border rounded-lg overflow-hidden">
            <button onClick={() => toggleSection(key)} className="w-full flex justify-between items-center p-4 bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              {openSection === key ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </button>
            {openSection === key && (
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <FeatureCard 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

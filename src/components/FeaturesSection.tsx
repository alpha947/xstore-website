// src/components/FeaturesSection.tsx
import React from 'react';
import { FeatureCard } from './FeatureCard';
import { 
  Database, ShoppingCart, BarChart, Smartphone, AlertTriangle, Settings, 
  Users, Boxes, TrendingUp, Briefcase, CreditCard, FileText, UserCheck 
} from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-28 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Toutes les fonctionnalités de Stock Connecter</h2>
        <p className="text-center text-xl text-gray-600 mb-20 max-w-3xl mx-auto">
          Découvrez une solution complète, adaptée aux réalités guinéennes, pour gérer vos stocks, vos équipes et vos finances.
        </p>

        <div className="space-y-16">
          {/* Gestion des stocks */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">Gestion des stocks</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Boxes className="h-8 w-8 text-green-600" />}
                title="Connexion des stocks"
                description="Synchronisez tous vos stocks entre différentes boutiques en temps réel."
              />
              <FeatureCard 
                icon={<Database className="h-8 w-8 text-green-600" />}
                title="Gestion des articles"
                description="Ajoutez, listez, comptez vos produits, imprimez des codes-barres et gérez catégories, marques et unités."
              />
              <FeatureCard 
                icon={<Settings className="h-8 w-8 text-green-600" />}
                title="Ajustement des stocks"
                description="Corrigez facilement les écarts d'inventaire avec précision."
              />
            </div>
          </div>

          {/* Ventes et achats */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">Entrées et sorties</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<ShoppingCart className="h-8 w-8 text-green-600" />}
                title="Gestion des ventes/achats"
                description="Suivez les entrées (achats) et sorties (ventes) avec une interface intuitive."
              />
              <FeatureCard 
                icon={<Boxes className="h-8 w-8 text-green-600" />}
                title="Transfert entre boutiques"
                description="Transférez vos stocks entre points de vente en toute simplicité."
              />
            </div>
          </div>

          {/* Comptabilité */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">Comptabilité intégrée</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<CreditCard className="h-8 w-8 text-green-600" />}
                title="Gestion des comptes"
                description="Listez les comptes, gérez transferts d'argent, dépenses et dépôts."
              />
              <FeatureCard 
                icon={<TrendingUp className="h-8 w-8 text-green-600" />}
                title="Rapports financiers"
                description="Analysez profits, pertes et performances des vendeurs avec des rapports détaillés."
              />
            </div>
          </div>

          {/* Ressources humaines */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">Gestion RH</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Users className="h-8 w-8 text-green-600" />}
                title="Gestion des personnes"
                description="Gérez employés, utilisateurs, clients et fournisseurs efficacement."
              />
              <FeatureCard 
                icon={<UserCheck className="h-8 w-8 text-green-600" />}
                title="Ressources humaines"
                description="Suivez présence, congés, salaires, et performances des équipes."
              />
            </div>
          </div>

          {/* Rapports et paramètres */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">Analyses et personnalisation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<BarChart className="h-8 w-8 text-green-600" />}
                title="Rapports avancés"
                description="Statistiques poussées sur ventes, stocks, clients, et performances des livreurs."
              />
              <FeatureCard 
                icon={<Smartphone className="h-8 w-8 text-green-600" />}
                title="Dashboard intelligent"
                description="Vue d’ensemble réactive pour des décisions rapides et informées."
              />
              <FeatureCard 
                icon={<Settings className="h-8 w-8 text-green-600" />}
                title="Paramétrage complet"
                description="Personnalisez SMS, emails, paiements, et sauvegardes selon vos besoins."
              />
            </div>
          </div>

          {/* Projets et tâches */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-gray-800">Gestion avancée</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Briefcase className="h-8 w-8 text-green-600" />}
                title="Gestion de projets"
                description="Planifiez et suivez vos projets d’entreprise de A à Z."
              />
              <FeatureCard 
                icon={<FileText className="h-8 w-8 text-green-600" />}
                title="Tâches d’entreprise"
                description="Assignez et gérez les tâches pour une productivité maximale."
              />
              <FeatureCard 
                icon={<AlertTriangle className="h-8 w-8 text-green-600" />}
                title="Import/Export"
                description="Importez et exportez vos marchandises avec des rapports personnalisés."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
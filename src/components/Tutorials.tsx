  // src/components/TutorialsSection.tsx
  import React, { useState } from 'react';
  import { Search, Filter, PlayCircle } from 'lucide-react';

  interface Tutorial {
    title: string;
    description: string;
    videoUrl: string;
    category: string;
    thumbnail: string; // Ajout pour imiter YouTube
  }

  export function Tutorials() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const tutorials: Tutorial[] = [
      {
        title: "Tableau de Bord : Aperçu en Temps Réel",
        description: "Suivez vos ventes, revenus et bénéfices en temps réel.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Tableau de Bord",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Point de Vente : Interface Intuitive",
        description: "Utilisez le PDV avec remises et taxes.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Point de Vente",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Gestion des Produits : Ajout et Exportation",
        description: "Ajoutez et exportez vos produits facilement.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Gestion des Produits",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Devis : Création et Conversion",
        description: "Créez et convertissez des devis en ventes.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Devis",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Gestion des Ventes : Contrôle Total",
        description: "Gérez vos ventes et envoyez des PDF.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Gestion des Ventes",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Gestion des Achats : Flux Complet",
        description: "Suivez vos achats de bout en bout.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Gestion des Achats",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Gestion des Retours : Ventes et Achats",
        description: "Traitez les retours efficacement.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Gestion des Retours",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Gestion des Utilisateurs et Clients",
        description: "Gérez utilisateurs, clients et fournisseurs.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Gestion des Utilisateurs et Clients",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Rapports Complets : Analyse Détaillée",
        description: "Analysez vos performances avec des rapports.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Rapports Complets",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Paramètres du Système : Personnalisation",
        description: "Configurez Istock selon vos besoins.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Paramètres du Système",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Fonctionnalités Supplémentaires : Multilingue",
        description: "Support multilingue et notifications.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Fonctionnalités Supplémentaires",
        thumbnail: "utilisateur1.jpg",
      },
      {
        title: "Pourquoi Choisir IStock : Avantages",
        description: "Les raisons de choisir IStock.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Pourquoi Choisir Istock",
        thumbnail: "utilisateur1.jpg",
      },
    ];

    const categories = [
      'Tous',
      'Tableau de Bord',
      'Point de Vente',
      'Gestion des Produits',
      'Devis',
      'Gestion des Ventes',
      'Gestion des Achats',
      'Gestion des Retours',
      'Gestion des Utilisateurs et Clients',
      'Rapports Complets',
      'Paramètres du Système',
      'Fonctionnalités Supplémentaires',
      'Pourquoi Choisir Istock',
    ];

    // Filtrage des tutoriels
    const filteredTutorials = tutorials.filter(tutorial => {
      const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Tous' || tutorial.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return (
      <section className="py-24 md:py-32 bg-gray-100 min-h-screen"> {/* Aération pour le grand écran */}
      <div className="container mx-auto px-6 md:px-12"> 
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between mb-12"> {/* Barre de recherche et filtre */}
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un tutoriel..."
              className="w-full bg-white pl-12 pr-4 py-3 rounded-full shadow-md text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white pl-10 pr-4 py-3 rounded-full shadow-md text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

          {/* Grille de tutoriels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredTutorials.length > 0 ? (
              filteredTutorials.map((tutorial, index) => (
                <a 
                  key={index} 
                  href={tutorial.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative aspect-video">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40">
                      <PlayCircle className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2">{tutorial.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-2">{tutorial.description}</p>
                    <p className="text-xs text-gray-500 mt-2">Istock Tutorials</p>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">Aucun tutoriel trouvé pour cette recherche.</p>
            )}
          </div>
        </div>
      </section>
    );
  }
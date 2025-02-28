// src/components/ClientsSection.tsx
import React, { useState } from 'react';
import { Search, MapPin, Store, EyeOff, Map } from 'lucide-react';

const clientsData = [
  { region: 'Conakry', owner: 'Mamadou Diallo', store: 'Boutique A', address: 'Rue 123, Kaloum', type: 'Alimentation générale' },
  { region: 'Conakry', owner: 'Alpha Barry', store: 'Boutique B', address: 'Avenue 456, Dixinn', type: 'Electronique' },
  { region: 'Kindia', owner: 'Aissata Bah', store: 'Boutique F', address: 'Marché central, Kindia', type: 'Légumes' },
  { region: 'Labé', owner: 'Ibrahima Sylla', store: 'Boutique K', address: 'Quartier Tata, Labé', type: 'Chaussures' },
  { region: 'Kankan', owner: 'Fatoumata Camara', store: 'Boutique P', address: 'Route Nationale, Kankan', type: 'Habits' },
  { region: 'Faranah', owner: 'Moussa Camara', store: 'Boutique U', address: 'Centre-ville, Faranah', type: 'Electroménager' },
  { region: 'Zerekore', owner: 'Kadiatou Bah', store: 'Boutique Z', address: 'Marché central, Zerekore', type: 'Jus' },
  { region: 'Mamou', owner: 'Alpha Bah', store: 'Boutique AE', address: 'Rue du Commerce, Mamou', type: 'Alimentation générale' },
];

export function PartnersMap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const regions = [...new Set(clientsData.map(client => client.region))];
  const totalClients = clientsData.length;

  const filteredClients = clientsData.filter(client =>
    (client.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.region.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedRegion ? client.region === selectedRegion : true)
  );

  return (
    <section className="py-24 md:py-32 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-xl md:text-3xl text-center leading-tight mb-6">
          Nos Clients ({totalClients})
        </h2>

        {/* Barre de recherche et filtre */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between mb-12">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un client..."
              className="w-full bg-white pl-12 pr-4 py-3 rounded-full shadow-md text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-white pl-4 pr-4 py-3 rounded-full shadow-md text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="">Toutes les régions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Affichage des clients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-5 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
              <Store className="h-12 w-12 text-green-600" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{client.owner}</h3>
                <p className="text-gray-600 font-medium">{client.store} ({client.type})</p>
                <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                  <Map className="h-4 w-4 text-gray-400" /> {client.address}
                </p>
                <div className="mt-2 flex items-center text-gray-500">
                  <EyeOff className="h-5 w-5 mr-2" />
                  <span>Contact masqué</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

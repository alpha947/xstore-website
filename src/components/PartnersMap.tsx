// src/components/ClientsSection.tsx
import React, { useState } from 'react';
import { Search, MapPin, Phone, Store } from 'lucide-react';

const clientsData = [
  // Conakry
  { region: 'Conakry', owner: 'Mamadou Diallo', store: 'Boutique A', phone: '+224 620 123 456' },
  { region: 'Conakry', owner: 'Alpha Barry', store: 'Boutique B', phone: '+224 624 987 321' },
  { region: 'Conakry', owner: 'Fatou Bangoura', store: 'Boutique C', phone: '+224 620 111 222' },
  { region: 'Conakry', owner: 'Ibrahima Camara', store: 'Boutique D', phone: '+224 620 333 444' },
  { region: 'Conakry', owner: 'Aminata Sylla', store: 'Boutique E', phone: '+224 620 555 666' },

  // Kindia
  { region: 'Kindia', owner: 'Aissata Bah', store: 'Boutique F', phone: '+224 621 654 321' },
  { region: 'Kindia', owner: 'Mariama Conde', store: 'Boutique G', phone: '+224 625 321 987' },
  { region: 'Kindia', owner: 'Ousmane Diallo', store: 'Boutique H', phone: '+224 621 777 888' },
  { region: 'Kindia', owner: 'Fatou Camara', store: 'Boutique I', phone: '+224 621 999 000' },
  { region: 'Kindia', owner: 'Sory Sylla', store: 'Boutique J', phone: '+224 621 444 555' },

  // Labé
  { region: 'Labé', owner: 'Ibrahima Sylla', store: 'Boutique K', phone: '+224 622 789 654' },
  { region: 'Labé', owner: 'Kadiatou Diallo', store: 'Boutique L', phone: '+224 622 666 777' },
  { region: 'Labé', owner: 'Moussa Bah', store: 'Boutique M', phone: '+224 622 888 999' },
  { region: 'Labé', owner: 'Aissatou Barry', store: 'Boutique N', phone: '+224 622 123 234' },
  { region: 'Labé', owner: 'Alpha Camara', store: 'Boutique O', phone: '+224 622 345 456' },

  // Kankan
  { region: 'Kankan', owner: 'Fatoumata Camara', store: 'Boutique P', phone: '+224 623 456 789' },
  { region: 'Kankan', owner: 'Ibrahima Keita', store: 'Boutique Q', phone: '+224 623 111 222' },
  { region: 'Kankan', owner: 'Mamadou Bah', store: 'Boutique R', phone: '+224 623 333 444' },
  { region: 'Kankan', owner: 'Aminata Diallo', store: 'Boutique S', phone: '+224 623 555 666' },
  { region: 'Kankan', owner: 'Oumar Sylla', store: 'Boutique T', phone: '+224 623 777 888' },

  // Faranah
  { region: 'Faranah', owner: 'Moussa Camara', store: 'Boutique U', phone: '+224 624 123 456' },
  { region: 'Faranah', owner: 'Fatou Diallo', store: 'Boutique V', phone: '+224 624 654 321' },
  { region: 'Faranah', owner: 'Ibrahima Bah', store: 'Boutique W', phone: '+224 624 789 654' },
  { region: 'Faranah', owner: 'Aissata Keita', store: 'Boutique X', phone: '+224 624 456 789' },
  { region: 'Faranah', owner: 'Alpha Sylla', store: 'Boutique Y', phone: '+224 624 987 321' },

  // Zerekore
  { region: 'Zerekore', owner: 'Kadiatou Bah', store: 'Boutique Z', phone: '+224 625 123 456' },
  { region: 'Zerekore', owner: 'Ibrahima Diallo', store: 'Boutique AA', phone: '+224 625 654 321' },
  { region: 'Zerekore', owner: 'Fatoumata Keita', store: 'Boutique AB', phone: '+224 625 789 654' },
  { region: 'Zerekore', owner: 'Ousmane Camara', store: 'Boutique AC', phone: '+224 625 456 789' },
  { region: 'Zerekore', owner: 'Mamadou Sylla', store: 'Boutique AD', phone: '+224 625 987 321' },

  // Mamou
  { region: 'Mamou', owner: 'Alpha Bah', store: 'Boutique AE', phone: '+224 626 123 456' },
  { region: 'Mamou', owner: 'Aminata Diallo', store: 'Boutique AF', phone: '+224 626 654 321' },
  { region: 'Mamou', owner: 'Moussa Sylla', store: 'Boutique AG', phone: '+224 626 789 654' },
  { region: 'Mamou', owner: 'Fatou Camara', store: 'Boutique AH', phone: '+224 626 456 789' },
  { region: 'Mamou', owner: 'Ibrahima Barry', store: 'Boutique AI', phone: '+224 626 987 321' },
];

export function PartnersMap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const regions = [...new Set(clientsData.map(client => client.region))];

  const filteredClients = clientsData.filter(client =>
    (client.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.region.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedRegion ? client.region === selectedRegion : true)
  );

  const groupedByRegion = filteredClients.reduce((acc, client) => {
    if (!acc[client.region]) acc[client.region] = [];
    acc[client.region].push(client);
    return acc;
  }, {} as { [key: string]: typeof clientsData });

  const totalClients = filteredClients.length;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-xl md:text-3xl text-center leading-tight mb-6">
          Liste des <span className="text-green-600 font-extrabold tracking-wide">Clients</span>
        </h2>

        <p className="text-center text-gray-700 mb-4">Total des clients : {totalClients}</p>

        {/* Search Bar and Region Filter */}
        <div className="flex items-center gap-4 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 w-full">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Rechercher par nom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
          <div>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
            >
              <option value="">Toutes les régions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Clients List */}
        {Object.keys(groupedByRegion).map(region => (
          <div key={region} className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-600" /> {region}
            </h3>
            <div className="space-y-4">
              {groupedByRegion[region].map((client, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
                  <Store className="h-10 w-10 text-green-600" />
                  <div>
                    <h4 className="text-lg font-semibold">{client.owner}</h4>
                    <p className="text-gray-600">{client.store}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{client.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// src/components/DemoModal.tsx
import React from 'react';
import Select from "react-select";
import { 
  Store, 
  ShoppingBag, 
  Package, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle 
} from 'lucide-react';

interface DemoRequestForm {
  numeroboutique: string;
  nomboutique: string;
  typeboutique: string;
  Adresse: string;
  contact: string;
  email: string;
  whatsapp: string;
}

interface DemoModalProps {
  showDemoForm: boolean;
  setShowDemoForm: (show: boolean) => void;
  demoForm: DemoRequestForm;
  setDemoForm: (form: DemoRequestForm) => void;
  handleDemoSubmit: (e: React.FormEvent) => void;
}

//La liste des differentes boutiques
const options = [
  { value: "electronique", label: "Électronique" },
  { value: "habits", label: "Habits, chaussures et sacs" },
  { value: "piecederechange", label: "Pièce de rechange" },
  { value: "jus", label: "Jus" },
  { value: "alimentation", label: "Alimentation générale" },
  { value: "pharmacie", label: "Pharmacie" },
  { value: "cosmetique", label: "Cosmétiques & Beauté" },
  { value: "boulangerie", label: "Boulangerie & Pâtisserie" },
  { value: "informatique", label: "Informatique & Accessoires" },
  { value: "meubles", label: "Meubles & Décoration" },
  { value: "quincaillerie", label: "Quincaillerie" },
  { value: "boisson", label: "Boissons & Spiritueux" },
  { value: "electromenager", label: "Électroménager" },
  { value: "papeterie", label: "Papeterie & Fournitures" },
  { value: "friperie", label: "Friperie" },
  { value: "sport", label: "Articles de sport" },
  { value: "bijouterie", label: "Bijouterie & Montres" },
  { value: "telecom", label: "Téléphonie & Accessoires" },
  { value: "maroquinerie", label: "Maroquinerie & Bagagerie" },
  { value: "materiaux", label: "Matériaux de construction" },
  { value: "agriculture", label: "Produits agricoles" },
];
export function DemoModal({ 
  showDemoForm, 
  setShowDemoForm, 
  demoForm, 
  setDemoForm, 
  handleDemoSubmit 
}: DemoModalProps) {
  if (!showDemoForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 py-6 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
        <h3 className="text-xl text-gray-900 mb-6 text-center">Demande de démonstration</h3>
        <form onSubmit={handleDemoSubmit} className="space-y-4">
          {/* Numéro Boutique */}
          <div className="flex items-center gap-3">
            <Store className="h-5 w-5 text-green-600" />
            <input
              type="text"
              required
              value={demoForm.numeroboutique}
              onChange={(e) => setDemoForm({...demoForm, numeroboutique: e.target.value})}
              placeholder="Numéro de la boutique"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

          {/* Nom Boutique */}
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-green-600" />
            <input
              type="text"
              required
              value={demoForm.nomboutique}
              onChange={(e) => setDemoForm({...demoForm, nomboutique: e.target.value})}
              placeholder="Nom de la boutique"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

          {/* Type Boutique (Select) */}
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-green-600" />
            <Select
              options={options}
              value={options.find(option => option.value === demoForm.typeboutique)}
              onChange={(selectedOption) =>
                setDemoForm({ ...demoForm, typeboutique: selectedOption ? selectedOption.value : '' })
              }
              placeholder="Type de boutique"
              className="w-full text-sm"
              classNamePrefix="react-select"
            />
          </div>

          {/* Adresse */}
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-green-600" />
            <input
              type="text"
              required
              value={demoForm.Adresse}
              onChange={(e) => setDemoForm({...demoForm, Adresse: e.target.value})}
              placeholder="Adresse"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-green-600" />
            <input
              type="tel"
              required
              value={demoForm.contact}
              onChange={(e) => setDemoForm({...demoForm, contact: e.target.value})}
              placeholder="Numéro de téléphone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-green-600" />
            <input
              type="email"
              required
              value={demoForm.email}
              onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <input
              type="tel"
              required
              value={demoForm.whatsapp}
              onChange={(e) => setDemoForm({...demoForm, whatsapp: e.target.value})}
              placeholder="Numéro WhatsApp"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

          {/* Boutons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold text-base shadow-md"
            >
              Envoyer
            </button>
            <button
              type="button"
              onClick={() => setShowDemoForm(false)}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-semibold text-base"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
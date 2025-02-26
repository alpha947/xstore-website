// src/components/NewsletterSection.tsx
import React from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface NewsletterSectionProps {
  email: string;
  setEmail: (email: string) => void;
  subscribed: boolean;
  setSubscribed: (subscribed: boolean) => void;
}

export function NewsletterSection({ email, setEmail, subscribed, setSubscribed }: NewsletterSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-8">Restez informé</h2>
        <p className="text-gray-600 mb-8">
          Recevez nos actualités et découvrez nos nouvelles fonctionnalités
        </p>
        {subscribed ? (
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span>Merci, nous vous reviendrons plus tard !</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email professionnel"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2 justify-center"
            >
              <Mail className="h-5 w-5" />
              S'inscrire
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
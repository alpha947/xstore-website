// src/components/PlatformSection.tsx
import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';

export function PlatformSection() {
  // Fonction de téléchargement des fichiers de setup Desktop
  const handleDownload = (fileName: string) => {
    // Crée un lien temporaire pour le téléchargement
    const link = document.createElement('a');
    link.href = `/setup-files/${fileName}`; // Assurez-vous que les fichiers sont dans le dossier public/setup-files
    link.download = fileName;
    link.click(); // Déclenche le téléchargement
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-3xl text-center mb-6 md:mb-10">Disponible sur Mobile et Desktop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Section Mobile */}
          <div className="text-center p-4 md:p-6 border rounded-lg shadow-md">
            <div className="flex justify-center mb-3 md:mb-4">
              <Smartphone className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Application Mobile</h3>
            <p className="text-gray-600 mb-3 md:mb-4">
              Gérez votre entreprise où que vous soyez avec nos applications Android et iOS
            </p>
            <div className="flex justify-center gap-3 md:gap-4">
              {/* Lien Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.example.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              {/* Lien App Store */}
              <a
                href="https://apps.apple.com/app/id123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          {/* Section Desktop */}
          <div className="text-center p-4 md:p-6 border rounded-lg shadow-md">
            <div className="flex justify-center mb-3 md:mb-4">
              <Monitor className="h-16 w-16 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Application Desktop</h3>
            <p className="text-gray-600 mb-3 md:mb-4">
              Accédez à xstore depuis votre navigateur web ou installez-le directement sur votre ordinateur pour une expérience optimale
            </p>
            <div className="flex justify-center gap-3 md:gap-4">
              {/* Bouton de téléchargement pour Mac */}
              <button
                onClick={() => handleDownload('xstore-installer 2.0.0 mac.zip')}
                className="cursor-pointer"
              >
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-mac-app-store.svg"
                  alt="Download on the Mac App Store"
                  className="h-12"
                />
              </button>

              {/* Bouton de téléchargement pour Windows */}
              <button
                onClick={() => handleDownload('xstore-installer 2.0.0.zip')}
                className="cursor-pointer"
              >
                <img
                  src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"
                  alt="Download on the Microsoft Store"
                  className="h-12"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

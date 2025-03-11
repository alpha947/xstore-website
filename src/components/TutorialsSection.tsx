// src/components/TutorialsSection.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Youtube } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const tutorials = [
  {
    title: "Présentation générale",
    description: "Découvrez toutes les fonctionnalités de IStock en 5 minutes",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://www.youtube.com/watch?v=1"
  },
  {
    title: "Configuration initiale",
    description: "Suivez et gérez efficacement vos stocks",
    thumbnail: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://www.youtube.com/watch?v=4"
  },

  {
    title: "Gestion des ventes",
    description: "Effectuez des ventes et suivez les transactions",
    thumbnail: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://www.youtube.com/watch?v=5"
  }, 
  {
    title: "Rapports et statistiques",
    description: "Créez des rapports détaillés sur vos activités",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://www.youtube.com/watch?v=7"
  },
  {
    title: "Gestion des utilisateurs",
    description: "Ajoutez et gérez les utilisateurs de votre compte",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://www.youtube.com/watch?v=8"
  },
  {
    title: "Personnalisation",
    description: "Personnalisez l'apparence et les paramètres de votre système",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://www.youtube.com/watch?v=9"
  },
  {
    title: "Astuces avancées",
    description: "Découvrez des fonctionnalités avancées pour maximiser l'efficacité",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "https://www.youtube.com/watch?v=10"
  }
];

export function TutorialsSection() {
  return (
    <section id="tutorials" className="py-30 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-xl md:text-3xl text-center leading-tight md:mb-10">
          Quelques tutos <span className="text-green-600 font-extrabold tracking-wide">IStock</span>
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {tutorials.map((tutorial, index) => (
            <SwiperSlide key={index}>
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                  <div className="aspect-video relative group cursor-pointer">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Youtube className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600">{tutorial.description}</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// src/components/TutorialsSection.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Youtube } from 'lucide-react';

const tutorials = [
  {
    title: "Présentation générale",
    description: "Découvrez toutes les fonctionnalités de XStore en 5 minutes",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  // Autres tutoriels...
];

export function TutorialsSection() {
  return (
    <section id="tutorials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Découvrez XStore en action</h2>
        <Swiper
          modules={[Navigation, Pagination]}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
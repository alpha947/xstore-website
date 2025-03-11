// // src/components/Hero.tsx
// import React from 'react';
// import { Shield, Zap, CheckCircle } from 'lucide-react';

// interface HeroProps {
//   setShowDemoForm: (show: boolean) => void;
// }

// export function Hero({ setShowDemoForm }: HeroProps) {
//   return (
//     <div className="container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-20 font-sans">
//       <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-18 items-center">
//         {/* Texte */}
//         <div className="space-y-0 text-center md:text-left">
//           <h2 className="text-xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight md:mb-10">
//             Connectez vos boutiques avec <span className="text-green-600 font-extrabold tracking-wide">Xstore</span>
//           </h2>
//         </div>

//         {/* Image avec points forts */}
//         <div className="relative w-full">
//           <img
//             src="utilisateur1.jpg"
//             alt="Propriétaire de boutique au Marché Madina utilisant XStore"
//             className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video"
//           />
//           {/* Drapeau de la Guinée */}
//           <img
//             src="guinee.jpeg"
//             alt="Drapeau de la Guinée"
//             className="absolute top-2 right-2 w-6 h-4 sm:w-8 sm:h-5 md:w-10 md:h-6 rounded-sm shadow-md"
//           />

//           {/* Points forts superposés à droite */}
//           <div className="absolute right-2 sm:right-4 md:right-6 top-4 sm:top-6 md:top-8 flex flex-col gap-3 sm:gap-4 md:gap-5">
//             {/* Point 1: Automatisation */}
//             <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 w-40 sm:w-48 md:w-56">
//               <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600 flex-shrink-0" />
//               <div> 
//                 <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">En temps réel</p>
//               </div>
//             </div>

//             {/* Point 2: Vitesse */}
//             <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 w-40 sm:w-48 md:w-56">
//               <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600 flex-shrink-0" />
//               <div> 
//                 <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Traitement rapide</p>
//               </div>
//             </div>

//             {/* Point 3: Praticité */}
//             <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 w-40 sm:w-48 md:w-56">
//               <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600 flex-shrink-0" />
//               <div> 
//                 <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Facile à utiliser</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// src/components/Hero.tsx
import React from 'react';
import { Shield, Star } from 'lucide-react';

interface HeroProps {
  setShowDemoForm: (show: boolean) => void;
}

export function Hero({ setShowDemoForm }: HeroProps) {
  return (
    <div className="container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-20 font-sans"> {/* Augmentation du pt pour éloigner du header */}
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-18 items-center"> {/* Augmentation du gap en mobile */}
        {/* Texte */}
        <div className="space-y-0 text-center md:text-left"> {/* Augmentation du space-y */}
          <h2 className="text-xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight md:mb-10">  
            Connectez vos boutiques avec <span className="text-green-600 font-extrabold tracking-wide">Istock</span>
          </h2>
        </div>

        {/* Image */}
        <div className="relative w-full">
          <img 
            src="utilisateur1.jpg" // Remplacez par votre image réelle
            alt="Propriétaire de boutique au Marché Madina utilisant XStore"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-video"
          />
          {/* Drapeau de la Guinée */}
          <img 
            src="guinee.jpeg" // Remplacez par l'image du drapeau
            alt="Drapeau de la Guinée"
            className="absolute top-2 right-2 w-8 h-5 md:w-10 md:h-6   rounded-sm shadow-md"
          />
          <div className="absolute -bottom-4 left-2 md:-bottom-8 md:-left-8 bg-white p-2 md:p-4 rounded-lg shadow-xl border border-gray-100">
            <div className="flex items-center gap-1">
              <Shield className="h-5 w-5 md:h-8 md:w-8 text-green-600" />
              <div>
                <p className="font-semibold text-sm md:text-base text-gray-900">Automatisez vos activités</p>
                <p className="text-xs md:text-sm text-gray-600">En temps réel</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
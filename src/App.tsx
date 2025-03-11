import React, { useState, useEffect } from 'react';
import { CheckCircle, DownloadCloud } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PartnersMap } from './components/PartnersMap';
import { DemoModal } from './components/DemoModal';
import { PlatformSection } from './components/PlatformSection';
import { FeaturesSection } from './components/FeaturesSection'; 
import { ContactSection } from './components/ContactSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';  
import { TutorialsSection } from './components/TutorialsSection'; 
import { Tutorials } from './components/Tutorials';

interface DemoRequestForm {
  numeroboutique: string;
  nomboutique: string;
  typeboutique: string;
  Adresse: string;
  contact: string;
  email: string;
  whatsapp: string;
}

function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [demoForm, setDemoForm] = useState<DemoRequestForm>({
    numeroboutique: '',
    nomboutique: '',
    typeboutique: '',
    Adresse: '',
    contact: '',
    email: '',
    whatsapp: ''
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeSection, setActiveSection] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('PWA installed successfully!');
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  const sendTwilioSMS = async (formData: DemoRequestForm) => {
    const accountSid = process.env.REACT_APP_TWILIO_SID;
    const authToken = process.env.REACT_APP_TWILIO_TOKEN;
    const twilioNumber = process.env.REACT_APP_TWILIO_NUMBER;
    const recipientNumber = '+224611696878'; // Ex: '+1234567890'

    // Vérification des identifiants
    if (!accountSid || !authToken || !twilioNumber) {
      throw new Error('Identifiants Twilio manquants. Vérifiez vos variables d\'environnement.');
    }

    const message = `Nouvelle demande de démo:
      Boutique: ${formData.nomboutique} (#${formData.numeroboutique})
      Type: ${formData.typeboutique}
      Adresse: ${formData.Adresse}
      Contact: ${formData.contact}
      Email: ${formData.email}
      WhatsApp: ${formData.whatsapp}`;

    try {
      const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          From: twilioNumber,
          To: recipientNumber,
          Body: message,
        }).toString(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Échec de l'envoi SMS: ${errorData.message || response.statusText}`);
      }

      console.log('SMS envoyé avec succès:', await response.json());
    } catch (error) {
      console.error('Erreur Twilio:', error);
      throw error; // Relance l'erreur pour la gestion dans handleDemoSubmit
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      await sendTwilioSMS(demoForm);

      setDemoSubmitted(true);
      setShowDemoForm(false);
      
      setTimeout(() => {
        setDemoSubmitted(false);
        setDemoForm({
          numeroboutique: '',
          nomboutique: '',
          typeboutique: '',
          Adresse: '',
          contact: '',
          email: '',
          whatsapp: ''
        });
      }, 3000);
    } catch (error: any) {
      setErrorMessage(error.message || 'Erreur lors de l\'envoi du SMS. Veuillez réessayer.');
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans">
      <Header 
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        setShowDemoForm={setShowDemoForm}
      />

      {activeSection === 'features' ? (
        <FeaturesSection />
      ) : activeSection === 'tutorials' ? (
        <Tutorials />
      ) : activeSection === 'partners' ? (
        <PartnersMap />
      ) : (
        <>
          <Hero setShowDemoForm={setShowDemoForm} /> 
          <PlatformSection /> 
          <TutorialsSection />          
          <ContactSection />
          <NewsletterSection 
            email={email}
            setEmail={setEmail}
            subscribed={subscribed}
            setSubscribed={setSubscribed}
          />
          <Footer />
        </>
      )}

      <DemoModal
        showDemoForm={showDemoForm}
        setShowDemoForm={setShowDemoForm}
        demoForm={demoForm}
        setDemoForm={setDemoForm}
        handleDemoSubmit={handleDemoSubmit}
        isLoading={isLoading}
      />

      {demoSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center gap-4 animate-success">
            <CheckCircle className="h-12 w-12 text-green-600" />
            <p className="text-lg font-semibold text-gray-900 text-center">
              Demande envoyée avec succès !
            </p>
            <p className="text-sm text-gray-600 text-center">
              Notre équipe vous contactera sous 24h.
            </p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center gap-4">
            <p className="text-lg font-semibold text-red-600 text-center">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      {showInstallButton && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={handleInstallClick}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-500 transition"
          >
            <DownloadCloud className="h-5 w-5" />
            Installer l'application
          </button>
        </div>
      )}
    </div>
  );
}

export default App;


// // src/App.tsx
// import React, { useState, useEffect } from 'react';
// import { CheckCircle, DownloadCloud } from 'lucide-react';
// import { Header } from './components/Header';
// import { Hero } from './components/Hero';
// import { PartnersMap } from './components/PartnersMap';
// import { DemoModal } from './components/DemoModal';
// import { PlatformSection } from './components/PlatformSection';
// import { FeaturesSection } from './components/FeaturesSection'; 
// import { ContactSection } from './components/ContactSection';
// import { NewsletterSection } from './components/NewsletterSection';
// import { Footer } from './components/Footer';  
// import { TutorialsSection } from './components/TutorialsSection'; 
// import { Tutorials } from './components/Tutorials';

// interface DemoRequestForm {
//   numeroboutique: string;
//   nomboutique: string;
//   typeboutique: string;
//   Adresse: string;
//   contact: string;
//   email: string;
//   whatsapp: string;
// }

// function App() {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);
//   const [showDemoForm, setShowDemoForm] = useState(false);
//   const [demoForm, setDemoForm] = useState<DemoRequestForm>({
//     numeroboutique: '',
//     nomboutique: '',
//     typeboutique: '',
//     Adresse: '',
//     contact: '',
//     email: '',
//     whatsapp: ''
//   });
//   const [demoSubmitted, setDemoSubmitted] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
//   const [showInstallButton, setShowInstallButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener('beforeinstallprompt', (e) => {
//       e.preventDefault();
//       setDeferredPrompt(e);
//       setShowInstallButton(true);
//     });
//   }, []);

//   const handleInstallClick = () => {
//     if (deferredPrompt) {
//       deferredPrompt.prompt();
//       deferredPrompt.userChoice.then((choiceResult: any) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('PWA installed successfully!');
//         } else {
//           console.log('PWA installation declined');
//         }
//         setDeferredPrompt(null);
//         setShowInstallButton(false);
//       });
//     }
//   };

//   const handleDemoSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setDemoSubmitted(true);
//     setShowDemoForm(false);
//     setTimeout(() => {
//       setDemoSubmitted(false);
//       setDemoForm({
//         numeroboutique: '',
//         nomboutique: '',
//         typeboutique: '',
//         Adresse: '',
//         contact: '',
//         email: '',
//         whatsapp: ''
//       });
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans">
//       <Header 
//         setActiveSection={setActiveSection}
//         activeSection={activeSection}
//         setShowDemoForm={setShowDemoForm}
//       />

//       {activeSection === 'features' ? (
//         <FeaturesSection />
//       ) : activeSection === 'tutorials' ? (
//         <Tutorials /> // Ajout de la page Tutoriels
//       ) : activeSection === 'partners' ? (
//         <PartnersMap />
//       ) : (
//         <>
//           <Hero setShowDemoForm={setShowDemoForm} /> 
//           <PlatformSection /> 
//           <TutorialsSection />          
//           <ContactSection />
//           <NewsletterSection 
//             email={email}
//             setEmail={setEmail}
//             subscribed={subscribed}
//             setSubscribed={setSubscribed}
//           />
//           <Footer />
//         </>
//       )}

//       <DemoModal
//         showDemoForm={showDemoForm}
//         setShowDemoForm={setShowDemoForm}
//         demoForm={demoForm}
//         setDemoForm={setDemoForm}
//         handleDemoSubmit={handleDemoSubmit}
//       />

//       {demoSubmitted && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
//           <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center gap-4 animate-success">
//             <CheckCircle className="h-12 w-12 text-green-600" />
//             <p className="text-lg font-semibold text-gray-900 text-center">
//               Demande envoyée avec succès !
//             </p>
//             <p className="text-sm text-gray-600 text-center">
//               Notre équipe vous contactera sous 24h.
//             </p>
//           </div>
//         </div>
//       )}

//       {showInstallButton && (
//         <div className="fixed bottom-4 right-4 z-50">
//           <button
//             onClick={handleInstallClick}
//             className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-500 transition"
//           >
//             <DownloadCloud className="h-5 w-5" />
//             Installer l'application
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

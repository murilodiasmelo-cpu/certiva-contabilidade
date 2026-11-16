import { useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import OpeningAndLinksSection from './components/OpeningAndLinksSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { COMPANY_INFO, SERVICES } from './data/certivaData';

export default function App() {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const [preselectedService, setPreselectedService] = useState<string>(SERVICES[0].title);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToContactForm = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.setTimeout(() => {
      nameInputRef.current?.focus({ preventScroll: true });
    }, 350);
  };

  const floatingWhatsAppUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá, equipe Certiva Contabilidade! Gostaria de tirar uma dúvida.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09273E]">
      <Header onRequestQuote={() => scrollToContactForm()} />

      <main className="flex-1">
        <Hero onRequestQuote={() => scrollToContactForm()} />

        <AboutSection />

        <ServicesSection
          activeServiceId={activeServiceId}
          onSelectService={setActiveServiceId}
          onRequestServiceQuote={(serviceTitle) => scrollToContactForm(serviceTitle)}
        />

        <OpeningAndLinksSection
          onStartCompanyOpening={() => scrollToContactForm('Abertura de Empresa')}
        />

        <ContactSection
          preselectedService={preselectedService}
          nameInputRef={nameInputRef}
        />
      </main>

      <Footer onSelectService={setActiveServiceId} />

      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar a Certiva Contabilidade no WhatsApp"
        className="fixed bottom-4 right-4 z-30 h-11 inline-flex items-center gap-2 px-4 text-sm font-semibold text-white bg-[#38B55B] hover:bg-[#2C9649] rounded-sm shadow-sm transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#09273E] focus-visible:ring-offset-2"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>Chamar no WhatsApp</span>
      </a>
    </div>
  );
}

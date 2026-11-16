import { ArrowRight, Check, ChevronRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES, ServiceItem } from '../data/certivaData';

interface ServicesSectionProps {
  activeServiceId: string;
  onSelectService: (serviceId: string) => void;
  onRequestServiceQuote: (serviceTitle: string) => void;
}

export default function ServicesSection({
  activeServiceId,
  onSelectService,
  onRequestServiceQuote,
}: ServicesSectionProps) {
  const activeService: ServiceItem =
    SERVICES.find((service) => service.id === activeServiceId) ?? SERVICES[0];

  return (
    <section id="servicos" className="bg-[#F7F9FB] py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#38B55B] mb-2">
            Áreas de Atuação
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#09273E] leading-tight text-balance">
            Serviços contábeis estruturados para cada fase do seu negócio.
          </h2>
          <p className="mt-4 text-base text-[#5A6065] leading-relaxed">
            Selecione uma das seis especialidades da Certiva Contabilidade para consultar o escopo
            técnico e solicitar atendimento direcionado.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left master list */}
          <div
            role="tablist"
            aria-label="Lista de serviços contábeis"
            className="lg:col-span-5 bg-white border border-slate-200 rounded-sm divide-y divide-slate-200"
          >
            {SERVICES.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectService(service.id)}
                  className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#38B55B] ${
                    isSelected
                      ? 'bg-[#09273E] text-white'
                      : 'bg-white text-[#09273E] hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-baseline gap-3 min-w-0">
                    <span
                      className={`font-mono text-xs tabular-nums shrink-0 ${
                        isSelected ? 'text-[#38B55B]' : 'text-[#5A6065]'
                      }`}
                    >
                      {service.index}.
                    </span>
                    <span className="font-semibold text-sm sm:text-base truncate">
                      {service.title}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                      isSelected ? 'text-[#38B55B] translate-x-0.5' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right detail panel */}
          <div
            role="tabpanel"
            aria-label={activeService.title}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-sm p-6 sm:p-9"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-5 border-b border-slate-200">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-medium text-[#38B55B] tabular-nums">
                  {activeService.index}.
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#09273E]">
                  {activeService.title}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-base font-medium text-[#09273E] leading-relaxed">
              {activeService.summary}
            </p>
            <p className="mt-3 text-sm sm:text-[15px] text-[#5A6065] leading-relaxed">
              {activeService.description}
            </p>

            <div className="mt-7">
              <h4 className="text-xs font-semibold tracking-wider text-[#5A6065] mb-3.5">
                Escopo e principais entregas
              </h4>
              <ul className="space-y-2.5">
                {activeService.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-[#09273E]"
                  >
                    <Check className="w-4 h-4 text-[#38B55B] shrink-0 mt-1" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 pt-6 border-t border-slate-200 space-y-4">
              <p className="text-xs sm:text-sm text-[#5A6065]">
                <span className="font-semibold text-[#09273E]">Indicado para:</span>{' '}
                {activeService.audience}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Olá, equipe Certiva Contabilidade! Gostaria de informações sobre ${activeService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#38B55B] hover:bg-[#2C9649] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#09273E] focus-visible:ring-offset-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => onRequestServiceQuote(activeService.title)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#09273E] bg-white border border-slate-300 hover:border-[#09273E] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B]"
                >
                  Solicitar proposta
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

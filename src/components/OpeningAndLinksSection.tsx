import { useState } from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { OPENING_STEPS, USEFUL_LINKS } from '../data/certivaData';

interface OpeningAndLinksSectionProps {
  onStartCompanyOpening: () => void;
}

export default function OpeningAndLinksSection({
  onStartCompanyOpening,
}: OpeningAndLinksSectionProps) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const currentStep = OPENING_STEPS[activeStepIdx];

  return (
    <>
      {/* Company Opening Step-by-Step Guide */}
      <section id="abertura" className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#38B55B] mb-2">
                Constituição Empresarial
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#09273E] leading-tight text-balance">
                Como funciona a abertura da sua empresa com a Certiva.
              </h2>
            </div>

            <button
              type="button"
              onClick={onStartCompanyOpening}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#09273E] border border-[#09273E] hover:bg-[#09273E] hover:text-white rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 self-start lg:self-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B]"
            >
              Iniciar abertura de empresa
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4-Step Interactive Selector */}
          <div
            role="tablist"
            aria-label="Etapas de abertura de empresa"
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-sm divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-[#F7F9FB]"
          >
            {OPENING_STEPS.map((item, idx) => {
              const isActive = idx === activeStepIdx;
              return (
                <button
                  key={item.step}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`text-left p-5 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#38B55B] ${
                    isActive
                      ? 'bg-[#09273E] text-white'
                      : 'bg-white text-[#09273E] hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-xs font-medium tabular-nums ${
                        isActive ? 'text-[#38B55B]' : 'text-[#5A6065]'
                      }`}
                    >
                      Etapa {item.step}
                    </span>
                    <span
                      className={`text-xs ${isActive ? 'text-white/75' : 'text-[#5A6065]'}`}
                    >
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-2 font-semibold text-sm leading-snug">{item.title}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Step Details */}
          <div
            role="tabpanel"
            aria-label={currentStep.title}
            className="mt-6 bg-[#F7F9FB] border border-slate-200 rounded-sm p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6">
                <p className="text-xs font-mono text-[#38B55B] font-medium tabular-nums">
                  Etapa {currentStep.step} · {currentStep.duration}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-[#09273E]">
                  {currentStep.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#5A6065] leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              <div className="lg:col-span-6">
                <h4 className="text-xs font-semibold tracking-wider text-[#5A6065] mb-3.5">
                  O que providenciamos nesta etapa
                </h4>
                <ul className="space-y-3">
                  {currentStep.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#09273E]"
                    >
                      <Check className="w-4 h-4 text-[#38B55B] shrink-0 mt-1" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Government & Tax Links */}
      <section id="links-uteis" className="bg-[#F7F9FB] py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#38B55B] mb-2">
                Utilidade Pública
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#09273E]">
                Links Úteis e Portais Oficiais
              </h2>
            </div>
            <p className="text-sm text-[#5A6065] max-w-md">
              Acesso direto aos principais portais fiscais, societários e trabalhistas de Goiás e
              do Governo Federal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USEFUL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-slate-200 hover:border-[#09273E] rounded-sm p-6 flex flex-col justify-between transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-[#5A6065]">{link.category}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#38B55B] transition-colors shrink-0" />
                  </div>
                  <h3 className="mt-2 font-semibold text-base text-[#09273E] group-hover:text-[#38B55B] transition-colors">
                    {link.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A6065] leading-relaxed">{link.description}</p>
                </div>

                <span className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#09273E] inline-flex items-center gap-1.5">
                  Acessar portal oficial
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

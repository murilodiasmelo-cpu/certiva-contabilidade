import { Check } from 'lucide-react';
import { COMPANY_INFO, INSTITUTIONAL_PILLARS } from '../data/certivaData';

export default function AboutSection() {
  return (
    <section id="empresa" className="bg-white py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top editorial split: History + Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider text-[#38B55B] mb-2">
              Sobre a Certiva
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#09273E] leading-tight text-balance">
              Tradição contábil e estrutura dedicada desde {COMPANY_INFO.foundedYear}.
            </h2>
            <p className="mt-5 text-base text-[#5A6065] leading-relaxed">
              {INSTITUTIONAL_PILLARS.history}
            </p>
            <p className="mt-4 text-sm text-[#5A6065] leading-relaxed">
              Nossa sede no Parque Amazônia, em Goiânia, foi estruturada para receber empresários e
              gestores com atendimento direto, reservado e alinhado às exigências atuais do mercado.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <article className="pt-5 border-t border-slate-200">
              <h3 className="font-display text-lg font-bold text-[#09273E]">Missão</h3>
              <p className="mt-2.5 text-sm sm:text-[15px] text-[#5A6065] leading-relaxed">
                {INSTITUTIONAL_PILLARS.mission}
              </p>
            </article>

            <article className="pt-5 border-t border-slate-200">
              <h3 className="font-display text-lg font-bold text-[#09273E]">Visão</h3>
              <p className="mt-2.5 text-sm sm:text-[15px] text-[#5A6065] leading-relaxed">
                {INSTITUTIONAL_PILLARS.vision}
              </p>
            </article>
          </div>
        </div>

        {/* Values grid */}
        <div className="mt-14 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#09273E]">
                Valores que orientam cada entrega
              </h3>
            </div>
            <p className="text-sm text-[#5A6065]">
              Princípios éticos e operacionais aplicados em todos os departamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {INSTITUTIONAL_PILLARS.values.map((value) => (
              <div key={value.title} className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-sm bg-[#38B55B]/15 text-[#2C9649] shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <h4 className="text-base font-semibold text-[#09273E]">{value.title}</h4>
                </div>
                <p className="mt-2 text-sm text-[#5A6065] leading-relaxed pl-7">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { FormEvent, RefObject, useEffect, useState } from 'react';
import {
  AlertCircle,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/certivaData';

interface ContactSectionProps {
  preselectedService: string;
  nameInputRef: RefObject<HTMLInputElement | null>;
}

interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  taxRegime: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}

interface SubmittedQuote extends QuoteFormData {
  protocol: string;
  submittedAt: string;
}

const TAX_REGIMES = [
  'Ainda vou abrir a empresa',
  'Simples Nacional',
  'Lucro Presumido',
  'Lucro Real',
  'MEI / Profissional Liberal',
  'Não sei informar no momento',
];

function formatBrazilPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function ContactSection({
  preselectedService,
  nameInputRef,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService || SERVICES[0].title,
    taxRegime: TAX_REGIMES[0],
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedQuote, setSubmittedQuote] = useState<SubmittedQuote | null>(null);
  const [copiedField, setCopiedField] = useState<'email' | 'address' | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      setSubmittedQuote(null);
    }
  }, [preselectedService]);

  const handleCopy = async (text: string, field: 'email' | 'address') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API unavailable in restricted context
    }
  };

  const validateForm = (data: QuoteFormData): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 3) {
      nextErrors.name = 'Informe seu nome completo.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = 'Informe um e-mail válido.';
    }
    const phoneDigits = data.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp com DDD.';
    }
    if (!data.service) {
      nextErrors.service = 'Selecione o serviço desejado.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR');
    const formattedTime = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    setSubmittedQuote({
      ...formData,
      protocol: `CERT-${now.getFullYear()}-${randomCode}`,
      submittedAt: `${formattedDate} às ${formattedTime}`,
    });
  };

  const buildWhatsAppHref = (quote: SubmittedQuote | QuoteFormData, protocol?: string) => {
    const lines = [
      'Olá, equipe Certiva Contabilidade! Gostaria de solicitar uma proposta.',
      protocol ? `Protocolo: ${protocol}` : '',
      `Nome: ${quote.name}`,
      quote.company ? `Empresa/CNPJ: ${quote.company}` : '',
      `Serviço: ${quote.service}`,
      `Regime: ${quote.taxRegime}`,
      `E-mail: ${quote.email}`,
      `Telefone: ${quote.phone}`,
      quote.message ? `Observações: ${quote.message}` : '',
    ].filter(Boolean);

    return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <section id="contato" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column: Direct contact channels */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider text-[#38B55B] mb-2">
              Atendimento e Localização
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#09273E] leading-tight text-balance">
              Fale diretamente com a equipe da Certiva.
            </h2>
            <p className="mt-4 text-base text-[#5A6065] leading-relaxed">
              Solicite uma proposta personalizada para abertura de empresa, troca de contabilidade
              ou consultoria fiscal e trabalhista.
            </p>

            <div className="mt-8 divide-y divide-slate-200 border-t border-b border-slate-200">
              <div className="py-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#38B55B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-[#5A6065]">Telefone e WhatsApp</p>
                    <a
                      href={`tel:+${COMPANY_INFO.phoneRaw}`}
                      className="mt-0.5 block font-semibold text-[#09273E] hover:text-[#38B55B] tabular-nums transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2C9649] border border-[#38B55B]/40 hover:bg-[#38B55B]/10 rounded-sm transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>

              <div className="py-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-[#38B55B] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#5A6065]">E-mail institucional</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="mt-0.5 block font-semibold text-[#09273E] hover:text-[#38B55B] truncate transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#5A6065] hover:text-[#09273E] border border-slate-200 rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#38B55B]" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              <div className="py-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#38B55B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-[#5A6065]">Endereço do escritório</p>
                    <p className="mt-0.5 text-sm font-semibold text-[#09273E]">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-sm text-[#5A6065]">{COMPANY_INFO.cityState}, Brasil</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_INFO.fullAddress, 'address')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#5A6065] hover:text-[#09273E] border border-slate-200 rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedField === 'address' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#38B55B]" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copiar
                    </>
                  )}
                </button>
              </div>

              <div className="py-4 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#38B55B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-[#5A6065]">Horário de atendimento</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#09273E] tabular-nums">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                  'Olá, equipe Certiva Contabilidade! Gostaria de conversar pelo WhatsApp.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#38B55B] hover:bg-[#2C9649] rounded-sm transition-colors duration-150"
              >
                <MessageSquare className="w-4 h-4" />
                Chamar no WhatsApp {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right column: Validated Quote Request Form */}
          <div className="lg:col-span-7 bg-[#F7F9FB] border border-slate-200 rounded-sm p-6 sm:p-9">
            {submittedQuote ? (
              <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8">
                <div className="flex items-center gap-3 text-[#2C9649]">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-sm bg-[#38B55B]/15">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-xs font-mono font-medium tabular-nums">
                      Protocolo {submittedQuote.protocol} · {submittedQuote.submittedAt}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-[#09273E]">
                      Solicitação registrada com sucesso
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#5A6065] leading-relaxed">
                  Recebemos os dados da sua solicitação para{' '}
                  <strong className="text-[#09273E]">{submittedQuote.service}</strong>. Para
                  agilizar o atendimento imediato em horário comercial, você pode encaminhar este
                  resumo diretamente para nosso WhatsApp oficial.
                </p>

                <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-t border-b border-slate-200 text-sm">
                  <div>
                    <dt className="text-xs text-[#5A6065]">Solicitante</dt>
                    <dd className="font-semibold text-[#09273E]">{submittedQuote.name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#5A6065]">Serviço de interesse</dt>
                    <dd className="font-semibold text-[#09273E]">{submittedQuote.service}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#5A6065]">Regime tributário</dt>
                    <dd className="font-medium text-[#09273E]">{submittedQuote.taxRegime}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#5A6065]">Contato</dt>
                    <dd className="font-medium text-[#09273E] tabular-nums">
                      {submittedQuote.phone}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppHref(submittedQuote, submittedQuote.protocol)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#38B55B] hover:bg-[#2C9649] rounded-sm transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Continuar no WhatsApp {COMPANY_INFO.phoneDisplay}
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedQuote(null);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        service: SERVICES[0].title,
                        taxRegime: TAX_REGIMES[0],
                        message: '',
                      });
                    }}
                    className="px-4 py-3 text-sm font-semibold text-[#09273E] hover:text-[#38B55B] transition-colors cursor-pointer"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-slate-200">
                  <h3 className="font-display text-2xl font-bold text-[#09273E]">
                    Solicitar Proposta Contábil
                  </h3>
                  <p className="mt-1 text-sm text-[#5A6065]">
                    Preencha os campos abaixo para receber orientação e orçamento da nossa equipe.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-sm font-semibold text-[#09273E] mb-1.5"
                    >
                      Nome completo <span className="text-[#2C9649]">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id="quote-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Ex.: Carlos Eduardo Silva"
                      aria-invalid={Boolean(errors.name)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-sm text-[#09273E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38B55B] ${
                        errors.name ? 'border-red-600' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-company"
                      className="block text-sm font-semibold text-[#09273E] mb-1.5"
                    >
                      Empresa ou CNPJ (opcional)
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nome fantasia ou CNPJ"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm text-[#09273E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38B55B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-sm font-semibold text-[#09273E] mb-1.5"
                    >
                      E-mail <span className="text-[#2C9649]">*</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="nome@empresa.com.br"
                      aria-invalid={Boolean(errors.email)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-sm text-[#09273E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38B55B] ${
                        errors.email ? 'border-red-600' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-sm font-semibold text-[#09273E] mb-1.5"
                    >
                      Telefone / WhatsApp <span className="text-[#2C9649]">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: formatBrazilPhone(e.target.value) });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="(62) 99999-9999"
                      aria-invalid={Boolean(errors.phone)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-sm text-[#09273E] tabular-nums placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38B55B] ${
                        errors.phone ? 'border-red-600' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-service"
                      className="block text-sm font-semibold text-[#09273E] mb-1.5"
                    >
                      Serviço de interesse <span className="text-[#2C9649]">*</span>
                    </label>
                    <select
                      id="quote-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm text-[#09273E] focus:outline-none focus:ring-2 focus:ring-[#38B55B]"
                    >
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Assessoria Contábil Completa">
                        Assessoria Contábil Completa
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-regime"
                      className="block text-sm font-semibold text-[#09273E] mb-1.5"
                    >
                      Enquadramento atual
                    </label>
                    <select
                      id="quote-regime"
                      value={formData.taxRegime}
                      onChange={(e) => setFormData({ ...formData, taxRegime: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm text-[#09273E] focus:outline-none focus:ring-2 focus:ring-[#38B55B]"
                    >
                      {TAX_REGIMES.map((regime) => (
                        <option key={regime} value={regime}>
                          {regime}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quote-message"
                    className="block text-sm font-semibold text-[#09273E] mb-1.5"
                  >
                    Detalhes da demanda (opcional)
                  </label>
                  <textarea
                    id="quote-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Informe ramo de atividade, quantidade aproximada de colaboradores ou dúvidas principais..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-sm text-[#09273E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38B55B]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#09273E] hover:bg-[#103A5C] rounded-sm transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B] focus-visible:ring-offset-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Solicitação
                  </button>

                  <p className="text-xs text-[#5A6065]">
                    Sigilo garantido conforme ética profissional contábil.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

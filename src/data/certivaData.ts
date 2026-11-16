export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  deliverables: string[];
  audience: string;
}

export interface OpeningStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  checklist: string[];
}

export interface UsefulLink {
  name: string;
  category: string;
  description: string;
  url: string;
}

export const CERTIVA_LOGO_URL = '/assets/aistudio/logo_certiva_oficial_jpg_b00df68c.jpg';

export const COMPANY_INFO = {
  name: 'Certiva Contabilidade',
  groupAttribution: 'A Certiva Contabilidade é uma empresa do Grupo Certiva Participações.',
  foundedYear: '2008',
  cityState: 'Goiânia - GO',
  address: 'Rua Santarém, nº 873, Parque Amazônia',
  fullAddress: 'Rua Santarém, nº 873, Parque Amazônia, Goiânia - GO, Brasil',
  phoneDisplay: '(62) 99602-4466',
  phoneRaw: '5562996024466',
  email: 'contato@certivacontabilidade.com.br',
  hours: 'Segunda a sexta-feira, das 08:00 às 18:00',
  website: 'certivacontabilidade.com.br',
};

export const INSTITUTIONAL_PILLARS = {
  history:
    'Atuando e consolidando-se no mercado empresarial contábil desde 2008 em Goiânia, a Certiva Contabilidade busca constantemente novas alternativas para atender às necessidades individuais de cada cliente, dispondo de instalações estruturadas para oferecer conforto, agilidade e suporte completo.',
  mission:
    'Ser referência em qualidade e sermos reconhecidos pelos nossos padrões éticos e competência empresarial, contribuindo para o sucesso de nossos clientes ao oferecer as melhores soluções que otimizem resultados e assegurem qualidade e segurança nas decisões.',
  vision:
    'Ser referência no ramo de contabilidade na região Centro-Oeste e entorno, inovando e aperfeiçoando-se continuamente para atender às novas necessidades do mercado.',
  values: [
    {
      title: 'Transparência e Veracidade',
      detail: 'Comunicação clara sobre números, obrigações e cenários fiscais da sua empresa.',
    },
    {
      title: 'Pontualidade e Honestidade',
      detail: 'Cumprimento rigoroso dos prazos legais e entregas periódicas sem imprevistos.',
    },
    {
      title: 'Ética Profissional e Pessoal',
      detail: 'Conduta íntegra em todas as orientações societárias, fiscais e trabalhistas.',
    },
    {
      title: 'Credibilidade e Comprometimento',
      detail: 'Relacionamento de longo prazo pautado na responsabilidade com cada cliente.',
    },
    {
      title: 'Eficiência, Confiança e Agilidade',
      detail: 'Processos organizados e atendimento direto para decisões empresariais seguras.',
    },
    {
      title: 'Sigilo e Foco em Resultados',
      detail: 'Proteção absoluta das informações empresariais com visão voltada ao crescimento.',
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'abertura',
    index: '01',
    title: 'Abertura de Empresa',
    shortTitle: 'Abertura de Empresa',
    summary: 'Orientação completa e acompanhamento de todos os pontos essenciais no processo de constituição empresarial.',
    description:
      'Estruturamos a abertura do seu negócio com segurança jurídica e planejamento tributário inicial, evitando custos desnecessários e atrasos junto aos órgãos públicos.',
    deliverables: [
      'Estudo de viabilidade de nome empresarial e endereço fiscal',
      'Elaboração do Contrato Social ou Requerimento de Empresário',
      'Registro na Junta Comercial (JUCEG) e emissão do CNPJ',
      'Inscrições estadual e municipal, alvarás e licenças',
      'Enquadramento no regime tributário mais vantajoso',
    ],
    audience: 'Empreendedores, sociedades limitadas, SLU, profissionais liberais e novas filiais.',
  },
  {
    id: 'fiscal',
    index: '02',
    title: 'Área Fiscal',
    shortTitle: 'Área Fiscal',
    summary: 'Escrituração fiscal rigorosa, apuração de tributos e lançamento de notas fiscais de entrada e saída.',
    description:
      'Cuidamos de toda a rotina fiscal para manter sua empresa em plena conformidade com o fisco municipal, estadual e federal, garantindo o aproveitamento correto de créditos.',
    deliverables: [
      'Lançamento e conferência de notas fiscais de entrada, saída e serviços',
      'Apuração de impostos: Simples Nacional, Lucro Presumido e Lucro Real',
      'Entrega de obrigações acessórias (SPED Fiscal, EFD-Contribuições, DCTF)',
      'Acompanhamento de certidões negativas e regularidade fiscal',
      'Orientação sobre emissão de NF-e, NFS-e e substituição tributária',
    ],
    audience: 'Comércios, indústrias e prestadores de serviços que exigem precisão fiscal diária.',
  },
  {
    id: 'tributaria',
    index: '03',
    title: 'Assessoria na Área Tributária',
    shortTitle: 'Assessoria Tributária',
    summary: 'Análise estratégica da situação tributária da empresa, abrangendo impostos federais e planejamento legal.',
    description:
      'Avaliamos periodicamente o enquadramento fiscal e a carga tributária do seu negócio para identificar oportunidades lícitas de economia e prevenir autuações.',
    deliverables: [
      'Planejamento tributário anual comparativo entre regimes',
      'Revisão de tributação sobre produtos e serviços (NCM, CFOP, CST)',
      'Análise de impostos federais (IRPJ, CSLL, PIS, COFINS)',
      'Apoio em parcelamentos e regularização de pendências fiscais',
      'Consultoria preventiva para redução segura de carga tributária',
    ],
    audience: 'Empresas em expansão que buscam eficiência tributária e proteção contra riscos.',
  },
  {
    id: 'trabalhista',
    index: '04',
    title: 'Departamento Trabalhista',
    shortTitle: 'Área Trabalhista',
    summary: 'Suporte integral em rotinas de pessoal, folha de pagamento, encargos e obrigações do eSocial.',
    description:
      'Gerenciamos todo o ciclo trabalhista dos seus colaboradores com rigor técnico na legislação vigente, garantindo tranquilidade nas relações de trabalho.',
    deliverables: [
      'Admissões, rescisões, férias e controle de afastamentos',
      'Processamento mensal da folha de pagamento e pró-labore',
      'Apuração de encargos sociais (FGTS, INSS, IRRF) e guias',
      'Envio de eventos periódicos e não periódicos ao eSocial e DCTFWeb',
      'Orientação em recrutamento, seleção e fatores econômico-financeiros de equipe',
    ],
    audience: 'Empresas com colaboradores CLT, sócios com pró-labore e gestão de equipes.',
  },
  {
    id: 'contabil',
    index: '05',
    title: 'Serviços na Área Contábil',
    shortTitle: 'Área Contábil',
    summary: 'Execução e controle de todas as rotinas contábeis obrigatórias com demonstrações confiáveis para gestão.',
    description:
      'Transformamos os registros financeiros e patrimoniais em relatórios claros e auditáveis, oferecendo base sólida para tomada de decisões e acesso a crédito.',
    deliverables: [
      'Classificação, conciliação e escrituração contábil completa',
      'Elaboração de Balanço Patrimonial e DRE (Demonstração do Resultado)',
      'Balancetes periódicos para análise gerencial e bancária',
      'Entrega de ECD (Escrituração Contábil Digital) e ECF',
      'Apoio na distribuição de lucros isentos com lastro contábil',
    ],
    audience: 'Empresas de todos os portes que precisam de governança e balanços confiáveis.',
  },
  {
    id: 'encerramento',
    index: '06',
    title: 'Encerramento de Atividades',
    shortTitle: 'Encerramento',
    summary: 'Condução ordenada e segura de todos os procedimentos necessários para o encerramento de empresas.',
    description:
      'Realizamos a baixa empresarial de forma completa junto a todos os órgãos competentes, evitando que pendências fiscais ou taxas futuras gerem passivos aos sócios.',
    deliverables: [
      'Levantamento prévio de pendências fiscais, contábeis e trabalhistas',
      'Elaboração do Distrato Social e registro na Junta Comercial',
      'Solicitação de baixa do CNPJ na Receita Federal',
      'Baixas nas esferas estadual (SEFAZ) e municipal (Prefeitura)',
      'Entrega das declarações finais de extinção e arquivamento seguro',
    ],
    audience: 'Sócios que desejam encerrar atividades ou reestruturar participações sem passivos.',
  },
];

export const OPENING_STEPS: OpeningStep[] = [
  {
    step: '01',
    title: 'Consulta de Viabilidade e Estrutura Societária',
    duration: 'Etapa Inicial',
    description:
      'Analisamos os códigos de atividade (CNAEs), o tipo societário ideal (SLU, Ltda. ou EI) e o regime tributário antes mesmo do protocolo.',
    checklist: [
      'Definição do objeto social e CNAEs principais/secundários',
      'Verificação de uso do solo e disponibilidade do nome na JUCEG',
      'Simulação tributária inicial para escolha de regime',
    ],
  },
  {
    step: '02',
    title: 'Contrato Social, Junta Comercial e CNPJ',
    duration: 'Registro Legal',
    description:
      'Redigimos o contrato social com cláusulas claras de administração e participação, realizando o registro digital junto à Junta Comercial e Receita Federal.',
    checklist: [
      'Elaboração e assinatura digital do Contrato Social',
      'Protocolo integrado via Redesim e JUCEG',
      'Emissão do Cartão CNPJ oficial',
    ],
  },
  {
    step: '03',
    title: 'Inscrições Estadual, Municipal e Alvarás',
    duration: 'Licenciamento',
    description:
      'Providenciamos os cadastros na SEFAZ-GO e na Prefeitura de Goiânia para liberar a emissão de notas fiscais e funcionamento regular.',
    checklist: [
      'Cadastro de Contribuinte Estadual (CCE / SEFAZ-GO) quando aplicável',
      'Inscrição Municipal e Alvará de Localização e Funcionamento',
      'Orientação sobre licenças sanitárias ou de bombeiros, se exigidas',
    ],
  },
  {
    step: '04',
    title: 'Enquadramento Tributário e Início Operacional',
    duration: 'Pronto para Operar',
    description:
      'Formalizamos a opção pelo Simples Nacional ou regime indicado, habilitamos a emissão de notas fiscais e iniciamos o acompanhamento mensal.',
    checklist: [
      'Opção formal pelo regime tributário dentro do prazo legal',
      'Orientação para certificado digital e emissor de NF-e / NFS-e',
      'Calendário inicial de obrigações fiscais e contábeis',
    ],
  },
];

export const USEFUL_LINKS: UsefulLink[] = [
  {
    name: 'Receita Federal do Brasil',
    category: 'Federal',
    description: 'Consulta de CNPJ, e-CAC, certidões negativas federais e serviços do contribuinte.',
    url: 'https://www.gov.br/receitafederal/pt-br',
  },
  {
    name: 'Portal do Simples Nacional',
    category: 'Tributário',
    description: 'Consultas de optantes, PGDAS-D, DAS-MEI e legislação do Simples Nacional.',
    url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/',
  },
  {
    name: 'SEFAZ Goiás',
    category: 'Estadual',
    description: 'Secretaria da Economia de Goiás, emissão de DARE, NF-e e cadastro estadual.',
    url: 'https://www.economia.go.gov.br/',
  },
  {
    name: 'JUCEG — Junta Comercial de Goiás',
    category: 'Societário',
    description: 'Portal de registro empresarial, certidões simplificadas e acompanhamento de processos.',
    url: 'https://www.juceg.go.gov.br/',
  },
  {
    name: 'Prefeitura de Goiânia',
    category: 'Municipal',
    description: 'Nota Fiscal de Serviços (NFS-e), alvarás, CAE e certidões municipais.',
    url: 'https://www.goiania.go.gov.br/',
  },
  {
    name: 'Portal eSocial',
    category: 'Trabalhista',
    description: 'Sistema oficial de escrituração digital das obrigações fiscais, previdenciárias e trabalhistas.',
    url: 'https://www.gov.br/esocial/pt-br',
  },
];

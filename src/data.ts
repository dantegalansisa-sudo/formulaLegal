export const PHONE = '18296339084';
export const PHONE_LABEL = '+1 (829) 633-9084';

export const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
export const WA_DEFAULT = wa('Hola Diana, me gustaría agendar una consulta con Fórmula Legal.');

export const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'metodo', label: 'Método' },
  { id: 'contacto', label: 'Contacto' },
];

export type ServiceKey = 'design' | 'governance' | 'compliance' | 'planning' | 'pm';

export interface Service {
  key: ServiceKey;
  n: string;
  en: string;
  title: string;
  accent: string;
  lead: string;
  includes: string[];
  idealFor: string[];
  theme: 'ivory' | 'blush' | 'ink' | 'champagne' | 'wine';
}

export const SERVICES: Service[] = [
  {
    key: 'design',
    n: '01',
    en: 'Legal Design',
    title: 'Diseño',
    accent: 'legal',
    lead:
      'Transformo contratos, políticas y procesos en documentos claros, visuales y fáciles de usar. El derecho deja de ser un obstáculo y se convierte en una herramienta que tu equipo entiende.',
    includes: [
      'Contratos y términos rediseñados',
      'Políticas internas visuales',
      'Guías y manuales legales claros',
      'Flujos y mapas de procesos',
    ],
    idealFor: ['Startups', 'Empresas en crecimiento', 'Equipos de RR.HH.'],
    theme: 'ivory',
  },
  {
    key: 'governance',
    n: '02',
    en: 'Governance',
    title: 'Gobierno',
    accent: 'corporativo',
    lead:
      'Estructuras de decisión sólidas para que tu empresa crezca con orden: órganos de gobierno, roles definidos, protocolos y reglas claras entre socios y familia.',
    includes: [
      'Estatutos y pactos de socios',
      'Protocolo de empresa familiar',
      'Consejos y comités de dirección',
      'Matrices de roles y facultades',
    ],
    idealFor: ['Empresas familiares', 'Sociedades con socios', 'Pymes'],
    theme: 'blush',
  },
  {
    key: 'compliance',
    n: '03',
    en: 'Compliance',
    title: 'Cumplimiento',
    accent: 'normativo',
    lead:
      'Identifico riesgos antes de que se conviertan en problemas. Diseño programas de cumplimiento a la medida, con controles, capacitación y seguimiento continuo.',
    includes: [
      'Mapa y matriz de riesgos',
      'Códigos de ética y conducta',
      'Prevención de lavado (PLAFT)',
      'Protección de datos personales',
    ],
    idealFor: ['Sujetos obligados', 'Empresas reguladas', 'Organizaciones'],
    theme: 'ink',
  },
  {
    key: 'planning',
    n: '04',
    en: 'Strategic Planning',
    title: 'Planificación',
    accent: 'estratégica',
    lead:
      'Del análisis a la acción. Alineo la visión de negocio con la estructura legal para que cada decisión tenga dirección, objetivos medibles y un plan realista.',
    includes: [
      'Diagnóstico legal y de negocio',
      'Hoja de ruta y objetivos',
      'Estructuración de nuevos proyectos',
      'Indicadores y seguimiento',
    ],
    idealFor: ['Emprendedores', 'Directivos', 'Nuevos negocios'],
    theme: 'champagne',
  },
  {
    key: 'pm',
    n: '05',
    en: 'Legal Project Management',
    title: 'Gestión de',
    accent: 'proyectos legales',
    lead:
      'Gestiono asuntos legales como proyectos: alcance, tiempos, responsables y entregables claros. Menos incertidumbre, más control y resultados visibles.',
    includes: [
      'Planificación y alcance del proyecto',
      'Cronogramas y entregables',
      'Coordinación de equipos y terceros',
      'Reportes de avance claros',
    ],
    idealFor: ['Departamentos legales', 'Fusiones y procesos', 'Proyectos complejos'],
    theme: 'wine',
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Escucho',
    em: 'tu contexto',
    text: 'Una primera conversación, con cita previa, para entender tu negocio, tus objetivos y lo que hoy te preocupa.',
  },
  {
    n: '02',
    title: 'Diagnostico',
    em: 'con claridad',
    text: 'Analizo documentos, procesos y riesgos. Te entrego un mapa claro de dónde estás y qué necesitas.',
  },
  {
    n: '03',
    title: 'Diseño',
    em: 'la fórmula',
    text: 'Construyo una solución a la medida: estructura, documentos y procesos pensados para personas reales.',
  },
  {
    n: '04',
    title: 'Acompaño',
    em: 'la ejecución',
    text: 'Implementamos juntos y damos seguimiento para que la solución funcione en el día a día.',
  },
];

export const AUDIENCE = [
  { t: 'Empresas en crecimiento', d: 'Que necesitan orden legal para escalar sin fricciones.' },
  { t: 'Empresas familiares', d: 'Que quieren proteger el legado y la armonía entre generaciones.' },
  { t: 'Emprendedores y startups', d: 'Que buscan nacer con bases sólidas desde el día uno.' },
  { t: 'Profesionales independientes', d: 'Que quieren contratos y procesos que trabajen por ellos.' },
];

export const TESTIMONIALS = [
  {
    q: 'Por primera vez entendimos nuestros contratos. Diana los convirtió en documentos que todo el equipo usa.',
    a: 'Directora de operaciones',
    s: 'Empresa de servicios',
  },
  {
    q: 'Su enfoque estratégico fue clave para ordenar la sociedad y crecer con tranquilidad.',
    a: 'Socio fundador',
    s: 'Sector comercial',
  },
  {
    q: 'Cercana, clara y muy organizada. Cada etapa del proyecto tuvo tiempos y entregables definidos.',
    a: 'Gerente general',
    s: 'Empresa familiar',
  },
  {
    q: 'Nos ayudó a implementar un programa de cumplimiento práctico, sin burocracia innecesaria.',
    a: 'Oficial de cumplimiento',
    s: 'Entidad regulada',
  },
  {
    q: 'Una asesoría moderna, con visión de negocio. Totalmente recomendada.',
    a: 'Emprendedora',
    s: 'Startup tecnológica',
  },
];

export const FAQ = [
  {
    q: '¿Cómo agendo una consulta?',
    a: 'La atención es exclusivamente con cita previa. Escríbeme por WhatsApp, cuéntame brevemente tu caso y coordinamos el día y la hora que mejor te funcione, de forma presencial o virtual.',
  },
  {
    q: '¿Qué es exactamente el Legal Design?',
    a: 'Es una disciplina que aplica principios de diseño al derecho. El resultado son contratos, políticas y procesos más claros, visuales y fáciles de usar, sin perder rigor jurídico.',
  },
  {
    q: '¿Trabajas con empresas pequeñas o solo con corporaciones?',
    a: 'Con ambas. Acompaño desde emprendedores y profesionales independientes hasta pymes, empresas familiares y organizaciones consolidadas. Cada solución se adapta al tamaño y la etapa del negocio.',
  },
  {
    q: '¿Ofreces servicios de forma virtual?',
    a: 'Sí. Gran parte del trabajo puede realizarse en línea, con reuniones virtuales y entregables digitales, para clientes dentro y fuera de República Dominicana.',
  },
  {
    q: '¿Cómo se definen los honorarios?',
    a: 'Después de la primera conversación preparo una propuesta clara con alcance, tiempos y honorarios. Sin sorpresas: sabrás desde el inicio qué incluye cada etapa.',
  },
];

export const BRAND = 'AG Communications';
export const OWNER = 'Andreina Galván';
export const PHONE = '18098758239';
export const PHONE_LABEL = '809-875-8239';
export const EMAIL = 'Andreinagalvana@outlook.com';

export const wa = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
export const WA_DEFAULT = wa('Hola Andreina, me gustaría agendar una consulta gratuita con AG Communications.');

export const NAV = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'metodo', label: 'Método' },
  { id: 'contacto', label: 'Contacto' },
];

export type ServiceKey = 'media' | 'pr' | 'influencer' | 'activations' | 'counsel';

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
    key: 'media',
    n: '01',
    en: 'Media Buying',
    title: 'Publicidad',
    accent: 'en medios',
    lead:
      'Planifico, coordino y negocio tus espacios publicitarios en medios digitales, impresos, radio y televisión. Tu inversión, en el lugar correcto y frente a la audiencia correcta.',
    includes: [
      'Plan de medios a la medida',
      'Negociación de espacios y tarifas',
      'Contenidos patrocinados',
      'Seguimiento de pautas al aire',
    ],
    idealFor: ['Marcas', 'Lanzamientos', 'Empresas'],
    theme: 'ivory',
  },
  {
    key: 'pr',
    n: '02',
    en: 'Public Relations',
    title: 'Relaciones',
    accent: 'públicas',
    lead:
      'Construyo la relación de tu marca con los medios y los periodistas. Notas de prensa, entrevistas y media tours que convierten tu historia en noticia.',
    includes: [
      'Notas y comunicados de prensa',
      'Gestión de entrevistas',
      'Media tours y ruedas de prensa',
      'Relación con periodistas',
    ],
    idealFor: ['Empresas', 'Instituciones', 'Voceros'],
    theme: 'blush',
  },
  {
    key: 'influencer',
    n: '03',
    en: 'Influencer Marketing',
    title: 'Marketing de',
    accent: 'influencers',
    lead:
      'Selecciono los perfiles que de verdad conectan con tu público, negocio las colaboraciones y coordino cada campaña de principio a fin, con seguimiento de resultados.',
    includes: [
      'Selección de perfiles afines',
      'Negociación de colaboraciones',
      'Coordinación de campañas',
      'Seguimiento y reporte',
    ],
    idealFor: ['Marcas de consumo', 'Lanzamientos', 'Eventos'],
    theme: 'ink',
  },
  {
    key: 'activations',
    n: '04',
    en: 'Brand Activations',
    title: 'Campañas y',
    accent: 'activaciones',
    lead:
      'Eventos, lanzamientos y experiencias de marca que la gente recuerda. Del concepto a la producción, cuido cada detalle para que tu marca se viva en persona.',
    includes: [
      'Concepto y planificación',
      'Lanzamientos de producto',
      'Producción de eventos',
      'Regalos corporativos',
    ],
    idealFor: ['Marcas', 'Empresas', 'Fechas especiales'],
    theme: 'champagne',
  },
  {
    key: 'counsel',
    n: '05',
    en: 'Strategic Counsel',
    title: 'Comunicación',
    accent: 'estratégica',
    lead:
      'Acompaño a organizaciones y líderes en su posicionamiento: mensajes clave, preparación de voceros y gestión de la reputación, también en momentos de crisis.',
    includes: [
      'Posicionamiento institucional',
      'Entrenamiento de voceros',
      'Mensajes clave y discurso',
      'Gestión de reputación y crisis',
    ],
    idealFor: ['Líderes', 'Instituciones', 'Empresas'],
    theme: 'wine',
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Conversamos',
    em: 'tu objetivo',
    text: 'Un primer acercamiento —una consulta gratuita de 30 minutos por videollamada— para entender tu marca, tu reto y lo que quieres lograr.',
  },
  {
    n: '02',
    title: 'Diseño',
    em: 'la estrategia',
    text: 'Te presento una propuesta clara: mensajes, medios, canales, tiempos e inversión. Sin letra pequeña.',
  },
  {
    n: '03',
    title: 'Ejecuto',
    em: 'y doy seguimiento',
    text: 'Activo la estrategia con medios, periodistas e influencers, y acompaño cada acción de cerca.',
  },
  {
    n: '04',
    title: 'Reporto',
    em: 'resultados',
    text: 'Al cierre recibes un reporte con lo que se logró: publicaciones, alcance, apariciones y aprendizajes.',
  },
];

export const MODES = [
  {
    t: 'Por proyecto',
    d: 'Lanzamientos, eventos, activaciones o campañas con fecha de inicio y cierre definidos.',
  },
  {
    t: 'Fee mensual',
    d: 'Trabajo como tu gabinete de comunicación externo: gestión continua con medios y cuidado de tu reputación.',
  },
  {
    t: 'Asesoría estratégica',
    d: 'Consultoría para posicionamiento institucional y preparación de voceros y líderes.',
  },
];

export const TESTIMONIALS = [
  {
    q: 'Nuestro lanzamiento salió en los medios que de verdad le importaban a nuestro público. Todo bien coordinado.',
    a: 'Gerente de marca',
    s: 'Consumo masivo',
  },
  {
    q: 'Andreina preparó a nuestros voceros y cambió por completo la forma en que nos comunicamos con la prensa.',
    a: 'Director ejecutivo',
    s: 'Institución',
  },
  {
    q: 'La campaña con influencers fue precisa: perfiles afines, contenido auténtico y un reporte muy claro.',
    a: 'Directora de mercadeo',
    s: 'Marca de belleza',
  },
  {
    q: 'Tenerla como gabinete externo nos dio presencia constante en medios y tranquilidad.',
    a: 'Socio fundador',
    s: 'Empresa de servicios',
  },
  {
    q: 'Estratégica, cercana y con muy buenas relaciones en medios. Totalmente recomendada.',
    a: 'Emprendedora',
    s: 'Marca local',
  },
];

export const FAQ = [
  {
    q: '¿La primera consulta tiene costo?',
    a: 'No. La primera conversación es una consulta gratuita de 30 minutos por videollamada para conocer tu marca y tu objetivo. Escríbeme y coordinamos el día y la hora.',
  },
  {
    q: '¿Trabajas por proyecto o de forma mensual?',
    a: 'Ambas. Puedes contratarme para un proyecto puntual (un lanzamiento, un evento, una campaña) o con un fee mensual como tu gabinete de comunicación externo. También ofrezco asesoría estratégica.',
  },
  {
    q: '¿Con qué tipo de medios trabajas?',
    a: 'Con medios digitales, impresos, radio y televisión, además de creadores de contenido e influencers. La mezcla depende de tu público y tu objetivo.',
  },
  {
    q: '¿Cómo mides los resultados?',
    a: 'Cada proyecto cierra con un reporte de resultados: publicaciones obtenidas, apariciones, alcance estimado y aprendizajes para la siguiente acción.',
  },
  {
    q: '¿En cuánto tiempo respondes?',
    a: 'Respondo cada solicitud en un plazo máximo de 48 horas. Si es urgente, escríbeme directamente por WhatsApp.',
  },
];

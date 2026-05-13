import type { Service, ProcessStep, Testimonial, FaqItem } from '~/types'

export const SERVICES: Service[] = [
  { icon: 'fa-solid fa-droplet', title: 'Reparación de Goteras', desc: 'Detectamos el origen exacto y reparamos con materiales de primera. Diagnóstico gratuito.' },
  { icon: 'fa-solid fa-shield', title: 'Impermeabilizaciones', desc: 'Tratamientos profesionales para tejados, terrazas y cubiertas. Garantía hasta 10 años.' },
  { icon: 'fa-solid fa-wind', title: 'Limpieza de Canalones', desc: 'Eliminamos hojas y obstrucciones que provocan filtraciones y humedades.' },
  { icon: 'fa-solid fa-screwdriver-wrench', title: 'Mantenimiento de Cubiertas', desc: 'Servicio integral para chalets y comunidades. Revisiones periódicas y reparaciones.' }
]

export const PROCESS_STEPS: ProcessStep[] = [
  { icon: 'fa-solid fa-magnifying-glass', title: 'Inspección gratis', desc: 'Acudimos a tu vivienda, revisamos el tejado y localizamos el problema sin coste.' },
  { icon: 'fa-regular fa-file-lines', title: 'Presupuesto transparente', desc: 'Te entregamos un presupuesto detallado con fotos y vídeos del estado real.' },
  { icon: 'fa-regular fa-thumbs-up', title: 'Aprobación', desc: 'Sin compromiso. Tú decides cuándo empezar. Sin sorpresas ni costes ocultos.' },
  { icon: 'fa-solid fa-hammer', title: 'Reparación garantizada', desc: 'Ejecutamos los trabajos con materiales certificados y entregamos garantía por escrito.' }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Marta G.', zone: 'Alpedrete', text: 'Solucionaron mi gotera rapidísimo. Vinieron el mismo día, presupuesto claro y trabajo impecable. Muy recomendables.' },
  { name: 'Javier R.', zone: 'Collado Villalba', text: 'Limpieza de canalones y revisión completa del tejado. Profesionales, puntuales y precio justo. Repetiremos sin duda.' },
  { name: 'Lucía P.', zone: 'Galapagar', text: 'Después de años con humedades, por fin un equipo que diagnosticó el problema de verdad. Trabajo garantizado y bien hecho.' },
  { name: 'Antonio M.', zone: 'Moralzarzal', text: 'Impermeabilizaron la cubierta de mi chalet. Atención excelente, materiales de primera y todo listo en dos días.' },
  { name: 'Carmen S.', zone: 'Torrelodones', text: 'Atendieron una urgencia un sábado por la tarde. Profesionalidad de 10, y precio mucho más razonable que otros presupuestos.' },
  { name: 'David L.', zone: 'Becerril de la Sierra', text: 'Cambiamos varias tejas rotas tras el temporal. Trabajo limpio, seguros con arnés y muy serios. Volveré a contar con ellos.' }
]

export const ZONES: string[] = [
  'Collado Villalba', 'Alpedrete', 'Moralzarzal', 'Torrelodones', 'Galapagar',
  'Becerril de la Sierra', 'Guadarrama', 'El Escorial', 'Hoyo de Manzanares',
  'Cercedilla', 'Navacerrada', 'Manzanares el Real', 'Soto del Real',
  'Colmenar Viejo', 'Las Rozas'
]

export const FAQ: FaqItem[] = [
  { q: '¿Cómo detecto una gotera en mi tejado?', a: 'Las señales más habituales son manchas de humedad en techos o paredes, olor a humedad, pintura abombada o agua goteando tras lluvias intensas. Lo ideal es no esperar: una pequeña filtración puede provocar daños estructurales graves. Realizamos inspección gratuita en toda la Sierra de Madrid para localizar el origen exacto.' },
  { q: '¿Cuánto cuesta reparar un tejado?', a: 'El precio depende del tipo de daño, los materiales y la superficie afectada. Una reparación puntual de goteras puede empezar desde 150€, mientras que rehabilitaciones completas se valoran individualmente. Te entregamos siempre un presupuesto gratuito, transparente y con fotos del estado real antes de empezar.' },
  { q: '¿Atienden urgencias?', a: 'Sí. Las urgencias por goteras son nuestra especialidad. Atendemos llamadas también fines de semana y festivos. En la mayoría de los casos podemos acudir el mismo día para realizar una primera contención y evitar daños mayores en tu vivienda.' },
  { q: '¿Ofrecen garantía en las reparaciones?', a: 'Todas nuestras reparaciones incluyen garantía por escrito. En impermeabilizaciones, ofrecemos hasta 10 años de garantía según el tipo de tratamiento y materiales utilizados. Te lo detallamos siempre en el presupuesto.' },
  { q: '¿Trabajan con comunidades de vecinos?', a: 'Sí, gestionamos mantenimientos y reparaciones de cubiertas en comunidades, presentando presupuesto formal y certificados de garantía. Coordinamos con la administración de fincas para minimizar molestias.' },
  { q: '¿Qué zonas cubren exactamente?', a: 'Toda la Sierra de Madrid: Collado Villalba, Alpedrete, Moralzarzal, Torrelodones, Galapagar, Guadarrama, El Escorial, Becerril, Cercedilla, Navacerrada, Las Rozas y municipios cercanos. Si no estás seguro, llámanos y lo comprobamos.' }
]

export const CONTACT = {
  phonePrimary: '688 68 98 08',
  phonePrimaryTel: '+34688689808',
  phoneSecondary: '642 79 70 87',
  phoneSecondaryTel: '+34642797087',
  email: 'info@tejadosmra.com',
  whatsappNumber: '34688689808',
  whatsappMessage: 'Hola, necesito información para reparar un problema en mi tejado...'
} as const

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`
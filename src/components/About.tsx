import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { FadeUp, MaskLine } from './RevealText';
import AnimatedCounter from './AnimatedCounter';
import { useParallax } from '../hooks/useParallax';
import { ease } from '../utils/easings';
import { Spark } from './Icons';

const MANIFESTO =
  'La comunicación es acción y la acción es comunicación. Por eso cada mensaje que diseño tiene un propósito: conectar tu marca con las personas, los medios y las oportunidades correctas.';

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const highlight = ['acción', 'comunicación.', 'conectar', 'oportunidades'].includes(children);
  return (
    <span className={`mword ${highlight ? 'mword--em' : ''}`}>
      <motion.span style={{ opacity }}>{children}</motion.span>{' '}
    </span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = MANIFESTO.split(' ');
  return (
    <section className="manifesto" ref={ref}>
      <div className="container">
        <p className="eyebrow eyebrow--center">
          <Spark size={12} /> Mi visión
        </p>
        <p className="manifesto__text">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>
        <p className="manifesto__cite">— Inspirada en Joan Costa</p>
      </div>
    </section>
  );
}

const PILLARS = [
  { t: 'Estrategia', d: 'Cada acción responde a un objetivo de tu marca.' },
  { t: 'Medios', d: 'Relaciones reales con periodistas, medios y creadores.' },
  { t: 'Resultados', d: 'Seguimiento y reportes claros de lo logrado.' },
];

export default function About() {
  const { ref, y } = useParallax(50);
  return (
    <section id="sobre-mi" className="about">
      <div className="container about__grid">
        <motion.div className="about__visual" ref={ref} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.div
            className="about__arch"
            variants={{
              hidden: { clipPath: 'inset(100% 0% 0% 0% round 400px 400px 32px 32px)' },
              show: {
                clipPath: 'inset(0% 0% 0% 0% round 400px 400px 32px 32px)',
                transition: { duration: 1.3, ease: ease('premium') },
              },
            }}
          >
            <span className="about__arch-word">Andreina</span>
            <motion.img src="/images/diana.webp" alt="Andreina Galván" style={{ y }} loading="lazy" />
          </motion.div>
          <motion.div
            className="about__quote"
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: ease('out') }}
          >
            <span className="about__quote-mark">“</span>
            Una buena historia no se cuenta sola: necesita <em>estrategia, medios</em> y el momento correcto.
          </motion.div>
          <motion.span
            className="about__flag"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6, ease: ease('bounce') }}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden style={{ borderRadius: 3 }}>
              <rect width="20" height="14" fill="#fff" />
              <rect width="8.5" height="5.8" fill="#002D62" />
              <rect x="11.5" width="8.5" height="5.8" fill="#CE1126" />
              <rect y="8.2" width="8.5" height="5.8" fill="#CE1126" />
              <rect x="11.5" y="8.2" width="8.5" height="5.8" fill="#002D62" />
            </svg>
            República Dominicana
          </motion.span>
        </motion.div>

        <div className="about__content">
          <p className="eyebrow"><span className="eyebrow__line" /> Sobre mí</p>
          <h2 className="h2">
            <MaskLine>Más que difusión,</MaskLine>
            <MaskLine delay={0.1}>una <em>voz</em> estratégica.</MaskLine>
          </h2>
          <FadeUp>
            <p className="lead">
              Soy Andreina Galván, licenciada en Comunicación Social mención Periodismo y fundadora de{' '}
              <strong>AG Communications</strong>. Mi experiencia en periodismo, relaciones públicas y comunicación
              corporativa me permite ver tu marca como la ve un medio: como una historia que vale la pena contar.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body">
              Desde una consultoría estratégica independiente acompaño a marcas, empresas e instituciones en
              publicidad en medios, relaciones públicas, influencer marketing, campañas y activaciones — con un
              enfoque cercano, ordenado y siempre orientado a resultados.
            </p>
          </FadeUp>

          <div className="pillars">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.t}
                className="pillar"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: ease('out') }}
              >
                <span className="pillar__n">0{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </motion.div>
            ))}
          </div>

          <FadeUp className="about__sign">
            <span className="about__sign-line" />
            <span className="script">Andreina Galván</span>
          </FadeUp>
        </div>
      </div>

      <div className="container stats">
        {[
          { n: 5, p: '', s: '', l: 'Servicios integrados' },
          { n: 3, p: '', s: '', l: 'Modalidades de trabajo' },
          { n: 30, p: '', s: ' min', l: 'Primera consulta gratis' },
          { n: 48, p: '', s: 'h', l: 'Respuesta máxima' },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            className="stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <strong>
              <AnimatedCounter target={s.n} prefix={s.p} suffix={s.s} />
            </strong>
            <span>{s.l}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

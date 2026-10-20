import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { FadeUp, MaskLine } from './RevealText';
import AnimatedCounter from './AnimatedCounter';
import { useParallax } from '../hooks/useParallax';
import { ease } from '../utils/easings';
import { Spark } from './Icons';

const MANIFESTO =
  'Creo en un derecho cercano, claro y orientado a resultados. Uno que se entiende, que se usa y que genera valor real para las personas y los negocios.';

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const highlight = ['cercano,', 'claro', 'valor', 'real'].includes(children);
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
      </div>
    </section>
  );
}

const PILLARS = [
  { t: 'Claridad', d: 'Documentos y procesos que cualquiera entiende.' },
  { t: 'Estrategia', d: 'Decisiones legales alineadas con tu negocio.' },
  { t: 'Cercanía', d: 'Acompañamiento personal, de principio a fin.' },
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
            <span className="about__arch-word">Diana</span>
            <motion.img src="/images/diana.webp" alt="Diana Pérez Rubiera" style={{ y }} loading="lazy" />
          </motion.div>
          <motion.div
            className="about__quote"
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: ease('out') }}
          >
            <span className="about__quote-mark">“</span>
            El derecho también puede ser una herramienta para <em>construir, innovar</em> y hacer las cosas mejor.
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
            <MaskLine>Más que asesoría,</MaskLine>
            <MaskLine delay={0.1}>una <em>alianza</em> estratégica.</MaskLine>
          </h2>
          <FadeUp>
            <p className="lead">
              Soy Diana Pérez Rubiera, abogada y fundadora de <strong>Fórmula Legal</strong>. Combino el conocimiento
              jurídico con visión de negocio y herramientas de diseño para crear soluciones legales que las personas
              realmente entienden y usan.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body">
              Acompaño a empresas, emprendedores y profesionales en diseño legal, gobierno corporativo, cumplimiento
              normativo, planificación estratégica y gestión de proyectos legales — con un enfoque cercano, ordenado y
              siempre a la medida.
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
            <span className="script">Diana Pérez Rubiera</span>
          </FadeUp>
        </div>
      </div>

      <div className="container stats">
        {[
          { n: 5, p: '+', s: '', l: 'Áreas de práctica integradas' },
          { n: 100, p: '', s: '%', l: 'Soluciones a la medida' },
          { n: 4, p: '', s: '', l: 'Etapas en un método claro' },
          { n: 1, p: '', s: ':1', l: 'Atención personalizada' },
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

import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { MaskLine } from './RevealText';
import MagneticButton from './MagneticButton';
import { Monogram } from './Logo';
import { Arrow, Instagram, LinkedIn, Spark, WhatsApp } from './Icons';
import { WA_DEFAULT } from '../data';
import { scrollToId } from '../utils/scroll';
import { ease } from '../utils/easings';
import { INTRO } from './Loader';

const AREAS = ['Relaciones Públicas', 'Media Relations', 'Publicidad en Medios', 'Influencer Marketing', 'Campañas & Activaciones', 'Comunicación Estratégica'];

function RingBadge({ size = 112 }: { size?: number }) {
  return (
    <span className="ring-badge" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="ring-badge__text" aria-hidden>
        <defs>
          <path id="ring" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <text>
          <textPath href="#ring">CONSULTA GRATIS · 30 MIN · AG COMMUNICATIONS ·</textPath>
        </text>
      </svg>
      <Monogram size={size * 0.46} light className="ring-badge__mark" />
    </span>
  );
}

const chip = (d: number) => ({
  initial: { opacity: 0, scale: 0.6, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.8, delay: INTRO + d, ease: ease('bounce') },
});

/* ------------------------------------------------------------------ */
/* DESKTOP HERO                                                        */
/* ------------------------------------------------------------------ */
function HeroDesktop() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 800], [0, -60]);
  const wordY = useTransform(scrollY, [0, 800], [0, 120]);
  const textY = useTransform(scrollY, [0, 800], [0, 90]);
  const textO = useTransform(scrollY, [0, 500], [1, 0.2]);

  // Mouse tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 18 });
  const px = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const r = cardRef.current!.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div className="hero-d">
      <motion.div className="hero-d__text" style={{ y: textY, opacity: textO }}>
        <motion.p className="eyebrow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: INTRO, duration: 0.8 }}>
          <span className="eyebrow__line" /> Estrategia <i>×</i> Medios <i>×</i> Publicidad
        </motion.p>

        <h1 className="hero-d__title">
          <MaskLine animateOnMount delay={INTRO + 0.05}>tu marca,</MaskLine>
          <MaskLine animateOnMount delay={INTRO + 0.17} className="serif-line">
            <em>bien</em> contada<span className="dot">.</span>
          </MaskLine>
        </h1>

        <motion.div className="hero-d__row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: INTRO + 0.45, duration: 0.9, ease: ease('out') }}>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn"><LinkedIn size={14} /></a>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsApp size={15} /></a>
          </div>
          <span className="hero-d__rule" />
          <p className="hero-d__lead">
            Conecto marcas, medios y oportunidades con estrategias de comunicación, relaciones públicas y
            publicidad que <em>generan conversación.</em>
          </p>
        </motion.div>

        <motion.div className="hero-d__ctas" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: INTRO + 0.6, duration: 0.9, ease: ease('out') }}>
          <MagneticButton href={WA_DEFAULT} external className="btn btn--ink" cursor="Agendar">
            Consulta gratis <span className="btn__ic"><Arrow size={16} /></span>
          </MagneticButton>
          <MagneticButton onClick={() => scrollToId('servicios')} className="btn btn--ghost">
            Ver servicios
          </MagneticButton>
        </motion.div>

        <motion.div className="hero-d__stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: INTRO + 0.8, duration: 1 }}>
          <div>
            <strong>30<sup>min</sup></strong>
            <span>primera consulta gratuita<br />por videollamada</span>
          </div>
          <div>
            <strong>48<sup>h</sup></strong>
            <span>tiempo máximo de respuesta<br />a cada solicitud</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-d__visual"
        initial={{ clipPath: 'inset(12% 8% 12% 8% round 48px)', opacity: 0 }}
        animate={{ clipPath: 'inset(0% 0% 0% 0% round 0px)', opacity: 1 }}
        transition={{ duration: 1.3, delay: INTRO - 0.15, ease: ease('premium') }}
      >
        <motion.div
          ref={cardRef}
          className="hcard"
          onMouseMove={onMove}
          onMouseLeave={() => { mx.set(0); my.set(0); }}
          style={{ rotateX: rx, rotateY: ry }}
        >
          <div className="hcard__bg">
            <svg className="hcard__arcs" viewBox="0 0 600 700" preserveAspectRatio="none" aria-hidden>
              <motion.circle cx="430" cy="380" r="250" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, delay: INTRO + 0.3 }} />
              <motion.circle cx="430" cy="380" r="330" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.8, delay: INTRO + 0.5 }} />
            </svg>
          </div>
          <motion.span className="hcard__word" style={{ y: wordY, x: px }}>voz</motion.span>

          <motion.div className="hcard__sig" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: INTRO + 0.6, duration: 1.2 }}>
            <span className="script">Andreina</span>
            <span className="script script--2">Galván</span>
            <small>AG COMMUNICATIONS</small>
          </motion.div>

          <motion.div className="hcard__photo" style={{ y: photoY }}>
            <motion.img
              src="/images/diana.webp"
              alt="Andreina Galván — AG Communications"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: INTRO + 0.1, ease: ease('out') }}
              draggable={false}
            />
          </motion.div>

          <motion.div className="fchip fchip--a" {...chip(0.7)}>
            <span className="fchip__ic"><Spark size={12} /></span> Media Relations
          </motion.div>
          <motion.div className="fchip fchip--b" {...chip(0.85)}>
            <span className="fchip__dot" /> Al aire <small>radio · TV · digital</small>
          </motion.div>
          <motion.div className="fchip fchip--c" {...chip(1)}>
            <span className="fchip__ic fchip__ic--wine"><Spark size={12} /></span> Influencers
          </motion.div>
        </motion.div>

        {/* Notch: top-right badge */}
        <motion.a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="notch notch--tr"
          data-cursor="Agendar"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: INTRO + 0.5, duration: 1, ease: ease('bounce') }}
          aria-label="Agendar cita"
        >
          <RingBadge />
        </motion.a>

        {/* Notch: left column */}
        <motion.div className="notch notch--left" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: INTRO + 0.75, duration: 0.9, ease: ease('out') }}>
          <span className="nbubble nbubble--photo" />
          <span className="nbubble nbubble--blush"><Spark size={16} /></span>
          <button className="nbubble nbubble--ink" onClick={() => scrollToId('servicios')} aria-label="Ver servicios" data-cursor="Servicios">
            <Arrow size={20} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MOBILE HERO — magazine cover                                        */
/* ------------------------------------------------------------------ */
function HeroMobile() {
  const { scrollY } = useScroll();
  const photoScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const wordsY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <div className="hero-m">
      <motion.div
        className="mcard"
        initial={{ clipPath: 'inset(8% 6% 30% 6% round 40px)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0% round 34px)' }}
        transition={{ duration: 1.3, delay: INTRO - 0.2, ease: ease('premium') }}
      >
        <div className="mcard__bg" />
        <svg className="mcard__arcs" viewBox="0 0 400 700" preserveAspectRatio="none" aria-hidden>
          <motion.circle cx="200" cy="420" r="190" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, delay: INTRO + 0.2 }} />
          <motion.circle cx="200" cy="420" r="260" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.6, delay: INTRO + 0.4 }} />
        </svg>

        <motion.div className="mcard__words" style={{ y: wordsY }} aria-hidden>
          <MaskLine animateOnMount delay={INTRO + 0.1} className="mcard__w1">Comunica</MaskLine>
          <MaskLine animateOnMount delay={INTRO + 0.22} className="mcard__w2">acción</MaskLine>
        </motion.div>

        <motion.img
          className="mcard__photo"
          src="/images/diana-sm.webp"
          alt="Andreina Galván — AG Communications"
          style={{ scale: photoScale }}
          initial={{ y: 140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: INTRO + 0.05, ease: ease('out') }}
          draggable={false}
        />

        <motion.span className="mcard__sig script" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: INTRO + 0.8, duration: 1.2 }}>
          Andreina Galván
        </motion.span>

        <motion.div className="fchip fchip--m1" {...chip(0.8)}>
          <span className="fchip__ic"><Spark size={10} /></span> Media Relations
        </motion.div>
        <motion.div className="fchip fchip--m2" {...chip(0.95)}>
          <span className="fchip__dot" /> Al aire
        </motion.div>

        <motion.div
          className="mcard__panel"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: INTRO + 0.45, ease: ease('out') }}
        >
          <p className="mcard__eyebrow">Estrategia × Medios × Publicidad</p>
          <h1 className="mcard__title">
            Tu marca, <em>bien contada.</em>
          </h1>
          <div className="mcard__ctas">
            <a className="btn btn--ink btn--sm" href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
              <WhatsApp size={16} /> Consulta gratis
            </a>
            <button className="mcard__go" onClick={() => scrollToId('servicios')} aria-label="Ver servicios">
              <Arrow size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        className="notch notch--m"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: INTRO + 0.6, duration: 1, ease: ease('bounce') }}
        aria-label="Agendar cita"
      >
        <RingBadge size={84} />
      </motion.a>

      <motion.p className="hero-m__lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: INTRO + 0.8, duration: 0.9 }}>
        Estrategias de comunicación, relaciones públicas y publicidad que <em>conectan marcas, medios y oportunidades.</em>
      </motion.p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <HeroDesktop />
      <HeroMobile />
      <div className="hero__ticker" aria-hidden>
        <div className="ticker">
          {[0, 1].map((k) => (
            <div className="ticker__track" key={k}>
              {AREAS.map((a) => (
                <span key={a}>
                  {a} <Spark size={14} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

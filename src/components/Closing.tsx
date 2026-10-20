import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { FAQ, NAV, PHONE_LABEL, TESTIMONIALS, WA_DEFAULT } from '../data';
import { FadeUp, MaskLine } from './RevealText';
import MagneticButton from './MagneticButton';
import Logo from './Logo';
import { Arrow, Calendar, Instagram, LinkedIn, Mail, Pin, Plus, Spark, WhatsApp } from './Icons';
import { useParallax } from '../hooks/useParallax';
import { scrollToId } from '../utils/scroll';
import { ease } from '../utils/easings';

export function Testimonials() {
  const rows = [TESTIMONIALS, [...TESTIMONIALS].reverse()];
  return (
    <section className="testimonials">
      <div className="container testimonials__head">
        <p className="eyebrow"><span className="eyebrow__line" /> Lo que dicen mis clientes</p>
        <h2 className="h2">
          <MaskLine>Historias de</MaskLine>
          <MaskLine delay={0.1}><em>confianza.</em></MaskLine>
        </h2>
      </div>
      {rows.map((row, r) => (
        <div className={`marquee ${r ? 'marquee--rev' : ''}`} key={r}>
          {[0, 1].map((k) => (
            <div className="marquee__track" key={k} aria-hidden={k === 1}>
              {row.map((t, i) => (
                <figure className={`tcard ${(i + r) % 3 === 1 ? 'tcard--blush' : ''}`} key={i}>
                  <span className="tcard__q">“</span>
                  <blockquote>{t.q}</blockquote>
                  <figcaption>
                    <span className="tcard__av">{t.a.charAt(0)}</span>
                    <span>
                      <b>{t.a}</b>
                      <small>{t.s}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq">
      <div className="container faq__grid">
        <div className="faq__side">
          <p className="eyebrow"><span className="eyebrow__line" /> Preguntas frecuentes</p>
          <h2 className="h2">
            <MaskLine>Todo lo que</MaskLine>
            <MaskLine delay={0.1}>necesitas <em>saber.</em></MaskLine>
          </h2>
          <FadeUp>
            <a className="faq__card" href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
              <span className="faq__card-ic"><WhatsApp size={20} /></span>
              <span>
                <b>¿Tienes otra pregunta?</b>
                <small>Escríbeme y te respondo personalmente.</small>
              </span>
              <Arrow size={18} />
            </a>
          </FadeUp>
        </div>
        <div className="faq__list">
          {FAQ.map((f, i) => (
            <motion.div
              key={f.q}
              className={`faq__item ${open === i ? 'is-open' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
            >
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <motion.span className="faq__plus" animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.4, ease: ease('premium') }}>
                  <Plus size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: ease('premium') }}
                    className="faq__a"
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { ref, y } = useParallax(40);
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact__card" ref={ref}>
          <div className="contact__glow" />
          <div className="contact__content">
            <p className="eyebrow eyebrow--light"><Spark size={12} /> Hagamos que tu proyecto avance</p>
            <h2 className="contact__title">
              <MaskLine>Hablemos de</MaskLine>
              <MaskLine delay={0.1}>tu <em>fórmula.</em></MaskLine>
            </h2>
            <FadeUp>
              <p className="contact__sub">
                Cuéntame tu proyecto y diseñemos juntos la mejor estrategia legal. La atención es exclusivamente con
                cita previa, presencial o virtual.
              </p>
            </FadeUp>
            <div className="contact__actions">
              <MagneticButton href={WA_DEFAULT} external className="btn btn--gold btn--lg" cursor="Escribir">
                <WhatsApp size={20} /> Agendar por WhatsApp <span className="btn__ic"><Arrow size={16} /></span>
              </MagneticButton>
            </div>
            <ul className="contact__info">
              <li><Calendar size={18} /> Atención con cita previa</li>
              <li><WhatsApp size={17} /> {PHONE_LABEL}</li>
              <li><Pin size={18} /> República Dominicana · Presencial y virtual</li>
            </ul>
          </div>
          <div className="contact__visual">
            <span className="contact__circle" />
            <motion.img src="/images/diana.webp" alt="" style={{ y }} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Logo />
          <nav>
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollToId(n.id); }}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="footer__social">
            <a href="#" aria-label="LinkedIn"><LinkedIn size={16} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsApp size={17} /></a>
            <a href="#" aria-label="Correo"><Mail size={18} /></a>
          </div>
        </div>
        <motion.div
          className="footer__word"
          initial={{ y: '40%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: ease('premium') }}
          aria-hidden
        >
          Fórmula <em>Legal</em>
        </motion.div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Diana Pérez Rubiera — Fórmula Legal. Todos los derechos reservados.</span>
          <span>Legal Design · Governance · Compliance · Strategic Planning · Legal Project Management</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 700));
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          className="wa-float"
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5, ease: ease('bounce') }}
        >
          <WhatsApp size={26} />
          <span className="wa-float__tip">¿Agendamos?</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

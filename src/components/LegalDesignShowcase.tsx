import { useCallback, useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { FadeUp, MaskLine } from './RevealText';
import { Calendar, Check, Clock, Spark } from './Icons';

const LEGALESE = [
  'CLÁUSULA PRIMERA: OBJETO. Por medio del presente instrumento, LA PRESTADORA se obliga frente a EL CLIENTE, quien acepta, a la prestación de los servicios profesionales descritos en el Anexo A, el cual forma parte integral del presente contrato, en los términos, condiciones y modalidades que más adelante se establecen, sin perjuicio de las demás obligaciones que pudieren derivarse de la ley aplicable.',
  'CLÁUSULA SEGUNDA: CONTRAPRESTACIÓN. Como contraprestación por los servicios objeto del presente contrato, EL CLIENTE se compromete a pagar a LA PRESTADORA la suma convenida en el Anexo B, pagadera en la forma y plazos ahí previstos, más los impuestos correspondientes, quedando entendido que cualquier retraso generará los intereses moratorios de conformidad con la normativa vigente.',
  'CLÁUSULA TERCERA: DURACIÓN. El presente contrato tendrá una vigencia de doce (12) meses contados a partir de la fecha de su suscripción, pudiendo ser renovado de manera automática por períodos iguales, salvo que alguna de las partes notifique por escrito a la otra su intención de no renovarlo con una antelación no menor de treinta (30) días calendario.',
  'CLÁUSULA CUARTA: CONFIDENCIALIDAD. Las partes se obligan a mantener la más estricta reserva respecto de toda información a la que tuvieren acceso con motivo de la ejecución del presente contrato…',
];

export default function LegalDesignShowcase() {
  const wrap = useRef<HTMLDivElement>(null);
  const pos = useMotionValue(50);
  const [p, setP] = useState(50);
  const dragging = useRef(false);
  const inView = useInView(wrap, { once: true, amount: 0.5 });

  useMotionValueEvent(pos, 'change', (v) => setP(v));

  // Hint animation the first time it's visible
  useEffect(() => {
    if (!inView) return;
    const c = animate(pos, [50, 78, 24, 50], { duration: 2.6, ease: 'easeInOut', delay: 0.3 });
    return () => c.stop();
  }, [inView, pos]);

  const setFromEvent = useCallback(
    (clientX: number) => {
      const r = wrap.current!.getBoundingClientRect();
      pos.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
    },
    [pos]
  );

  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase__head">
          <p className="eyebrow eyebrow--center"><Spark size={12} /> Legal Design en acción</p>
          <h2 className="h2 h2--center">
            <MaskLine>Mismo contrato,</MaskLine>
            <MaskLine delay={0.1}><em>otra experiencia.</em></MaskLine>
          </h2>
          <FadeUp>
            <p className="showcase__sub">Desliza para ver cómo un documento legal tradicional se convierte en uno claro, visual y fácil de usar.</p>
          </FadeUp>
        </div>

        <FadeUp>
          <div
            className="compare"
            ref={wrap}
            data-cursor="Desliza"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              setFromEvent(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && setFromEvent(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            {/* AFTER (base layer) */}
            <div className="compare__after">
              <div className="nd">
                <div className="nd__head">
                  <span className="nd__tag">Contrato de servicios</span>
                  <h4>Lo que acordamos, <em>en simple.</em></h4>
                  <div className="nd__parties">
                    <span><i className="nd__av nd__av--a">TÚ</i> Cliente</span>
                    <span className="nd__amp">&</span>
                    <span><i className="nd__av nd__av--b">FL</i> Fórmula Legal</span>
                  </div>
                </div>
                <div className="nd__grid">
                  <div className="nd__tile">
                    <span className="nd__ic"><Check size={16} /></span>
                    <small>¿Qué haremos?</small>
                    <p>Servicios legales descritos en el Anexo A.</p>
                  </div>
                  <div className="nd__tile nd__tile--blush">
                    <span className="nd__ic">$</span>
                    <small>¿Cuánto cuesta?</small>
                    <p>Monto fijo, pagos según calendario.</p>
                  </div>
                  <div className="nd__tile">
                    <span className="nd__ic"><Calendar size={16} /></span>
                    <small>¿Por cuánto tiempo?</small>
                    <div className="nd__time">
                      <span /><span /><span /><span />
                    </div>
                    <p>12 meses, renovables.</p>
                  </div>
                  <div className="nd__tile nd__tile--ink">
                    <span className="nd__ic"><Clock size={16} /></span>
                    <small>¿Y si quiero terminar?</small>
                    <p>Avísame con 30 días de anticipación.</p>
                  </div>
                </div>
                <div className="nd__note"><Spark size={12} /> Tu información es confidencial. Siempre.</div>
              </div>
              <span className="compare__label compare__label--r">Con Legal Design</span>
            </div>

            {/* BEFORE (clipped layer) */}
            <div className="compare__before" style={{ clipPath: `inset(0 ${100 - p}% 0 0)` }}>
              <div className="od">
                <h4>CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES</h4>
                {LEGALESE.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <span className="compare__label">Tradicional</span>
            </div>

            <motion.div className="compare__handle" style={{ left: `${p}%` }}>
              <span className="compare__knob">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
                </svg>
              </span>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

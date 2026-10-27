import { useCallback, useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { FadeUp, MaskLine } from './RevealText';
import { Calendar, Check, Clock, Spark } from './Icons';

const PRESS_RELEASE = [
  'PARA DIFUSIÓN INMEDIATA. Santo Domingo, República Dominicana. La empresa anuncia el lanzamiento de su nueva línea de productos, la cual estará disponible a partir del próximo mes en los principales puntos de venta del país, según informaron sus ejecutivos a través del presente comunicado.',
  'De acuerdo con la gerencia, el lanzamiento forma parte del plan de expansión de la compañía para el presente año fiscal, que contempla además la apertura de nuevos canales de distribución y la ampliación de su portafolio, en respuesta a la creciente demanda registrada en los últimos trimestres.',
  'La nueva línea fue desarrollada tras un proceso de investigación de mercado que incluyó encuestas, grupos focales y pruebas de producto, con el objetivo de responder a las necesidades de los consumidores locales, indicaron los representantes de la empresa durante el anuncio.',
  'Para más información, los interesados pueden comunicarse con el departamento correspondiente a través de los canales oficiales de la empresa. Fin del comunicado…',
];

export default function StrategyShowcase() {
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
          <p className="eyebrow eyebrow--center"><Spark size={12} /> La estrategia en acción</p>
          <h2 className="h2 h2--center">
            <MaskLine>Misma noticia,</MaskLine>
            <MaskLine delay={0.1}><em>otro alcance.</em></MaskLine>
          </h2>
          <FadeUp>
            <p className="showcase__sub">Desliza para ver la diferencia entre enviar un comunicado y diseñar una estrategia de comunicación completa.</p>
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
                  <span className="nd__tag">Plan de lanzamiento</span>
                  <h4>Tu noticia, <em>en todos lados.</em></h4>
                  <div className="nd__parties">
                    <span><i className="nd__av nd__av--a">TÚ</i> Tu marca</span>
                    <span className="nd__amp">&</span>
                    <span><i className="nd__av nd__av--b">AG</i> Medios y creadores</span>
                  </div>
                </div>
                <div className="nd__grid">
                  <div className="nd__tile">
                    <span className="nd__ic"><Check size={16} /></span>
                    <small>Prensa</small>
                    <p>Notas publicadas en los medios que lee tu público.</p>
                  </div>
                  <div className="nd__tile nd__tile--blush">
                    <span className="nd__ic">@</span>
                    <small>Influencers</small>
                    <p>Creadores afines contando tu historia.</p>
                  </div>
                  <div className="nd__tile">
                    <span className="nd__ic"><Calendar size={16} /></span>
                    <small>Media tour</small>
                    <div className="nd__time">
                      <span /><span /><span /><span />
                    </div>
                    <p>Entrevistas en radio y TV.</p>
                  </div>
                  <div className="nd__tile nd__tile--ink">
                    <span className="nd__ic"><Clock size={16} /></span>
                    <small>Reporte</small>
                    <p>Resultados medidos al cierre.</p>
                  </div>
                </div>
                <div className="nd__note"><Spark size={12} /> Cada acción, medida y reportada.</div>
              </div>
              <span className="compare__label compare__label--r">Con estrategia AG</span>
            </div>

            {/* BEFORE (clipped layer) */}
            <div className="compare__before" style={{ clipPath: `inset(0 ${100 - p}% 0 0)` }}>
              <div className="od">
                <h4>COMUNICADO DE PRENSA</h4>
                {PRESS_RELEASE.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <span className="compare__label">Solo un comunicado</span>
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

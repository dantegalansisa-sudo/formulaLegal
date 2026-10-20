import { motion } from 'framer-motion';
import type { ServiceKey } from '../../data';
import { ease } from '../../utils/easings';
import { Check, Spark } from '../Icons';

const view = { once: false, amount: 0.4 } as const;

/* 01 — Legal Design: a dense doc becomes a designed one */
function DesignVisual() {
  return (
    <div className="v v-design">
      <motion.div className="v-doc v-doc--old" initial={{ rotate: -8, x: -10 }} whileInView={{ rotate: -10, x: -24 }} viewport={view} transition={{ duration: 1.2, ease: ease('out') }}>
        {Array.from({ length: 11 }).map((_, i) => (
          <span key={i} style={{ width: `${70 + ((i * 37) % 30)}%` }} />
        ))}
      </motion.div>
      <motion.div className="v-doc v-doc--new" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={view} transition={{ duration: 0.9, ease: ease('out') }}>
        <div className="v-doc__head">
          <span className="v-dot" />
          <b>Contrato claro</b>
          <Spark size={12} />
        </div>
        {[
          ['¿Qué haremos?', 82],
          ['¿Cuánto cuesta?', 58],
          ['¿Cuándo?', 70],
        ].map(([t, w], i) => (
          <motion.div
            key={t as string}
            className="v-row"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          >
            <span className={`v-ico v-ico--${i}`} />
            <div>
              <small>{t}</small>
              <motion.i initial={{ width: 0 }} whileInView={{ width: `${w}%` }} viewport={view} transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }} />
            </div>
          </motion.div>
        ))}
        <div className="v-timeline">
          {[0, 1, 2, 3].map((i) => (
            <motion.span key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={view} transition={{ delay: 0.9 + i * 0.12, ease: ease('bounce'), duration: 0.5 }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* 02 — Governance: org chart drawing itself */
function GovernanceVisual() {
  const nodes = [
    { x: 50, y: 18, l: 'Asamblea' },
    { x: 50, y: 46, l: 'Consejo' },
    { x: 18, y: 78, l: 'Socios' },
    { x: 50, y: 78, l: 'Dirección' },
    { x: 82, y: 78, l: 'Comités' },
  ];
  const lines = ['M50 24 L50 40', 'M50 52 L50 62 L18 62 L18 72', 'M50 62 L50 72', 'M50 62 L82 62 L82 72'];
  return (
    <div className="v v-gov">
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="v-gov__lines"
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={view}
        transition={{ delay: 0.2, duration: 1.2, ease: ease('smooth') }}
      >
        {lines.map((d) => (
          <path key={d} d={d} />
        ))}
      </motion.svg>
      {nodes.map((n, i) => (
        <motion.div
          key={n.l}
          className={`v-node ${i === 0 ? 'v-node--main' : ''}`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={view}
          transition={{ delay: i * 0.15, duration: 0.6, ease: ease('bounce') }}
        >
          <span className="v-node__av" />
          {n.l}
        </motion.div>
      ))}
    </div>
  );
}

/* 03 — Compliance: shield + checklist ticking */
function ComplianceVisual() {
  const items = ['Mapa de riesgos', 'Código de ética', 'Política PLAFT', 'Datos personales'];
  return (
    <div className="v v-comp">
      <div className="v-comp__shield">
        <svg viewBox="0 0 120 140">
          <motion.path
            d="M60 8 L108 26 V68 C108 100 86 122 60 132 C34 122 12 100 12 68 V26 Z"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={view}
            transition={{ duration: 1.4, ease: ease('smooth') }}
          />
          <motion.path d="M40 70 L54 84 L82 54" className="tick" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={{ delay: 1.2, duration: 0.6 }} />
        </svg>
        <motion.span className="v-comp__pct" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={{ delay: 1.6 }}>
          100% al día
        </motion.span>
      </div>
      <ul className="v-comp__list">
        {items.map((t, i) => (
          <motion.li key={t} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={view} transition={{ delay: 0.3 + i * 0.25, duration: 0.5 }}>
            <motion.span className="v-check" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={view} transition={{ delay: 0.6 + i * 0.25, ease: ease('bounce'), duration: 0.5 }}>
              <Check size={12} />
            </motion.span>
            {t}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* 04 — Strategic planning: roadmap */
function PlanningVisual() {
  const pts = [
    { x: 10, y: 78, l: 'Diagnóstico' },
    { x: 36, y: 56, l: 'Objetivos' },
    { x: 62, y: 62, l: 'Plan' },
    { x: 88, y: 24, l: 'Resultados' },
  ];
  return (
    <div className="v v-plan">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M10 78 C 22 78, 26 56, 36 56 S 52 64, 62 62 S 80 30, 88 24"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={view}
          transition={{ duration: 1.8, ease: ease('smooth') }}
        />
      </svg>
      {pts.map((p, i) => (
        <motion.div
          key={p.l}
          className={`v-mile ${i === pts.length - 1 ? 'v-mile--goal' : ''}`}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={view}
          transition={{ delay: 0.3 + i * 0.4, duration: 0.5, ease: ease('bounce') }}
        >
          <span />
          <small>{p.l}</small>
        </motion.div>
      ))}
      <div className="v-plan__q">
        {['T1', 'T2', 'T3', 'T4'].map((q) => (
          <span key={q}>{q}</span>
        ))}
      </div>
    </div>
  );
}

/* 05 — Legal project management: kanban with a moving card */
function PMVisual() {
  const cols = ['Por hacer', 'En curso', 'Listo'];
  return (
    <div className="v v-pm">
      {cols.map((c, ci) => (
        <div className="v-pm__col" key={c}>
          <small>{c}</small>
          {Array.from({ length: ci === 1 ? 1 : 2 }).map((_, i) => (
            <div className={`v-pm__card v-pm__card--${ci}`} key={i}>
              <i style={{ width: `${60 + i * 20}%` }} />
              <i style={{ width: '40%' }} />
            </div>
          ))}
        </div>
      ))}
      <motion.div
        className="v-pm__card v-pm__card--move"
        animate={{ left: ['3%', '3%', '35.5%', '35.5%', '68%', '68%'], rotate: [0, -4, 0, -4, 0, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', times: [0, 0.15, 0.35, 0.5, 0.7, 1] }}
      >
        <b>Entregable</b>
        <i style={{ width: '70%' }} />
        <span className="v-pm__av" />
      </motion.div>
    </div>
  );
}

export default function ServiceVisual({ k }: { k: ServiceKey }) {
  switch (k) {
    case 'design':
      return <DesignVisual />;
    case 'governance':
      return <GovernanceVisual />;
    case 'compliance':
      return <ComplianceVisual />;
    case 'planning':
      return <PlanningVisual />;
    case 'pm':
      return <PMVisual />;
  }
}

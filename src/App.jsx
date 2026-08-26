import {
  ArrowDown,
  ArrowRight,
  Check,
  Cloud,
  MapPin,
  Menu,
  Radio,
  Route,
  ShieldCheck,
  Signal,
  Smartphone,
  WifiOff,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const flow = ['Campo', 'Captura', 'Ubicación', 'Sincronización', 'Supervisión', 'Control'];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="ALURA inicio">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>ALURA</span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-shell">
      <nav className="nav container">
        <BrandMark />
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#platform" onClick={() => setOpen(false)}>Plataforma</a>
          <a href="#operations" onClick={() => setOpen(false)}>Operaciones</a>
          <a href="#integrity" onClick={() => setOpen(false)}>Integridad</a>
          <a href="#use-cases" onClick={() => setOpen(false)}>Casos de uso</a>
          <a className="button button-small" href="#demo" onClick={() => setOpen(false)}>Solicitar demo</a>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir navegación">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  );
}

function RouteCanvas({ compact = false }) {
  return (
    <div className={`route-canvas ${compact ? 'compact' : ''}`} aria-hidden="true">
      <div className="map-grid" />
      <svg viewBox="0 0 900 520" role="presentation">
        <path className="route-shadow" d="M40 414 C140 390 145 286 264 309 C370 328 365 184 484 203 C590 220 603 92 706 111 C790 126 808 68 864 52" />
        <path className="route-line" d="M40 414 C140 390 145 286 264 309 C370 328 365 184 484 203 C590 220 603 92 706 111 C790 126 808 68 864 52" />
      </svg>
      <span className="route-node node-a" />
      <span className="route-node node-b" />
      <span className="route-node node-c" />
      <span className="route-node node-d" />
      <span className="moving-dot" />
      {!compact && (
        <>
          <div className="map-label label-one"><span>19:32</span><strong>Evento registrado</strong></div>
          <div className="map-label label-two"><span>GPS</span><strong>Precisión 5.2 m</strong></div>
          <div className="map-label label-three"><span>SYNC</span><strong>Operación activa</strong></div>
        </>
      )}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-wrap" aria-label="Representación de la aplicación móvil ALURA">
      <div className="phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="phone-top"><span>ALURA Field</span><Signal size={15} /></div>
          <div className="phone-map"><RouteCanvas compact /></div>
          <div className="phone-status"><i /> Operación en curso</div>
          <div className="event-block">
            <span>REGISTRO</span>
            <strong>Evento de campo</strong>
            <small>19:32:14 · GPS 5.2 m</small>
          </div>
          <div className="phone-actions">
            <button>−</button><strong>07</strong><button>+</button>
          </div>
          <div className="phone-meta"><span>Ruta 06</span><span>Viaje 182</span></div>
        </div>
      </div>
      <div className="signal-orbit orbit-one" />
      <div className="signal-orbit orbit-two" />
    </div>
  );
}

function OperationsMockup() {
  return (
    <div className="ops-window">
      <div className="ops-bar"><span /><span /><span /><small>Centro de Operaciones ALURA</small></div>
      <div className="ops-layout">
        <aside>
          <b>ALURA</b>
          <span className="active">Overview</span>
          <span>Operaciones</span>
          <span>Equipos en vivo</span>
          <span>Integridad</span>
          <span>Calidad</span>
        </aside>
        <div className="ops-main">
          <div className="ops-heading"><div><small>OPERACIÓN</small><strong>Visibilidad en tiempo real</strong></div><span className="live-pill"><i /> LIVE</span></div>
          <div className="ops-stats"><div><small>En curso</small><b>21</b></div><div><small>Reportando GPS</small><b>19</b></div><div><small>Atención</small><b>02</b></div></div>
          <div className="ops-map"><RouteCanvas compact /><span className="device-pin pin-one">14</span><span className="device-pin pin-two">21</span><span className="device-pin pin-three warning">08</span></div>
        </div>
      </div>
    </div>
  );
}

function FlowRail() {
  return (
    <div className="flow-rail">
      {flow.map((item, index) => (
        <div className="flow-step" key={item}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{item}</strong>
          {index !== flow.length - 1 && <i />}
        </div>
      ))}
    </div>
  );
}

function Scene({ eyebrow, title, copy, visual, reverse = false, id }) {
  return (
    <section id={id} className={`scene section ${reverse ? 'reverse' : ''}`}>
      <div className="container scene-grid">
        <div className="scene-copy reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="scene-visual reveal">{visual}</div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top">
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-glow" />
          <RouteCanvas />
          <div className="container hero-content">
            <span className="eyebrow hero-eyebrow"><i /> Plataforma de operaciones de campo</span>
            <h1>El campo está<br /><em>en movimiento.</em></h1>
            <p>ALURA conecta personas, recorridos, registros y supervisión dentro de una misma operación.</p>
            <div className="hero-actions">
              <a className="button" href="#demo">Solicitar demo <ArrowRight size={17} /></a>
              <a className="text-link" href="#platform">Descubrir la plataforma <ArrowDown size={16} /></a>
            </div>
          </div>
          <div className="hero-caption"><span>CAMPO</span><i /><span>INFORMACIÓN</span></div>
        </section>

        <section className="statement section">
          <div className="container narrow reveal">
            <span className="eyebrow">Una operación, no herramientas aisladas</span>
            <h2>La información de campo no debería reconstruirse después.</h2>
            <p>Cuando recorridos, archivos, ubicación, mensajes y registros viven separados, entender qué ocurrió se convierte en otro trabajo. ALURA conserva el contexto desde el momento en que se genera.</p>
          </div>
          <div className="fragmentation reveal">
            <span>FORMULARIOS</span><span>GPS</span><span>ARCHIVOS</span><span>EVIDENCIA</span><span>MENSAJERÍA</span><span>REPORTES</span>
            <div className="fragment-core">ALURA</div>
          </div>
        </section>

        <section id="platform" className="flow-section section">
          <div className="container">
            <div className="section-heading reveal"><span className="eyebrow">El flujo completo</span><h2>Del territorio al centro de operaciones.</h2></div>
            <FlowRail />
          </div>
        </section>

        <Scene
          eyebrow="01 · Movimiento"
          title={<>Cada recorrido deja <em>información.</em></>}
          copy="ALURA registra el contexto geográfico de la operación: recorrido, tiempo, eventos y calidad de ubicación forman parte de la misma historia."
          visual={<div className="route-showcase"><RouteCanvas /><div className="route-readout"><Route size={18} /><span>TRACK ACTIVO</span><b>18.42 km</b></div></div>}
        />

        <Scene
          eyebrow="02 · Captura"
          title={<>Más que un dato.<br /><em>Contexto.</em></>}
          copy="La aplicación Android estructura la actividad alrededor de operaciones reales. Cada registro conserva cuándo ocurrió, dónde ocurrió y a qué operación pertenece."
          visual={<PhoneMockup />}
          reverse
        />

        <Scene
          eyebrow="03 · Evidencia"
          title={<>Lo que ocurre en campo, <em>queda ligado</em> a la operación.</>}
          copy="Registros, ubicación, estados y evidencia pueden convivir dentro del mismo flujo para facilitar revisión y trazabilidad posterior."
          visual={
            <div className="evidence-frame">
              <div className="evidence-photo"><MapPin size={28} /><span>Visual preparado para evidencia real</span></div>
              <div className="evidence-data"><small>EVENTO 048</small><strong>Registro validado</strong><span>19:32:14</span><span>19.4326, -99.1332</span><span>Precisión GPS · 5.2 m</span></div>
            </div>
          }
        />

        <section className="offline section">
          <div className="container offline-grid">
            <div className="offline-copy reveal">
              <span className="eyebrow">04 · Offline first</span>
              <h2>El trabajo continúa.</h2>
              <p>Incluso cuando desaparece la señal.</p>
              <div className="offline-fact"><WifiOff size={20} /><span>La operación se conserva localmente y la sincronización puede esperar a que regrese la conectividad.</span></div>
            </div>
            <div className="sync-visual reveal">
              <div className="sync-device"><Smartphone size={32} /><b>FIELD</b><span>12 registros</span></div>
              <div className="sync-path"><i /><i /><i /><span>sincronizando</span></div>
              <div className="sync-cloud"><Cloud size={34} /><b>PLATFORM</b><span>integridad</span></div>
            </div>
          </div>
        </section>

        <section id="operations" className="operations section">
          <div className="container">
            <div className="operations-intro reveal"><span className="eyebrow">05 · Supervisión</span><h2>Del campo al<br /><em>centro de operaciones.</em></h2><p>La actividad deja de estar encerrada en el dispositivo. ALURA la convierte en visibilidad operacional.</p></div>
            <div className="operations-stage reveal"><OperationsMockup /></div>
          </div>
        </section>

        <section id="integrity" className="integrity section">
          <div className="container integrity-grid">
            <div className="integrity-copy reveal">
              <span className="eyebrow">06 · Integridad y calidad</span>
              <h2>Capturar no es suficiente.<br /><em>Hay que poder confiar.</em></h2>
              <p>ALURA analiza el estado operativo de los levantamientos para ayudar a distinguir información completa de operaciones que necesitan atención.</p>
            </div>
            <div className="health-panel reveal">
              <div className="health-head"><span>OPERATIONAL HEALTH</span><ShieldCheck size={20} /></div>
              <div className="health-state"><i /><strong>HEALTHY</strong><span>Estado de demostración</span></div>
              <div className="health-lines">
                <div><span>GPS coverage</span><i><b style={{ width: '92%' }} /></i><strong>92%</strong></div>
                <div><span>Data completeness</span><i><b style={{ width: '97%' }} /></i><strong>97%</strong></div>
                <div><span>Sync integrity</span><i><b style={{ width: '89%' }} /></i><strong>89%</strong></div>
              </div>
              <small>Valores ilustrativos · la interfaz final utilizará información real anonimizada.</small>
            </div>
          </div>
        </section>

        <section id="use-cases" className="ecosystem section">
          <div className="container">
            <div className="section-heading reveal"><span className="eyebrow">Una plataforma, diferentes operaciones</span><h2>Probado en movilidad.<br /><em>Diseñado para el campo.</em></h2><p>El núcleo de ALURA permite estructurar distintos flujos donde ubicación, tiempo, evidencia y trazabilidad importan.</p></div>
            <div className="ecosystem-stage reveal">
              <div className="eco-ring ring-one" /><div className="eco-ring ring-two" />
              <div className="eco-core"><BrandMark /><small>FIELD OPERATIONS CORE</small></div>
              <span className="eco-node n1">Movilidad</span><span className="eco-node n2">Levantamientos</span><span className="eco-node n3">Inspecciones</span><span className="eco-node n4">Inventarios</span><span className="eco-node n5">Auditorías</span>
            </div>
          </div>
        </section>

        <section id="demo" className="cta section">
          <RouteCanvas compact />
          <div className="container cta-content reveal">
            <span className="eyebrow">ALURA</span>
            <h2>Conoce la operación<br />desde otra perspectiva.</h2>
            <p>Explora cómo ALURA puede conectar el trabajo de campo con supervisión, integridad e información.</p>
            <a className="button" href="mailto:contacto@alura.mx">Solicitar una demo <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><BrandMark /><p>Field operations, connected.</p></div>
          <div><strong>Plataforma</strong><a href="#platform">Cómo funciona</a><a href="#operations">Operaciones</a><a href="#integrity">Integridad</a></div>
          <div><strong>Producto</strong><a href="#use-cases">Casos de uso</a><a href="#demo">Solicitar demo</a></div>
          <div className="footer-status"><span><i /> Producto en desarrollo activo</span><small>© 2026 ALURA</small></div>
        </div>
      </footer>
    </div>
  );
}

export default App;

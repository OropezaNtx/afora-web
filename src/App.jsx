import {
  ArrowDown,
  ArrowRight,
  Cloud,
  MapPin,
  Menu,
  Route,
  ShieldCheck,
  Signal,
  Smartphone,
  WifiOff,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import ASSETS from './config/assets';

const flow = ['Campo', 'Captura', 'Ubicación', 'Sincronización', 'Supervisión', 'Control'];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="AFORA inicio">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>AFORA</span>
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

function RouteCanvas({ compact = false, subtle = false }) {
  return (
    <div className={`route-canvas ${compact ? 'compact' : ''} ${subtle ? 'subtle' : ''}`} aria-hidden="true">
      <div className="map-grid" />
      <svg viewBox="0 0 900 520" role="presentation">
        <path className="route-shadow" d="M40 414 C140 390 145 286 264 309 C370 328 365 184 484 203 C590 220 603 92 706 111 C790 126 808 68 864 52" />
        <path className="route-line" d="M40 414 C140 390 145 286 264 309 C370 328 365 184 484 203 C590 220 603 92 706 111 C790 126 808 68 864 52" />
      </svg>
      <span className="route-node node-a" /><span className="route-node node-b" /><span className="route-node node-c" /><span className="route-node node-d" />
      <span className="moving-dot" />
      {!compact && <>
        <div className="map-label label-one"><span>19:32</span><strong>Evento registrado</strong></div>
        <div className="map-label label-two"><span>GPS</span><strong>Precisión 5.2 m</strong></div>
        <div className="map-label label-three"><span>SYNC</span><strong>Operación activa</strong></div>
      </>}
    </div>
  );
}

function FieldCaptureVisual() {
  const delays = ['S', 'C', 'TM', 'CND', 'VI', 'VD', 'PP', 'O'];
  return (
    <div className="field-device-wrap" aria-label="Representación estilizada de la captura real en AFORA Field">
      <div className="field-device">
        <div className="field-notch" />
        <div className="field-screen">
          <div className="field-header"><span>ATRÁS</span><strong>RUTA 2 · BUENA VISTA</strong><span>MAPA</span></div>
          <div className="capture-shell">
            <div className="capture-active"><i /><div><strong>CAPTURA ACTIVA</strong><small>00:06</small></div><span>×</span></div>
            <div className="capture-stats">
              <div><b>4</b><span>SUBEN</span></div><div className="down"><b>2</b><span>BAJAN</span></div><div><b>12</b><span>A BORDO</span></div>
            </div>
            <div className="gender-total"><span>HOMBRES <b>8</b></span><span>MUJERES <b>4</b></span></div>
            <CaptureRow title="↑ SUBEN" total="TOTAL: 4" men="2" women="2" />
            <CaptureRow title="↓ BAJAN" total="TOTAL: 2" men="1" women="1" down />
            <div className="delay-title">DEMORAS</div>
            <div className="delay-grid">{delays.map((d, index) => <span key={d} className={index < 4 ? 'active' : ''}>{d}</span>)}</div>
            <div className="notes-row"><span>NOTAS</span><i /></div>
          </div>
        </div>
      </div>
      <div className="field-orbit orbit-a" /><div className="field-orbit orbit-b" />
    </div>
  );
}

function CaptureRow({ title, total, men, women, down = false }) {
  return (
    <div className={`capture-row ${down ? 'is-down' : ''}`}>
      <div className="capture-row-title"><strong>{title}</strong><span>{total}</span></div>
      <div className="capture-genders">
        <div><small>HOMBRES</small><b>{men}</b><span><i>−</i><i>+</i></span></div>
        <div><small>MUJERES</small><b>{women}</b><span><i>−</i><i>+</i></span></div>
      </div>
    </div>
  );
}

function FieldGpsVisual() {
  return (
    <div className="gps-product" aria-label="Visualización estilizada del seguimiento GPS real de AFORA">
      <div className="gps-grid" />
      <div className="gps-toolbar">
        <div className="gps-quality"><i /><div><strong>GPS EXCELENTE</strong><span>±8 m · Clean 99% · Kalman 99%</span></div></div>
        <div className="gps-points"><strong>3,271</strong><span>puntos</span></div>
      </div>
      <div className="gps-legend"><span className="start">INICIO</span><span className="event">ASD</span><span className="delay">DEMORA</span><span className="combo">ASD + DEMORA</span></div>
      <svg className="gps-route" viewBox="0 0 760 440" aria-hidden="true">
        <path className="gps-road faint" d="M42 340 C120 288 182 310 230 260 C282 205 350 238 402 190 C454 142 523 172 574 112 C615 64 684 106 720 48" />
        <path className="gps-road draw" d="M42 340 C120 288 182 310 230 260 C282 205 350 238 402 190 C454 142 523 172 574 112 C615 64 684 106 720 48" />
      </svg>
      <span className="gps-marker marker-start">INICIO</span><span className="gps-marker marker-a">ASD</span><span className="gps-marker marker-b delay">D</span><span className="gps-marker marker-c combo">A+D</span><span className="gps-marker marker-end">FIN</span>
      <div className="gps-summary"><div><span>DISTANCIA</span><strong>7.22 km</strong></div><div><span>DURACIÓN</span><strong>1 h 49 m</strong></div><div><span>EVENTOS</span><strong>8</strong></div><div><span>PRECISIÓN</span><strong>±8 m</strong></div></div>
    </div>
  );
}

function FieldStatusVisual() {
  return (
    <div className="field-status-console" aria-label="Estado operacional del levantamiento en AFORA Field">
      <div className="field-status-head"><span>AFORA FIELD</span><strong>RUTA 2 · BUENA VISTA</strong><i>EN TIEMPO REAL</i></div>
      <div className="field-status-grid">
        <div className="field-status-card primary"><span>TIEMPO DEL LEVANTAMIENTO</span><strong>53:37</strong><small>Operación en curso</small></div>
        <div className="field-status-card"><span>ESTADO DEL RASTREO</span><strong className="ok">RASTREO EXCELENTE</strong><small>±6 m · última señal 1 s · 1,601 puntos</small></div>
        <div className="field-status-card"><span>RESPALDO EN LA NUBE</span><strong className="ok">GUARDADO</strong><small>0 pendientes · último envío 23:27:21</small></div>
        <div className="field-status-card summary"><span>RESUMEN OPERATIVO</span><div><b>4<small>EVENTOS</small></b><b className="up">14<small>SUBEN</small></b><b className="down">2<small>BAJAN</small></b><b>12<small>A BORDO</small></b></div></div>
      </div>
      <div className="event-history"><span>HISTORIAL DE EVENTOS</span><div><b>WP 257 → WP 258</b><strong>SUBEN: 4 · BAJAN: 2</strong><small>AD · 23:27:04</small></div><div><b>WP 255 → WP 256</b><strong>SUBEN: 6 · BAJAN: 0</strong><small>AD · 23:26:55</small></div></div>
    </div>
  );
}

function EvidenceVisual() {
  return (
    <div className="evidence-frame">
      <div className="evidence-photo" style={{ backgroundImage: `linear-gradient(180deg, rgba(5,6,8,.08), rgba(5,6,8,.68)), url(${ASSETS.evidence})` }}><div className="evidence-placeholder"><MapPin size={25} /><span>Evidencia asociada</span></div></div>
      <div className="evidence-data"><small>EVIDENCIA DE CAMPO</small><strong>Ligada a la operación</strong><span>Ubicación</span><span>Momento</span><span>Contexto operativo</span><div className="evidence-status"><i /> Disponible para revisión</div></div>
    </div>
  );
}

function OfflineSyncVisual() {
  return (
    <div className="sync-visual reveal">
      <div className="sync-device"><Smartphone size={32} /><b>FIELD</b><span>Operación local</span><div className="local-records">{[1,2,3,4,5].map(n => <i key={n} />)}</div></div>
      <div className="sync-path"><div className="offline-break"><WifiOff size={17} /><span>sin señal</span></div><div className="sync-track"><i /><i /><i /><i /></div><span className="sync-caption">la cola espera y continúa</span></div>
      <div className="sync-cloud"><Cloud size={34} /><b>PLATFORM</b><span>reconciliación</span></div>
    </div>
  );
}

function OperationsLiveVisual() {
  return (
    <div className="live-console product-reveal" aria-label="Representación estilizada de Equipos en Vivo de AFORA">
      <div className="live-topbar"><strong>Centro de Operaciones AFORA</strong><span>Actualizar ↻</span></div>
      <div className="live-tabs"><b>Dashboard</b><b>Levantamientos</b><b>Integridad</b><b>Inteligencia</b><b className="active">Equipos en Vivo</b><b>Estado de Flota</b></div>
      <div className="live-title"><div><span>OPERACIÓN ACTIVA</span><strong>Equipos en Tiempo Real</strong><small>Ubicación operativa de los equipos transmitiendo actualmente.</small></div><div className="live-count"><strong>1</strong><span>punto activo</span></div></div>
      <div className="live-map"><div className="gps-grid" /><svg viewBox="0 0 900 300" aria-hidden="true"><path d="M35 205 C160 154 258 182 356 129 C442 83 560 126 650 78 C728 36 800 68 862 36" /></svg><div className="live-device-dot"><i /><span>Equipo 08</span></div><div className="live-device-card"><div><strong>Equipo 08</strong><span>Transmitiendo</span></div><div className="device-metrics"><b>GPS OK</b><b>86%</b><b>Hace 1 min</b><b>0 km/h</b></div><small>Sincronización · OPERANDO</small></div></div>
      <div className="live-kpis"><div><strong>1</strong><span>Equipos en campo</span></div><div><strong>1</strong><span>Transmitiendo</span></div><div><strong>0</strong><span>Con retraso</span></div><div><strong>0</strong><span>Requieren atención</span></div></div>
      <div className="live-table"><div className="live-table-head"><span>ESTADO</span><span>OPERADOR / EQUIPO</span><span>UBICACIÓN</span><span>GPS</span><span>ENERGÍA</span><span>SINCRONIZACIÓN</span></div><div className="live-table-row"><span><i />Transmitiendo</span><span>Equipo 08</span><span>19.4117, -98.9626</span><span>OK</span><span>86%</span><strong>OPERANDO</strong></div></div>
    </div>
  );
}

function TraceabilityVisual() {
  return (
    <div className="trace-console">
      <div className="trace-head"><span>LEVANTAMIENTO COMPLETADO</span><strong>Una operación conserva su historia.</strong></div>
      <div className="trace-fields"><div><span>Ruta</span><b>RUTA 2</b></div><div><span>Folio</span><b>003</b></div><div><span>Sentido</span><b>IDA</b></div><div><span>Operador</span><b>CESAR FLORES</b></div><div><span>Unidad</span><b>COMBI · ECO 25</b></div><div><span>Inicio / Fin</span><b>01:53 → 03:43</b></div></div>
      <div className="trace-map"><div className="gps-grid" /><svg viewBox="0 0 900 320" aria-hidden="true"><path className="trace-path" d="M70 258 C112 240 110 198 157 202 C218 208 218 158 286 171 C346 183 370 118 430 139 C493 161 492 82 557 92 C609 101 623 139 681 145 C742 151 754 207 827 211" /></svg><span className="trace-start">Inicio</span><span className="trace-delay d1" /><span className="trace-delay d2" /><span className="trace-delay d3" /><span className="trace-end">Fin</span></div>
      <div className="trace-meta"><span>3,270 puntos</span><span>8 eventos con coordenada</span><span>ASD · Demoras · Banderas</span></div>
    </div>
  );
}

function IntegrityIntelligenceVisual() {
  const attention = [
    ['Trip 42', 'CRITICAL', 'GPS · Red · Sync'],
    ['Trip 46', 'CRITICAL', 'GPS · Dispositivo'],
    ['Trip 39', 'DEGRADED', 'Red'],
  ];
  return (
    <div className="quality-console">
      <div className="quality-banner"><div><span>OPERATIONAL INTELLIGENCE</span><strong>Integridad e inteligencia operativa</strong><small>Convierte telemetría, GPS y sincronización en señales que ayudan a priorizar revisión.</small></div><i>QUALITY ENGINE</i></div>
      <div className="quality-kpis"><div><span>HEALTH PROMEDIO</span><b>78/100</b></div><div><span>COBERTURA GPS</span><b>92.7%</b></div><div><span>TELEMETRÍA</span><b>73.9%</b></div><div><span>VENTANA</span><b>24</b></div></div>
      <div className="quality-body">
        <div className="attention-list"><div className="quality-title"><strong>Requieren atención</strong><span>3 señales prioritarias</span></div>{attention.map(([trip,state,domain]) => <div className={`attention-row ${state === 'CRITICAL' ? 'critical' : ''}`} key={trip}><i /><b>{trip}</b><span>{state}</span><small>{domain}</small></div>)}</div>
        <div className="quality-rank"><div className="quality-title"><strong>Calidad por operador</strong><span>Health + cobertura GPS</span></div><div><b>MONICA MENDOZA</b><span>90/100</span></div><div><b>ROCIO</b><span>90/100</span></div><div><b>COORDINADOR GENERAL</b><span>78/100</span></div><div><b>CESAR FLORES</b><span>62/100</span></div></div>
      </div>
      <div className="quality-foot"><span>GPS</span><span>RED</span><span>DISPOSITIVO</span><span>SYNC</span><strong>Supervisión por excepción</strong></div>
    </div>
  );
}

function FleetVisual() {
  return (
    <div className="fleet-console">
      <div className="fleet-head"><div><span>ESTADO DE FLOTA</span><strong>La salud técnica también forma parte de la operación.</strong></div><i>1 ACTIVO</i></div>
      <div className="fleet-kpis"><div><b>1</b><span>Equipos</span></div><div><b>1</b><span>Activos</span></div><div><b>0</b><span>Sin reporte</span></div><div><b>0</b><span>Requieren atención</span></div></div>
      <div className="fleet-device"><span className="fleet-online"><i /> EN LÍNEA</span><div><small>EQUIPO</small><strong>Xiaomi 22101320G</strong><span>Equipo 08</span></div><div><small>PROYECTO</small><strong>urban_operations</strong><span>afora</span></div><div><small>GPS</small><strong>OK</strong><span>Heartbeat</span></div><div><small>BATERÍA</small><strong>86%</strong><span>Ahora</span></div><div><small>LEVANTAMIENTO</small><strong>47</strong><span>Activo</span></div></div>
    </div>
  );
}

function FragmentationVisual() {
  const items = [['FORMULARIOS','frag-1'],['GPS','frag-2'],['ARCHIVOS','frag-3'],['EVIDENCIA','frag-4'],['MENSAJERÍA','frag-5'],['REPORTES','frag-6']];
  return <div className="fragmentation reveal"><svg className="fragment-lines" viewBox="0 0 1000 440" preserveAspectRatio="none" aria-hidden="true"><path d="M115 110 C290 150 345 205 500 220" /><path d="M865 84 C720 125 650 180 500 220" /><path d="M160 350 C300 320 365 260 500 220" /><path d="M860 330 C720 300 660 252 500 220" /><path d="M455 55 C470 115 485 160 500 220" /><path d="M595 395 C560 330 530 278 500 220" /></svg>{items.map(([label,cls]) => <span className={cls} key={label}>{label}</span>)}<div className="fragment-core"><span>AFORA</span><small>contexto conectado</small></div></div>;
}

function FlowRail() {
  return <div className="flow-rail reveal"><div className="flow-progress" />{flow.map((item,index) => <div className="flow-step" key={item} style={{'--delay':`${index*120}ms`}}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong><i /></div>)}</div>;
}

function Scene({ eyebrow, title, copy, visual, reverse = false, id }) {
  return <section id={id} className={`scene section ${reverse ? 'reverse' : ''}`}><div className="container scene-grid"><div className="scene-copy reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{copy}</p></div><div className="scene-visual reveal">{visual}</div></div></section>;
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top">
      <Navbar />
      <main>
        <section className="hero"><div className="hero-glow" /><RouteCanvas /><div className="container hero-content"><span className="eyebrow hero-eyebrow"><i /> Plataforma de operaciones de campo</span><h1>El campo está<br /><em>en movimiento.</em></h1><p>AFORA conecta personas, recorridos, registros y supervisión dentro de una misma operación.</p><div className="hero-actions"><a className="button" href="#demo">Solicitar demo <ArrowRight size={17} /></a><a className="text-link" href="#platform">Descubrir la plataforma <ArrowDown size={16} /></a></div></div><div className="hero-caption"><span>CAMPO</span><i /><span>INFORMACIÓN</span></div></section>

        <section className="statement section"><div className="container narrow reveal"><span className="eyebrow">Una operación, no herramientas aisladas</span><h2>La información de campo no debería reconstruirse después.</h2><p>Cuando recorridos, archivos, ubicación, mensajes y registros viven separados, entender qué ocurrió se convierte en otro trabajo. AFORA conserva el contexto desde el momento en que se genera.</p></div><FragmentationVisual /></section>

        <section id="platform" className="flow-section section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">El flujo completo</span><h2>Del territorio al centro de operaciones.</h2></div><FlowRail /></div></section>

        <Scene eyebrow="01 · Movimiento" title={<>Cada recorrido deja <em>información.</em></>} copy="AFORA conserva el contexto geográfico de la operación: track, precisión, eventos y tiempo forman parte de la misma historia." visual={<FieldGpsVisual />} />

        <Scene eyebrow="02 · Captura" title={<>La operación sucede <em>en el momento.</em></>} copy="La interfaz de campo está pensada para registrar ascensos, descensos, ocupación y demoras sin separar el dato del recorrido que le da contexto." visual={<FieldCaptureVisual />} reverse />

        <Scene eyebrow="03 · Estado operativo" title={<>El operador también sabe <em>qué está pasando.</em></>} copy="Tiempo, rastreo, puntos persistidos, respaldo en nube e historial de eventos permanecen visibles durante el levantamiento." visual={<FieldStatusVisual />} />

        <Scene eyebrow="04 · Evidencia" title={<>Lo que ocurre en campo, <em>queda ligado</em> a la operación.</>} copy="La evidencia puede conservarse junto con ubicación, momento y contexto operativo para facilitar revisión posterior." visual={<EvidenceVisual />} reverse />

        <section className="offline section"><div className="container offline-grid"><div className="offline-copy reveal"><span className="eyebrow">05 · Offline first</span><h2>El trabajo continúa.</h2><p>Incluso cuando desaparece la señal.</p><div className="offline-fact"><WifiOff size={20} /><span>La operación se conserva localmente y la sincronización puede esperar a que regrese la conectividad.</span></div></div><OfflineSyncVisual /></div></section>

        <section id="operations" className="operations section"><div className="container"><div className="operations-intro reveal"><span className="eyebrow">06 · Supervisión</span><h2>Del campo al<br /><em>centro de operaciones.</em></h2><p>Equipos, ubicación, GPS, energía y sincronización dejan de estar encerrados en el dispositivo y se convierten en visibilidad operacional.</p></div><div className="operations-stage reveal"><OperationsLiveVisual /></div></div></section>

        <section className="traceability section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">07 · Trazabilidad</span><h2>La operación termina.<br /><em>Su historia permanece.</em></h2><p>Ruta, operador, unidad, tiempos, eventos y recorrido pueden revisarse como una misma operación.</p></div><div className="trace-stage reveal"><TraceabilityVisual /></div></div></section>

        <section id="integrity" className="intelligence section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">08 · Integridad e inteligencia</span><h2>No necesitas revisar todo.<br /><em>Necesitas saber dónde mirar.</em></h2><p>AFORA combina integridad, GPS, telemetría y sincronización para señalar operaciones o dispositivos que requieren atención.</p></div><div className="intelligence-stage reveal"><IntegrityIntelligenceVisual /></div></div></section>

        <section className="fleet section"><div className="container fleet-grid"><div className="fleet-copy reveal"><span className="eyebrow">09 · Estado de flota</span><h2>La operación también depende del <em>dispositivo.</em></h2><p>AFORA permite observar si los equipos autorizados están en línea, reportando GPS, con energía y asociados a un levantamiento activo.</p></div><div className="reveal"><FleetVisual /></div></div></section>

        <section id="use-cases" className="ecosystem section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">Una plataforma, diferentes operaciones</span><h2>Probado en movilidad.<br /><em>Diseñado para el campo.</em></h2><p>El núcleo de AFORA permite estructurar distintos flujos donde ubicación, tiempo, evidencia y trazabilidad importan.</p></div><div className="ecosystem-stage reveal" style={{backgroundImage:`linear-gradient(rgba(8,10,14,.88), rgba(8,10,14,.94)), url(${ASSETS.mapTexture})`}}><div className="eco-ring ring-one" /><div className="eco-ring ring-two" /><div className="eco-core"><BrandMark /><small>FIELD OPERATIONS CORE</small></div><span className="eco-node n1">Movilidad</span><span className="eco-node n2">Levantamientos</span><span className="eco-node n3">Inspecciones</span><span className="eco-node n4">Inventarios</span><span className="eco-node n5">Auditorías</span></div></div></section>

        <section id="demo" className="cta section"><RouteCanvas compact subtle /><div className="container cta-content reveal"><span className="eyebrow">AFORA</span><h2>Conoce la operación<br />desde otra perspectiva.</h2><p>Explora cómo AFORA puede conectar el trabajo de campo con supervisión, integridad e información.</p><a className="button" href="mailto:contacto@afora.mx">Solicitar una demo <ArrowRight size={17} /></a></div></section>
      </main>
      <footer><div className="container footer-grid"><div><BrandMark /><p>Field operations, connected.</p></div><div><strong>Plataforma</strong><a href="#platform">Cómo funciona</a><a href="#operations">Operaciones</a><a href="#integrity">Integridad</a></div><div><strong>Producto</strong><a href="#use-cases">Casos de uso</a><a href="#demo">Solicitar demo</a></div><div className="footer-status"><span><i /> Producto en desarrollo activo</span><small>© 2026 AFORA</small></div></div></footer>
    </div>
  );
}

export default App;
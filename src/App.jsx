import {
  ArrowDown,
  ArrowRight,
  BatteryMedium,
  CheckCircle2,
  Cloud,
  Database,
  FileOutput,
  HardDrive,
  MapPin,
  Menu,
  RadioTower,
  Route,
  ShieldCheck,
  Smartphone,
  Wifi,
  WifiOff,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const flow = ['Preparar', 'Capturar', 'Ubicar', 'Sincronizar', 'Supervisar', 'Validar'];

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
          <a href="#field" onClick={() => setOpen(false)}>Field</a>
          <a href="#operations" onClick={() => setOpen(false)}>Operations</a>
          <a href="#integrity" onClick={() => setOpen(false)}>Integridad</a>
          <a className="button button-small" href="#demo" onClick={() => setOpen(false)}>Solicitar demo</a>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir navegación">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  );
}

function RouteCanvas({ subtle = false }) {
  return (
    <div className={`route-canvas ${subtle ? 'subtle' : ''}`} aria-hidden="true">
      <div className="map-grid" />
      <svg viewBox="0 0 900 520" role="presentation">
        <path className="route-shadow" d="M40 414 C140 390 145 286 264 309 C370 328 365 184 484 203 C590 220 603 92 706 111 C790 126 808 68 864 52" />
        <path className="route-line" d="M40 414 C140 390 145 286 264 309 C370 328 365 184 484 203 C590 220 603 92 706 111 C790 126 808 68 864 52" />
      </svg>
      <span className="route-node node-a" /><span className="route-node node-b" /><span className="route-node node-c" /><span className="route-node node-d" />
      <span className="moving-dot" />
      <div className="map-label label-one"><span>EVENTO</span><strong>Registro asociado</strong></div>
      <div className="map-label label-two"><span>GPS</span><strong>Rastreo activo</strong></div>
      <div className="map-label label-three"><span>SYNC</span><strong>Operación conectada</strong></div>
    </div>
  );
}

function HeroProof() {
  return (
    <div className="hero-proof reveal">
      <span><i /> Operación local primero</span>
      <span>GPS + eventos + contexto</span>
      <span>Supervisión web</span>
      <span>Integridad operacional</span>
    </div>
  );
}

function FragmentationVisual() {
  const items = [
    ['FORMULARIOS', 'frag-1'], ['GPS', 'frag-2'], ['ARCHIVOS', 'frag-3'],
    ['MENSAJERÍA', 'frag-4'], ['REPORTES', 'frag-5'], ['DATOS', 'frag-6'],
  ];
  return (
    <div className="fragmentation reveal">
      <div className="fragment-grid" />
      <svg className="fragment-lines" viewBox="0 0 1000 440" preserveAspectRatio="none" aria-hidden="true">
        <path d="M110 112 C300 154 352 205 500 220" />
        <path d="M872 82 C720 130 646 180 500 220" />
        <path d="M155 348 C306 322 366 262 500 220" />
        <path d="M858 334 C718 302 654 255 500 220" />
        <path d="M448 54 C468 112 486 166 500 220" />
        <path d="M596 394 C558 328 530 275 500 220" />
      </svg>
      {items.map(([label, cls]) => <span className={cls} key={label}>{label}</span>)}
      <div className="fragment-core"><span>AFORA</span><small>OPERACIÓN CONECTADA</small><b>contexto preservado</b></div>
      <span className="packet packet-a" /><span className="packet packet-b" /><span className="packet packet-c" />
    </div>
  );
}

function Transformation() {
  return (
    <section className="transformation section">
      <div className="container transformation-grid">
        <div className="transformation-copy reveal">
          <span className="eyebrow">Qué cambia AFORA</span>
          <h2>El dato deja de estar <em>solo.</em></h2>
          <p>AFORA relaciona la información con la operación que la produjo: recorrido, momento, ubicación, dispositivo y estado.</p>
        </div>
        <div className="before-after reveal">
          <div className="before-column">
            <small>PROCESO FRAGMENTADO</small>
            <strong>Capturar.</strong><strong>Enviar.</strong><strong>Reconstruir.</strong>
            <span>La revisión empieza después.</span>
          </div>
          <div className="change-line"><i /><span>AFORA</span><i /></div>
          <div className="after-column">
            <small>OPERACIÓN ESTRUCTURADA</small>
            <strong>Capturar con contexto.</strong><strong>Conservar.</strong><strong>Supervisar.</strong>
            <span>La trazabilidad nace en campo.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowRail() {
  return (
    <div className="flow-rail reveal">
      <div className="flow-progress" />
      {flow.map((item, index) => (
        <div className="flow-step" key={item} style={{ '--delay': `${index * 120}ms` }}>
          <span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><i />
        </div>
      ))}
    </div>
  );
}

function ReadinessVisual() {
  const checks = [
    [MapPin, 'Ubicación precisa', 'READY'],
    [RadioTower, 'Servicios GPS', 'READY'],
    [BatteryMedium, 'Batería', 'READY'],
    [HardDrive, 'Almacenamiento', 'READY'],
    [Wifi, 'Conectividad', 'OPTIONAL'],
    [Smartphone, 'Segundo plano', 'READY'],
  ];
  return (
    <div className="readiness-console reveal">
      <div className="readiness-head"><div><span>FIELD READINESS</span><strong>Antes de iniciar, el dispositivo también se valida.</strong></div><b><i /> READY</b></div>
      <div className="readiness-list">
        {checks.map(([Icon, label, state]) => (
          <div key={label}><Icon size={18} /><span>{label}</span><strong className={state === 'OPTIONAL' ? 'optional' : ''}>{state}</strong></div>
        ))}
      </div>
      <div className="readiness-note"><WifiOff size={17} /><span>Sin Internet no bloquea la captura: AFORA puede continuar offline.</span></div>
    </div>
  );
}

function FieldGpsVisual() {
  return (
    <div className="gps-product reveal" aria-label="Visualización estilizada del seguimiento GPS de AFORA">
      <div className="gps-grid" />
      <div className="gps-toolbar"><div className="gps-quality"><i /><div><strong>GPS EXCELENTE</strong><span>Precisión · filtro · calidad</span></div></div><div className="gps-points"><strong>3,271</strong><span>puntos persistidos</span></div></div>
      <div className="gps-legend"><span className="start">INICIO</span><span className="event">ASD</span><span className="delay">DEMORA</span><span className="combo">ASD + DEMORA</span></div>
      <svg className="gps-route" viewBox="0 0 760 440" aria-hidden="true"><path className="gps-road faint" d="M42 340 C120 288 182 310 230 260 C282 205 350 238 402 190 C454 142 523 172 574 112 C615 64 684 106 720 48" /><path className="gps-road draw" d="M42 340 C120 288 182 310 230 260 C282 205 350 238 402 190 C454 142 523 172 574 112 C615 64 684 106 720 48" /></svg>
      <span className="gps-marker marker-start">INICIO</span><span className="gps-marker marker-a">ASD</span><span className="gps-marker marker-b delay">D</span><span className="gps-marker marker-c combo">A+D</span><span className="gps-marker marker-end">FIN</span>
      <div className="gps-summary"><div><span>TRACK</span><strong>continuo</strong></div><div><span>EVENTOS</span><strong>georreferenciados</strong></div><div><span>CALIDAD</span><strong>evaluada</strong></div><div><span>CONTEXTO</span><strong>preservado</strong></div></div>
    </div>
  );
}

function CaptureRow({ title, total, men, women, down = false }) {
  return <div className={`capture-row ${down ? 'is-down' : ''}`}><div className="capture-row-title"><strong>{title}</strong><span>{total}</span></div><div className="capture-genders"><div><small>HOMBRES</small><b>{men}</b><span><i>−</i><i>+</i></span></div><div><small>MUJERES</small><b>{women}</b><span><i>−</i><i>+</i></span></div></div></div>;
}

function FieldCaptureVisual() {
  const delays = ['S', 'C', 'TM', 'CND', 'VI', 'VD', 'PP', 'O'];
  return (
    <div className="field-device-wrap reveal" aria-label="Representación estilizada de AFORA Field">
      <div className="field-device"><div className="field-notch" /><div className="field-screen"><div className="field-header"><span>ATRÁS</span><strong>RUTA 2 · BUENA VISTA</strong><span>MAPA</span></div><div className="capture-shell"><div className="capture-active"><i /><div><strong>CAPTURA ACTIVA</strong><small>00:06</small></div><span>×</span></div><div className="capture-stats"><div><b>4</b><span>SUBEN</span></div><div className="down"><b>2</b><span>BAJAN</span></div><div><b>12</b><span>A BORDO</span></div></div><div className="gender-total"><span>HOMBRES <b>8</b></span><span>MUJERES <b>4</b></span></div><CaptureRow title="↑ SUBEN" total="TOTAL: 4" men="2" women="2" /><CaptureRow title="↓ BAJAN" total="TOTAL: 2" men="1" women="1" down /><div className="delay-title">DEMORAS</div><div className="delay-grid">{delays.map((d, index) => <span key={d} className={index < 4 ? 'active' : ''}>{d}</span>)}</div><div className="notes-row"><span>NOTAS</span><i /></div></div></div></div>
      <div className="field-orbit orbit-a" /><div className="field-orbit orbit-b" />
    </div>
  );
}

function FieldStatusVisual() {
  return (
    <div className="field-status-console reveal">
      <div className="field-status-head"><span>AFORA FIELD</span><strong>RUTA 2 · BUENA VISTA</strong><i>EN TIEMPO REAL</i></div>
      <div className="field-status-grid"><div className="field-status-card primary"><span>LEVANTAMIENTO</span><strong>53:37</strong><small>Operación en curso</small></div><div className="field-status-card"><span>RASTREO</span><strong className="ok">EXCELENTE</strong><small>última señal · puntos persistidos</small></div><div className="field-status-card"><span>RESPALDO</span><strong className="ok">GUARDADO</strong><small>cola sincronizada</small></div><div className="field-status-card summary"><span>RESUMEN OPERATIVO</span><div><b>4<small>EVENTOS</small></b><b className="up">14<small>SUBEN</small></b><b className="down">2<small>BAJAN</small></b><b>12<small>A BORDO</small></b></div></div></div>
      <div className="event-history"><span>HISTORIAL DE EVENTOS</span><div><b>WP 257 → WP 258</b><strong>SUBEN: 4 · BAJAN: 2</strong><small>AD · evento registrado</small></div><div><b>WP 255 → WP 256</b><strong>SUBEN: 6 · BAJAN: 0</strong><small>AD · evento registrado</small></div></div>
    </div>
  );
}

function OfflineSyncVisual() {
  return (
    <div className="sync-visual reveal">
      <div className="sync-device"><Smartphone size={32} /><b>FIELD</b><span>Room · operación local</span><div className="local-records">{[1,2,3,4,5].map(n => <i key={n} />)}</div></div>
      <div className="sync-path"><div className="offline-break"><WifiOff size={17} /><span>sin señal</span></div><div className="sync-track"><i /><i /><i /><i /></div><span className="sync-caption">espera · reintenta · reconcilia</span></div>
      <div className="sync-cloud"><Cloud size={34} /><b>PLATFORM</b><span>sync + integridad</span></div>
    </div>
  );
}

function OperationsLiveVisual() {
  return (
    <div className="live-console product-reveal reveal">
      <div className="live-topbar"><strong>Centro de Operaciones AFORA</strong><span>OPERACIÓN EN VIVO</span></div>
      <div className="live-tabs"><b>Dashboard</b><b>Levantamientos</b><b>Integridad</b><b>Inteligencia</b><b className="active">Equipos en Vivo</b><b>Estado de Flota</b></div>
      <div className="live-title"><div><span>SUPERVISIÓN</span><strong>Equipos en Tiempo Real</strong><small>Ubicación, estado y señal operacional.</small></div><div className="live-count"><strong>LIVE</strong><span>field visibility</span></div></div>
      <div className="live-map"><div className="gps-grid" /><svg viewBox="0 0 900 300" aria-hidden="true"><path d="M35 205 C160 154 258 182 356 129 C442 83 560 126 650 78 C728 36 800 68 862 36" /></svg><div className="live-device-dot"><i /><span>Equipo 08</span></div><div className="live-device-card"><div><strong>Equipo 08</strong><span>Transmitiendo</span></div><div className="device-metrics"><b>GPS OK</b><b>Energía</b><b>Último reporte</b><b>Actividad</b></div><small>Sincronización · OPERANDO</small></div></div>
      <div className="live-kpis"><div><strong>●</strong><span>En campo</span></div><div><strong>●</strong><span>Transmitiendo</span></div><div><strong>—</strong><span>Retraso</span></div><div><strong>—</strong><span>Atención</span></div></div>
      <div className="live-table"><div className="live-table-head"><span>ESTADO</span><span>EQUIPO</span><span>UBICACIÓN</span><span>GPS</span><span>ENERGÍA</span><span>SYNC</span></div><div className="live-table-row"><span><i />Transmitiendo</span><span>Equipo 08</span><span>posición disponible</span><span>OK</span><span>online</span><strong>OPERANDO</strong></div></div>
    </div>
  );
}

function TraceabilityVisual() {
  return (
    <div className="trace-console reveal">
      <div className="trace-head"><span>LEVANTAMIENTO COMPLETADO</span><strong>Una operación conserva su historia.</strong></div>
      <div className="trace-fields"><div><span>Ruta</span><b>RUTA 2</b></div><div><span>Folio</span><b>003</b></div><div><span>Sentido</span><b>IDA</b></div><div><span>Operador</span><b>ASIGNADO</b></div><div><span>Unidad</span><b>IDENTIFICADA</b></div><div><span>Tiempo</span><b>INICIO → FIN</b></div></div>
      <div className="trace-map"><div className="gps-grid" /><svg viewBox="0 0 900 320" aria-hidden="true"><path className="trace-path" d="M70 258 C112 240 110 198 157 202 C218 208 218 158 286 171 C346 183 370 118 430 139 C493 161 492 82 557 92 C609 101 623 139 681 145 C742 151 754 207 827 211" /></svg><span className="trace-start">Inicio</span><span className="trace-delay d1" /><span className="trace-delay d2" /><span className="trace-delay d3" /><span className="trace-end">Fin</span></div>
      <div className="trace-meta"><span>Track completo</span><span>Eventos con coordenada</span><span>ASD · Demoras · Banderas</span></div>
    </div>
  );
}

function IntelligenceVisual() {
  const attention = [['Trip 42','CRITICAL','GPS · Red · Sync'],['Trip 46','CRITICAL','GPS · Dispositivo'],['Trip 39','DEGRADED','Red']];
  return (
    <div className="quality-console reveal">
      <div className="quality-banner"><div><span>OPERATIONAL INTELLIGENCE</span><strong>De revisar todo a priorizar lo importante.</strong><small>Integridad, GPS, telemetría y sincronización se convierten en señales operativas.</small></div><i>QUALITY ENGINE</i></div>
      <div className="quality-kpis"><div><span>HEALTH</span><b>Estado</b></div><div><span>GPS</span><b>Cobertura</b></div><div><span>TELEMETRÍA</span><b>Disponibilidad</b></div><div><span>SYNC</span><b>Integridad</b></div></div>
      <div className="quality-body"><div className="attention-list"><div className="quality-title"><strong>Requieren atención</strong><span>supervisión por excepción</span></div>{attention.map(([trip,state,domain]) => <div className={`attention-row ${state === 'CRITICAL' ? 'critical' : ''}`} key={trip}><i /><b>{trip}</b><span>{state}</span><small>{domain}</small></div>)}</div><div className="quality-rank"><div className="quality-title"><strong>Lectura operacional</strong><span>qué dominio revisar</span></div><div><b>GPS</b><span>cobertura / precisión</span></div><div><b>Red</b><span>conectividad</span></div><div><b>Dispositivo</b><span>estado técnico</span></div><div><b>Sync</b><span>completitud</span></div></div></div>
      <div className="quality-foot"><span>GPS</span><span>RED</span><span>DISPOSITIVO</span><span>SYNC</span><strong>Priorizar · revisar · resolver</strong></div>
    </div>
  );
}

function ExportVisual() {
  const formats = ['XLSX','CSV','TRACK CSV','GPX','GARMIN GPX','KML','GPS AUDIT'];
  return (
    <div className="export-console reveal">
      <div className="export-main"><FileOutput size={28} /><span>OPERACIÓN COMPLETADA</span><strong>La información no queda encerrada en AFORA.</strong><p>Los resultados pueden continuar hacia procesos de entrega, GIS, revisión y análisis.</p></div>
      <div className="format-rail">{formats.map((format,index)=><span key={format} style={{'--i':index}}>{format}<i /></span>)}</div>
      <div className="export-targets"><div><Database size={17}/><span>Datos</span></div><div><Route size={17}/><span>Geoespacial</span></div><div><ShieldCheck size={17}/><span>Auditoría</span></div></div>
    </div>
  );
}

function ModuleSystem() {
  const modules = [
    ['ASD','Ascensos y descensos','Recorridos, ocupación, demoras, eventos y GPS.','OPERATIVO'],
    ['CC','Cierre de circuito','Sesiones, eventos, tiempos y ubicación asociados a la operación.','OPERATIVO'],
    ['FOV','Frecuencia observable','Observaciones, POI, rutas, GPS y resumen de sesión.','OPERATIVO'],
  ];
  return (
    <div className="module-system reveal">
      {modules.map(([code,title,copy,state],index)=><article key={code}><span>0{index+1}</span><b>{code}</b><h3>{title}</h3><p>{copy}</p><small><i /> {state}</small></article>)}
    </div>
  );
}

function ProductHorizon() {
  return (
    <section className="horizon section">
      <div className="container horizon-grid">
        <div className="horizon-copy reveal"><span className="eyebrow">Qué es y hacia dónde va</span><h2>Un núcleo común.<br/><em>Más operaciones encima.</em></h2><p>AFORA está construyéndose como plataforma: el mismo núcleo de identidad, GPS, almacenamiento local, sincronización, integridad y supervisión puede sostener distintos flujos de campo.</p></div>
        <div className="horizon-lines reveal"><div><small>DISPONIBLE HOY</small><strong>Field App · Offline · GPS · Sync · Operations Center · Integridad · Exportación</strong></div><div><small>EN EVOLUCIÓN</small><strong>Planeación · asignaciones · alertas · Quality Center consolidado</strong></div><div><small>DIRECCIÓN</small><strong>Operaciones configurables para distintos contextos de campo</strong></div></div>
      </div>
    </section>
  );
}

function Scene({ eyebrow, title, copy, visual, reverse = false, id }) {
  return <section id={id} className={`scene section ${reverse ? 'reverse' : ''}`}><div className="container scene-grid"><div className="scene-copy reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{copy}</p></div><div className="scene-visual">{visual}</div></div></section>;
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-glow" /><RouteCanvas />
          <div className="container hero-content"><span className="eyebrow hero-eyebrow"><i /> Field operations, connected.</span><h1>El campo está<br/><em>en movimiento.</em></h1><p>AFORA convierte actividad de campo en una operación estructurada: captura, ubicación, continuidad offline, sincronización y supervisión dentro del mismo flujo.</p><div className="hero-actions"><a className="button" href="#demo">Solicitar demo <ArrowRight size={17}/></a><a className="text-link" href="#platform">Ver cómo funciona <ArrowDown size={16}/></a></div><HeroProof/></div>
          <div className="hero-caption"><span>FIELD</span><i/><span>OPERATIONS</span><i/><span>INFORMATION</span></div>
        </section>

        <section className="statement section"><div className="container narrow reveal"><span className="eyebrow">El problema no es capturar</span><h2>Es tener que reconstruir la operación después.</h2><p>Cuando formularios, GPS, archivos y comunicación viven separados, el contexto se pierde entre herramientas. AFORA conecta la información desde el momento en que se genera.</p></div><FragmentationVisual/></section>

        <Transformation/>

        <section id="platform" className="flow-section section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">Un solo flujo operativo</span><h2>Del dispositivo al centro de operaciones.</h2><p>La plataforma acompaña el ciclo completo sin obligar a que el campo dependa permanentemente de la nube.</p></div><FlowRail/></div></section>

        <Scene eyebrow="01 · Antes de salir" title={<>La calidad empieza <em>antes de capturar.</em></>} copy="AFORA puede comprobar condiciones del dispositivo antes de iniciar: ubicación precisa, servicios GPS, batería, almacenamiento, conectividad y ejecución en segundo plano." visual={<ReadinessVisual/>}/>

        <Scene id="field" eyebrow="02 · Movimiento" title={<>Cada recorrido deja una <em>huella operativa.</em></>} copy="El track continuo no vive separado de la operación. Precisión, eventos, demoras y tiempo pueden relacionarse con el recorrido que los produjo." visual={<FieldGpsVisual/>} reverse/>

        <Scene eyebrow="03 · Captura" title={<>Registrar sin perder <em>el contexto.</em></>} copy="En movilidad, AFORA ya captura ascensos, descensos, ocupación y demoras dentro de una operación activa. El mismo principio sostiene otros módulos de levantamiento." visual={<FieldCaptureVisual/>}/>

        <Scene eyebrow="04 · Estado operativo" title={<>El operador también necesita <em>certeza.</em></>} copy="Durante el levantamiento puede consultar tiempo, rastreo, persistencia local, respaldo y eventos sin abandonar el flujo de trabajo." visual={<FieldStatusVisual/>} reverse/>

        <section className="offline section"><div className="container offline-grid"><div className="offline-copy reveal"><span className="eyebrow">05 · Offline first</span><h2>La señal puede irse.<br/><em>La operación no.</em></h2><p>AFORA conserva primero la operación localmente. La sincronización puede esperar, reintentar y reconciliar cuando regresa la conectividad.</p><div className="offline-fact"><WifiOff size={20}/><span>La nube sincroniza. El campo sigue siendo operativo.</span></div></div><OfflineSyncVisual/></div></section>

        <section id="operations" className="operations section"><div className="container"><div className="operations-intro reveal"><span className="eyebrow">06 · Supervisión</span><h2>Lo que ocurre afuera<br/><em>deja de ser una caja negra.</em></h2><p>El Centro de Operaciones reúne equipos en vivo, ubicación, estado GPS, energía, último reporte y sincronización para dar visibilidad al trabajo distribuido.</p></div><div className="operations-stage"><OperationsLiveVisual/></div></div></section>

        <section className="traceability section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">07 · Trazabilidad</span><h2>El levantamiento termina.<br/><em>La historia permanece.</em></h2><p>Ruta, operador, unidad, tiempos, track y eventos pueden revisarse como una sola operación y no como archivos independientes.</p></div><div className="trace-stage"><TraceabilityVisual/></div></div></section>

        <section id="integrity" className="intelligence section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">08 · Integridad e inteligencia</span><h2>No necesitas mirar todo.<br/><em>Necesitas saber dónde mirar.</em></h2><p>La plataforma usa señales de GPS, red, dispositivo y sincronización para identificar qué operaciones requieren revisión y por qué.</p></div><div className="intelligence-stage"><IntelligenceVisual/></div></div></section>

        <section className="exports section"><div className="container export-grid"><div className="export-copy reveal"><span className="eyebrow">09 · Información utilizable</span><h2>AFORA organiza el campo.<br/><em>No encierra sus datos.</em></h2><p>Las exportaciones existentes permiten llevar resultados a flujos tabulares, geoespaciales y de auditoría sin reconstruir manualmente la operación.</p></div><ExportVisual/></div></section>

        <section className="modules section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">10 · Núcleo modular</span><h2>No es una sola pantalla.<br/><em>Es una forma de operar.</em></h2><p>ASD, Cierre de Circuito y Frecuencia Observable ya utilizan un núcleo compartido para resolver levantamientos distintos.</p></div><ModuleSystem/></div></section>

        <ProductHorizon/>

        <section id="use-cases" className="ecosystem section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">Probado en movilidad</span><h2>Diseñado para operaciones<br/><em>donde el contexto importa.</em></h2><p>El modelo puede extenderse a levantamientos, inspecciones, inventarios, auditorías y otras actividades georreferenciadas mediante módulos específicos.</p></div><div className="ecosystem-stage reveal"><div className="eco-grid"/><div className="eco-ring ring-one"/><div className="eco-ring ring-two"/><div className="eco-core"><BrandMark/><small>FIELD OPERATIONS CORE</small></div><span className="eco-node n1">Movilidad</span><span className="eco-node n2">Levantamientos</span><span className="eco-node n3">Inspecciones</span><span className="eco-node n4">Inventarios</span><span className="eco-node n5">Auditorías</span></div></div></section>

        <section id="demo" className="cta section"><RouteCanvas subtle/><div className="container cta-content reveal"><span className="eyebrow">AFORA</span><h2>Conecta el campo<br/>con la operación.</h2><p>Conoce cómo AFORA puede estructurar captura, georreferenciación, continuidad offline, supervisión e integridad dentro de un mismo ecosistema.</p><a className="button" href="mailto:contacto@afora.mx">Solicitar una demo <ArrowRight size={17}/></a></div></section>
      </main>
      <footer><div className="container footer-grid"><div><BrandMark/><p>Field operations, connected.</p></div><div><strong>Plataforma</strong><a href="#platform">Cómo funciona</a><a href="#field">AFORA Field</a><a href="#operations">Operations Center</a></div><div><strong>Producto</strong><a href="#integrity">Integridad</a><a href="#use-cases">Casos de uso</a><a href="#demo">Solicitar demo</a></div><div className="footer-status"><span><i/> Producto en desarrollo activo</span><small>© 2026 AFORA</small></div></div></footer>
    </div>
  );
}

export default App;

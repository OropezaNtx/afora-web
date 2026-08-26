import {
  Activity,
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

const flow = [
  ['Preparar', 'equipo + GPS'],
  ['Capturar', 'dato + contexto'],
  ['Ubicar', 'track + evento'],
  ['Sincronizar', 'cola + recovery'],
  ['Supervisar', 'equipo + operación'],
  ['Validar', 'integridad + salida'],
];

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
      <svg viewBox="0 0 1100 620" role="presentation">
        <path className="route-shadow" d="M38 505 C170 474 177 356 322 382 C452 405 438 252 584 270 C718 286 736 142 857 160 C951 174 995 91 1072 74" />
        <path className="route-line" d="M38 505 C170 474 177 356 322 382 C452 405 438 252 584 270 C718 286 736 142 857 160 C951 174 995 91 1072 74" />
        <path className="route-branch" d="M322 382 C325 302 278 248 210 218" />
        <path className="route-branch branch-two" d="M584 270 C640 336 708 366 786 388" />
      </svg>
      <span className="route-node node-a" /><span className="route-node node-b" /><span className="route-node node-c" /><span className="route-node node-d" />
      <span className="route-junction junction-a" /><span className="route-junction junction-b" />
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
  const sources = [
    ['FORMULARIOS', 'captura', 'frag-1'],
    ['GPS', 'recorrido', 'frag-2'],
    ['ARCHIVOS', 'entregables', 'frag-3'],
    ['MENSAJERÍA', 'incidencias', 'frag-4'],
    ['REPORTES', 'seguimiento', 'frag-5'],
    ['DATOS', 'bases', 'frag-6'],
  ];
  return (
    <div className="fragmentation reveal">
      <div className="fragment-grid" />
      <svg className="fragment-lines" viewBox="0 0 1000 440" preserveAspectRatio="none" aria-hidden="true">
        <path d="M118 112 C292 148 350 205 500 220" />
        <path d="M870 82 C720 128 650 180 500 220" />
        <path d="M155 350 C302 320 366 264 500 220" />
        <path d="M858 335 C718 303 655 255 500 220" />
        <path d="M448 52 C470 116 486 165 500 220" />
        <path d="M595 395 C560 328 530 276 500 220" />
      </svg>
      {sources.map(([label, detail, cls]) => (
        <div className={`fragment-source ${cls}`} key={label}><span>{label}</span><small>{detail}</small><i /></div>
      ))}
      <div className="fragment-core"><span>AFORA</span><small>OPERACIÓN CONECTADA</small><b>contexto preservado</b></div>
      <span className="data-pulse pulse-a" /><span className="data-pulse pulse-b" /><span className="data-pulse pulse-c" />
      <div className="fragment-caption"><Route size={14}/><span>Fuentes distintas → una sola historia operacional</span></div>
    </div>
  );
}

function ProcessComparison() {
  const legacy = ['Levantamiento', 'Captura', 'Unión', 'Depuración', 'Limpieza', 'Archivos'];
  const afora = ['Levantamiento estructurado', 'Sincronización', 'Validación + salida'];
  return (
    <section className="transformation section">
      <div className="container transformation-grid">
        <div className="transformation-copy reveal">
          <span className="eyebrow">Qué cambia AFORA</span>
          <h2>Menos reconstrucción.<br/><em>Más operación lista.</em></h2>
          <p>En el flujo tradicional, el trabajo de campo termina y comienza otra cadena: unir bases, depurar, limpiar y preparar archivos. AFORA busca que esa estructura nazca desde la captura.</p>
          <div className="time-proof">
            <div><strong>4</strong><span>etapas posteriores en el flujo tradicional</span></div>
            <ArrowRight size={18}/>
            <div className="afora-time"><strong>1</strong><span>flujo de validación y salida</span></div>
          </div>
          <small className="time-disclaimer">Comparación de etapas del proceso, no una promesa porcentual de tiempo.</small>
        </div>
        <div className="process-compare reveal">
          <div className="process-side legacy-process">
            <div className="process-head"><small>MÉTODO ACTUAL</small><strong>La operación se reconstruye después.</strong></div>
            <div className="process-track">
              {legacy.map((item,index)=><div className={index > 1 ? 'post-field' : ''} key={item}><i>{index+1}</i><span>{item}</span>{index < legacy.length-1 && <b>→</b>}</div>)}
            </div>
            <div className="process-result"><span>POSTCAMPO</span><strong>unión · depuración · limpieza · entrega</strong></div>
          </div>
          <div className="process-divider"><span>AFORA</span><i /></div>
          <div className="process-side afora-process">
            <div className="process-head"><small>OPERACIÓN ESTRUCTURADA</small><strong>El contexto nace en campo.</strong></div>
            <div className="process-track compact">
              {afora.map((item,index)=><div key={item}><i>{index+1}</i><span>{item}</span>{index < afora.length-1 && <b>→</b>}</div>)}
            </div>
            <div className="process-result good"><span>POSTCAMPO</span><strong>validar · exportar · analizar</strong></div>
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
      {flow.map(([item,detail], index) => (
        <div className="flow-step" key={item} style={{ '--delay': `${index * 120}ms` }}>
          <span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><small>{detail}</small><i />
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
      <div className="readiness-route"><span>Equipo</span><i/><span>GPS</span><i/><span>Almacenamiento</span><i/><span>Operación</span></div>
      <div className="readiness-list">
        {checks.map(([Icon, label, state]) => (
          <div key={label}><Icon size={18} /><span>{label}</span><strong className={state === 'OPTIONAL' ? 'optional' : ''}>{state}</strong></div>
        ))}
      </div>
      <div className="readiness-note"><WifiOff size={17} /><span>Sin Internet no bloquea la captura: la operación puede comenzar localmente y sincronizar después.</span></div>
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
      <span className="gps-marker marker-start">INICIO</span><span className="gps-marker marker-a">ASD</span><span className="gps-marker marker-b delay">C</span><span className="gps-marker marker-c combo">AD+S</span><span className="gps-marker marker-end">FIN</span>
      <div className="gps-side-data"><span>7.22 km</span><small>distancia limpia</small><span>±8 m</span><small>precisión prom.</small></div>
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
      <div className="field-context-node node-gps"><RadioTower size={14}/><span>GPS activo</span></div>
      <div className="field-context-node node-local"><Database size={14}/><span>persistencia local</span></div>
      <div className="field-context-node node-event"><Activity size={14}/><span>evento + contexto</span></div>
    </div>
  );
}

function FieldStatusVisual() {
  return (
    <div className="field-status-console reveal">
      <div className="field-status-head"><span>AFORA FIELD</span><strong>RUTA 2 · BUENA VISTA</strong><i>EN TIEMPO REAL</i></div>
      <div className="status-signal-line"><i/><span>GPS</span><i/><span>Room</span><i/><span>Sync</span><i/><span>Cloud</span></div>
      <div className="field-status-grid"><div className="field-status-card primary"><span>LEVANTAMIENTO</span><strong>53:37</strong><small>Operación en curso</small></div><div className="field-status-card"><span>RASTREO</span><strong className="ok">EXCELENTE</strong><small>±6 m · última señal 1 s</small></div><div className="field-status-card"><span>PERSISTENCIA LOCAL</span><strong>1,601</strong><small>muestras guardadas</small></div><div className="field-status-card"><span>RESPALDO</span><strong className="ok">GUARDADO</strong><small>0 pendientes · cola sincronizada</small></div><div className="field-status-card summary"><span>RESUMEN OPERATIVO</span><div><b>4<small>EVENTOS</small></b><b className="up">14<small>SUBEN</small></b><b className="down">2<small>BAJAN</small></b><b>12<small>A BORDO</small></b></div></div></div>
      <div className="event-history"><span>HISTORIAL DE EVENTOS</span><div><b>WP 257 → WP 258</b><strong>SUBEN: 4 · BAJAN: 2</strong><small>AD · 23:27:04</small></div><div><b>WP 255 → WP 256</b><strong>SUBEN: 6 · BAJAN: 0</strong><small>C · 23:26:55</small></div></div>
    </div>
  );
}

function OfflineSyncVisual() {
  return (
    <div className="sync-visual reveal">
      <div className="sync-device"><Smartphone size={32} /><b>FIELD</b><span>Room · operación local</span><div className="local-records">{[1,2,3,4,5].map(n => <i key={n} />)}</div><small>5 registros esperando</small></div>
      <div className="sync-path"><div className="offline-break"><WifiOff size={17} /><span>sin señal</span></div><div className="sync-track"><i /><i /><i /><i /></div><span className="sync-caption">espera · reintenta · reconcilia</span><div className="sync-events"><span>queued</span><span>retry</span><span>confirmed</span></div></div>
      <div className="sync-cloud"><Cloud size={34} /><b>PLATFORM</b><span>sync + integridad</span><div className="cloud-check"><CheckCircle2 size={14}/><small>consistencia verificada</small></div></div>
    </div>
  );
}

function StreetMap() {
  return (
    <svg className="street-map" viewBox="0 0 1000 390" aria-hidden="true">
      <g className="minor-roads">
        <path d="M0 70 H1000"/><path d="M0 145 H1000"/><path d="M0 220 H1000"/><path d="M0 305 H1000"/>
        <path d="M110 0 V390"/><path d="M265 0 V390"/><path d="M430 0 V390"/><path d="M610 0 V390"/><path d="M790 0 V390"/><path d="M910 0 V390"/>
      </g>
      <g className="major-roads"><path d="M-40 330 C120 280 220 304 345 236 C480 163 590 220 720 136 C820 72 905 90 1040 38"/><path d="M45 -20 C150 110 218 170 330 195 C480 230 580 296 712 418"/></g>
      <g className="route-live"><path d="M70 314 C165 286 228 296 342 238 C470 173 590 214 705 142 C805 80 879 94 955 64"/></g>
      <g className="map-labels"><text x="120" y="125">Av. Central</text><text x="630" y="285">C. Reforma</text><text x="420" y="105">Zona Operativa</text></g>
    </svg>
  );
}

function OperationsLiveVisual() {
  return (
    <div className="live-console product-reveal reveal">
      <div className="live-topbar"><div><strong>Centro de Operaciones AFORA</strong><small>Visibilidad del trabajo distribuido</small></div><span><i/> OPERACIÓN EN VIVO</span></div>
      <div className="live-tabs"><b>Dashboard</b><b>Levantamientos</b><b>Integridad</b><b>Inteligencia</b><b className="active">Equipos en Vivo</b><b>Estado de Flota</b></div>
      <div className="live-title"><div><span>SUPERVISIÓN</span><strong>Equipos en Tiempo Real</strong><small>Ubicación, estado, GPS y señal operacional.</small></div><div className="live-count"><strong>01</strong><span>equipo transmitiendo</span></div></div>
      <div className="live-map real-map"><StreetMap/><div className="live-map-scale">250 m</div><div className="live-map-status"><RadioTower size={13}/><span>actualización reciente</span></div><div className="live-device-dot"><i /><span>Equipo 08</span></div><div className="live-device-card"><div><strong>Equipo 08</strong><span>Transmitiendo</span></div><div className="device-route">RUTA 2 · BUENA VISTA</div><div className="device-metrics"><b>GPS <span>±6 m</span></b><b>Batería <span>86%</span></b><b>Reporte <span>hace 1 min</span></b><b>Velocidad <span>0 km/h</span></b></div><small>19.4117, -98.9626 · SYNC OPERANDO</small></div></div>
      <div className="live-kpis"><div><strong>1</strong><span>En campo</span><small>activo ahora</small></div><div><strong>1</strong><span>Transmitiendo</span><small>heartbeat reciente</small></div><div><strong>0</strong><span>Con retraso</span><small>sin incidencias</small></div><div><strong>0</strong><span>Atención</span><small>operación estable</small></div></div>
      <div className="live-table"><div className="live-table-head"><span>ESTADO</span><span>EQUIPO</span><span>LEVANTAMIENTO</span><span>UBICACIÓN</span><span>GPS</span><span>ENERGÍA</span><span>SYNC</span></div><div className="live-table-row"><span><i />Transmitiendo</span><span>Equipo 08</span><span>RUTA 2</span><span>19.4117, -98.9626</span><span>±6 m</span><span>86%</span><strong>OPERANDO</strong></div></div>
    </div>
  );
}

function TraceabilityVisual() {
  return (
    <div className="trace-console reveal">
      <div className="trace-head"><div><span>LEVANTAMIENTO COMPLETADO</span><strong>Una operación conserva su historia.</strong></div><div className="trace-health"><i/><span>TRAZABILIDAD COMPLETA</span></div></div>
      <div className="trace-fields"><div><span>Ruta</span><b>RUTA 2</b></div><div><span>Folio</span><b>003</b></div><div><span>Sentido</span><b>IDA</b></div><div><span>Operador</span><b>ASIGNADO</b></div><div><span>Unidad</span><b>IDENTIFICADA</b></div><div><span>Tiempo</span><b>01:53 → 03:43</b></div></div>
      <div className="trace-map detailed-map"><div className="gps-grid" /><svg viewBox="0 0 900 320" aria-hidden="true"><path className="trace-path" d="M70 258 C112 240 110 198 157 202 C218 208 218 158 286 171 C346 183 370 118 430 139 C493 161 492 82 557 92 C609 101 623 139 681 145 C742 151 754 207 827 211" /></svg><span className="trace-start">Inicio</span><span className="trace-delay d1">C</span><span className="trace-delay d2">AD</span><span className="trace-delay d3">S</span><span className="trace-end">Fin</span><div className="trace-map-card"><small>RESUMEN</small><strong>7.22 km</strong><span>3,270 puntos GPS</span><span>8 eventos vinculados</span><span>±8 m precisión prom.</span></div></div>
      <div className="trace-meta"><span><Route size={13}/> Track completo</span><span><MapPin size={13}/> Eventos con coordenada</span><span><Database size={13}/> Historial operativo</span><span><ShieldCheck size={13}/> Listo para auditoría</span></div>
    </div>
  );
}

function IntelligenceVisual() {
  const attention = [['Trip 42','CRITICAL','GPS · Red · Sync'],['Trip 46','CRITICAL','GPS · Dispositivo'],['Trip 39','DEGRADED','Red']];
  return (
    <div className="quality-console reveal">
      <div className="quality-banner"><div><span>OPERATIONAL INTELLIGENCE</span><strong>De revisar todo a priorizar lo importante.</strong><small>Integridad, GPS, telemetría y sincronización se convierten en señales operativas.</small></div><i>QUALITY ENGINE</i></div>
      <div className="quality-kpis"><div><span>HEALTH</span><b>78/100</b><small>estado agregado</small></div><div><span>GPS</span><b>92.7%</b><small>cobertura útil</small></div><div><span>TELEMETRÍA</span><b>73.9%</b><small>disponibilidad</small></div><div><span>SYNC</span><b>9/12</b><small>completos</small></div></div>
      <div className="quality-network"><span>GPS</span><i/><span>RED</span><i/><span>DISPOSITIVO</span><i/><span>SYNC</span><b>→</b><strong>PRIORIDAD</strong></div>
      <div className="quality-body"><div className="attention-list"><div className="quality-title"><strong>Requieren atención</strong><span>supervisión por excepción</span></div>{attention.map(([trip,state,domain]) => <div className={`attention-row ${state === 'CRITICAL' ? 'critical' : ''}`} key={trip}><i /><b>{trip}</b><span>{state}</span><small>{domain}</small></div>)}</div><div className="quality-rank"><div className="quality-title"><strong>Lectura operacional</strong><span>qué dominio revisar</span></div><div><b>GPS</b><span>cobertura / precisión</span></div><div><b>Red</b><span>conectividad</span></div><div><b>Dispositivo</b><span>estado técnico</span></div><div><b>Sync</b><span>completitud</span></div></div></div>
      <div className="quality-foot"><span>GPS</span><span>RED</span><span>DISPOSITIVO</span><span>SYNC</span><strong>Priorizar · revisar · resolver</strong></div>
    </div>
  );
}

function ExportVisual() {
  const formats = [
    ['XLSX','tabular'],['CSV','datos'],['TRACK CSV','track'],['GPX','ruta'],['GARMIN GPX','garmin'],['KML','GIS'],['GPS AUDIT','auditoría']
  ];
  return (
    <div className="export-console reveal">
      <div className="export-main"><div className="export-icon"><FileOutput size={28} /></div><span>OPERACIÓN COMPLETADA</span><strong>La información continúa su recorrido.</strong><p>AFORA prepara salidas para entrega, GIS, revisión, auditoría y análisis sin obligar a reconstruir manualmente la operación.</p></div>
      <div className="export-flow"><div><Database size={16}/><span>Operación</span></div><i>→</i><div><ShieldCheck size={16}/><span>Validación</span></div><i>→</i><div><FileOutput size={16}/><span>Salida</span></div></div>
      <div className="format-rail">{formats.map(([format,type],index)=><span key={format} style={{'--i':index}}><b>{format}</b><small>{type}</small><i /></span>)}</div>
      <div className="export-targets"><div><Database size={17}/><span>Datos tabulares</span></div><div><Route size={17}/><span>Flujos geoespaciales</span></div><div><ShieldCheck size={17}/><span>Auditoría GPS</span></div></div>
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
      {modules.map(([code,title,copy,state],index)=><article key={code}><span>0{index+1}</span><b>{code}</b><h3>{title}</h3><p>{copy}</p><div className="module-line"><i/><i/><i/></div><small><i /> {state}</small></article>)}
    </div>
  );
}

function ProductHorizon() {
  return (
    <section className="horizon section">
      <div className="container horizon-grid">
        <div className="horizon-copy reveal"><span className="eyebrow">Qué es y hacia dónde va</span><h2>Un núcleo común.<br/><em>Más operaciones encima.</em></h2><p>AFORA está construyéndose como plataforma: identidad, GPS, almacenamiento local, sincronización, integridad y supervisión forman una base reutilizable para distintos flujos de campo.</p></div>
        <div className="horizon-lines reveal"><div><small>DISPONIBLE HOY</small><strong>Field App · Offline · GPS · Sync · Operations Center · Integridad · Exportación</strong></div><div><small>EN EVOLUCIÓN</small><strong>Planeación · asignaciones · alertas · Quality Center consolidado</strong></div><div><small>DIRECCIÓN</small><strong>Operaciones configurables para distintos contextos de campo</strong></div></div>
      </div>
    </section>
  );
}

function OperationalNetwork() {
  const nodes = [
    ['Movilidad','track + eventos','n1'],['Levantamientos','captura estructurada','n2'],['Inspecciones','evidencia + ubicación','n3'],['Inventarios','registro + trazabilidad','n4'],['Auditorías','integridad + salida','n5']
  ];
  return (
    <div className="operational-network reveal">
      <div className="network-grid"/>
      <svg viewBox="0 0 1000 520" aria-hidden="true">
        <path d="M500 260 C370 210 280 150 158 126"/><path d="M500 260 C650 212 730 126 850 118"/><path d="M500 260 C365 305 260 362 156 390"/><path d="M500 260 C660 304 750 350 860 370"/><path d="M500 260 C510 350 505 410 500 462"/>
      </svg>
      <div className="network-core"><BrandMark/><small>FIELD OPERATIONS CORE</small><div><span>GPS</span><span>OFFLINE</span><span>SYNC</span><span>QA</span></div></div>
      {nodes.map(([title,detail,cls])=><div className={`network-node ${cls}`} key={title}><i/><strong>{title}</strong><span>{detail}</span></div>)}
      <div className="network-packet p1"/><div className="network-packet p2"/><div className="network-packet p3"/>
      <div className="network-caption"><span>Un mismo núcleo conecta captura, posición, contexto, supervisión y salida.</span></div>
    </div>
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

        <ProcessComparison/>

        <section id="platform" className="flow-section section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">Un solo flujo operativo</span><h2>Del dispositivo al centro de operaciones.</h2><p>La plataforma acompaña el ciclo completo sin obligar a que el campo dependa permanentemente de la nube.</p></div><FlowRail/></div></section>

        <Scene eyebrow="01 · Antes de salir" title={<>La calidad empieza <em>antes de capturar.</em></>} copy="AFORA comprueba condiciones del dispositivo antes de iniciar: ubicación precisa, servicios GPS, batería, almacenamiento, conectividad y ejecución en segundo plano." visual={<ReadinessVisual/>}/>

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

        <section id="use-cases" className="ecosystem section"><div className="container"><div className="section-heading reveal"><span className="eyebrow">Probado en movilidad</span><h2>Un núcleo que conecta<br/><em>operaciones distintas.</em></h2><p>La idea no es rodear AFORA de etiquetas: es mostrar que el mismo sistema de GPS, contexto, sincronización e integridad puede alimentar distintos flujos de campo.</p></div><OperationalNetwork/></div></section>

        <section id="demo" className="cta section"><RouteCanvas subtle/><div className="container cta-content reveal"><span className="eyebrow">AFORA</span><h2>Conecta el campo<br/>con la operación.</h2><p>Conoce cómo AFORA puede estructurar captura, georreferenciación, continuidad offline, supervisión e integridad dentro de un mismo ecosistema.</p><a className="button" href="mailto:contacto@afora.mx">Solicitar una demo <ArrowRight size={17}/></a></div></section>
      </main>
      <footer><div className="container footer-grid"><div><BrandMark/><p>Field operations, connected.</p></div><div><strong>Plataforma</strong><a href="#platform">Cómo funciona</a><a href="#field">AFORA Field</a><a href="#operations">Operations Center</a></div><div><strong>Producto</strong><a href="#integrity">Integridad</a><a href="#use-cases">Casos de uso</a><a href="#demo">Solicitar demo</a></div><div className="footer-status"><span><i/> Producto en desarrollo activo</span><small>© 2026 AFORA</small></div></div></footer>
    </div>
  );
}

export default App;
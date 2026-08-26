const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
};

const setHTML = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
};

function applyAforaCopy() {
  // Hero: explain the product in one pass.
  setText('.hero-eyebrow', '• OPERACIONES DE CAMPO, CONECTADAS.');
  setHTML('.hero h1', 'Del catálogo al campo.<br/><em>Del campo a decisiones.</em>');
  setText('.hero-content > p', 'AFORA organiza el levantamiento desde antes de salir: carga catálogos y asignaciones, guía la captura, registra GPS y eventos, trabaja sin señal, sincroniza y permite supervisar la operación desde un mismo sistema.');

  const proof = document.querySelectorAll('.hero-proof span');
  ['Catálogo + asignación', 'Captura + GPS + eventos', 'Trabajo offline', 'Supervisión + entrega'].forEach((text, i) => { if (proof[i]) proof[i].textContent = text; });

  // Problem / value proposition.
  setText('.statement .eyebrow', 'UNA OPERACIÓN, NO ARCHIVOS SUELTOS');
  setHTML('.statement h2', 'La información se conecta<br/>desde el origen.');
  setText('.statement .narrow > p', 'Cuando catálogo, captura, GPS, incidencias y archivos viven separados, el equipo termina reconstruyendo el levantamiento al final. AFORA conserva esa relación desde que la operación se prepara hasta que se entrega.');

  // Process comparison.
  setText('.transformation-copy .eyebrow', 'MENOS TRABAJO DESPUÉS DEL CAMPO');
  setHTML('.transformation-copy h2', 'Preparar bien.<br/><em>Capturar una vez.</em>');
  setText('.transformation-copy > p', 'El flujo comienza con el catálogo del levantamiento. Se carga a la plataforma, se asigna al equipo y llega al dispositivo con la estructura que necesita. Desde ahí, cada captura conserva ruta, tiempo, ubicación y contexto para reducir unión, depuración y limpieza posteriores.');

  // Main operational flow.
  setText('#platform .eyebrow', 'EL CICLO COMPLETO');
  setHTML('#platform h2', 'Preparar. Levantar. Supervisar.<br/><em>Entregar.</em>');
  setText('#platform .section-heading > p', 'AFORA conecta planeación y trabajo de campo en un mismo recorrido operativo: catálogo, asignación, dispositivo, captura, sincronización, control y salida.');

  // Scenes.
  const scenes = document.querySelectorAll('.scene');
  const sceneCopy = [
    ['01 · PREPARACIÓN', 'El levantamiento empieza <em>antes de salir.</em>', 'Catálogos, rutas, folios y parámetros se preparan primero. En el dispositivo, AFORA valida GPS, batería, almacenamiento y permisos para reducir fallas antes de iniciar.'],
    ['02 · GPS Y RECORRIDO', 'Cada punto explica <em>qué ocurrió y dónde.</em>', 'AFORA registra el recorrido de forma continua y relaciona eventos, demoras y tiempos con su posición. El resultado no es solo una línea en el mapa: es una operación georreferenciada.'],
    ['03 · CAPTURA EN CAMPO', 'Capturar rápido.<br/><em>Con estructura.</em>', 'La interfaz está diseñada para registrar información durante el movimiento sin separar el dato de su contexto. Cada evento queda asociado al levantamiento activo, su momento y su ubicación.'],
    ['04 · CONTROL EN CAMPO', 'El operador sabe <em>si todo va bien.</em>', 'Tiempo de levantamiento, calidad GPS, registros locales, respaldo y eventos permanecen visibles durante la operación. Los problemas se detectan mientras todavía pueden corregirse.'],
  ];
  scenes.forEach((scene, i) => {
    if (!sceneCopy[i]) return;
    const [eyebrow, title, copy] = sceneCopy[i];
    const e = scene.querySelector('.eyebrow'); const h = scene.querySelector('h2'); const p = scene.querySelector('.scene-copy > p');
    if (e) e.textContent = eyebrow; if (h) h.innerHTML = title; if (p) p.textContent = copy;
  });

  // Offline.
  setText('.offline .eyebrow', '05 · CONTINUIDAD OFFLINE');
  setHTML('.offline h2', 'Sin señal,<br/><em>el trabajo continúa.</em>');
  setText('.offline-copy > p', 'La captura se guarda primero en el dispositivo. Cuando vuelve la conectividad, AFORA reintenta, sincroniza y verifica lo pendiente sin obligar al equipo a detener el levantamiento.');
  setText('.offline-fact span', 'La conectividad ayuda a sincronizar; no decide si el campo puede trabajar.');

  // Operations.
  setText('.operations-intro .eyebrow', '06 · SUPERVISIÓN EN VIVO');
  setHTML('.operations-intro h2', 'El campo deja de ser<br/><em>un punto ciego.</em>');
  setText('.operations-intro > p', 'Desde el Centro de Operaciones puedes ver qué equipos están trabajando, dónde se encuentran, cuándo reportaron, cómo está su GPS, batería y sincronización, y qué levantamientos necesitan atención.');

  // Traceability.
  setText('.traceability .eyebrow', '07 · TRAZABILIDAD');
  setHTML('.traceability h2', 'Cada levantamiento conserva<br/><em>su historia completa.</em>');
  setText('.traceability .section-heading > p', 'Ruta, folio, operador, unidad, horarios, track y eventos permanecen vinculados. Puedes revisar qué ocurrió sin reconstruir la operación a partir de archivos separados.');

  // Integrity.
  setText('.intelligence .eyebrow', '08 · CONTROL DE CALIDAD');
  setHTML('.intelligence h2', 'Detecta qué revisar.<br/><em>Y por qué.</em>');
  setText('.intelligence .section-heading > p', 'AFORA cruza señales de GPS, conectividad, dispositivo y sincronización para señalar operaciones incompletas, degradadas o fuera de condición y concentrar la revisión donde hace falta.');

  // Exports.
  setText('.exports .eyebrow', '09 · SALIDAS Y ENTREGA');
  setHTML('.exports h2', 'Datos listos para<br/><em>seguir trabajando.</em>');
  setText('.export-copy > p', 'La operación puede salir a formatos tabulares, geoespaciales y de auditoría. La información conserva estructura y contexto para continuar en Excel, GIS, análisis o procesos de entrega.');

  // Modules.
  setText('.modules .eyebrow', '10 · MÓDULOS DE LEVANTAMIENTO');
  setHTML('.modules h2', 'Distintos estudios.<br/><em>Un mismo núcleo operativo.</em>');
  setText('.modules .section-heading > p', 'ASD, Cierre de Circuito y Frecuencia Observable comparten GPS, operación local, sincronización, trazabilidad y supervisión. Cambia el levantamiento; la base tecnológica permanece.');

  // Product direction.
  setText('.horizon .eyebrow', 'PLATAFORMA EN EVOLUCIÓN');
  setHTML('.horizon h2', 'Una base sólida.<br/><em>Más operaciones sobre ella.</em>');
  setText('.horizon-copy > p', 'AFORA está creciendo como una plataforma configurable para operaciones de campo. El objetivo es reutilizar un mismo núcleo de identidad, catálogos, GPS, almacenamiento local, sincronización, control y supervisión en nuevos tipos de levantamiento.');

  // Ecosystem.
  setText('.ecosystem .eyebrow', 'MÁS ALLÁ DE MOVILIDAD');
  setHTML('.ecosystem h2', 'La misma lógica para<br/><em>distintas operaciones de campo.</em>');
  setText('.ecosystem .section-heading > p', 'Movilidad es el punto de partida. El mismo núcleo puede adaptarse a levantamientos, inspecciones, inventarios y auditorías donde importan ubicación, evidencia, trazabilidad y control operativo.');

  // CTA.
  setText('.cta .eyebrow', 'AFORA · FIELD OPERATIONS PLATFORM');
  setHTML('.cta h2', 'Del catálogo a la entrega.<br/>Todo conectado.');
  setText('.cta-content > p', 'Conoce cómo AFORA puede estructurar tu operación de campo, reducir retrabajo y dar visibilidad al levantamiento mientras sucede.');
}

if (typeof window !== 'undefined') {
  requestAnimationFrame(() => requestAnimationFrame(applyAforaCopy));
}

export { applyAforaCopy };

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
};

const setHTML = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
};

function applyAforaCopy() {
  setText('.hero-eyebrow', '• OPERACIONES DE CAMPO, CONECTADAS.');
  setHTML('.hero h1', 'Trabajo de campo.<br/><em>Todo conectado.</em>');
  setText('.hero-content > p', 'AFORA reúne en una sola plataforma la captura en campo, el seguimiento GPS, el trabajo sin conexión, la sincronización y la supervisión de cada levantamiento.');

  const proof = document.querySelectorAll('.hero-proof span');
  ['Captura estructurada', 'GPS + eventos', 'Trabajo sin conexión', 'Supervisión y control'].forEach((text, i) => { if (proof[i]) proof[i].textContent = text; });

  setText('.statement .eyebrow', 'INFORMACIÓN CON CONTEXTO');
  setHTML('.statement h2', 'El trabajo de campo no debería<br/>terminar en archivos separados.');
  setText('.statement .narrow > p', 'Cuando la captura, el GPS, las incidencias y los archivos se manejan por separado, revisar un levantamiento requiere unir información de distintas fuentes. AFORA mantiene esos datos relacionados dentro de la misma operación.');

  setText('.transformation-copy .eyebrow', 'UN FLUJO MÁS SIMPLE');
  setHTML('.transformation-copy h2', 'Menos pasos después.<br/><em>Más información lista.</em>');
  setText('.transformation-copy > p', 'AFORA organiza la información desde el levantamiento para reducir tareas posteriores de unión, limpieza y preparación. Al terminar el campo, el equipo puede concentrarse en revisar, exportar y analizar.');

  setText('#platform .eyebrow', 'CÓMO FUNCIONA');
  setHTML('#platform h2', 'Del levantamiento<br/><em>a la supervisión.</em>');
  setText('#platform .section-heading > p', 'La operación se prepara, se ejecuta en el dispositivo, se guarda localmente, se sincroniza y queda disponible para seguimiento, revisión y entrega.');

  const flowLabels = [
    ['Preparar', 'levantamiento + equipo'],
    ['Capturar', 'datos + eventos'],
    ['Ubicar', 'GPS + recorrido'],
    ['Guardar', 'operación local'],
    ['Sincronizar', 'reintento + respaldo'],
    ['Supervisar', 'revisión + salida'],
  ];
  document.querySelectorAll('.flow-step').forEach((step, i) => {
    const strong = step.querySelector('strong');
    const small = step.querySelector('small');
    if (flowLabels[i] && strong) strong.textContent = flowLabels[i][0];
    if (flowLabels[i] && small) small.textContent = flowLabels[i][1];
  });

  const scenes = document.querySelectorAll('.scene');
  const sceneCopy = [
    ['01 · ANTES DE INICIAR', 'Comprueba que el equipo<br/><em>esté listo.</em>', 'Antes de comenzar, AFORA revisa GPS, batería, almacenamiento y los servicios necesarios para el levantamiento. La conexión a Internet no es obligatoria para trabajar.'],
    ['02 · GPS Y RECORRIDO', 'El recorrido queda<br/><em>registrado.</em>', 'AFORA registra el GPS durante el levantamiento y relaciona el recorrido con eventos, demoras y tiempos. Así es posible revisar qué ocurrió y dónde ocurrió.'],
    ['03 · CAPTURA EN CAMPO', 'Captura información<br/><em>mientras sucede.</em>', 'La aplicación está diseñada para registrar información durante la operación. Cada dato queda asociado al levantamiento activo, junto con su momento y ubicación.'],
    ['04 · ESTADO DEL LEVANTAMIENTO', 'La información importante,<br/><em>siempre visible.</em>', 'El operador puede consultar tiempo, estado del GPS, registros guardados, respaldo y eventos sin salir del flujo de captura.'],
  ];
  scenes.forEach((scene, i) => {
    if (!sceneCopy[i]) return;
    const [eyebrow, title, copy] = sceneCopy[i];
    const e = scene.querySelector('.eyebrow');
    const h = scene.querySelector('h2');
    const p = scene.querySelector('.scene-copy > p');
    if (e) e.textContent = eyebrow;
    if (h) h.innerHTML = title;
    if (p) p.textContent = copy;
  });

  setText('.offline .eyebrow', '05 · TRABAJO SIN CONEXIÓN');
  setHTML('.offline h2', 'Sin señal,<br/><em>puedes seguir trabajando.</em>');
  setText('.offline-copy > p', 'AFORA guarda la información en el dispositivo mientras no hay conexión. Cuando la red vuelve, la sincronización continúa y envía lo que quedó pendiente.');
  setText('.offline-fact span', 'La conexión puede interrumpirse. El levantamiento continúa.');

  setText('.operations-intro .eyebrow', '06 · SUPERVISIÓN');
  setHTML('.operations-intro h2', 'Sigue la operación<br/><em>desde un solo lugar.</em>');
  setText('.operations-intro > p', 'El Centro de Operaciones muestra los equipos activos, su ubicación, estado del GPS, batería, último reporte y sincronización para facilitar el seguimiento del trabajo en campo.');

  setText('.traceability .eyebrow', '07 · TRAZABILIDAD');
  setHTML('.traceability h2', 'Cada levantamiento conserva<br/><em>su información.</em>');
  setText('.traceability .section-heading > p', 'Ruta, folio, operador, unidad, horarios, recorrido y eventos permanecen relacionados para consultar el levantamiento completo sin reconstruirlo desde varios archivos.');

  setText('.intelligence .eyebrow', '08 · REVISIÓN Y CALIDAD');
  setHTML('.intelligence h2', 'Identifica qué levantamientos<br/><em>necesitan revisión.</em>');
  setText('.intelligence .section-heading > p', 'AFORA utiliza información del GPS, la conexión, el dispositivo y la sincronización para señalar operaciones que requieren atención y facilitar su revisión.');

  setText('.exports .eyebrow', '09 · EXPORTACIÓN');
  setHTML('.exports h2', 'La información queda lista<br/><em>para continuar.</em>');
  setText('.export-copy > p', 'Los resultados pueden exportarse a formatos tabulares y geoespaciales para continuar el trabajo en Excel, herramientas GIS, procesos de revisión o entregables.');

  setText('.modules .eyebrow', '10 · MÓDULOS');
  setHTML('.modules h2', 'Distintos levantamientos.<br/><em>La misma plataforma.</em>');
  setText('.modules .section-heading > p', 'ASD, Cierre de Circuito y Frecuencia Observable utilizan una base común de GPS, almacenamiento local, sincronización, trazabilidad y supervisión.');

  setText('.horizon .eyebrow', 'UNA PLATAFORMA EN CRECIMIENTO');
  setHTML('.horizon h2', 'Una base común para<br/><em>más operaciones de campo.</em>');
  setText('.horizon-copy > p', 'AFORA ya integra captura, GPS, almacenamiento local, sincronización, supervisión, revisión y exportación. Esa misma base permite incorporar nuevos tipos de levantamiento sin empezar desde cero.');

  setText('.ecosystem .eyebrow', 'OTRAS OPERACIONES DE CAMPO');
  setHTML('.ecosystem h2', 'La misma tecnología puede<br/><em>adaptarse a otros trabajos.</em>');
  setText('.ecosystem .section-heading > p', 'AFORA parte de la experiencia en movilidad, pero su estructura puede aplicarse a otros trabajos donde se necesita captura, ubicación, seguimiento y control de la información.');

  setText('.cta .eyebrow', 'AFORA');
  setHTML('.cta h2', 'Organiza y supervisa<br/>tu operación de campo.');
  setText('.cta-content > p', 'Conoce cómo AFORA puede reunir captura, GPS, trabajo sin conexión, sincronización y supervisión dentro de un mismo flujo.');
}

if (typeof window !== 'undefined') {
  requestAnimationFrame(() => requestAnimationFrame(applyAforaCopy));
}

export { applyAforaCopy };

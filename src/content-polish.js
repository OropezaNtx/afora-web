const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
};

const setHTML = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
};

function insertLifecycleSection() {
  if (document.querySelector('.lifecycle-section')) return;
  const firstScene = document.querySelector('.scene');
  if (!firstScene) return;

  const section = document.createElement('section');
  section.className = 'lifecycle-section section';
  section.innerHTML = `
    <div class="container lifecycle-grid">
      <div class="lifecycle-copy reveal visible">
        <span class="eyebrow">ANTES DEL LEVANTAMIENTO</span>
        <h2>La operación empieza<br/><em>en el catálogo.</em></h2>
        <p>AFORA parte de una estructura definida antes de salir: el levantamiento se prepara, se carga a la base operativa, se asigna y llega al dispositivo con el contexto que necesita el equipo de campo.</p>
        <div class="lifecycle-note"><span></span><b>La captura no empieza desde cero.</b><small>Empieza con una operación identificada y preparada.</small></div>
      </div>
      <div class="lifecycle-visual reveal visible" aria-label="Flujo de preparación de un levantamiento en AFORA">
        <div class="lifecycle-line"></div>
        <article class="life-step active"><i>01</i><strong>Catálogo</strong><span>ruta · sentido · parámetros</span><b>ORIGEN</b></article>
        <article class="life-step"><i>02</i><strong>Base operativa</strong><span>levantamiento disponible</span><b>CARGADO</b></article>
        <article class="life-step"><i>03</i><strong>Asignación</strong><span>equipo · operador · unidad</span><b>LISTO</b></article>
        <article class="life-step field"><i>04</i><strong>AFORA Field</strong><span>captura · GPS · eventos</span><b>CAMPO</b></article>
        <article class="life-step operations"><i>05</i><strong>Operations</strong><span>sync · supervisión · control</span><b>VISIBLE</b></article>
        <span class="life-packet p1"></span><span class="life-packet p2"></span><span class="life-packet p3"></span>
      </div>
    </div>`;
  firstScene.parentNode.insertBefore(section, firstScene);
}

function applyAforaCopy() {
  setText('.hero-eyebrow', '• OPERACIONES DE CAMPO, CONECTADAS.');
  setHTML('.hero h1', 'Del catálogo al campo.<br/><em>Del campo al control.</em>');
  setText('.hero-content > p', 'AFORA organiza el levantamiento desde su preparación: carga la operación, guía la captura, registra GPS y eventos, funciona sin señal, sincroniza y deja la información lista para supervisar, validar y entregar.');

  const proof = document.querySelectorAll('.hero-proof span');
  ['Catálogo + asignación', 'Captura + GPS', 'Trabajo offline', 'Supervisión + entrega'].forEach((text, i) => { if (proof[i]) proof[i].textContent = text; });

  setText('.statement .eyebrow', 'UNA OPERACIÓN, NO ARCHIVOS SUELTOS');
  setHTML('.statement h2', 'Capturar no debería crear<br/>más trabajo después.');
  setText('.statement .narrow > p', 'Cuando captura, GPS, archivos e incidencias viven por separado, el equipo termina uniendo, limpiando y reconstruyendo lo que pasó. AFORA mantiene ese contexto unido desde el origen.');

  setText('.transformation-copy .eyebrow', 'MENOS POSTPROCESO');
  setHTML('.transformation-copy h2', 'Preparar una vez.<br/><em>Conservar el contexto.</em>');
  setText('.transformation-copy > p', 'El flujo tradicional suele continuar después del campo con unión de bases, depuración, limpieza y preparación de archivos. AFORA busca integrar esa estructura desde el catálogo y la captura para que el cierre se concentre en validar, exportar y analizar.');

  setText('#platform .eyebrow', 'EL CICLO COMPLETO');
  setHTML('#platform h2', 'Una operación,<br/><em>de principio a fin.</em>');
  setText('#platform .section-heading > p', 'El levantamiento nace en el catálogo, llega al dispositivo, se ejecuta en campo y continúa hacia sincronización, supervisión, validación y entrega.');

  const flowLabels = [
    ['Catalogar', 'ruta + parámetros'],
    ['Cargar', 'base operativa'],
    ['Preparar', 'equipo + GPS'],
    ['Capturar', 'dato + contexto'],
    ['Sincronizar', 'offline + cloud'],
    ['Supervisar', 'control + salida'],
  ];
  document.querySelectorAll('.flow-step').forEach((step, i) => {
    const strong = step.querySelector('strong'); const small = step.querySelector('small');
    if (flowLabels[i] && strong) strong.textContent = flowLabels[i][0];
    if (flowLabels[i] && small) small.textContent = flowLabels[i][1];
  });

  insertLifecycleSection();

  const scenes = document.querySelectorAll('.scene');
  const sceneCopy = [
    ['01 · EQUIPO LISTO', 'Antes de capturar,<br/><em>comprueba el dispositivo.</em>', 'AFORA revisa ubicación, servicios GPS, batería, almacenamiento y ejecución en segundo plano antes de iniciar. La conectividad ayuda a sincronizar, pero no es requisito para trabajar.'],
    ['02 · GPS Y RECORRIDO', 'Cada recorrido queda<br/><em>trazado.</em>', 'El GPS se registra durante la operación y mantiene relación con eventos, demoras y tiempos. Así puedes revisar no solo por dónde pasó el equipo, sino qué ocurrió en cada momento.'],
    ['03 · CAPTURA EN CAMPO', 'Captura lo que ocurre.<br/><em>En el momento.</em>', 'La interfaz está pensada para registrar información mientras la operación está en movimiento. En movilidad, AFORA ya relaciona ascensos, descensos, ocupación, demoras y eventos con el levantamiento activo.'],
    ['04 · ESTADO OPERATIVO', 'El operador sabe<br/><em>si el levantamiento está sano.</em>', 'Tiempo, calidad GPS, muestras guardadas, respaldo y eventos permanecen visibles durante el trabajo. Eso permite detectar problemas mientras todavía pueden corregirse.'],
  ];
  scenes.forEach((scene, i) => {
    if (!sceneCopy[i]) return;
    const [eyebrow, title, copy] = sceneCopy[i];
    const e = scene.querySelector('.eyebrow'); const h = scene.querySelector('h2'); const p = scene.querySelector('.scene-copy > p');
    if (e) e.textContent = eyebrow; if (h) h.innerHTML = title; if (p) p.textContent = copy;
  });

  setText('.offline .eyebrow', '05 · CONTINUIDAD OFFLINE');
  setHTML('.offline h2', 'Sin señal,<br/><em>el trabajo continúa.</em>');
  setText('.offline-copy > p', 'AFORA guarda primero la operación en el dispositivo. Cuando vuelve la conectividad, reintenta y sincroniza lo pendiente sin obligar al equipo a detener el levantamiento.');
  setText('.offline-fact span', 'La red sincroniza la información; no decide si el campo puede trabajar.');

  setText('.operations-intro .eyebrow', '06 · SUPERVISIÓN EN VIVO');
  setHTML('.operations-intro h2', 'Supervisa lo que está<br/><em>pasando en campo.</em>');
  setText('.operations-intro > p', 'El Centro de Operaciones muestra equipos activos, ubicación, GPS, energía, último reporte y estado de sincronización para entender la operación mientras sucede.');

  setText('.traceability .eyebrow', '07 · TRAZABILIDAD');
  setHTML('.traceability h2', 'Termina el levantamiento.<br/><em>No pierdas la historia.</em>');
  setText('.traceability .section-heading > p', 'Ruta, folio, operador, unidad, horarios, track y eventos quedan vinculados en una misma operación para poder revisar qué ocurrió sin reconstruirlo desde archivos separados.');

  setText('.intelligence .eyebrow', '08 · INTEGRIDAD Y CALIDAD');
  setHTML('.intelligence h2', 'Revisa primero lo que<br/><em>necesita atención.</em>');
  setText('.intelligence .section-heading > p', 'AFORA utiliza señales de GPS, red, dispositivo y sincronización para identificar operaciones incompletas o degradadas y mostrar qué dominio conviene revisar.');

  setText('.exports .eyebrow', '09 · SALIDAS Y ENTREGA');
  setHTML('.exports h2', 'Información lista para<br/><em>seguir trabajando.</em>');
  setText('.export-copy > p', 'La operación puede continuar hacia Excel, datos tabulares, GIS, revisión o auditoría mediante salidas estructuradas y geoespaciales que conservan el contexto del levantamiento.');

  setText('.modules .eyebrow', '10 · MÓDULOS DE LEVANTAMIENTO');
  setHTML('.modules h2', 'Un núcleo.<br/><em>Distintos levantamientos.</em>');
  setText('.modules .section-heading > p', 'ASD, Cierre de Circuito y Frecuencia Observable comparten GPS, almacenamiento local, sincronización, trazabilidad y supervisión. Cambia el estudio; la base operativa permanece.');

  setText('.horizon .eyebrow', 'PLATAFORMA EN EVOLUCIÓN');
  setHTML('.horizon h2', 'Lo que ya funciona.<br/><em>Y la base para crecer.</em>');
  setText('.horizon-copy > p', 'AFORA ya conecta captura, GPS, operación local, sincronización, supervisión, integridad y exportación. El producto continúa evolucionando para reutilizar ese núcleo en más operaciones de campo.');

  setText('.ecosystem .eyebrow', 'MÁS ALLÁ DE MOVILIDAD');
  setHTML('.ecosystem h2', 'La misma base para<br/><em>otros trabajos de campo.</em>');
  setText('.ecosystem .section-heading > p', 'Movilidad es el entorno donde AFORA ya se está probando. Su núcleo está pensado para operaciones donde importan ubicación, captura estructurada, trazabilidad, supervisión e información de salida.');

  setText('.cta .eyebrow', 'AFORA · FIELD OPERATIONS PLATFORM');
  setHTML('.cta h2', 'Del catálogo a la entrega.<br/>Todo conectado.');
  setText('.cta-content > p', 'Conoce cómo AFORA puede organizar una operación de campo, reducir trabajo posterior y dar visibilidad al levantamiento desde que se prepara hasta que se entrega.');
}

if (typeof window !== 'undefined') {
  requestAnimationFrame(() => requestAnimationFrame(applyAforaCopy));
}

export { applyAforaCopy };

const applyFinalCopy = () => {
  const eyebrow = document.querySelector('.hero-eyebrow');
  const title = document.querySelector('.hero h1');
  const copy = document.querySelector('.hero-content > p');
  if (eyebrow) eyebrow.textContent = '• PLATAFORMA DE OPERACIONES DE CAMPO';
  if (title) title.innerHTML = 'Operaciones de campo.<br/><em>Visibles de principio a fin.</em>';
  if (copy) copy.textContent = 'AFORA conecta captura, GPS, trabajo sin conexión, sincronización y supervisión dentro del mismo levantamiento.';

  const heroLabels = [
    ['.hero .label-one span', 'EVENTO'], ['.hero .label-one strong', 'Dato asociado'],
    ['.hero .label-two span', 'GPS'], ['.hero .label-two strong', 'Seguimiento activo'],
    ['.hero .label-three span', 'SYNC'], ['.hero .label-three strong', 'Datos sincronizados'],
  ];
  heroLabels.forEach(([selector, value]) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  });

  const transformationEyebrow = document.querySelector('.transformation-copy .eyebrow');
  const transformationTitle = document.querySelector('.transformation-copy h2');
  const transformationCopy = document.querySelector('.transformation-copy > p');
  if (transformationEyebrow) transformationEyebrow.textContent = 'EL TRAMO QUE AFORA OPTIMIZA';
  if (transformationTitle) transformationTitle.innerHTML = 'Del levantamiento a la entrega.<br/><em>Con menos postproceso.</em>';
  if (transformationCopy) transformationCopy.textContent = 'AFORA se integra al flujo existente desde el levantamiento. Sustituye la cadena manual de captura, descarga y preparación del GPS, cortes, nomenclatura, cruces y conversiones por una operación digital trazable. Después de la validación y la exportación, el estudio continúa con sus procesos y herramientas habituales.';

  const transformationCopyBlock = document.querySelector('.transformation-copy');
  if (transformationCopyBlock) {
    let scale = transformationCopyBlock.querySelector('.study-scale');
    if (!scale) {
      scale = document.createElement('div');
      scale.className = 'study-scale';
      const proof = transformationCopyBlock.querySelector('.time-proof');
      if (proof) transformationCopyBlock.insertBefore(scale, proof);
    }
    scale.innerHTML = `
      <span><strong>60</strong><small>IDs de referencia</small></span>
      <span><strong>1,080</strong><small>medios recorridos</small></span>
    `;
  }

  const timeProof = document.querySelector('.time-proof');
  if (timeProof) {
    timeProof.innerHTML = `
      <div class="legacy-hours">
        <small>TRAMO MANUAL ACTUAL</small>
        <strong>≈1,200–1,440 h</strong>
        <span>horas-persona de captura, GPS y preparación para entrega</span>
      </div>
      <div class="time-arrow" aria-hidden="true">→</div>
      <div class="afora-time">
        <small>PROYECCIÓN CON AFORA</small>
        <strong>≈70–85% menos</strong>
        <span>el postproceso queda concentrado en QA, excepciones y exportación</span>
      </div>
    `;
  }

  const disclaimer = document.querySelector('.time-disclaimer');
  if (disclaimer) disclaimer.textContent = 'Proyección operativa sobre el tramo que AFORA reemplaza, tomando como referencia 60 IDs y ≈1,200–1,440 horas-persona de postproceso manual. El rango supone que captura, GPS, trazabilidad, cortes lógicos, nomenclatura y salidas quedan resueltos por la plataforma. No incluye correcciones originadas por errores de campo ni actividades posteriores de análisis, modelación o consultoría.';

  const legacyHead = document.querySelector('.legacy-process .process-head small');
  const aforaHead = document.querySelector('.afora-process .process-head small');
  const legacyTitle = document.querySelector('.legacy-process .process-head strong');
  const aforaTitle = document.querySelector('.afora-process .process-head strong');
  if (legacyHead) legacyHead.textContent = 'FLUJO ACTUAL';
  if (aforaHead) aforaHead.textContent = 'MISMO FLUJO, CON AFORA';
  if (legacyTitle) legacyTitle.textContent = 'El dato se reconstruye después del campo.';
  if (aforaTitle) aforaTitle.textContent = 'El dato ya nace relacionado en campo.';

  const legacyLabels = ['Levantamiento', 'Captura + descarga', 'Preparación GPS', 'Cruce / QA', 'Conversiones', 'Entrega'];
  document.querySelectorAll('.legacy-process .process-track > div > span').forEach((el, index) => {
    if (legacyLabels[index]) el.textContent = legacyLabels[index];
  });
  const legacyResult = document.querySelector('.legacy-process .process-result strong');
  if (legacyResult) legacyResult.textContent = 'capturar · descargar · cortar · renombrar · cruzar · convertir';

  const aforaLabels = ['Levantamiento digital', 'Sync + trazabilidad', 'QA + exportación'];
  document.querySelectorAll('.afora-process .process-track > div > span').forEach((el, index) => {
    if (aforaLabels[index]) el.textContent = aforaLabels[index];
  });
  const aforaResult = document.querySelector('.afora-process .process-result strong');
  if (aforaResult) aforaResult.textContent = 'revisar excepciones · validar · exportar';
};

if (typeof window !== 'undefined') {
  requestAnimationFrame(() => requestAnimationFrame(applyFinalCopy));
  setTimeout(applyFinalCopy, 300);
}

export { applyFinalCopy };

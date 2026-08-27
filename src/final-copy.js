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
  if (transformationEyebrow) transformationEyebrow.textContent = 'MENOS POSTPROCESO';
  if (transformationTitle) transformationTitle.innerHTML = 'Menos trabajo después.<br/><em>Más información lista.</em>';
  if (transformationCopy) transformationCopy.textContent = 'En un estudio grande, el trabajo posterior al campo crece con cada recorrido: descargar, identificar, cortar, capturar, cruzar, revisar y preparar archivos. AFORA relaciona captura, GPS y contexto desde el levantamiento para reducir esa reconstrucción manual.';

  const transformationCopyBlock = document.querySelector('.transformation-copy');
  if (transformationCopyBlock && !transformationCopyBlock.querySelector('.study-scale')) {
    const scale = document.createElement('div');
    scale.className = 'study-scale';
    scale.innerHTML = `
      <span><strong>60</strong><small>IDs</small></span>
      <span><strong>540</strong><small>recorridos completos</small></span>
      <span><strong>1,080</strong><small>medios recorridos</small></span>
    `;
    const proof = transformationCopyBlock.querySelector('.time-proof');
    if (proof) transformationCopyBlock.insertBefore(scale, proof);
  }

  const timeProof = document.querySelector('.time-proof');
  if (timeProof) {
    timeProof.innerHTML = `
      <div class="legacy-hours">
        <small>FLUJO TRADICIONAL</small>
        <strong>≈1,200–1,440 h</strong>
        <span>horas-persona estimadas de postproceso</span>
      </div>
      <div class="time-arrow" aria-hidden="true">→</div>
      <div class="afora-time">
        <small>CON AFORA</small>
        <strong>QA + salida</strong>
        <span>revisar excepciones · validar · exportar</span>
      </div>
    `;
  }

  const disclaimer = document.querySelector('.time-disclaimer');
  if (disclaimer) disclaimer.textContent = 'Proyección operativa para 60 IDs basada en un flujo actual estimado de 20–24 horas-persona de postproceso por ID. El tiempo real depende del volumen, el equipo y las condiciones del estudio.';

  const legacyHead = document.querySelector('.legacy-process .process-head small');
  const aforaHead = document.querySelector('.afora-process .process-head small');
  if (legacyHead) legacyHead.textContent = 'FLUJO TRADICIONAL';
  if (aforaHead) aforaHead.textContent = 'FLUJO CON AFORA';

  const legacyLabels = ['Levantamiento', 'Descarga + captura', 'Cortes GPS', 'Cruce / QA', 'Conversiones', 'Entrega'];
  document.querySelectorAll('.legacy-process .process-track > div > span').forEach((el, index) => {
    if (legacyLabels[index]) el.textContent = legacyLabels[index];
  });
  const legacyResult = document.querySelector('.legacy-process .process-result strong');
  if (legacyResult) legacyResult.textContent = 'descarga · cortes · captura · cruces · conversiones · entrega';

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

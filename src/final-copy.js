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

  const legacyHead = document.querySelector('.legacy-process .process-head small');
  const aforaHead = document.querySelector('.afora-process .process-head small');
  if (legacyHead) legacyHead.textContent = 'FLUJO TRADICIONAL';
  if (aforaHead) aforaHead.textContent = 'FLUJO CON AFORA';
};

if (typeof window !== 'undefined') {
  requestAnimationFrame(() => requestAnimationFrame(applyFinalCopy));
  setTimeout(applyFinalCopy, 300);
}

export { applyFinalCopy };

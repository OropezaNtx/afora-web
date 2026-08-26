function installPostFieldUpgrade() {
  const mount = () => {
    const section = document.querySelector('#use-cases');
    if (!section || section.dataset.postfieldUpgrade === '1') return;
    section.dataset.postfieldUpgrade = '1';
    section.className = 'postfield section';
    section.innerHTML = `
      <div class="container postfield-wrap">
        <div class="postfield-heading reveal visible">
          <span class="eyebrow">DESPUÉS DEL CAMPO</span>
          <h2>Datos preparados para<br><em>seguir haciendo ingeniería.</em></h2>
          <p>El levantamiento es el origen, no el resultado final. AFORA conserva estructura, tiempo, posición y contexto para que la información continúe hacia análisis operacional, GIS, matrices, modelación y productos de entrega.</p>
        </div>
        <div class="engineering-pipeline reveal visible">
          <div class="ep-grid"></div>
          <div class="ep-source">
            <small>OPERACIÓN DE CAMPO</small>
            <strong>AFORA</strong>
            <span>Información observada y contextualizada</span>
            <div class="ep-chips"><i>GPS</i><i>TRACK</i><i>ASD</i><i>DEMORAS</i><i>TIEMPOS</i><i>EVENTOS</i></div>
          </div>
          <div class="ep-spine">
            <div class="ep-stage"><b>01</b><strong>Integración y control</strong><span>Jornadas · rutas · sentidos · unidades · operadores</span></div>
            <div class="ep-stage"><b>02</b><strong>Base técnica</strong><span>Tabular · geoespacial · operacional</span></div>
            <div class="ep-stage"><b>03</b><strong>Explotación</strong><span>Datos listos para continuar el estudio</span></div>
          </div>
          <svg class="ep-links" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
            <path d="M185 260 C260 260 275 260 350 260"/>
            <path d="M650 260 C720 260 725 82 810 82"/>
            <path d="M650 260 C730 260 735 198 810 198"/>
            <path d="M650 260 C730 260 735 318 810 318"/>
            <path d="M650 260 C720 260 725 438 810 438"/>
          </svg>
          <div class="ep-output ep-gis"><small>GIS · CARTOGRAFÍA</small><strong>Territorio y red</strong><span>QGIS · ArcGIS</span><p>Recorridos, cobertura, paradas, tramos, velocidades y mapas temáticos.</p></div>
          <div class="ep-output ep-ops"><small>ANÁLISIS OPERACIONAL</small><strong>Indicadores de servicio</strong><span>ASD · aforos · frecuencia</span><p>Demanda por tramo, ocupación, tiempos, demoras, intervalos y hora de máxima demanda.</p></div>
          <div class="ep-output ep-data"><small>MATRICES · DATOS</small><strong>Estructuras analíticas</strong><span>SQL · Python · R</span><p>OD, periodos, rutas, paradas, sentidos, consolidación de jornadas y comparativos.</p></div>
          <div class="ep-output ep-model"><small>MODELACIÓN</small><strong>Escenarios de transporte</strong><span>Visum · Vissim · modelos propios</span><p>Demanda, red, capacidad, alternativas, asignación y simulación.</p></div>
          <span class="ep-packet p-a"></span><span class="ep-packet p-b"></span><span class="ep-packet p-c"></span><span class="ep-packet p-d"></span>
        </div>
        <div class="postfield-results reveal visible">
          <div><small>INDICADORES</small><strong>Tiempos · velocidades · demanda · ocupación · frecuencia · demoras</strong></div>
          <div><small>VISUALIZACIÓN</small><strong>Mapas · perfiles · gráficas · dashboards · comparativos</strong></div>
          <div><small>ENTREGABLES</small><strong>Bases procesadas · cartografía · archivos GIS · anexos técnicos</strong></div>
        </div>
        <p class="postfield-note">AFORA no busca reemplazar las herramientas especializadas del estudio. Busca entregarles mejor información desde el origen.</p>
      </div>`;
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(mount));
  else requestAnimationFrame(mount);
  setTimeout(mount, 250);
}
installPostFieldUpgrade();

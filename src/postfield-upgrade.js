function installPostFieldUpgrade() {
  const mount = () => {
    const section = document.querySelector('#use-cases');
    if (!section || section.dataset.postfieldUpgrade === '2') return;
    section.dataset.postfieldUpgrade = '2';
    section.className = 'postfield section';
    section.innerHTML = `
      <div class="postfield-chapter pf-data-foundation">
        <div class="container pf-chapter-grid">
          <div class="pf-copy reveal visible">
            <span class="eyebrow">DESPUÉS DEL CAMPO · 01</span>
            <h2>Del levantamiento a una<br><em>base técnica utilizable.</em></h2>
            <p>El trabajo de campo produce mucho más que registros. Produce recorridos, tiempos, eventos, posiciones y relaciones entre datos. AFORA conserva ese contexto para que el procesamiento posterior empiece con información estructurada.</p>
            <div class="pf-proof-list">
              <div><b>01</b><span><strong>Integración</strong><small>Jornadas, rutas, sentidos, unidades y operadores.</small></span></div>
              <div><b>02</b><span><strong>Control de calidad</strong><small>GPS, faltantes, consistencia, eventos y sincronización.</small></span></div>
              <div><b>03</b><span><strong>Consolidación</strong><small>Datos tabulares, geoespaciales y operacionales.</small></span></div>
            </div>
          </div>
          <div class="pf-foundation-visual reveal visible">
            <div class="pf-map-grid"></div>
            <svg class="pf-track" viewBox="0 0 760 480" aria-hidden="true">
              <path class="pf-road pf-road-shadow" d="M54 375 C145 335 182 366 238 300 C297 230 348 270 405 205 C458 143 523 189 574 122 C618 65 681 108 713 55"/>
              <path class="pf-road pf-road-main" d="M54 375 C145 335 182 366 238 300 C297 230 348 270 405 205 C458 143 523 189 574 122 C618 65 681 108 713 55"/>
            </svg>
            <span class="pf-event e1">ASD</span><span class="pf-event e2">C</span><span class="pf-event e3">AD+S</span><span class="pf-event e4">FIN</span>
            <div class="pf-data-source"><small>CAMPO</small><strong>3,271</strong><span>puntos GPS</span><i>8 eventos</i><i>7.22 km</i></div>
            <div class="pf-processing-core"><small>AFORA</small><strong>BASE TÉCNICA</strong><span>contexto + posición + tiempo</span><div><i>VALIDADA</i><i>ESTRUCTURADA</i><i>TRAZABLE</i></div></div>
            <div class="pf-data-output"><small>SALIDAS</small><strong>Tabular</strong><span>CSV · XLSX</span><strong>Geoespacial</strong><span>GPX · KML · GeoJSON</span></div>
            <span class="pf-data-packet d1"></span><span class="pf-data-packet d2"></span><span class="pf-data-packet d3"></span>
          </div>
        </div>
      </div>

      <div class="postfield-chapter pf-engineering-use">
        <div class="container">
          <div class="pf-engineering-heading reveal visible">
            <span class="eyebrow">DESPUÉS DEL CAMPO · 02</span>
            <h2>La información sigue<br><em>hacia la ingeniería.</em></h2>
            <p>Una base bien estructurada puede continuar hacia las herramientas y metodologías propias de un estudio de movilidad y transporte. AFORA no sustituye esas herramientas: busca entregarles información mejor organizada desde el origen.</p>
          </div>
          <div class="pf-engineering-grid reveal visible">
            <article class="pf-engineering-card pf-gis">
              <div class="pf-card-icon">⌖</div><small>GIS · CARTOGRAFÍA</small><h3>Territorio, red y recorridos.</h3>
              <p>QGIS y ArcGIS permiten explotar la información georreferenciada para analizar cobertura, paradas, tramos, recorridos, velocidades y distribución espacial de eventos.</p>
              <div class="pf-mini-map"><i></i><i></i><i></i><span></span></div>
              <footer>QGIS · ArcGIS · KML · GeoJSON</footer>
            </article>
            <article class="pf-engineering-card pf-operations-analysis">
              <div class="pf-card-icon">≋</div><small>ANÁLISIS OPERACIONAL</small><h3>Demanda y desempeño del servicio.</h3>
              <p>Ascensos y descensos, frecuencia, ocupación, aforos, tiempos y demoras pueden convertirse en perfiles de carga, intervalos, velocidades y otros indicadores operativos.</p>
              <div class="pf-mini-profile"><span style="--h:35%"></span><span style="--h:58%"></span><span style="--h:76%"></span><span style="--h:64%"></span><span style="--h:88%"></span><span style="--h:54%"></span></div>
              <footer>ASD · FOV · aforos · tiempos · demoras</footer>
            </article>
            <article class="pf-engineering-card pf-data-analysis">
              <div class="pf-card-icon">▦</div><small>MATRICES · DATOS</small><h3>Estructuras para análisis.</h3>
              <p>La información puede consolidarse por ruta, sentido, periodo, parada, tramo o jornada para construir matrices, comparativos y bases analíticas mediante SQL, Python o R.</p>
              <div class="pf-mini-matrix"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
              <footer>OD · tramos · periodos · rutas · sentidos</footer>
            </article>
            <article class="pf-engineering-card pf-modeling">
              <div class="pf-card-icon">◇</div><small>MODELACIÓN</small><h3>Redes, demanda y escenarios.</h3>
              <p>Los datos observados pueden alimentar procesos especializados de planeación, asignación, capacidad y simulación en herramientas como PTV Visum, PTV Vissim o modelos propios.</p>
              <div class="pf-mini-network"><i></i><i></i><i></i><i></i><span></span><span></span></div>
              <footer>Visum · Vissim · modelos propios</footer>
            </article>
          </div>
          <div class="pf-result-rail reveal visible">
            <div><small>INDICADORES</small><strong>Tiempos · velocidades · demanda · ocupación · frecuencia · demoras</strong></div>
            <i>→</i><div><small>VISUALIZACIÓN</small><strong>Mapas · perfiles · gráficas · dashboards · comparativos</strong></div>
            <i>→</i><div><small>ENTREGABLES</small><strong>Bases procesadas · cartografía · archivos GIS · anexos técnicos</strong></div>
          </div>
        </div>
      </div>`;
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(mount));
  else requestAnimationFrame(mount);
  setTimeout(mount, 250);
}
installPostFieldUpgrade();

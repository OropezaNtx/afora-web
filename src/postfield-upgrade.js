function installPostFieldUpgrade() {
  const mount = () => {
    const section = document.querySelector('#use-cases');
    if (!section || section.dataset.postfieldUpgrade === '3') return;
    section.dataset.postfieldUpgrade = '3';
    section.className = 'postfield section';
    section.innerHTML = `
      <div class="postfield-chapter pf-data-foundation">
        <div class="container pf-chapter-grid">
          <div class="pf-copy reveal visible">
            <span class="eyebrow">SALIDA DE AFORA · 01</span>
            <h2>Del levantamiento a una<br><em>base técnica utilizable.</em></h2>
            <p>AFORA acompaña el tramo operativo desde el levantamiento hasta la validación y la exportación. Recorridos, tiempos, eventos, posiciones y datos quedan relacionados para entregar una base estructurada sin reconstruir manualmente la operación.</p>
            <div class="pf-proof-list">
              <div><b>01</b><span><strong>Integración</strong><small>Jornadas, rutas, sentidos, unidades y operadores.</small></span></div>
              <div><b>02</b><span><strong>Control de calidad</strong><small>GPS, faltantes, consistencia, eventos y sincronización.</small></span></div>
              <div><b>03</b><span><strong>Salida</strong><small>Datos tabulares y geoespaciales listos para continuar.</small></span></div>
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
            <div class="pf-data-output"><small>SALIDA AFORA</small><strong>Tabular</strong><span>CSV · XLSX</span><strong>Geoespacial</strong><span>GPX · KML · GeoJSON</span></div>
            <span class="pf-data-packet d1"></span><span class="pf-data-packet d2"></span><span class="pf-data-packet d3"></span>
          </div>
        </div>
      </div>

      <div class="postfield-chapter pf-engineering-use">
        <div class="container">
          <div class="pf-engineering-heading reveal visible">
            <span class="eyebrow">EL ESTUDIO CONTINÚA · 02</span>
            <h2>AFORA entrega la base.<br><em>La ingeniería continúa.</em></h2>
            <p>A partir de aquí, AFORA ya no sustituye las metodologías ni las herramientas especializadas del estudio. Su función es entregar información organizada, trazable y georreferenciada para que el equipo continúe con sus procesos habituales.</p>
          </div>

          <div class="pf-engineering-story">
            <section class="pf-engineering-band pf-band-gis reveal visible">
              <div class="pf-band-copy">
                <span class="pf-kicker">01 · GIS / CARTOGRAFÍA</span>
                <h3>Del track a la<br><em>lectura territorial.</em></h3>
                <p>Los archivos geoespaciales entregados por AFORA pueden continuar en QGIS o ArcGIS para analizar cobertura, tramos, paradas, velocidades, puntos críticos y distribución espacial de la operación.</p>
                <div class="pf-tech-row"><span class="pf-brand qgis"><i>Q</i>QGIS</span><span>ArcGIS</span><span>KML</span><span>GeoJSON</span></div>
              </div>
              <div class="pf-gis-stage" aria-label="Mapa GIS animado">
                <div class="pf-gis-grid"></div>
                <svg viewBox="0 0 720 420" preserveAspectRatio="none" aria-hidden="true">
                  <path class="street s1" d="M10 305 C150 250 250 310 360 220 C470 130 560 190 710 82"/>
                  <path class="street s2" d="M80 35 C160 140 180 250 270 405"/>
                  <path class="street s3" d="M410 10 C395 100 420 190 520 405"/>
                  <path class="street s4" d="M0 172 C150 190 290 120 720 230"/>
                  <path class="gis-route" d="M34 330 C150 282 237 320 345 238 C456 153 542 205 684 100"/>
                </svg>
                <div class="pf-layers-panel"><small>CAPAS</small><span><i></i>Recorrido</span><span><i></i>Eventos ASD</span><span><i></i>Demoras</span><span><i></i>Red vial</span></div>
                <span class="gis-node g1"></span><span class="gis-node g2"></span><span class="gis-node g3"></span><span class="gis-node g4"></span>
                <span class="gis-vehicle v1"></span><span class="gis-vehicle v2"></span>
                <div class="pf-map-readout"><span>19.4117, -98.9626</span><b>± 8 m</b><small>1:12 500</small></div>
              </div>
            </section>

            <section class="pf-engineering-band pf-band-ops reverse reveal visible">
              <div class="pf-band-copy">
                <span class="pf-kicker">02 · ANÁLISIS OPERACIONAL</span>
                <h3>La información puede convertirse<br><em>en indicadores.</em></h3>
                <p>Con la base entregada, el equipo puede continuar sus cálculos de ascensos, descensos, ocupación, frecuencia, aforos, tiempos y demoras para construir perfiles de carga, intervalos, velocidades y comparativos.</p>
                <div class="pf-tech-row"><span>ASD</span><span>FOV</span><span>Aforos</span><span>Tiempos</span><span>Demoras</span></div>
              </div>
              <div class="pf-ops-stage">
                <div class="pf-ops-header"><span>PERFIL OPERACIONAL</span><strong>Ruta 2 · Sentido ida</strong><i>PERIODO AM</i></div>
                <div class="pf-profile-chart">
                  <div class="pf-profile-axis"><span>40</span><span>30</span><span>20</span><span>10</span><span>0</span></div>
                  <div class="pf-profile-bars"><i style="--h:26%"></i><i style="--h:42%"></i><i style="--h:61%"></i><i style="--h:77%"></i><i style="--h:69%"></i><i style="--h:88%"></i><i style="--h:72%"></i><i style="--h:54%"></i></div>
                  <svg viewBox="0 0 620 220" preserveAspectRatio="none" aria-hidden="true"><path class="pf-load-line" d="M8 180 C90 160 120 115 188 125 C262 136 286 60 360 80 C438 100 466 42 612 70"/></svg>
                </div>
                <div class="pf-ops-metrics"><div><small>OCUPACIÓN</small><strong>32 pax</strong></div><div><small>INTERVALO</small><strong>08:14</strong></div><div><small>V. OPERACIONAL</small><strong>18.7 km/h</strong></div><div><small>DEMORA</small><strong>04:32</strong></div></div>
                <span class="pf-analysis-scan"></span>
              </div>
            </section>

            <section class="pf-engineering-band pf-band-data reveal visible">
              <div class="pf-band-copy">
                <span class="pf-kicker">03 · MATRICES / DATOS</span>
                <h3>De la base a<br><em>estructuras de análisis.</em></h3>
                <p>Fuera de AFORA, la información puede agruparse por ruta, sentido, periodo, parada, tramo o jornada. SQL, Python o R pueden utilizarse para consolidaciones, matrices, cruces e indicadores específicos del estudio.</p>
                <div class="pf-tech-row"><span class="pf-brand python"><i>Py</i>Python</span><span>SQL</span><span>R</span><span>OD</span><span>ETL</span></div>
              </div>
              <div class="pf-code-stage">
                <div class="pf-code-top"><div><i></i><i></i><i></i></div><span>processing_pipeline.py</span><b>RUNNING</b></div>
                <pre><code><span class="kw">import</span> pandas <span class="kw">as</span> pd
<span class="kw">import</span> geopandas <span class="kw">as</span> gpd

trips = pd.read_csv(<span class="str">"afora_trips.csv"</span>)
track = gpd.read_file(<span class="str">"track.geojson"</span>)

matrix = (
  trips.groupby([<span class="str">"route"</span>, <span class="str">"period"</span>, <span class="str">"stop"</span>])
       .agg(boardings=(<span class="str">"up"</span>, <span class="str">"sum"</span>),
            alightings=(<span class="str">"down"</span>, <span class="str">"sum"</span>))
)

<span class="fn">validate</span>(matrix, track)</code></pre>
                <div class="pf-terminal-log"><span><b>✓</b> 3,271 puntos vinculados</span><span><b>✓</b> 8 eventos georreferenciados</span><span><b>✓</b> matriz por ruta / periodo / parada</span><span class="typing">_</span></div>
              </div>
            </section>

            <section class="pf-engineering-band pf-band-model reverse reveal visible">
              <div class="pf-band-copy">
                <span class="pf-kicker">04 · MODELACIÓN</span>
                <h3>Datos observados para<br><em>redes y escenarios.</em></h3>
                <p>La información exportada puede alimentar posteriormente procesos especializados de planeación, asignación, capacidad y simulación en PTV Visum, PTV Vissim u otros modelos del equipo consultor.</p>
                <div class="pf-tech-row"><span>PTV Visum</span><span>PTV Vissim</span><span>Asignación</span><span>Simulación</span></div>
              </div>
              <div class="pf-model-stage">
                <div class="pf-model-grid"></div>
                <svg viewBox="0 0 700 420" preserveAspectRatio="none" aria-hidden="true">
                  <path class="model-link major" d="M72 334 L210 260 L348 284 L490 178 L632 108"/>
                  <path class="model-link" d="M210 260 L174 104 L348 88 L490 178"/>
                  <path class="model-link" d="M348 284 L430 356 L620 330 L632 108"/>
                  <path class="model-link" d="M174 104 L72 334"/>
                </svg>
                <span class="model-node n1"><b>1</b><small>420</small></span><span class="model-node n2"><b>2</b><small>680</small></span><span class="model-node n3"><b>3</b><small>510</small></span><span class="model-node n4"><b>4</b><small>890</small></span><span class="model-node n5"><b>5</b><small>740</small></span><span class="model-node n6"><b>6</b><small>360</small></span>
                <span class="model-flow f1"></span><span class="model-flow f2"></span><span class="model-flow f3"></span>
                <div class="pf-model-legend"><small>FLUJO ASIGNADO</small><span><i></i>bajo</span><span><i></i>medio</span><span><i></i>alto</span></div>
                <div class="pf-model-readout"><span>ESCENARIO</span><strong>BASE 2026</strong><small>red · demanda · capacidad</small></div>
              </div>
            </section>
          </div>

          <div class="pf-result-rail reveal visible">
            <div><small>EL ESTUDIO CONTINÚA</small><strong>Indicadores · análisis · cartografía · modelación · entregables</strong></div>
            <i>→</i><div><small>CON LAS HERRAMIENTAS DEL EQUIPO</small><strong>QGIS · ArcGIS · Python · SQL · R · Visum · Vissim</strong></div>
          </div>
          <p class="pf-engineering-note">AFORA termina su tramo operativo entregando información validada, estructurada y exportable. Las etapas posteriores pertenecen al flujo técnico y metodológico de cada estudio.</p>
        </div>
      </div>`;
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(mount));
  else requestAnimationFrame(mount);
  setTimeout(mount, 250);
}
installPostFieldUpgrade();

// ============================================================================
// Motor de la plataforma: enrutado, vistas, calificación automática.
// ============================================================================

function escapeHtml(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function idSeguro(s){ return String(s).replace(/[^a-zA-Z0-9_-]/g, '_'); }

// ---------------------------------------------------------- Normalizadores ---
function normFormula(s){
  let t = String(s || '').trim();
  t = t.replace(/<->|<=>|iff/gi, '↔');
  t = t.replace(/->|=>/g, '→');
  t = t.replace(/&&|&(?!amp;)/g, '∧');
  t = t.replace(/\|\|/g, '∨');
  t = t.replace(/~|!/g, '¬');
  t = t.replace(/\s+/g, '');
  return t;
}
function checkFormula(ej, valor){
  const u = normFormula(valor);
  if(!u) return false;
  return ej.respuestas.some(r => normFormula(r) === u);
}

function normConjunto(s){
  let t = String(s || '').trim();
  const compacto = t.replace(/\s+/g, '');
  if(/^(∅|vacio|vacío|\{\}|\(\))$/i.test(compacto)) return '∅';
  t = compacto.replace(/[{}]/g, '');
  if(t.indexOf('(') !== -1) return t; // conjunto de pares: comparación literal
  if(t === '') return '∅';
  const partes = t.split(',').filter(x => x.length).sort();
  return partes.join(',');
}
function checkConjunto(ej, valor){
  const u = normConjunto(valor);
  return ej.respuestas.some(r => normConjunto(r) === u);
}

function checkNumero(ej, valor){
  const u = parseFloat(String(valor).replace(',', '.').trim());
  return !isNaN(u) && u === ej.respuesta;
}

// ---------------------------------------------------------------- Montaje ---
function montar(html){
  document.getElementById('app').innerHTML = html;
  window.scrollTo(0, 0);
}

function shellTop(titulo, sub, backHref){
  return `<header class="barra-top">
    ${backHref ? `<a class="icono-btn" href="${backHref}" aria-label="Regresar">‹</a>` : ''}
    <div style="flex:1;min-width:0">
      <div class="titulo-top">${escapeHtml(titulo)}</div>
      ${sub ? `<span class="sub-top">${escapeHtml(sub)}</span>` : ''}
    </div>
  </header>`;
}

function tabbarHtml(activo){
  const items = [
    { id:'inicio', ico:'⌂', etq:'Inicio', href:'#/inicio' },
    { id:'modulos', ico:'▤', etq:'Módulos', href:'#/modulos' },
    { id:'buscar', ico:'⌕', etq:'Dudas', href:'#/buscar' },
  ];
  return `<nav class="tabbar"><div class="tabbar-inner">
    ${items.map(it => `<a class="tab-item ${it.id === activo ? 'activo' : ''}" href="${it.href}">
      <span class="ico">${it.ico}</span><span class="etq">${it.etq}</span></a>`).join('')}
  </div></nav>`;
}

function chipTrayectoria(codigo){
  const t = TRAYECTORIAS.find(x => x.id === codigo);
  return t ? `<span class="chip-trayectoria">${t.id} · ${escapeHtml(t.nombre)}</span>` : '';
}

// ------------------------------------------------------------------ Router ---
function router(){
  const perfil = obtenerPerfil();
  const hash = location.hash.slice(1) || '/inicio';
  const partes = hash.split('/').filter(Boolean);

  if(!perfil){ renderLogin(); return; }

  if(partes[0] === 'sesion' && partes[1]){
    renderSesion(parseInt(partes[1], 10), partes[2] || 'teoria');
  } else if(partes[0] === 'modulos'){
    renderModulos();
  } else if(partes[0] === 'buscar'){
    renderBuscar(partes[1] ? decodeURIComponent(partes[1]) : '');
  } else if(partes[0] === 'perfil'){
    renderPerfil();
  } else {
    renderInicio();
  }
}
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => { vaciarCola(); router(); setInterval(vaciarCola, 90000); });

// -------------------------------------------------------------- Vista login ---
function renderLogin(){
  const chips = TRAYECTORIAS.map(t => `
    <button type="button" class="opcion-chip" role="radio" aria-checked="false"
      data-accion="elegir-trayectoria" data-valor="${t.id}">
      <span class="marca"></span>${t.id} · ${escapeHtml(t.nombre)}
    </button>`).join('');

  montar(`
  <main class="pantalla-login">
    <div class="lienzo">
      <header class="aparece" style="padding-top:8px">
        <div class="logo-curso">Σ</div>
        <p class="eyebrow">UVP · Primer semestre</p>
        <h1 class="titulo-grande">Pensamiento analítico y lógico</h1>
        <p class="intro">Resuelve los ejercicios de la guía, recibe retroalimentación al instante, y consulta la teoría cuando te quede una duda. Tu avance se guarda para tu profesor.</p>
        <div class="ficha">
          <span class="num">16</span>
          <span class="det"><b>Sesiones</b>4 módulos · lógica, conjuntos, relaciones y funciones</span>
        </div>
      </header>

      <form id="formLogin" novalidate>
        <section class="tarjeta aparece">
          <div class="campo" id="c-nombre">
            <label for="nombre">Nombre completo<span class="req">*</span></label>
            <input id="nombre" type="text" autocomplete="name" placeholder="Como aparece en la lista de tu grupo">
            <p class="error-txt">Escribe tu nombre para poder registrar tu avance.</p>
          </div>
          <div class="campo" id="c-matricula">
            <label for="matricula">Matrícula<span class="req">*</span></label>
            <input id="matricula" type="text" autocomplete="off" placeholder="Tu número de matrícula">
            <p class="error-txt">Indica tu matrícula.</p>
          </div>
          <div class="campo" id="c-correo">
            <label for="correo">Correo institucional<span class="req">*</span></label>
            <input id="correo" type="email" inputmode="email" autocomplete="email" placeholder="nombre@uvp.mx">
            <p class="ayuda">Con este correo tu profesor identifica tu avance en la hoja de resultados.</p>
            <p class="error-txt">Revisa el correo, parece incompleto.</p>
          </div>
        </section>

        <section class="tarjeta aparece" id="c-trayectoria">
          <div class="campo" style="border-bottom:none">
            <p class="pregunta" style="font-size:16px;font-weight:670;margin-bottom:3px">¿Cuál es tu trayectoria?</p>
            <p class="pregunta-sub" style="font-size:12.5px;color:var(--gris-texto);margin-bottom:12px">Cada sesión trae un banco de ejercicios ejercitado sobre el material de tu propia carrera.</p>
            <div class="chips-grid" id="gridTrayectoria" role="radiogroup" aria-label="Trayectoria">${chips}</div>
            <p class="error-txt">Elige tu trayectoria para continuar.</p>
          </div>
        </section>
      </form>
    </div>

    <div class="barra-fija">
      <button class="btn btn-principal" id="btnEntrar">Entrar a la plataforma</button>
    </div>
  </main>`);

  let trayectoriaElegida = '';
  document.getElementById('gridTrayectoria').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-accion="elegir-trayectoria"]');
    if(!btn) return;
    trayectoriaElegida = btn.getAttribute('data-valor');
    document.querySelectorAll('#gridTrayectoria .opcion-chip').forEach(c => c.setAttribute('aria-checked', String(c === btn)));
    document.getElementById('c-trayectoria').classList.remove('malo');
  });

  document.getElementById('btnEntrar').addEventListener('click', async () => {
    const nombre = document.getElementById('nombre').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const correo = document.getElementById('correo').value.trim();

    let ok = true;
    const marcar = (id, malo) => { document.getElementById(id).classList.toggle('malo', malo); if(malo) ok = false; };
    marcar('c-nombre', nombre.length < 3);
    marcar('c-matricula', matricula.length < 2);
    marcar('c-correo', !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo));
    marcar('c-trayectoria', !trayectoriaElegida);

    if(!ok){
      document.querySelector('.malo')?.scrollIntoView({ behavior:'smooth', block:'center' });
      return;
    }

    const btn = document.getElementById('btnEntrar');
    btn.disabled = true; btn.textContent = 'Entrando…';

    guardarPerfil({ nombre, matricula, correo, trayectoria: trayectoriaElegida });
    await enviarRegistro();
    location.hash = '#/inicio';
    router();
  });
}

// -------------------------------------------------------------- Vista inicio ---
function renderInicio(){
  const perfil = obtenerPerfil();
  const stats = estadisticasCurso();
  const primerNombre = (perfil.nombre || '').split(' ')[0];

  const filasModulo = MODULOS.map(m => {
    const s = estadisticasModulo(m.id);
    return `<div class="fila-modulo">
      <div class="info">
        <div class="nombre">Módulo ${m.id} · ${escapeHtml(m.nombre)}</div>
        <div class="barra-progreso"><span style="width:${s.pct}%"></span></div>
      </div>
      <div class="pct">${s.resueltos}/${s.total}</div>
    </div>`;
  }).join('');

  montar(`
  ${shellTop('Pensamiento analítico y lógico', perfil.trayectoria + ' · ' + (TRAYECTORIAS.find(t=>t.id===perfil.trayectoria)||{}).nombre)}
  <div class="lienzo">
    <p class="eyebrow">Hola, ${escapeHtml(primerNombre)}</p>
    <h1 class="titulo-grande">Tu avance</h1>
    <p class="intro">Sigue donde lo dejaste o explora cualquier sesión. Todo lo que resuelves aquí se guarda y llega a tu profesor.</p>

    <div class="ficha aparece">
      <span class="num">${stats.pct}%</span>
      <span class="det"><b>${stats.resueltos} de ${stats.total} ejercicios</b>resueltos correctamente en todo el curso</span>
    </div>

    <a href="#/sesion/${ultimaSesionVisitada()}/teoria" class="btn btn-principal" style="display:block;text-align:center;margin-bottom:18px">Continuar donde lo dejaste</a>

    <section class="tarjeta aparece">
      ${filasModulo}
    </section>

    <a href="#/modulos" class="tarjeta clicable aparece" style="display:flex;align-items:center;justify-content:space-between;text-decoration:none">
      <span style="font-weight:640;font-size:14.5px;color:var(--morado-tinta)">Ver las 16 sesiones</span>
      <span style="color:var(--morado)">→</span>
    </a>
    <a href="#/buscar" class="tarjeta clicable aparece" style="display:flex;align-items:center;justify-content:space-between;text-decoration:none">
      <span style="font-weight:640;font-size:14.5px;color:var(--morado-tinta)">Buscar un tema o resolver una duda</span>
      <span style="color:var(--morado)">→</span>
    </a>
    <a href="#/perfil" class="tarjeta clicable aparece" style="display:flex;align-items:center;justify-content:space-between;text-decoration:none">
      <span style="font-weight:640;font-size:14.5px;color:var(--morado-tinta)">Mi perfil y mis retos enviados</span>
      <span style="color:var(--morado)">→</span>
    </a>
  </div>
  ${tabbarHtml('inicio')}`);
}

function ultimaSesionVisitada(){
  try{ return parseInt(localStorage.getItem('palc_ultima_sesion') || '1', 10); }
  catch(e){ return 1; }
}
function marcarUltimaSesion(id){
  try{ localStorage.setItem('palc_ultima_sesion', String(id)); }catch(e){}
}

// ------------------------------------------------------------- Vista módulos ---
function renderModulos(){
  const bloques = MODULOS.map(m => {
    const filas = m.sesiones.map(sid => {
      const s = estadisticasSesion(sid);
      const completa = s.total > 0 && s.resueltos === s.total;
      return `<a href="#/sesion/${sid}/teoria" class="sesion-fila ${completa ? 'completa' : ''}" style="text-decoration:none;color:inherit">
        <span class="badge-num">${completa ? '✓' : sid}</span>
        <div class="info">
          <div class="nombre">${escapeHtml(SESIONES[sid].titulo)}</div>
          <div class="meta">${SESIONES[sid].semana} · ${s.resueltos}/${s.total} ejercicios</div>
        </div>
        <span class="flecha">›</span>
      </a>`;
    }).join('');
    const ms = estadisticasModulo(m.id);
    return `<section class="tarjeta compacta aparece">
      <div class="campo" style="border-bottom:1px solid var(--linea);padding-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:baseline">
          <span style="font-size:15px;font-weight:700;letter-spacing:-.012em">Módulo ${m.id} · ${escapeHtml(m.nombre)}</span>
          <span style="font-size:12px;color:var(--gris-texto)">${ms.pct}%</span>
        </div>
      </div>
      ${filas}
    </section>`;
  }).join('');

  montar(`
  ${shellTop('Módulos y sesiones', '16 sesiones · 4 módulos', '#/inicio')}
  <div class="lienzo">${bloques}</div>
  ${tabbarHtml('modulos')}`);
}

// ------------------------------------------------------------- Vista perfil ---
function renderPerfil(){
  const perfil = obtenerPerfil();
  const retos = obtenerRetosEnviados();
  const listaRetos = retos.length ? retos.slice().reverse().map(r => `
    <div class="campo">
      <div style="font-size:12.5px;color:var(--gris-texto);margin-bottom:4px">Sesión ${r.sesion} · ${r.categoria} ${r.numero ? '· guía ' + escapeHtml(r.numero) : ''}</div>
      <div style="font-size:14px">${escapeHtml(r.texto).slice(0,220)}${r.texto.length>220?'…':''}</div>
    </div>`).join('') : `<p class="ayuda" style="padding:14px 0">Todavía no has enviado ningún reto abierto.</p>`;

  montar(`
  ${shellTop('Mi perfil', '', '#/inicio')}
  <div class="lienzo">
    <section class="tarjeta aparece">
      <div class="campo"><label>Nombre</label><div style="font-size:15px;font-weight:600">${escapeHtml(perfil.nombre)}</div></div>
      <div class="campo"><label>Matrícula</label><div style="font-size:15px">${escapeHtml(perfil.matricula)}</div></div>
      <div class="campo"><label>Correo</label><div style="font-size:15px">${escapeHtml(perfil.correo)}</div></div>
      <div class="campo"><label>Trayectoria</label><div style="font-size:15px">${chipTrayectoria(perfil.trayectoria)}</div></div>
    </section>

    <p class="eyebrow" style="margin-top:22px">Retos abiertos enviados</p>
    <section class="tarjeta compacta aparece">${listaRetos}</section>

    <button class="btn btn-secundario" style="width:100%;margin-top:18px" data-accion="cerrar-sesion">Cerrar sesión en este dispositivo</button>
  </div>
  ${tabbarHtml('inicio')}`);
}

// -------------------------------------------------------------- Vista sesión ---
function renderSesion(id, tab){
  const meta = SESIONES[id];
  if(!meta){ location.hash = '#/modulos'; return; }
  marcarUltimaSesion(id);
  const tabs = [
    { id:'teoria', etq:'Teoría' },
    { id:'practica', etq:'Práctica' },
    { id:'retos', etq:'Retos' },
  ];
  const idx = tabs.findIndex(t => t.id === tab);
  const segm = `<div class="segmentado" data-n="3">
    <span class="pastilla-seg" style="width:calc(33.333% - 4px);transform:translateX(${idx*100}%)"></span>
    ${tabs.map(t => `<a class="opcion-seg" role="radio" aria-checked="${t.id===tab}" href="#/sesion/${id}/${t.id}">${t.etq}</a>`).join('')}
  </div>`;

  let contenido = '';
  if(tab === 'teoria') contenido = vistaTeoria(id);
  else if(tab === 'practica') contenido = vistaPractica(id);
  else contenido = vistaRetos(id);

  montar(`
  ${shellTop('Sesión ' + id, meta.titulo, '#/modulos')}
  <div class="lienzo">
    <div class="tabs-sesion">${segm}</div>
    ${contenido}
  </div>
  ${tabbarHtml('modulos')}`);

  if(tab === 'practica') activarListenersPractica(id);
  if(tab === 'retos') activarListenersRetos(id);
  if(tab === 'teoria') activarListenersScroll();
}

function vistaTeoria(id){
  const ref = REFERENCIA_SESIONES[id];
  const perfil = obtenerPerfil();
  const cuerpo = ref ? renderReferencia(ref.texto) : '<p>Contenido no disponible.</p>';
  return `
    <p class="eyebrow" style="margin-top:14px">${SESIONES[id].semana}</p>
    <h1 class="titulo-grande" style="font-size:24px">${escapeHtml(SESIONES[id].titulo)}</h1>
    <button class="btn btn-secundario btn-chico aparece" style="margin-bottom:16px" data-accion="scroll-a" data-target="tray-${perfil.trayectoria}">
      Ir al banco de tu trayectoria (${chipTrayectoriaTexto(perfil.trayectoria)})
    </button>
    <div class="tarjeta ref-cuerpo aparece">${cuerpo}</div>
  `;
}
function chipTrayectoriaTexto(codigo){
  const t = TRAYECTORIAS.find(x => x.id === codigo);
  return t ? t.id + ' · ' + t.nombre : '';
}
function activarListenersScroll(){
  document.querySelectorAll('[data-accion="scroll-a"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = document.getElementById(btn.getAttribute('data-target'));
      if(el) el.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });
}

// --------------------------------------------------- Parser de referencia ---
function renderReferencia(texto){
  const bloques = texto.split(/\n\s*\n/);
  let html = '';
  bloques.forEach(bloque => {
    const lineas = bloque.split('\n').map(l => l.trim()).filter(l => l.length);
    if(!lineas.length) return;
    const primera = lineas[0];
    const resto = lineas.slice(1).join('\n');

    if(primera === '---'){ html += '<hr style="border:none;border-top:1px solid var(--linea);margin:18px 0">'; return; }

    if(/^Módulo \d+ ·/.test(primera)){
      html += `<h2 style="font-size:21px">${escapeHtml(primera)}</h2>`;
      if(resto) html += `<p>${escapeHtml(resto)}</p>`;
      return;
    }
    if(/^NIVEL \d/.test(primera) || /^Banco por trayectoria$/i.test(primera) || /^TAREA DE CAMPO$/i.test(primera) ||
       /^AVANCE DEL PROYECTO/i.test(primera) || /^Cierre del módulo/i.test(primera) || /^Rúbrica del proyecto/i.test(primera) ||
       /^Autoevaluaci[oó]n/i.test(primera)){
      html += `<h2>${escapeHtml(primera)}</h2>`;
      if(resto) html += `<p>${escapeHtml(resto)}</p>`;
      return;
    }
    const trayMatch = primera.match(/^(T[1-7])\s*·/);
    if(trayMatch){
      html += `<h3 id="tray-${trayMatch[1]}">${escapeHtml(primera)}</h3>`;
      if(resto) html += `<p>${escapeHtml(resto)}</p>`;
      return;
    }
    if(primera === 'FICHA DE LA SESIÓN' || primera.startsWith('DETONADOR APLICADO')){
      html += `<h3>${escapeHtml(primera)}</h3>`;
      if(resto) html += `<p>${escapeHtml(resto)}</p>`;
      return;
    }
    if(primera === 'CUIDADO'){
      html += `<div class="caja-cuidado"><b>Cuidado</b>${escapeHtml(resto)}</div>`;
      return;
    }
    if(primera.startsWith('PUENTE')){
      html += `<div class="caja-puente"><b>${escapeHtml(primera)}</b>${escapeHtml(resto)}</div>`;
      return;
    }
    if(primera.startsWith('Ejemplo resuelto')){
      html += `<div class="caja-ejemplo"><b>${escapeHtml(primera)}</b>\n${escapeHtml(resto)}</div>`;
      return;
    }
    html += `<p>${escapeHtml(lineas.join('\n'))}</p>`;
  });
  return html;
}

// -------------------------------------------------------------- Práctica ---
function vistaPractica(id){
  const lista = EJERCICIOS[id] || [];
  const s = estadisticasSesion(id);
  const progreso = obtenerProgreso()[id] || {};

  const tarjetas = lista.map(ej => renderTarjetaEjercicio(ej, id, progreso[ej.id])).join('');

  return `
    <div class="ficha aparece" style="margin-top:14px">
      <span class="num">${s.resueltos}/${s.total}</span>
      <span class="det"><b>Ejercicios de esta sesión</b>respondidos correctamente. Puedes reintentar cualquiera.</span>
    </div>
    ${tarjetas || '<p class="ayuda">Todavía no hay ejercicios cargados para esta sesión.</p>'}
  `;
}

function renderTarjetaEjercicio(ej, sesionId, estadoPrevio){
  const sid = idSeguro(ej.id);
  const yaCorrecto = estadoPrevio && estadoPrevio.correcto;
  let cuerpo = '';

  if(ej.tipo === 'vf'){
    cuerpo = `<div class="opciones-lista">
      <button type="button" class="opcion-chip" data-accion="responder" data-tipo="vf" data-valor="true"><span class="marca"></span>Verdadero</button>
      <button type="button" class="opcion-chip" data-accion="responder" data-tipo="vf" data-valor="false"><span class="marca"></span>Falso</button>
    </div>`;
  } else if(ej.tipo === 'opcion'){
    cuerpo = `<div class="opciones-lista">
      ${ej.opciones.map((op, i) => `<button type="button" class="opcion-chip" data-accion="responder" data-tipo="opcion" data-valor="${i}"><span class="marca"></span>${escapeHtml(op)}</button>`).join('')}
    </div>`;
  } else if(ej.tipo === 'formula'){
    cuerpo = `<div class="paleta-simb">
      ${['¬','∧','∨','→','↔','(',')'].map(s => `<button type="button" data-accion="insertar-simbolo" data-simbolo="${s}" data-target="in-${sid}">${s}</button>`).join('')}
    </div>
    <input type="text" id="in-${sid}" placeholder="${escapeHtml(ej.placeholder || 'Escribe tu fórmula')}" autocomplete="off">
    <div class="fila-btns-ej"><button type="button" class="btn btn-principal btn-chico" data-accion="comprobar" data-tipo="formula">Comprobar</button></div>`;
  } else if(ej.tipo === 'conjunto'){
    cuerpo = `<input type="text" id="in-${sid}" placeholder="Ejemplo: {1,2,3}" autocomplete="off">
    <div class="fila-btns-ej"><button type="button" class="btn btn-principal btn-chico" data-accion="comprobar" data-tipo="conjunto">Comprobar</button></div>`;
  } else if(ej.tipo === 'numero'){
    cuerpo = `<input type="text" id="in-${sid}" inputmode="numeric" placeholder="Escribe un número" autocomplete="off">
    <div class="fila-btns-ej"><button type="button" class="btn btn-principal btn-chico" data-accion="comprobar" data-tipo="numero">Comprobar</button></div>`;
  }

  return `<div class="tarjeta ejercicio aparece ${yaCorrecto ? 'correcto' : ''}" id="tarjeta-ej-${sid}" data-ej="${escapeHtml(ej.id)}" data-sesion="${sesionId}">
    <div class="cab-ej">
      <span class="num-ej">${escapeHtml(ej.id)}</span>
      <span class="nivel-ej">Nivel ${ej.nivel}${yaCorrecto ? ' · ✓ resuelto' : ''}</span>
    </div>
    <p class="enunciado">${escapeHtml(ej.enunciado)}</p>
    ${cuerpo}
    <div class="resultado-ej ${yaCorrecto ? 'ok' : ''}" id="resultado-${sid}">${yaCorrecto ? '<b>Correcto</b>' + escapeHtml(ej.explicacion) : ''}</div>
  </div>`;
}

function activarListenersPractica(sesionId){
  document.querySelectorAll(`[id^="tarjeta-ej-"]`).forEach(tarjeta => {
    const ejId = tarjeta.getAttribute('data-ej');
    const ej = (EJERCICIOS[sesionId] || []).find(e => e.id === ejId);
    if(!ej) return;

    tarjeta.querySelectorAll('[data-accion="responder"]').forEach(btn => {
      btn.addEventListener('click', () => {
        tarjeta.querySelectorAll('[data-accion="responder"]').forEach(b => b.disabled = true);
        procesarRespuesta(ej, sesionId, tarjeta, btn.getAttribute('data-valor'), btn);
      });
    });
    const btnComprobar = tarjeta.querySelector('[data-accion="comprobar"]');
    if(btnComprobar){
      btnComprobar.addEventListener('click', () => {
        const input = tarjeta.querySelector('input');
        procesarRespuesta(ej, sesionId, tarjeta, input.value, btnComprobar);
      });
    }
  });

  document.querySelectorAll('[data-accion="insertar-simbolo"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.getAttribute('data-target'));
      if(!target) return;
      const start = target.selectionStart ?? target.value.length;
      const end = target.selectionEnd ?? target.value.length;
      const simbolo = btn.getAttribute('data-simbolo');
      target.value = target.value.slice(0, start) + simbolo + target.value.slice(end);
      target.focus();
      const pos = start + simbolo.length;
      target.setSelectionRange(pos, pos);
    });
  });
}

async function procesarRespuesta(ej, sesionId, tarjeta, valor, btnDisparador){
  let correcto = false, respuestaTexto = '';

  if(ej.tipo === 'vf'){
    const v = valor === 'true';
    correcto = v === ej.respuesta;
    respuestaTexto = v ? 'Verdadero' : 'Falso';
  } else if(ej.tipo === 'opcion'){
    const i = parseInt(valor, 10);
    correcto = i === ej.correcta;
    respuestaTexto = ej.opciones[i];
    tarjeta.querySelectorAll('[data-accion="responder"]').forEach((b, idx) => {
      if(idx === ej.correcta) b.style.borderColor = 'var(--morado)';
      if(idx === i && idx !== ej.correcta) b.style.borderColor = '#F0A98C';
    });
  } else if(ej.tipo === 'formula'){
    correcto = checkFormula(ej, valor); respuestaTexto = valor;
  } else if(ej.tipo === 'conjunto'){
    correcto = checkConjunto(ej, valor); respuestaTexto = valor;
  } else if(ej.tipo === 'numero'){
    correcto = checkNumero(ej, valor); respuestaTexto = valor;
  }

  const registro = registrarIntento(sesionId, ej.id, ej.nivel, correcto, respuestaTexto);
  enviarIntento(sesionId, ej.id, ej.nivel, respuestaTexto, correcto, registro.intentos);

  tarjeta.classList.toggle('correcto', correcto);
  tarjeta.classList.toggle('incorrecto', !correcto);
  const resultado = tarjeta.querySelector('.resultado-ej');
  resultado.className = 'resultado-ej ' + (correcto ? 'ok' : 'mal');
  resultado.innerHTML = `<b>${correcto ? 'Correcto' : 'Todavía no — vuelve a intentarlo'}</b>${escapeHtml(ej.explicacion)}`;
  const nivelSpan = tarjeta.querySelector('.nivel-ej');
  if(correcto && nivelSpan && nivelSpan.textContent.indexOf('✓') === -1){
    nivelSpan.textContent += ' · ✓ resuelto';
  }
}

// ----------------------------------------------------------------- Retos ---
function vistaRetos(id){
  const perfil = obtenerPerfil();
  const trayNombre = chipTrayectoriaTexto(perfil.trayectoria);
  return `
    <div class="tarjeta aparece" style="margin-top:14px">
      <p class="eyebrow" style="margin-bottom:6px">Nivel 4 · Auditar</p>
      <p style="font-size:14px;color:var(--gris-texto);margin-bottom:12px">Elige un ejercicio de «Nivel 4» de la pestaña Teoría, resuélvelo y pega aquí tu respuesta. Tu profesor lo revisa directamente.</p>
      ${formularioReto(id, 'auditoria', 'Ejemplo: 5.68')}
    </div>
    <div class="tarjeta aparece" style="margin-top:14px">
      <p class="eyebrow" style="margin-bottom:6px">Banco de tu trayectoria · ${escapeHtml(trayNombre)}</p>
      <p style="font-size:14px;color:var(--gris-texto);margin-bottom:12px">En la pestaña Teoría, busca el bloque de tu trayectoria y resuelve uno de sus ejercicios.</p>
      ${formularioReto(id, 'trayectoria', 'Ejemplo: 5.79')}
    </div>
    <div class="tarjeta aparece" style="margin-top:14px">
      <p class="eyebrow" style="margin-bottom:6px">Tarea de campo</p>
      <p style="font-size:14px;color:var(--gris-texto);margin-bottom:12px">Sal a cazar el ejemplo real que pide esta sesión y transcribe aquí tu hallazgo.</p>
      ${formularioReto(id, 'campo', '')}
    </div>
    ${listaRetosSesion(id)}
  `;
}

function formularioReto(sesionId, categoria, placeholderNumero){
  const uid = `${sesionId}-${categoria}`;
  return `
    ${placeholderNumero !== '' ? `<input type="text" id="num-${uid}" placeholder="${escapeHtml(placeholderNumero)}" style="margin-bottom:9px" autocomplete="off">` : ''}
    <textarea id="txt-${uid}" placeholder="Escribe tu respuesta o tu hallazgo aquí…"></textarea>
    <button type="button" class="btn btn-principal btn-chico" style="margin-top:9px" data-accion="enviar-reto" data-sesion="${sesionId}" data-cat="${categoria}" data-uid="${uid}">Enviar a mi profesor</button>
    <div class="reto-enviado oculto" id="ok-${uid}">✓ Enviado. Aparecerá en tu perfil.</div>
  `;
}

function listaRetosSesion(sesionId){
  const retos = obtenerRetosEnviados().filter(r => String(r.sesion) === String(sesionId));
  if(!retos.length) return '';
  return `<p class="eyebrow" style="margin-top:20px">Ya enviaste en esta sesión</p>
    <section class="tarjeta compacta aparece">
      ${retos.map(r => `<div class="campo"><div style="font-size:12.5px;color:var(--gris-texto)">${r.categoria}${r.numero ? ' · ' + escapeHtml(r.numero) : ''}</div><div style="font-size:14px">${escapeHtml(r.texto).slice(0,180)}${r.texto.length>180?'…':''}</div></div>`).join('')}
    </section>`;
}

function activarListenersRetos(sesionId){
  document.querySelectorAll('[data-accion="enviar-reto"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const uid = btn.getAttribute('data-uid');
      const categoria = btn.getAttribute('data-cat');
      const numeroEl = document.getElementById(`num-${uid}`);
      const textoEl = document.getElementById(`txt-${uid}`);
      const numero = numeroEl ? numeroEl.value.trim() : '';
      const texto = textoEl.value.trim();
      if(texto.length < 4){ textoEl.focus(); return; }

      btn.disabled = true; btn.textContent = 'Enviando…';
      await enviarReto(sesionId, categoria, numero, texto);

      const lista = obtenerRetosEnviados();
      lista.push({ sesion: sesionId, categoria, numero, texto, fecha: new Date().toISOString() });
      guardarRetosEnviados(lista);

      document.getElementById(`ok-${uid}`).classList.remove('oculto');
      btn.textContent = 'Enviado ✓';
      textoEl.value = '';
      if(numeroEl) numeroEl.value = '';
    });
  });
}

// ----------------------------------------------------------------- Buscar ---
function renderBuscar(q){
  montar(`
  ${shellTop('Revisar dudas', 'Busca en toda la teoría del curso', '#/inicio')}
  <div class="lienzo">
    <div class="buscador-caja aparece">
      <span class="ico-lupa">⌕</span>
      <input type="text" id="inputBuscar" placeholder="Ej: contrapositiva, De Morgan, partición…" value="${escapeHtml(q || '')}" autocomplete="off">
    </div>
    <div id="resultadosBuscar"></div>
  </div>
  ${tabbarHtml('buscar')}`);

  const input = document.getElementById('inputBuscar');
  const pintar = () => pintarResultadosBusqueda(input.value.trim());
  input.addEventListener('input', pintar);
  input.focus();
  if(q) pintar();
}

function pintarResultadosBusqueda(q){
  const cont = document.getElementById('resultadosBuscar');
  if(!q || q.length < 2){ cont.innerHTML = '<p class="ayuda" style="padding:10px 0">Escribe al menos dos letras. Busca en la teoría de las 16 sesiones.</p>'; return; }
  const qNorm = q.toLowerCase();
  const resultados = [];
  for(let id = 1; id <= 16; id++){
    const ref = REFERENCIA_SESIONES[id];
    if(!ref) continue;
    const texto = ref.texto;
    const textoNorm = texto.toLowerCase();
    let desde = 0, encontrados = 0;
    while(encontrados < 2){
      const pos = textoNorm.indexOf(qNorm, desde);
      if(pos === -1) break;
      const inicio = Math.max(0, pos - 70);
      const fin = Math.min(texto.length, pos + q.length + 90);
      let frag = texto.slice(inicio, fin).replace(/\n+/g, ' ');
      const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      frag = escapeHtml(frag).replace(re, '<mark>$1</mark>');
      resultados.push({ id, frag: (inicio > 0 ? '…' : '') + frag + (fin < texto.length ? '…' : '') });
      desde = pos + q.length;
      encontrados++;
    }
  }
  if(!resultados.length){ cont.innerHTML = '<p class="ayuda" style="padding:10px 0">No encontré nada con esas palabras. Intenta con otro término.</p>'; return; }
  cont.innerHTML = resultados.map(r => `
    <a href="#/sesion/${r.id}/teoria" class="tarjeta clicable resultado-busq aparece" style="display:block;text-decoration:none">
      <div style="font-size:13.5px;font-weight:640;color:var(--morado-tinta)">Sesión ${r.id} · ${escapeHtml(SESIONES[r.id].titulo)}</div>
      <div class="frag">${r.frag}</div>
    </a>`).join('');
}

// ------------------------------------------------------------- Delegación ---
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-accion="cerrar-sesion"]');
  if(btn){
    if(confirm('¿Cerrar sesión en este dispositivo? Tu avance ya enviado queda guardado en la hoja de tu profesor.')){
      borrarPerfil();
      location.hash = '';
      router();
    }
  }
});

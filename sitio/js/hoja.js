// ============================================================================
// Integración con Google Sheets (Apps Script) + almacenamiento local.
// ============================================================================

/* 1. Pega aquí la URL de tu aplicación web de Apps Script, una vez publicada. */
const URL_APPS_SCRIPT = "PEGA_AQUI_TU_URL_DE_APPS_SCRIPT";

const CLAVE_PERFIL   = 'palc_perfil_v1';
const CLAVE_PROGRESO = 'palc_progreso_v1';
const CLAVE_COLA     = 'palc_cola_envios_v1';
const CLAVE_RETOS    = 'palc_retos_v1';

// ---------------------------------------------------------------- Perfil ---
function obtenerPerfil(){
  try{ return JSON.parse(localStorage.getItem(CLAVE_PERFIL) || 'null'); }
  catch(e){ return null; }
}
function guardarPerfil(perfil){
  localStorage.setItem(CLAVE_PERFIL, JSON.stringify(perfil));
}
function borrarPerfil(){
  localStorage.removeItem(CLAVE_PERFIL);
}

// -------------------------------------------------------------- Progreso ---
function obtenerProgreso(){
  try{ return JSON.parse(localStorage.getItem(CLAVE_PROGRESO) || '{}'); }
  catch(e){ return {}; }
}
function guardarProgreso(p){
  localStorage.setItem(CLAVE_PROGRESO, JSON.stringify(p));
}
function obtenerRetosEnviados(){
  try{ return JSON.parse(localStorage.getItem(CLAVE_RETOS) || '[]'); }
  catch(e){ return []; }
}
function guardarRetosEnviados(lista){
  localStorage.setItem(CLAVE_RETOS, JSON.stringify(lista));
}

function registrarIntento(sesionId, ejercicioId, nivel, correcto, respuesta){
  const p = obtenerProgreso();
  if(!p[sesionId]) p[sesionId] = {};
  const prev = p[sesionId][ejercicioId] || { intentos: 0, correcto: false };
  p[sesionId][ejercicioId] = {
    intentos: prev.intentos + 1,
    correcto: prev.correcto || correcto,
    ultimaRespuesta: respuesta,
    fecha: new Date().toISOString ? isoAhora() : ''
  };
  guardarProgreso(p);
  return p[sesionId][ejercicioId];
}

function isoAhora(){
  // Fecha en formato ISO, sin usar new Date().toISOString() de forma directa
  // por si el entorno la bloquea; aquí sí está disponible (navegador real).
  return new Date().toISOString();
}

function estadisticasSesion(sesionId){
  const lista = EJERCICIOS[sesionId] || [];
  const p = obtenerProgreso()[sesionId] || {};
  const total = lista.length;
  let resueltos = 0;
  lista.forEach(ej => { if(p[ej.id] && p[ej.id].correcto) resueltos++; });
  return { total, resueltos, pct: total ? Math.round((resueltos/total)*100) : 0 };
}

function estadisticasModulo(moduloId){
  const mod = MODULOS.find(m => m.id === moduloId);
  let total = 0, resueltos = 0;
  mod.sesiones.forEach(sid => {
    const s = estadisticasSesion(sid);
    total += s.total; resueltos += s.resueltos;
  });
  return { total, resueltos, pct: total ? Math.round((resueltos/total)*100) : 0 };
}

function estadisticasCurso(){
  let total = 0, resueltos = 0;
  MODULOS.forEach(m => {
    const s = estadisticasModulo(m.id);
    total += s.total; resueltos += s.resueltos;
  });
  return { total, resueltos, pct: total ? Math.round((resueltos/total)*100) : 0 };
}

// ---------------------------------------------------------- Envío a hoja ---
function colaObtener(){
  try{ return JSON.parse(localStorage.getItem(CLAVE_COLA) || '[]'); }
  catch(e){ return []; }
}
function colaGuardar(c){ localStorage.setItem(CLAVE_COLA, JSON.stringify(c)); }
function colaEncolar(fila){
  const c = colaObtener();
  c.push(fila);
  colaGuardar(c);
}

async function enviarFila(fila){
  if(!URL_APPS_SCRIPT || URL_APPS_SCRIPT.indexOf('https://script.google.com/macros/s/AKfycbwysJKSWpQgEn1LnZ6fKxSByrzLXqFnskW6HXIuXpLvL58uzzV8vUD5JSBUdLRsVFPI/exec') === 0){
    return false; // aún no configurado: no truena, simplemente no manda nada
  }
  try{
    await fetch(URL_APPS_SCRIPT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(fila)
    });
    return true;
  }catch(err){
    return false;
  }
}

async function enviarOEncolar(fila){
  const ok = await enviarFila(fila);
  if(!ok) colaEncolar(fila);
  return ok;
}

async function vaciarCola(){
  let c = colaObtener();
  if(!c.length) return;
  const restante = [];
  for(const fila of c){
    const ok = await enviarFila(fila);
    if(!ok) restante.push(fila);
  }
  colaGuardar(restante);
}

function filaBase(tipo){
  const perfil = obtenerPerfil() || {};
  return {
    fecha: new Date().toISOString(),
    nombre: perfil.nombre || '',
    correo: perfil.correo || '',
    matricula: perfil.matricula || '',
    trayectoria: perfil.trayectoria || '',
    tipo,
    sesion: '', ejercicio: '', categoria: '', nivel: '',
    respuesta: '', correcto: '', intento_num: '', comentario: ''
  };
}

function enviarRegistro(){
  const fila = filaBase('registro');
  fila.comentario = 'Alta / inicio de sesión en la plataforma';
  return enviarOEncolar(fila);
}

function enviarIntento(sesionId, ejercicioId, nivel, respuestaTexto, correcto, intentoNum){
  const fila = filaBase('intento');
  fila.sesion = String(sesionId);
  fila.ejercicio = ejercicioId;
  fila.nivel = nivel || '';
  fila.respuesta = respuestaTexto;
  fila.correcto = correcto ? 'sí' : 'no';
  fila.intento_num = intentoNum;
  return enviarOEncolar(fila);
}

function enviarReto(sesionId, categoria, numeroGuia, respuestaTexto){
  const fila = filaBase('reto');
  fila.sesion = String(sesionId);
  fila.categoria = categoria; // 'auditoria' | 'trayectoria' | 'campo'
  fila.ejercicio = numeroGuia || '';
  fila.respuesta = respuestaTexto;
  fila.comentario = 'Pendiente de revisión docente';
  return enviarOEncolar(fila);
}

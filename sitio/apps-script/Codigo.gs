/**
 * Backend de la plataforma "Pensamiento analítico y lógico".
 * Recibe cada evento (registro de alumno, intento de ejercicio, reto abierto)
 * desde la página y lo agrega como fila en la pestaña "Registro" de esta hoja.
 *
 * INSTALACIÓN
 * 1. Abre (o crea) la hoja de cálculo de Google Sheets donde quieres guardar
 *    los datos del curso.
 * 2. Menú Extensiones → Apps Script.
 * 3. Borra el contenido de Código.gs y pega todo este archivo.
 * 4. Guarda (el ícono de disco o Ctrl/Cmd+S).
 * 5. Menú Implementar → Nueva implementación.
 *    - Tipo: Aplicación web.
 *    - Ejecutar como: Yo (tu cuenta).
 *    - Quién tiene acceso: Cualquier usuario.  ← IMPORTANTE, si no, la página
 *      no podrá enviar datos.
 * 6. Copia la URL que te da ("URL de la aplicación web") y pégala en
 *    js/hoja.js, en la constante URL_APPS_SCRIPT.
 * 7. Cada vez que edites este archivo, tienes que publicar una NUEVA
 *    versión (Implementar → Gestionar implementaciones → lápiz de editar →
 *    Versión: Nueva versión → Implementar). Si no, la página sigue hablando
 *    con el código viejo.
 */

const NOMBRE_HOJA = 'Registro';

const ENCABEZADOS = [
  'fecha', 'nombre', 'correo', 'matricula', 'trayectoria',
  'tipo', 'sesion', 'ejercicio', 'categoria', 'nivel',
  'respuesta', 'correcto', 'intento_num', 'comentario'
];

function obtenerHoja_(){
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  let hoja = libro.getSheetByName(NOMBRE_HOJA);
  if(!hoja){
    hoja = libro.insertSheet(NOMBRE_HOJA);
    hoja.appendRow(ENCABEZADOS);
    hoja.setFrozenRows(1);
  }
  return hoja;
}

function doPost(e){
  try{
    const datos = JSON.parse(e.postData.contents);
    const hoja = obtenerHoja_();
    const fila = ENCABEZADOS.map(campo => (datos[campo] === undefined || datos[campo] === null) ? '' : datos[campo]);
    hoja.appendRow(fila);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  }catch(err){
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e){
  return ContentService.createTextOutput('La plataforma del curso está conectada correctamente. Este endpoint solo acepta POST.');
}

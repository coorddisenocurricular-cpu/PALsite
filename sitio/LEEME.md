# Pensamiento analítico y lógico — plataforma del curso

Página complementaria a la guía del curso (`Guía.pdf`). Es a la vez:

- **Plataforma de práctica con retroalimentación automática** — ejercicios tomados
  de la guía, con calificación al instante y explicación de la respuesta correcta.
- **Plataforma de aprendizaje autónomo** — cada sesión trae su teoría completa,
  con ejemplos resueltos, tablas y las cajas de "Cuidado" y "Puente" del manual.
- **Plataforma de referencia para revisar dudas** — un buscador que recorre
  las 16 sesiones y encuentra el tema exacto que el alumno necesita repasar.
- **Panel de seguimiento para el profesor** — cada alumno entra con su correo,
  matrícula y trayectoria; cada intento y cada reto que envía llega a una
  hoja de cálculo de Google, lista para analizar.

Todo el sitio es HTML/CSS/JS puro (sin frameworks, sin paso de compilación):
se puede subir tal cual a GitHub Pages.

## 1. Publicar el sitio en GitHub Pages

1. Sube la carpeta `sitio/` completa a un repositorio de GitHub (puede ser
   la raíz del repositorio, o una carpeta dentro de uno más grande).
2. En el repositorio: **Settings → Pages**.
3. En "Build and deployment" elige **Deploy from a branch**, la rama donde
   subiste los archivos, y la carpeta (`/` si `sitio/` es la raíz del repo,
   o la que corresponda).
4. Guarda. GitHub te da una URL tipo
   `https://tu-usuario.github.io/tu-repositorio/` — ese es el link que
   comparte con tu grupo.

No hace falta ningún paso de build: el sitio funciona con abrir `index.html`.

## 2. Conectar la hoja de Google Sheets

1. Crea una hoja de cálculo nueva en Google Sheets (o usa una que ya tengas
   para el curso).
2. Menú **Extensiones → Apps Script**.
3. Borra el contenido de `Código.gs` que aparece por defecto y pega en su
   lugar todo el contenido de `apps-script/Codigo.gs` (está en esta misma
   carpeta).
4. Guarda el proyecto (ícono de disco).
5. Menú **Implementar → Nueva implementación**.
   - Tipo de implementación: **Aplicación web**.
   - Ejecutar como: **Yo** (tu cuenta).
   - Quién tiene acceso: **Cualquier usuario**. Esto es obligatorio — si
     dejas "Solo yo" o "Cualquier usuario de tu organización", el navegador
     del alumno no podrá enviar datos.
6. Da clic en **Implementar**. Google te va a pedir autorizar permisos la
   primera vez: acepta (es tu propio script, hablando con tu propia hoja).
7. Copia la **URL de la aplicación web** que te entrega.
8. Abre `js/hoja.js` en este proyecto, busca la línea:
   ```js
   const URL_APPS_SCRIPT = "PEGA_AQUI_TU_URL_DE_APPS_SCRIPT";
   ```
   y pega tu URL entre las comillas.
9. Vuelve a subir/guardar `js/hoja.js` en GitHub (si ya habías publicado el
   sitio, solo hace falta actualizar este archivo).

**Importante:** cada vez que edites `Codigo.gs` dentro de Apps Script,
tienes que publicar una **nueva versión** de la implementación
(Implementar → Gestionar implementaciones → lápiz de editar → "Versión:
Nueva versión" → Implementar). Si no, Google sigue usando el código viejo
aunque tú veas el nuevo en el editor.

La hoja crea sola una pestaña llamada **Registro** la primera vez que
alguien manda un dato, con estas columnas:

| columna | qué contiene |
|---|---|
| fecha | marca de tiempo ISO |
| nombre, correo, matricula, trayectoria | datos del alumno que inició sesión |
| tipo | `registro` (entró a la plataforma), `intento` (respondió un ejercicio) o `reto` (envió una respuesta abierta) |
| sesion | número de sesión (1 a 16) |
| ejercicio | id del ejercicio (ej. `2.46`) o el número de la guía que el alumno escribió en un reto |
| categoria | para retos: `auditoria`, `trayectoria` o `campo` |
| nivel | nivel del ejercicio (1 a 4) cuando aplica |
| respuesta | lo que el alumno escribió o eligió |
| correcto | `sí`/`no` para los ejercicios autocalificados |
| intento_num | cuántas veces ha intentado ese ejercicio ese alumno |
| comentario | notas del sistema (p. ej. "Pendiente de revisión docente" en los retos) |

## 3. Analizar el avance en la hoja

Con la pestaña **Registro** ya llenándose, puedes:

- Insertar una **tabla dinámica** (Insertar → Tabla dinámica) con filas =
  `correo`, columnas = `sesion`, valores = "CONTAR de tipo" filtrando
  `tipo = intento` y `correcto = sí`, para ver de un vistazo cuántos
  ejercicios completó cada alumno por sesión.
- Filtrar `tipo = reto` para juntar todas las respuestas abiertas
  (auditorías, banco por trayectoria, tareas de campo) que necesitas leer y
  calificar tú.
- Usar `=COUNTIFS()` o Looker Studio si quieres un tablero más visual — la
  hoja ya está en el formato correcto (una fila por evento) para conectarlo
  directo.

## 4. Qué contiene cada sesión dentro de la plataforma

- **Teoría** — el contenido completo de la guía para esa sesión: ficha de
  la sesión, exposición teórica, tablas, ejemplos resueltos, cajas de
  "Cuidado" y "Puente", los cuatro niveles de ejercicios tal como aparecen
  en el manual, el banco completo por trayectoria (las 7 carreras) y la
  tarea de campo. Es la copia de referencia para repasar cualquier duda.
- **Práctica** — un banco curado de ejercicios de los niveles 1 a 3 de esa
  misma sesión, con calificación automática al instante (verdadero/falso,
  opción múltiple, fórmulas con paleta de símbolos, conjuntos y numéricos).
  No repite los cientos de ejercicios de la guía uno por uno: selecciona los
  que se pueden calificar de forma objetiva y confiable, cubriendo cada
  tema de la sesión.
- **Retos** — tres cuadros de envío abierto: un ejercicio de Nivel 4
  (auditar), un ejercicio del banco de la trayectoria del propio alumno, y
  la tarea de campo. El alumno escribe el número del ejercicio de la guía
  que resolvió y su respuesta; queda enviado a la hoja para que lo revises
  tú, porque son ejercicios de redacción abierta que no se prestan a
  calificación automática.

## 5. Ampliar el banco de ejercicios autocalificados

Todo el banco vive en `js/datos.js`, dentro del objeto `EJERCICIOS`, uno
por sesión. Cada ejercicio es un objeto con esta forma:

```js
{ id:'2.46', tipo:'vf', nivel:1, enunciado:'…',
  respuesta:true, explicacion:'…' }
```

Tipos disponibles: `vf` (verdadero/falso), `opcion` (opción múltiple, con
`opciones` y el índice `correcta`), `formula` (fórmula lógica; acepta una
lista de `respuestas` normalizadas), `conjunto` (conjuntos o listas de
pares; también con lista de `respuestas`), y `numero` (con `respuesta`
numérica). Puedes agregar más ejercicios copiando el patrón: no hace falta
tocar `motor.js`.

## 6. Datos del alumno y privacidad

El nombre, correo y matrícula se guardan únicamente en el navegador del
alumno (`localStorage`) y se envían a tu propia hoja de Google Sheets — no
hay ningún servidor intermedio. Si un alumno usa un dispositivo compartido,
puede cerrar sesión desde "Mi perfil".

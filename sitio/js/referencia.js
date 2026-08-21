// Generado automaticamente a partir de la guia del curso.
const REFERENCIA_SESIONES = {
  1: {
    titulo: `El lenguaje proposicional: formalizar`,
    texto: `Módulo 1 · Lógica proposicional

MÓDULO 1
Lógica proposicional
Este módulo entrena una sola destreza, en tres capas: traducir el español a un lenguaje sin am-
bigüedad, calcular con esa traducción (tablas de verdad) y probar con ella (deducción natural). Al
final del módulo el alumno puede hacer algo que antes no podía: tomar dos reglas escritas por otra
persona y demostrar — no opinar — que no pueden cumplirse a la vez. Ese es el instrumento que el
proyecto integrador le va a pedir usar.
Sesión Lo que el alumno sabrá hacer Herramienta
1 Pasar del español al símbolo sin perder ni inventar información formalización
2 Decidir si una fórmula es siempre verdadera y si un argumento es válido tablas de verdad
3 Encadenar reglas para llegar a una conclusión derivación
4 Probar suponiendo, probar por absurdo, probar por casos subpruebas

---

1 El lenguaje proposicional: formalizar
FICHA DE LA SESIÓN
Semana 1 (Amoxtli 1.1 Lenguaje proposicional y conectivas; 1.2 Formalización)
Meta operativa Al terminar, el alumno formaliza un enunciado compuesto del español —incluidos
los casos tramposos— y justifica por qué esa y no otra es la traducción correcta.
Lectura Redmond, cap. 1, §§1.1.1–1.1.8 (símbolos, proposiciones, conectivas y lenguaje
ordinario, formalización).
Materiales Cinco enunciados cotidianos proyectados; tabla de conectivas impresa o proyectada;
tabla de conversión de notación (frontmatter).
Reparto (3 h) 15 min detonador · 55 min exposición · 90 min ejercicios (niveles 1–3 en clase) · 20
min cierre, encargo de tarea de campo y presentación del proyecto integrador.
DETONADOR APLICADO (15 min)
“Traduce el chisme”. Proyecta estos cinco enunciados y pide al grupo dos cosas, sin usar todavía
ningún símbolo: (i) subrayar cuántas afirmaciones completas hay dentro; (ii) encerrar la palabra
que las une.
1. Si repruebo, no salgo el fin de semana.
2. Vino Ana pero no Luis.
3. O pagas o te vas.
4. No es cierto que si estudio, apruebo.
5. Ni fumo ni bebo.
Cierra con la pregunta que abre la clase: ¿el número 4 dice que estudiar no sirve, o dice que sí sirve
pero no siempre? Que discutan treinta segundos. No resuelvas: anota que en veinte minutos van
a poder decidirlo sin discutir.
Proposición y oración
Una proposición es lo que afirma una oración declarativa completa: aquello de lo que tiene sentido
decir que es verdadero o falso. Ese “verdadero o falso” se llama su valor veritativo.
Quedan fuera de la lógica proposicional, entonces:
• las preguntas ( ¿ya entregaste?),
• los mandatos ( ¡cierra la puerta!),
• las exclamaciones y los deseos ( ¡qué día! / ojalá pase),
• los fragmentos sin verbo conjugado ( la inquietante perspectiva de otra guerra),
• las cadenas agramaticales ( mesa la sobre azul está).
Una proposición puede ser falsa y seguir siendo proposición: 2 + 2 = 5 es una proposición perfecta-
mente respetable. Y una proposición puede ser incomprensible para nosotros y seguir siéndolo: el
tosul está en el mopote tiene forma de aserto, aunque no sepamos qué es un tosul.
CUIDADO
“Prohibido fumar” no es una proposición: es una norma, no afirma un hecho. En cambio “en
este edificio no se puede fumar” sí lo es. Esta distinción parece escolar y no lo es: el proyecto
integrador consiste en auditar reglamentos, y el primer paso siempre es reescribir la norma
como aserto formalizable.
Atómicas y moleculares
Una proposición es atómica si no contiene otra proposición dentro (llueve); es molecular o compuesta
si se forma con otras mediante conectivas (llueve y hace frío).
Para representarlas usamos:
• variables proposicionales p, q, r, s, t: hacen las veces de cualquier proposición. Dentro de un
mismo contexto, la misma letra representa siempre la misma proposición.
• constantes L, D, F, . . .: proposiciones concretas, con letra elegida para recordarlas ( L: llueve;
D: Dulcinea está incómoda; F: hace frío). La lista de estas asignaciones es el diccionario de la
formalización, y siempre se escribe.
Las cinco conectivas
Conectiva Símbolo Forma canónica Expresiones del español
Negación ¬ no p no; no es cierto que; es falso que; carece de; sin
Conjunción ∧ p y q y; pero; sin embargo; aunque; además; mientras que;
ambos
Disyunción ∨ p o q o; y/o; al menos uno de los dos
Implicación → si p, entonces q si. . . entonces;q si p; p solo si q; de ser p, q; p implica q; p
basta para q
Coimplicación ↔ p si y solo si q si y solo si; ssi; equivale a; exactamente cuando; es condi-
ción necesaria y suficiente
En la implicación p → q, la parte p se llama antecedente y q consecuente. El orden importa y no
depende del orden en que aparecen en el español: la cláusula gobernada por “si” va siempre a la
izquierda.
Alcance, paréntesis y fórmulas bien formadas
Una fórmula bien formada (fbf) es una cadena de símbolos permitida por el sistema: una letra sola
es fbf; si A y B son fbf, entonces ¬A, (A ∧ B), (A ∨ B), (A → B) y (A ↔ B) son fbf; nada más lo es.
Así, ¬¬p y ((p → q) ↔ r) son fbf, pero p¬q, p ∧ ∨q y (p →)q no lo son.
Cuando se omiten paréntesis, la convención de precedencia es:
¬ primero; ∧, ∨ después; → luego; ↔ al final.
De modo que ¬p ∧ q significa (¬p) ∧ q y no ¬(p ∧ q); y p ∧ q → r significa (p ∧ q) → r. La
precedencia ahorra tinta, pero no es obligatoria: escribir todos los paréntesis nunca está mal, y al
principio conviene.
CUIDADO
La diferencia entre¬(p → q) y ¬p → q es la diferencia entre “no es cierto que si estudio apruebo”
y “si no estudio, apruebo”. La primera niega la promesa; la segunda hace una promesa absurda.
Ante la duda: paréntesis. Un paréntesis de más no cambia el sentido; uno de menos, sí.
El procedimiento de formalización
Paso 1. Aislar los átomos. Subraya cada afirmación completa que pueda sostenerse sola. Escribe el
diccionario. Nunca metas la negación dentro de la letra: si el enunciado dice “no llueve”, el
átomo es llueve = L y la fórmula es ¬L.
Paso 2. Marcar los conectores. Localiza las palabras que unen y tradúcelas con la tabla.
Paso 3. Armar de adentro hacia afuera, poniendo paréntesis a cada subfórmula compuesta.
Paso 4. Leer de regreso. Traduce tu fórmula al español y compárala con el original. Si no dicen lo
mismo, la fórmula está mal, aunque “se vea bien”.
Ejemplo resuelto 1.1
“No es cierto que si estudio, apruebo.”
Paso 1. Dos átomos: E: estudio; A: apruebo.
Paso 2. Hay dos conectores: “no es cierto que” (¬) y “si. . . ” (→).
Paso 3. La subfórmula interna es E → A. La negación gobierna todo eso: ¬(E → A).
Paso 4. Lectura de regreso: “no es cierto que estudiar lleve a aprobar”. Coincide.
Compárese con ¬E → A, que se leería “si no estudio, apruebo”. No es lo mismo.
Ejemplo resuelto 1.2
“Muero si muero o vivo y no vivo.”
Diccionario: M: muero; V: vivo. La cláusula del “si” es todo lo que sigue: “muero o vivo, y no
vivo”. Adentro, la precedencia agrupa ((M ∨ V) ∧ ¬V). Y esa cláusula es el antecedente:

(M ∨ V) ∧ ¬V

→ M.
Nótese que el consecuente es lo que se dijo primero en español. El orden del español no es el
orden lógico.
Los ocho casos tramposos
Español Fórmula Por qué se equivoca la gente
p pero q / aunque / sin em-
bargo
p ∧ q El contraste es psicológico, no lógico: lógicamente solo
afirma las dos cosas.
ni p ni q ¬p ∧ ¬q Se escribe una sola negación. Son dos.
no p y q (“no ambas”) ¬(p ∧ q) Se confunde con ¬p ∧ ¬q, que dice mucho más.
p a menos que q / salvo que ¬q → p (equiv. p ∨
q)
Se invierte el condicional. “No salgo a menos que deje
de llover”: si no deja de llover, no salgo.
p solo si q p → q “Solo si” introduce el consecuente, no el antecedente.
Es lo contrario de “si”.
q es necesario para p p → q Lo necesario va a la derecha.
q es suficiente para p q → p Lo suficiente va a la izquierda.
q si p (antecedente
posposado)
p → q Se formaliza en el orden en que se leyó. Hay que
reordenar.
PUENTE (la escalera del curso)
Todo lo de esta sesión reaparece tres veces más: la negación de una conjunción (fila 3 de la tabla)
será la ley de De Morgan para conjuntos en la sesión 7; el “si. . . entonces” será la relación de
inclusión ⊆; y las condiciones necesarias y suficientes serán, en la sesión 16, la diferencia entre
una función y su inversa. No es material distinto: es la misma escalera.
NIVEL 1 · Reconocer en voz alta, en grupo, 10–15 min
A. ¿Es proposición? Responde sí o no y, si es no, di por qué (pregunta, mandato, exclamación,
fragmento, agramatical, norma).
1.1 Llueve en Puebla.
1.2 ¡Cierra la puerta!
1.3 ¿Ya entregaste la tarea?
1.4 2 + 2 = 4.
1.5 2 + 2 = 5.
1.6 La lluvia.
1.7 Está lloviendo mucho.
1.8 ¡Qué bonito día!
1.9 Ojalá pase el examen.
1.10 El tosul está en el mopote.
1.11 La muy inquietante perspectiva de otra
guerra mundial.
1.12 No es probable la inquietante perspectiva
de una tercera guerra mundial.
1.13 Mesa la sobre azul Rocinante está.
1.14 Rocinante y don Quijote son geniales.
1.15 Ser o no ser.
1.16 Seré o no seré.
1.17 Prohibido fumar.
1.18 En este edificio no se puede fumar.
1.19 ¡Arriba las manos!
1.20 Alemania no está en México.
B. ¿Cuántos átomos y cuál es la conectiva principal?
1.21 Si repruebo, no salgo el fin de semana.
1.22 Vino Ana pero no Luis.
1.23 O pagas o te vas.
1.24 No es cierto que si estudio, apruebo.
1.25 Ni fumo ni bebo.
1.26 Apruebo si y solo si estudio y entrego el proyecto.
1.27 Si llueve y hace frío, no salgo.
1.28 Llueve y, si llueve, me mojo.
1.29 No llueve o no hace frío.
1.30 Si no pagas la renta, entonces te vas o pides una prórroga.
C. ¿Está bien formada? Di si cada cadena es una fbf. Si no, explica qué le falta o le sobra.
1.31 ¬¬p
1.32 p¬q
1.33 (p → q) ↔ r
1.34 p ∧ ∨q
1.35 ¬(p ∨ q) ∧ r
1.36 (p →)q
1.37 p q →
1.38 ¬(¬(p ∧ q) → ¬r)
NIVEL 2 · Aplicar individual, el docente circula
D. Formaliza Diccionario común: L: llueve; S: hay sol; T: la tierra está seca; M: me mojo; P: traigo
paraguas; N: nieva; F: hace frío; C: hace calor.
1.39 Llueve y hay sol.
1.40 No llueve.
1.41 Si llueve, me mojo.
1.42 Me mojo si llueve.
1.43 La tierra está seca si hay sol.
1.44 Hay sol si la tierra está seca.
1.45 Si hay sol, la tierra está seca y no me mojo.
1.46 Llueve o hay sol.
1.47 Ni llueve ni hay sol.
1.48 Llueve pero no me mojo.
1.49 Si llueve y no traigo paraguas, me mojo.
1.50 Si llueve, entonces si no traigo paraguas me
mojo.
1.51 Me mojo si y solo si llueve y no traigo
paraguas.
1.52 No es cierto que llueva y haga sol.
1.53 Si hace frío, hace frío.
1.54 Si hace frío, entonces si hace calor, hace frío.
1.55 De hacer frío, la tierra está seca.
1.56 No nieva y, sin embargo, hace frío.
1.57 Hace frío o hace calor, pero no los dos.
1.58 Si no hay sol y no llueve, la tierra está seca
solo si no nevó.
E. Formaliza (el mundo de Don Quijote) Diccionario: R: Dulcinea rompe con don Quijote; C: Dulcinea
se casa con Sancho; Q: don Quijote está feliz; A: Sancho está feliz; H: Rocinante es alto; G: Rocinante
es gordo; J: Jaime tiene frío; E: Jaime se resfría.
1.59 Dulcinea rompe con don Quijote pero se casa con Sancho.
1.60 Dulcinea rompe con don Quijote si se casa con Sancho.
1.61 Si Dulcinea rompe con don Quijote y se casa con Sancho, entonces don Quijote está feliz o
Sancho está feliz.
1.62 Rocinante es alto o gordo.
1.63 Rocinante no es ni alto ni gordo.
1.64 Si nieva, Jaime tiene frío y se resfría.
1.65 Jaime tiene frío y se resfría si nieva.
1.66 Don Quijote está feliz si y solo si Dulcinea no se casa con Sancho.
1.67 Muero si muero o vivo y no vivo. (usa M, V)
1.68 Si, si Dulcinea llora relincha Rocinante, y si Rocinante relincha se pone nervioso don Quijote,
entonces si Dulcinea llora don Quijote se pone nervioso. (usa D: Dulcinea llora; B: Rocinante
relincha; K: don Quijote se pone nervioso)
NIVEL 3 · Analizar en parejas: discutir es parte del ejercicio
F. Los casos tramposos
1.69 No salgo a menos que deje de llover.
1.70 Salvo que pagues hoy, cancelamos el pedido.
1.71 Apruebas solo si entregas el proyecto.
1.72 Entregar el proyecto es necesario para aprobar.
1.73 Entregar el proyecto es suficiente para aprobar.
1.74 Puedes pedir el descuento únicamente si eres estudiante y traes credencial.
1.75 No es cierto que ni Ana ni Luis vinieran.
1.76 Ana y Luis no vinieron los dos.
1.77 O vienes conmigo o te quedas, pero no las dos cosas.
1.78 Aunque llueva, saldré.
1.79 Basta con que firmes para que el contrato sea válido.
1.80 Nadie entra sin identificación. (formalízalo como un condicional sobre un individuo cualquiera)
G. Traducción inversa Con el diccionario L: llueve; M: me mojo; P: traigo paraguas, escribe en
español natural (no palabra por palabra) cada fórmula. Después indica cuál de las dos de cada par
dice más.
1.81 ¬(L ∧ P)
1.82 ¬L ∧ ¬P
1.83 (L → M) ∧ (M → L)
1.84 L → (P → ¬M)
1.85 ¬(L → M)
1.86 (L ∨ M) ∧ ¬(L ∧ M)
1.87 ¬L → ¬M
1.88 ¬M → ¬L
NIVEL 4 · Auditar se encarga, se trae resuelto y se defiende
H. Ambigüedad y vacío en reglas reales
1.89 Dos lecturas. Un aviso bancario dice: “Se cobra recargo si no pagas en línea o pagas después del
día 5”. Escribe las dos formalizaciones posibles según dónde caiga el alcance de la negación,
traduce cada una al español y decide cuál quiso decir el banco. Después reescribe el aviso para
que solo admita una lectura.
1.90 El caso frontera. Un reglamento de becas dice: “Obtienen beca los alumnos con promedio mayor a
9 y sin materias reprobadas”. Formalízalo. ¿Qué le pasa a un alumno con promedio exactamente
9? ¿Y a uno con promedio 9.5 que reprobó una materia y la recursó con 10? Señala el vacío y
propón la redacción que lo cierra.
1.91 Redundancia. Un reglamento interno tiene tres reglas: (i) si el gasto excede $10 000, requiere
firma del director; (ii) si el gasto excede $50 000, requiere firma del director; (iii) todo gasto que
requiera firma del director debe registrarse en el sistema. Formaliza las tres y muestra que una
de ellas no aporta nada. ¿Por qué la habrán escrito?
1.92 Diseño inverso. Escribe una regla ambigua de tu propia carrera —una que de verdad se pueda
entender de dos maneras— y después su versión corregida. Entrega ambas formalizadas, y
explica en una línea qué problema práctico causaría la ambigua.
1.93 Auditoría de paréntesis. Estas cinco fórmulas están escritas sin paréntesis, apoyándose solo en
la precedencia. Escríbelas con todos los paréntesis explícitos, y después di si alguna se vuelve
otra fórmula distinta cuando el paréntesis se pone en el otro lugar. Traduce al español las dos
versiones de las que sí cambian:
a) ¬p ∧ q
b) p ∧ q → r
c) p → q ∧ r
d) ¬p → q ↔ r
e) p ∨ q ∧ r
1.94 Caza del “o” exclusivo. Encuentra un letrero, promoción o regla real donde el “o” del español
sea claramente exclusivo (no admita ambas) y otro donde sea inclusivo. Formaliza los dos y
explica cómo se nota la diferencia sin preguntarle al autor.
Banco por trayectoria
Cada alumno resuelve el bloque de su carrera. En la puesta en común se comparan al menos dos
trayectorias distintas.
T1 · DISEÑO Y MODA
1.95 Una ficha técnica dice: “la prenda se produce en talla S solo si el proveedor confirma tela antes
del día 10 y el patrón está liberado”. Formaliza y di qué pasa si el patrón se libera el día 12.
1.96 Formaliza la regla de una colección: “ninguna prenda combina estampado con estampado,
salvo que uno de los dos sea tono sobre tono”.
T2 · GASTRONOMÍA
1.97 “Se sirve vino tinto si el platillo es carne roja o si el comensal lo pide expresamente, pero no
con pescado.” Formaliza y detecta el conflicto potencial.
1.98 Norma de inocuidad: “ningún alimento cocido se almacena sin haber bajado a menos de 21 °C
en dos horas”. Formalízala como condicional.
T3 · DERECHO
1.99 Formaliza un artículo con excepción: “el contrato es válido si consta por escrito y lo firman las
partes, salvo que una de ellas sea menor de edad”.
1.100 “Es necesario el consentimiento de la víctima para que proceda el perdón, pero no es suficiente.”
Formaliza las dos afirmaciones por separado y explica qué agrega la segunda.
T4 · ADMINISTRACIÓN Y NEGOCIOS
1.101 “El descuento de 20% aplica a clientes frecuentes o a compras mayores a $5 000, pero no es
acumulable con otras promociones.” Formaliza.
1.102 “Un gasto se autoriza únicamente si tiene factura y está dentro del presupuesto del área.”
Formaliza, y después formaliza la afirmación distinta “si tiene factura y está en presupuesto,
se autoriza”. ¿Cuál de las dos firmarías como director y por qué?
T5 · NEGOCIOS INTERNACIONALES
1.103 “Requiere visa quien no sea residente permanente ni ciudadano de un país del acuerdo.”
Formaliza cuidando la doble negación.
1.104 En un Incoterm: “el vendedor cubre el flete solo si el término es CFR o CIF; el seguro solo en
CIF”. Formaliza las dos reglas y di si son compatibles.
T6 · INGENIERÍA Y SISTEMAS
1.105 Validación de un formulario: “el registro se acepta si el correo es válido y la contraseña tiene al
menos 8 caracteres, a menos que el usuario entre con cuenta institucional”. Formaliza.
1.106 “Un usuario puede borrar un archivo si es el dueño o es administrador, pero no si el archivo
está bloqueado.” Formaliza y señala el orden de evaluación que la redacción deja sin definir.
T7 · SALUD Y PSICOLOGÍA
1.107 Criterio diagnóstico: “se diagnostica el cuadro si hay al menos dos síntomas mayores, o uno
mayor y dos menores, y persisten más de dos semanas”. Formaliza con M1, M2, m1, m2, P y
decide dónde cae el alcance del “y”.
1.108 Contraindicación: “no se administra el fármaco a pacientes con insuficiencia renal ni a em-
barazadas”. Formaliza y explica por qué la formalización con una sola negación sería peligrosa
en la práctica.
TAREA DE CAMPO
Caza de conectores (8 capturas). Sal a cazar ocho enunciados reales que contengan conectores
lógicos: anuncios, letreros, promociones, avisos de la escuela, mensajes de tu familia, publi-
caciones. No los inventes ni los edites. Para cada uno entrega: foto o transcripción literal →
diccionario → fórmula. Marca con un asterisco el que más te costó y trae listo el argumento de
por qué elegiste esa formalización y no otra: lo vas a defender ante el grupo.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 1 — Arranque. Se presenta “El auditor lógico” y se explica la lógica del proyecto: cada
alumno auditará un sistema de reglas real de su propia carrera. Tarea permanente desde hoy:
coleccionar candidatos. Guarda fotos y notas de todo sistema de reglas que te encuentres —un
reglamento, una guía de tallas, una política de descuentos, un requisito aduanero, un menú,
una validación de una app—. Al llegar a la semana 5 tendrás que traer dos o tres candidatos
y no querrás empezar a buscar ese día. Señal de que un candidato sirve: tiene condicionales,
categorías o asignaciones. Señal de que no sirve: es una lista de gustos.
2. Tablas de verdad: valor, clasificación y validez`
  },
  2: {
    titulo: `Tablas de verdad: valor, clasificación y validez`,
    texto: `2 Tablas de verdad: valor, clasificación y validez
FICHA DE LA SESIÓN
Semanas 2 y 3 (Amoxtli 1.3 Tablas de verdad; 1.4 Tautología, contradicción y equivalencia;
1.5 Validez de argumentos). Sesión doble.
Meta operativa Al terminar, el alumno construye la tabla de una fórmula de hasta tres variables, la
clasifica, prueba una equivalencia y decide la validez de un argumento exhibiendo
el renglón que lo refuta.
Lectura Redmond, §1.11 (sistema de la tabulación) y §1.1.3 (sentido de las conectivas); §1.8
(leyes de De Morgan).
Materiales Batería de compuestos rápidos proyectados; eslóganes y frases “profundas” para el
detonador de la segunda semana; plantillas de tablas vacías impresas (ahorra 20
minutos de trazado).
Reparto Semana 2: 15 min detonador “¿verdadero o falso?” · 50 min conectivas y construc-
ción de tablas · 90 min niveles 1–2 · 15 min cierre. Semana 3: 15 min detonador
“cazador de eslóganes” · 45 min clasificación, equivalencias y validez · 95 min
niveles 3–4 · 25 min puesta en común y encargo.
DETONADOR APLICADO (15 min)
Semana 2 — “¿Verdadero o falso?” relámpago. Fija en el pizarrón p = “hoy es martes” = V y
q = “llueve” = F. Lanza compuestos y el grupo grita el valor, sin escribir nada:
p ∧ q · p ∨ q · ¬ p · p → q · q → p · p ↔ q · ¬ p ∨ q
El sexto y el séptimo generan pelea. El que la gana es q → p: casi todos dirán “falso” y es
verdadero. Ahí paras y empiezas la clase.
Semana 3 — “Cazador de eslóganes”. Proyecta frases que suenan profundas y pregunta si son
siempre verdaderas, pase lo que pase: “o estás con nosotros o contra nosotros”; “lo que será,
será”; “el que no arriesga no gana”; “si no es ahora, ¿cuándo?”. Que voten cuáles son verdaderas
por su pura forma y cuáles esconden una afirmación sustantiva disfrazada de trivialidad.
Las tablas de las conectivas
p q ¬p p ∧ q p ∨ q p → q p ↔ q
V V F V V V V
V F F F V F F
F V V F V V F
F F V F F V V
Leído en una frase cada uno: la conjunción es verdadera solo cuando ambas lo son; la disyunción es
falsa solo cuando ambas lo son; la implicación es falsa solo cuando el antecedente es verdadero y el
consecuente falso; la coimplicación es verdadera solo cuando los dos valores coinciden.
Construir una tabla
1. Cuenta las variables distintas: n. La tabla tiene 2n renglones (2 variables, 4 renglones; 3 variables,
8; 4 variables, 16).
2. Escribe las columnas de las variables en el orden canónico: la primera alterna en bloques de 2n−1,
la siguiente en bloques de 2n−2, y así hasta que la última alterne V F V F. Esto garantiza que no
falte ni sobre ningún caso.
3. Agrega una columna por cada subfórmula, de las más internas a las más externas.
4. La última columna, la de la fórmula completa, es la respuesta.
Ejemplo resuelto 2.1 (p → q) ∧ ¬q
p q p → q ¬q (p →
q) ∧ ¬q
V V V F F
V F F V F
F V V F F
F F V V V
La fórmula es contingente: verdadera solo en el último renglón. Y ese renglón dice algo útil: la
única manera de que se cumpla la promesa p → q y además falle q es que p tampoco se dé. Eso
es modus tollens, que veremos como regla en la sesión 3.
Clasificación
• Tautología: V en todos los renglones. Es verdadera por su pura forma; no dice nada sobre el
mundo. Ejemplo: p ∨ ¬p.
• Contradicción: F en todos. Ejemplo: p ∧ ¬p.
• Contingencia: V en algunos y F en otros. Es el caso de casi todo lo que decimos: depende de
cómo sea el mundo.
Dos fórmulas son lógicamente equivalentes (A ≡ B) si tienen exactamente la misma columna final.
Equivalente es intercambiable: donde diga una, puede decir la otra sin cambiar nada.
Equivalencias notables (se demuestran todas por tabla)
Nombre Equivalencia
Doble negación ¬¬p ≡ p
De Morgan ¬(p ∧ q) ≡ ¬p ∨ ¬q y ¬(p ∨ q) ≡ ¬p ∧ ¬q
Contrapositiva p → q ≡ ¬q → ¬p
Implicación material p → q ≡ ¬p ∨ q
Negación del condicional ¬(p → q) ≡ p ∧ ¬q
Coimplicación p ↔ q ≡ (p → q) ∧ (q → p)
Exportación (p ∧ q) → r ≡ p → (q → r)
Conmutativas p ∧ q ≡ q ∧ p · p ∨ q ≡ q ∨ p
Asociativas (p ∧ q) ∧ r ≡ p ∧ (q ∧ r) (ídem ∨)
Distributivas p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r) (y la dual)
Idempotencia p ∧ p ≡ p · p ∨ p ≡ p
CUIDADO
La contrapositiva de p → q es ¬q → ¬p y es equivalente. Pero ¬p → ¬q —que se le parece—
no lo es: se llama inversa y afirma otra cosa. “Si llueve me mojo” no implica “si no llueve no me
mojo” (puedo caer a la alberca). Es el error que sostiene media discusión pública.
Validez de argumentos
Un argumento es un conjunto de premisas y una conclusión. Es válido cuando es imposible que las
premisas sean todas verdaderas y la conclusión falsa. En una tabla:
El argumento A1, . . ., An ⊢ C es válido si y solo si no existe ningún renglón en el que
todas las Ai valgan V y C valga F. Ese renglón, si existe, se llama contraejemplo y es la
prueba de que el argumento es inválido.
Consecuencia práctica: para mostrar que un argumento es válido hay que revisar toda la tabla; para
mostrar que es inválido basta un renglón. Por eso auditar es más rápido que certificar.
Cuatro formas que hay que reconocer de memoria
Forma Esquema ¿Válida?
Modus ponens p → q, p ⊢ q sí
Modus tollens p → q, ¬q ⊢ ¬p sí
Falacia de afirmación del conse-
cuente
p → q, q ⊢ p no
Falacia de negación del an-
tecedente
p → q, ¬p ⊢ ¬q no
Ejemplo resuelto 2.2 ¿Es válido “si llueve me mojo; me mojé; luego llovió”?
L → M, M ⊢ L.
L M L →
M M L
V V V V V
V F F F V
F V V V F
F F V F F
El tercer renglón tiene las dos premisas en V y la conclusión en F. Es el contraejemplo: me
mojé, no llovió, la promesa se sostiene. Inválido. Y el contraejemplo se puede contar como una
historia: me caí a la alberca. Exigir siempre esa historia es lo que separa al alumno que calcula
del que entiende.
PUENTE (la escalera del curso)
La tabla de ∧ es la misma que la intersección ∩; la de ∨, la de la unión ∪; la de ¬, la del
complemento. Y De Morgan es literalmente la misma ley. En la sesión 7 se demostrará (A ∪
B)c = Ac ∩ Bc y conviene volver aquí ese día: no es analogía, es la misma estructura sobre otro
dominio.
NIVEL 1 · Reconocer en voz alta, en grupo
A. Valor de una fórmula bajo una asignación Con p = V, q = F, r = V, di el valor de:
2.1 p ∧ q
2.2 p ∨ q
2.3 ¬q
2.4 p → q
2.5 q → p
2.6 q → q
2.7 p ↔ q
2.8 ¬p ∨ q
2.9 ¬(p ∧ q)
2.10 (p ∨ q) ∧ r
2.11 p → (q → r)
2.12 (p → q) → r
2.13 ¬p → q
2.14 (p ∧ r) ↔ ¬q
2.15 ¬(q ∨ ¬r)
B. Tablas de una y dos variables Construye la tabla completa:
2.16 ¬¬p
2.17 p ∨ ¬p
2.18 p ∧ ¬p
2.19 p → p
2.20 ¬p ∨ q
2.21 ¬(p ∧ q)
2.22 ¬p ∧ ¬q
2.23 (p → q) → p
NIVEL 2 · Aplicar individual
C. Construye la tabla y clasifica Indica si es tautología, contradicción o contingencia.
2.24 p → (p ∨ q)
2.25 (p ∧ q) → p
2.26 p → (p ∧ q)
2.27 (p ∨ q) → p
2.28 ¬(p ↔ ¬p)
2.29 (p → q) ∨ (q → p)
2.30 (p → q) ∧ (p ∧ ¬q)
2.31 p → (q → p)
2.32 (p → q) → (¬q → ¬p)
2.33 (p ∧ q) ∨ (¬p ∧ ¬q)
2.34 ((p → q) ∧ (q → r)) → (p → r)
2.35 (p ∨ q) ∧ (¬p ∧ ¬q)
2.36 p ∧ (q ∨ r)
2.37 (p → q) ↔ (q → p)
D. Tablas de tres variables
2.38 (p ∧ q) → r
2.39 p → (q → r)
2.40 (p ∨ q) ∧ r
2.41 p ∧ (q ∨ r)
2.42 (p ∧ q) ∨ (p ∧ r)
2.43 (p → q) ∧ (q → r)
2.44 ¬(p ∨ q ∨ r)
2.45 (p ↔ q) ↔ r
NIVEL 3 · Analizar en parejas
E. Demuestra la equivalencia por tabla En cada caso construye las dos columnas y concluye.
2.46 ¬¬p ≡ p
2.47 p → q ≡ ¬q → ¬p
2.48 p → q ≡ ¬p ∨ q
2.49 ¬(p ∧ q) ≡ ¬p ∨ ¬q
2.50 ¬(p ∨ q) ≡ ¬p ∧ ¬q
2.51 ¬(p → q) ≡ p ∧ ¬q
2.52 p ↔ q ≡ (p → q) ∧ (q → p)
2.53 p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)
2.54 Muestra con una tabla que p → q no es equivalente a ¬p → ¬q, y señala el renglón que lo
prueba.
2.55 Muestra que p ∨ q no es equivalente a p ⊻ q (o exclusivo), y di en qué renglón difieren.
F. ¿Válido o inválido? Si es inválido, exhibe el renglón
2.56 p → q, p ⊢ q
2.57 p → q, ¬q ⊢ ¬p
2.58 p → q, q ⊢ p
2.59 p → q, ¬p ⊢ ¬q
2.60 p ∨ q, ¬p ⊢ q
2.61 p ∨ q, p ⊢ ¬q
2.62 p → q, q → r ⊢ p → r
2.63 p → q, r → q ⊢ (p ∨ r) → q
2.64 ¬(p ∧ q), p ⊢ ¬q
2.65 ¬(p ∨ q) ⊢ ¬p
2.66 p ↔ q, ¬q ⊢ ¬p
2.67 p → (q ∨ r), ¬q, ¬r ⊢ ¬p
NIVEL 4 · Auditar se encarga y se defiende
G. Auditoría por tabla
2.68 El reglamento imposible. Un reglamento de laboratorio contiene tres reglas: (i) si el equipo
está encendido, no se puede abrir la tapa; (ii) si la tapa está cerrada, no se puede calibrar;
(iii) hay que calibrar el equipo con el equipo encendido y la tapa abierta. Formaliza las tres,
construye la tabla conjunta y demuestra que no existe ningún renglón en el que las tres sean
verdaderas a la vez. Redacta la corrección mínima: ¿cuál de las tres reglas hay que cambiar y
por qué esa?
2.69 La promesa incumplida. Encuentra una promesa condicional real (publicidad, política pública,
un trato entre amigos) y determina, con la tabla de p → q, el único escenario en que su autor
podría ser acusado de haber mentido. Después señala si en ese caso el autor dejó la promesa
deliberadamente blindada (por ejemplo, con un antecedente que casi nunca se cumple).
2.70 Método abreviado. Muestra que estas fórmulas no son tautologías sin construir la tabla
completa: busca directamente una asignación que las haga falsas y justifícala.
a) (p ∨ q) → (p ∧ q)
b) (p → q) → (q → p)
c) (¬p → ¬q) → (p → q)
d) ((p → q) → p) → p (cuidado: esta sí lo es; explica por qué el método abreviado no encuentra el
contraejemplo)
2.71 Contraejemplo narrado. Toma un argumento real y corto —un tuit, un meme “de lógica”,
el consejo de alguien— formalízalo, decide su validez por tabla y, si es inválido, cuenta el
contraejemplo como una historia concreta de tres líneas. Entrega la tabla y la historia.
2.72 Auditoría de una política de descuentos. Una tienda anuncia: (i) 20% de descuento a clientes
frecuentes; (ii) 20% en compras mayores a $5 000; (iii) los descuentos no son acumulables; (iv)
en temporada de liquidación no aplica ningún descuento. Formaliza las cuatro y busca por
tabla un caso concreto en el que dos reglas se contradigan. Si no lo encuentras, demuéstralo: eso
también es un resultado de auditoría.
2.73 Diseño de una tautología. Escribe una fórmula de tres variables que sea tautología y no sea
ninguna de las de la lista de equivalencias notables. Pruébala por tabla. Después escribe su
“versión eslogan” en español: una frase que suene profunda precisamente porque no dice nada.
Banco por trayectoria
T1 · DISEÑO Y MODA
2.74 Guía de tallas: “es talla M si el busto mide entre 88 y 92 cm y la cadera entre 94 y 98”. Formaliza
con B y C, y construye la tabla. Localiza el renglón que corresponde a una clienta con busto 90
y cadera 100: ¿qué talla le toca según la guía? Si la respuesta es “ninguna”, has encontrado un
vacío.
2.75 Regla de producción: “se corta la prenda si hay tela y hay patrón, pero no si el pedido está en
pausa”. Tabla completa y clasificación.
T2 · GASTRONOMÍA
2.76 Maridaje: “va tinto si es carne roja; va blanco si es pescado; no se sirve tinto con pescado”.
Formaliza y busca por tabla un platillo (renglón) para el que las reglas no digan nada.
2.77 “El postre se sirve si el comensal terminó el plato fuerte o pidió menú degustación.” ¿Es válido
concluir que quien recibió postre terminó el plato fuerte? Decídelo por tabla y nombra la falacia
si la hay.
T3 · DERECHO
2.78 “Procede el recurso si se presentó en tiempo y por escrito. No se presentó por escrito. Luego no
procede.” ¿Válido? Tabla.
2.79 “Si hay dolo, la pena se agrava. No se agravó la pena. Luego no hubo dolo.” ¿Válido? Nombra
la forma. Después audita la versión invertida: “se agravó la pena, luego hubo dolo”.
T4 · ADMINISTRACIÓN Y NEGOCIOS
2.80 “Si el gasto tiene factura, se autoriza. Este gasto se autorizó. Luego tenía factura.” Decide
por tabla y explica al director, en dos líneas, por qué su razonamiento es inválido aunque su
conclusión pueda ser cierta.
2.81 Política: “se paga bono si se cumple la meta de ventas y no hay incidencias; no se paga bono
en periodo de prueba”. Formaliza las dos reglas y busca el caso donde chocan.
T5 · NEGOCIOS INTERNACIONALES
2.82 “Requiere permiso quien exporte bienes de doble uso o bienes a país sancionado. Esta empresa
no exporta a país sancionado. Luego no requiere permiso.” ¿Válido? Exhibe el renglón.
2.83 Reglas de origen: “el bien es originario si el 60% del valor es regional o si sufrió transformación
sustancial; no es originario si solo se reempaquetó”. Tabla y búsqueda de conflicto.
T6 · INGENIERÍA Y SISTEMAS
2.84 Validación: “se acepta el registro si el correo es válido y la contraseña es fuerte”. Escribe la
tabla y conviértela en la tabla de casos de prueba del formulario: cada renglón es un caso que
hay que probar. ¿Cuántos casos hay con tres campos?
2.85 Permisos: “puede borrar si es dueño o administrador; no puede borrar si el archivo está
bloqueado”. Formaliza, construye la tabla de ocho renglones y localiza los renglones donde el
sistema quedaría indefinido según la redacción.
T7 · SALUD Y PSICOLOGÍA
2.86 Triage: “es prioridad roja si hay compromiso de vía aérea o inestabilidad hemodinámica”. ¿Es
válido concluir que un paciente sin compromiso de vía aérea no es prioridad roja? Tabla y
nombre del error.
2.87 Criterio: “se descarta el diagnóstico si no hay síntoma A y no hay síntoma B”. Formaliza, y
aplica De Morgan para reescribir el criterio de la forma más clara posible para una hoja de
protocolo.
TAREA DE CAMPO
Semana 2 — La promesa incumplida. Encuentra una promesa condicional real: publicidad,
oferta política, un trato entre amigos (“si compras hoy, te llevas 2×1”). Escríbela como p → q
con su diccionario y determina el único caso concreto en que la promesa quedaría incumplida.
Trae la foto o transcripción.
Semana 3 — Veredicto con tabla. Busca un argumento real corto —un tuit, un meme “de
lógica”, un consejo que te hayan dado— y ponlo a prueba: formalízalo y usa una tabla de
verdad para decidir si es válido o si nada más suena bien. Entrega la tabla, el veredicto y, si es
inválido, el contraejemplo contado como historia.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semanas 2–3 — La colección se vuelve criterio. Cada promesa condicional y cada argumento
real que capturas es un candidato para el proyecto. A partir de esta semana filtra la colección
con un criterio nuevo: ¿puedo escribir este sistema como un conjunto de reglas y meterlas todas en una
misma tabla? Si sí, es un candidato fuerte, porque la tabla es la herramienta con la que probarás el
hallazgo. Si el sistema tiene más de cuatro variables, la tabla se vuelve impráctica (16 renglones
o más): anótalo, porque en la sesión 4 aprenderás la herramienta que resuelve exactamente ese
caso.`
  },
  3: {
    titulo: `Deducción natural I: las reglas de la prueba`,
    texto: `3 Deducción natural I: las reglas de la prueba
FICHA DE LA SESIÓN
Semana 4 (Amoxtli 1.6 Deducción natural: reglas básicas)
Meta operativa Al terminar, el alumno construye una derivación de tres a seis pasos en formato de
líneas numeradas, justificando cada paso con el nombre de la regla y los números
de los pasos usados.
Lectura Redmond, §§1.2–1.6 y §1.10 (sumario de las reglas). Recuérdale al grupo la nota de
notación del inicio del manual antes de mandarlos al libro.
Materiales Las tres pistas del caso Clue impresas y repartidas; tabla de reglas proyectada
durante toda la sesión (el alumno debe poder verla mientras deriva).
Reparto 15 min detonador · 45 min formato y reglas · 100 min ejercicios (niveles 1–3) · 20
min estrategia y encargo.
DETONADOR APLICADO (15 min)
“Clue con modus ponens”. Reparte impresas estas tres pistas:
Pista 1. Si el arma fue el candelabro, entonces el crimen ocurrió en la biblioteca.
Pista 2. Si el crimen ocurrió en la biblioteca, entonces el culpable es el coronel.
Pista 3. El arma fue el candelabro.
Pide dos cosas: quién es el culpable y, sobre todo, que numeren los pasos y digan de dónde
sacaron cada uno. No aceptes “pues obviamente el coronel”; exige la cadena.
Qué es una derivación
Una tabla de verdad calcula; una derivación prueba. La diferencia importa por dos razones. Primero,
práctica: una fórmula de seis variables requiere 64 renglones y ninguna paciencia humana. Segundo,
conceptual: la derivación muestra por qué la conclusión se sigue, paso por paso, y eso es lo que se
puede mostrar a otra persona para convencerla.
Una derivación es una lista de líneas numeradas. Cada línea tiene una fórmula y unajustificación:
o es una premisa, o se obtiene de líneas anteriores por una regla, y entonces se escribe el nombre de
la regla y los números de las líneas usadas. La última línea es la conclusión.
La regla de oro del formato: si no puedes escribir la justificación, el paso no existe. Un
renglón sin justificación es un renglón inventado, y vale cero. Esta exigencia es la que
convierte “creo que está mal” en “aquí está la prueba de que está mal”.
Las reglas básicas
Casi todas las reglas vienen en pares: una dice cómo introducir una conectiva (cómo construir una
fórmula que la tenga) y la otra cómo eliminarla (qué se puede sacar de una fórmula que la tiene).
Regla De. . . se obtiene Abreviatura
Elim. de la implicación A → B y A ⇒ B E→
Introd. de la conjunción A y B ⇒ A ∧ B I∧
Elim. de la conjunción A ∧ B ⇒ A (o B) E∧
Introd. de la disyunción A ⇒ A ∨ B I∨
Elim. de la coimplicación A ↔ B ⇒ A → B E↔
Introd. de la coimplicación A → B y B → A ⇒ A ↔ B I↔
Reiteración A ⇒ A (más abajo) reit
Derivadas (se pueden probar con las anteriores; se permiten como atajo):
Modus tollens A → B y ¬B ⇒ ¬A MT
Silogismo disyuntivo A ∨ B y ¬A ⇒ B SD
Silogismo hipotético A → B y B → C ⇒ A → C SH
CUIDADO
Dos advertencias sobre I∨: primero, es la regla que más desconcierta, porque de A se puede
concluir A ∨ B con cualquier B —“llueve, luego llueve o soy el rey de China”— y eso es correcto:
la disyunción pide solo que al menos una sea verdadera. Segundo, funciona en un solo sentido:
de A ∨ B no se puede sacar A. La eliminación de la disyunción es harina de otro costal y se ve
en la sesión 4.
Y una advertencia sobre E∧: de A ∧ B se puede sacar A, y también B, pero en pasos separados,
cada uno con su justificación.
Tres derivaciones resueltas
Ejemplo resuelto 3.1 p → q, q → r, p ⊢ r (el caso Clue)
1. p → q prem.
2. q → r prem.
3. p prem.
4. q E→ 1,3
5. r E→ 2,4
Es literalmente el detonador. Vale la pena escribirlo justo después de borrar la versión en
español: la misma prueba, cambiada de ropa.
Ejemplo resuelto 3.2 p → q, p ∧ r ⊢ q ∧ r
1. p → q prem.
2. p ∧ r prem.
3. p E∧ 2
4. r E∧ 2
5. q E→ 1,3
6. q ∧ r I∧ 5,4
Nótese el patrón: para usar una conjunción hay que romperla primero (pasos 3 y 4); paraproducir
una, hay que tener las dos partes por separado (paso 6). Casi toda derivación con conjunciones
tiene esta forma de reloj de arena: se desarma y se rearma.
Ejemplo resuelto 3.3 p → q, ¬q ⊢ ¬p ∨ s
1. p → q prem.
2. ¬q prem.
3. ¬p MT 1,2
4. ¬p ∨ s I∨ 3
La conclusión tiene un s que no aparece en ninguna premisa. Eso es señal inequívoca de I∨: es
la única regla que mete material nuevo. Aprender a leer estas señales es la estrategia.
Estrategia: leer la meta
No se deriva hacia adelante a ciegas. Se mira la conclusión y se pregunta qué regla la produce:
Si la meta es. . . la regla que la produce es. . . luego hay que conseguir. . .
A ∧ B I∧ A y B por separado
A ∨ B I∨ A (o bien B): solo una
A ↔ B I↔ las dos implicaciones
una letra sola E→, E∧, SD la premisa que la contenga
A → B I→ (sesión 4: abrir un supuesto)
¬A MT o I¬ (sesión 4: absurdo)
Y en paralelo, hacia adelante: mira cada premisa y pregúntate qué se puede sacar de ella ya. Las
conjunciones se rompen siempre; las coimplicaciones se convierten en implicaciones siempre; una
implicación no sirve hasta que tengas su antecedente.
NIVEL 1 · Reconocer en voz alta, en grupo
A. ¿Qué se puede sacar de aquí? Dadas las premisas, escribe una consecuencia inmediata con su
justificación. Si no se puede sacar nada, escribe “nada” y explica qué falta.
3.1 1. p 2. p → q
3.2 1. p → q
3.3 1. p ∧ q
3.4 1. r → t 2. r
3.5 1. p → q 2. q
3.6 1. p ∧ q 2. p → s
3.7 1. p ↔ q 2. p
3.8 1. p 2. q
3.9 1. p ∨ q 2. ¬p
3.10 1. p → q 2. ¬q
3.11 1. r → (s ∧ t) 2. r
3.12 1. p
B. Nombra la regla de cada paso
1. (p ∧ q) → r prem.
2. p prem.
3. q prem.
4. p ∧ q ?
5. r ?
6. r ∨ s ?
1. p ↔ q prem.
2. ¬q prem.
3. p → q ?
4. ¬p ?
5. ¬p ∧ ¬q ?
3.13 Completa las tres justificaciones de la primera derivación.
3.14 Completa las tres justificaciones de la segunda.
3.15 En la primera derivación, ¿podría el paso 4 haberse escrito antes del paso 3? ¿Por qué no?
NIVEL 2 · Aplicar individual
C. Derivaciones cortas (2 a 4 pasos después de las
premisas)
3.16 p → q, p ⊢ q
3.17 p ∧ q ⊢ q
3.18 p, q ⊢ p ∧ q
3.19 p ⊢ p ∨ q
3.20 p → q, ¬q ⊢ ¬p
3.21 p ∨ q, ¬q ⊢ p
3.22 p ↔ q, q ⊢ p
3.23 p → q, q → r, p ⊢ r
3.24 p ∧ q, p → r ⊢ r
3.25 p → (q ∧ r), p ⊢ q
3.26 p → q, p ⊢ p ∧ q
3.27 (p ∧ q) → r, p, q ⊢ r
3.28 p → q, r → s, p ∧ r ⊢ q ∧ s
3.29 p ↔ q, p → r, q ⊢ r
3.30 p → q, p ⊢ q ∨ s
D. Traduce y deriva Formaliza primero (escribe el diccionario), después deriva.
3.31 Premisas: la tierra está seca si no llueve; no llueve. Conclusión: la tierra está seca.
3.32 Premisas: si llueve me mojo; si me mojo me enfermo; llueve. Conclusión: me enfermo.
3.33 Premisas: si entrego el proyecto apruebo; no aprobé. Conclusión: no entregué el proyecto.
3.34 Premisas: Rocinante es alto y gordo. Conclusión: Rocinante es gordo o es rápido.
3.35 Premisas: si Dulcinea se casa con Sancho, don Quijote llora; Dulcinea se casa con Sancho y
Rocinante relincha. Conclusión: don Quijote llora y Rocinante relincha.
3.36 Premisas: no es cierto que llueva o granice; si no es cierto que llueva o granice, hay sol.
Conclusión: hay sol.
NIVEL 3 · Analizar en parejas
E. Derivaciones medias (5 a 9 pasos)
3.37 p → q, q → r, r → s, p ⊢ s
3.38 p ∧ q, (p ∧ q) → (r ∧ s) ⊢ s ∧ p
3.39 p → q, p → r, p ⊢ q ∧ r
3.40 (p ∨ q) → r, p ⊢ r
3.41 p ↔ q, q ↔ r, p ⊢ r
3.42 p → q, r → ¬q, p ⊢ ¬r
3.43 p ∧ (q ∨ r), ¬q, (p ∧ r) → s ⊢ s
3.44 (p → q) ∧ (q → r), p ∨ t, ¬t ⊢ r
3.45 p → (q → r), p, q ⊢ r ∨ s
3.46 p ↔ (q ∧ r), p ⊢ q ∧ r y después, del mismo, ⊢ r ∧ q.
F. Encuentra el error Cada derivación tiene exactamente un paso mal. Señálalo y explica qué regla se
violó.
3.47
1. p → q prem.
2. q prem.
3. p E→ 1,2
3.48
1. p ∨ q prem.
2. p E∨ 1
3.49
1. p → q prem.
2. p ∧ q I∧ 1
3.50
1. p ∧ q prem.
2. r prem.
3. q ∧ r I∧ 1,2
3.51
1. p ↔ q prem.
2. ¬p prem.
3. ¬q MT 1,2
NIVEL 4 · Auditar se encarga y se defiende
3.52 ¿Quién mató a Lord Bluebottom? Hay tres sospechosos: el cuñado ( C), la sobrina ( S) y el
joven capitán (J). Además, T: el té contenía cianuro. Las pistas son las premisas:
a) El té contenía cianuro o Lord Bluebottom fue asesinado por su cuñado.
b) Si lo asesinó su cuñado, entonces su sobrina no lo asesinó.
c) El té no contenía cianuro si el joven capitán no es el asesino.
d) Si la sobrina no lo asesinó, entonces no fue el cuñado o el asesino es el joven capitán.
Formaliza, deduce quién fue y entrega la derivación completa. No basta nombrar al culpable:
hay que probarlo.
3.53 Auditoría de un reglamento por derivación.Toma cuatro reglas condicionales de un reglamento
real de tu carrera, formalízalas como premisas y deriva una consecuencia que el reglamento no
dice pero implica. Esa consecuencia oculta es tu hallazgo. Entrega premisas, derivación y una
línea explicando por qué a alguien le importaría.
3.54 Cadena larga. p → q, q → r, r → s, s → t, ¬t ⊢ ¬p. Derívalo con MT y después sin usar MT
(solo con E→ y las reglas básicas, apoyándote en las contrapositivas que necesites justificar).
¿Cuántos pasos ahorra la regla derivada?
3.55 T u propio caso Clue.Construye un acertijo con cuatro pistas condicionales sobre un hecho de
tu vida o tu carrera, tal que la solución requiera al menos tres aplicaciones de reglas distintas.
Entrega el acertijo sin solución para intercambiarlo con un compañero, y la solución en hoja
aparte.
3.56 Tabla contra derivación. Toma el argumento p → q, q → r, p ⊢ r y pruébalo de las dos
maneras: con tabla de verdad y con derivación. Después escribe medio párrafo comparando:
¿cuál te convenció más? ¿cuál sería impracticable si hubiera ocho variables?
3.57 Reglas prescindibles. Muestra que el silogismo disyuntivo (A ∨ B, ¬A ⊢ B) no es indispens-
able: deriva B usando solamente reglas básicas. Pista: necesitarás algo de la sesión 4; deja este
ejercicio abierto y regresa a él la próxima semana.
Banco por trayectoria
T1 · DISEÑO Y MODA
3.58 Premisas: si el proveedor confirma la tela, se libera el patrón; si se libera el patrón, entra a corte;
el proveedor confirmó. Deriva que entra a corte y di cuántos pasos te tomó.
3.59 Premisas: si la prenda no pasa control de calidad, no se embarca; se embarcó. Deriva qué sabes
con certeza sobre el control de calidad.
T2 · GASTRONOMÍA
3.60 Premisas: si el pescado no está a menos de 4 °C, se descarta; no se descartó. Deriva la
temperatura y nombra la regla.
3.61 Premisas: si el platillo lleva crema y el comensal es intolerante, entonces hay que sustituir; el
platillo lleva crema; el comensal es intolerante. Deriva y señala en qué paso usaste I∧.
T3 · DERECHO
3.62 Premisas: si el recurso se presenta en tiempo y por escrito, procede; se presentó en tiempo; se
presentó por escrito. Deriva la procedencia.
3.63 Premisas: si procede el recurso, se suspende el acto; no se suspendió el acto. Deriva y nombra la
forma. Después explica por qué el razonamiento inverso (“se suspendió el acto, luego procedía
el recurso”) no tiene regla.
T4 · ADMINISTRACIÓN Y NEGOCIOS
3.64 Premisas: si el gasto excede el presupuesto, requiere firma del director; si requiere firma del
director, se registra en el sistema; este gasto excede el presupuesto. Deriva que se registra en el
sistema.
3.65 Premisas: el cliente es frecuente y su compra excede $5 000; si es frecuente o excede $5 000,
aplica descuento. Deriva el descuento. ¿En qué paso te hizo falta I∨ y por qué se siente extraño?
T5 · NEGOCIOS INTERNACIONALES
3.66 Premisas: si el bien es de doble uso, requiere licencia; si requiere licencia, no sale sin autor-
ización previa; el bien es de doble uso. Deriva.
3.67 Premisas: el término es CIF o es CFR; no es CFR; si es CIF, el vendedor paga seguro y flete.
Deriva que el vendedor paga el seguro.
T6 · INGENIERÍA Y SISTEMAS
3.68 Premisas: si el usuario está autenticado y tiene permiso, accede; está autenticado; tiene permiso.
Deriva el acceso y escribe la derivación como los comentarios de una función de tres líneas.
3.69 Premisas: si la prueba unitaria falla, el pipeline se detiene; el pipeline no se detuvo. Deriva y
explica por qué esta forma es la base de la depuración por eliminación.
T7 · SALUD Y PSICOLOGÍA
3.70 Premisas: si hay fiebre y hay foco infeccioso, se inicia antibiótico; hay fiebre; hay foco infeccioso.
Deriva.
3.71 Premisas: si el paciente tuviera la condición, la prueba saldría positiva; la prueba salió negativa.
Deriva y nombra la regla. Después audita: ¿qué supuesto médico oculto hace falta para que la
primera premisa sea verdadera? (Pista: sensibilidad del 100%.)
TAREA DE CAMPO
T u caso Clue.Formula tu propio caso con tres pistas condicionales sobre tu día —“si me desvelo,
no desayuno; si no desayuno, ando de malas; me desvelé”— y resuélvelo en pasos numerados
con la regla nombrada en cada uno. Trae dos copias: una sin solución, para intercambiar con un
compañero, y una con solución para entregar.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 4 — Los condicionales encadenados. Revisa tu colección buscando específicamente
cadenas: sistemas donde una regla activa otra, que activa otra (“si excede el monto, requiere
firma; si requiere firma, se registra; si se registra, se audita”). Estos sistemas son los mejores
candidatos para el proyecto, porque tienen consecuencias ocultas: cosas que el reglamento
implica sin decirlas, y que se descubren solamente derivando. Un hallazgo de ese tipo —“su
reglamento obliga a algo que sus autores no escribieron”— es de la máxima calificación en el
criterio de auditoría.`
  },
  4: {
    titulo: `Deducción natural II: supuestos, absurdo y casos`,
    texto: `4 Deducción natural II: supuestos, absurdo y casos
FICHA DE LA SESIÓN
Semanas 5 y 6 (Amoxtli 1.7 Prueba condicional y reducción al absurdo; 1.8 Prueba por casos
y dilemas; repaso integrador). Sesión doble. Cierra el módulo y el primer parcial.
Meta operativa Al terminar, el alumno abre y cierra correctamente una subprueba, demuestra un
teorema sin premisas, prueba por reducción al absurdo y resuelve un caso por
disyunción.
Lectura Redmond, §1.3.2 (introducción de la implicación), §1.6.1 (eliminación de la disyun-
ción), §1.7 (negación), §1.8 (leyes de De Morgan), §1.9 (reglas derivadas).
Materiales Reto del mapa 1:1; acertijo de caballeros y escuderos; examen del primer parcial
(semana 6); tabla completa de reglas.
Reparto Semana 5: 15 min detonador · 50 min subpruebas, I→ y I¬ · 90 min niveles 1–3 · 25
min integración del portafolio. Semana 6: 15 min detonador · 35 min prueba por
casos y dilemas · 30 min repaso integrador · 60 min evaluación del primer parcial ·
40 min niveles 3–4 y cierre del módulo.
DETONADOR APLICADO (15 min)
Semana 5 — “Suponiendo lo contrario”. Plantea el reto: “demuestren que no puede existir, dentro
de la ciudad, un mapa perfecto de la ciudad a escala 1:1” . Deja que supongan que sí existe y que
lleguen solos al absurdo (el mapa tendría que contener un mapa, que contendría un mapa. . . ).
No des la respuesta: lo único que necesitas es que el grupo experimente que se puede probar algo
suponiendo lo contrario.
Semana 6 — “Caballeros y escuderos”. En una isla, los caballeros siempre dicen la verdad y los
escuderos siempre mienten. Te encuentras a dos habitantes y uno dice: “al menos uno de nosotros
dos es escudero”. ¿Qué es cada uno? Pide que resuelvan considerando los dos casos posibles por
separado.
Subpruebas: suponer sin afirmar
Hasta ahora todas las líneas eran afirmaciones: premisas o consecuencias de premisas. La herramienta
nueva es suponer: escribir una fórmula sin afirmarla, ver qué se sigue de ella, y sacar una conclusión
sobre la suposición misma.
Una subprueba se abre con un supuesto, se marca con una barra vertical que indica su alcance, y
se cierra. Dentro de ella se puede usar todo lo que esté afuera y arriba (reiterándolo si hace falta).
Fuera de ella no se puede usar nada de lo que ocurrió dentro: eso solo era verdadero bajo el supuesto.
La regla del alcance. Una vez cerrada una subprueba, sus líneas internas están muertas:
no se pueden citar. Lo único que sobrevive es la conclusión que la regla de cierre autoriza
a escribir afuera. Violar esto es el error número uno de esta sesión y es un cero, no un
descuento: equivale a afirmar como probado algo que solo se había supuesto.
Introducción de la implicación (prueba condicional)
Regla I→. Para probar A → B: se abre una subprueba suponiendo A; si dentro se logra derivar B, se
cierra y se escribe A → B afuera, justificando con el rango de líneas de la subprueba.
Ejemplo resuelto 4.1 p → q, q → r ⊢ p → r (silogismo hipotético)
1. p → q prem.
2. q → r prem.
3. p sup.
4. q E→ 1,3
5. r E→ 2,4
6. p → r I→ 3–5
Es el ejercicio A53 de Redmond, el de la oración imposible de leer en español. Aquí cabe en siete
líneas. Conviene proyectar las dos versiones juntas.
Ejemplo resuelto 4.2 ⊢ p → (q → p) (un teorema: sin premisas)
1. p sup.
2. q sup.
3. p reit 1
4. q → p I→ 2–3
5. p → (q → p) I→ 1–4
Una derivación sin premisas prueba una tautología. Nótese la reiteración en el paso 3: p está
disponible porque la subprueba interna vive dentro de la que lo supuso. Y nótese el orden de
cierre: primero se cierra la de adentro. Las subpruebas son como los paréntesis: la última que se
abre es la primera que se cierra.
Introducción de la negación (reducción al absurdo)
Regla I¬. Para probar ¬A: se supone A; si dentro se derivan una fórmula y su negación —es decir,
una contradicción, que escribimos ⊥— se cierra y se escribe ¬A afuera.
Regla E¬. Simétrica: si suponiendo ¬A se llega a contradicción, se concluye A. Junto con DN
(¬¬A ≡ A) es lo que permite probar afirmaciones positivas por absurdo.
Ejemplo resuelto 4.3 ⊢ ¬¬p → p
1. ¬¬p sup.
2. ¬p sup.
3. ⊥ I⊥ 1,2
4. p E¬ 2–3
5. ¬¬p → p I→ 1–4
El paso 3 es el corazón: tener ¬¬p y ¬p a la vez es tener una fórmula y su negación. De ahí,
absurdo.
Ejemplo resuelto 4.4 De Morgan: ⊢ ¬(p ∨ q) → (¬p ∧ ¬q)
1. ¬(p ∨ q) sup.
2. p sup.
3. p ∨ q I∨ 2
4. ⊥ I⊥ 1,3
5. ¬p I¬ 2–4
6. q sup.
7. p ∨ q I∨ 6
8. ⊥ I⊥ 1,7
9. ¬q I¬ 6–8
10. ¬p ∧ ¬q I∧ 5,9
11. ¬(p ∨ q) → (¬p ∧ ¬q) I→ 1–10
Dos subpruebas hermanas con la misma estructura, y una I∧ al final. Es la misma ley que en la
sesión 7 se demostrará para conjuntos como (A ∪ B)c = Ac ∩ Bc.
Eliminación de la disyunción (prueba por casos)
Regla E∨. Si se tiene A ∨ B, y por separado se prueba que de A se sigue C y que de B se sigue C,
entonces se concluye C. Dos subpruebas, una por caso, misma conclusión en ambas.
Ejemplo resuelto 4.5 p ∨ q, p → r, q → r ⊢ r (dilema constructivo)
1. p ∨ q prem.
2. p → r prem.
3. q → r prem.
4. p sup.(caso 1)
5. r E→ 2,4
6. q sup.(caso 2)
7. r E→ 3,6
8. r E∨ 1, 4–5, 6–7
Este es el esquema de razonamiento más útil de todo el módulo para el proyecto: pase lo que
pase, ocurre C. Si un reglamento tiene dos vías y las dos llevan al mismo resultado, el resultado
es inevitable aunque el reglamento no lo diga.
Tabla de estrategia completa
Si la meta es intenta cómo se ve
A → B I→ supón A, consigue B
¬A I¬ supón A, busca contradicción
A (positiva, y no
sale directo)
E¬ supón ¬A, busca contradicción
A ∧ B I∧ consigue las dos por separado
A ∨ B I∨ consigue una de las dos
A ↔ B I↔ dos subpruebas, una por dirección
cualquier meta, si
tienes una disyun-
ción
E∨ dos casos, misma conclusión
NIVEL 1 · Reconocer en voz alta, en grupo
A. ¿Qué subprueba hay que abrir? Para cada meta, di qué se supone y qué hay que conseguir dentro.
4.1 p → q
4.2 ¬p
4.3 (p ∧ q) → r
4.4 p → (q → r)
4.5 ¬(p ∧ q)
4.6 p ↔ q
4.7 p (por absurdo)
4.8 ¬¬p
B. Violaciones de alcance En cada derivación, di si el paso final es legítimo.
4.9
1. p sup.
2. p ∨ q I∨ 1
3. p ∨ q reit 2
4.10
1. p sup.
2. p ∨ q I∨ 1
3. p → (p ∨ q) I→ 1–2
4.11
1. p → q prem.
2. p sup.
3. q E→ 1,2
4. q reit 3
NIVEL 2 · Aplicar individual
C. Prueba condicional
4.12 p → q ⊢ p → (p ∧ q)
4.13 q ⊢ p → q
4.14 p ∧ q ⊢ p → q
4.15 ⊢ p → p
4.16 ⊢ p → (q → p)
4.17 p → (q → r) ⊢ (p ∧ q) → r
4.18 (p ∧ q) → r ⊢ p → (q → r)
4.19 p → q, q → r ⊢ p → r
4.20 p → q ⊢ (q → r) → (p → r)
4.21 ⊢ (p → q) → ((q → r) → (p → r))
4.22 p ∨ q ⊢ ¬p → q
4.23 ⊢ (p ∧ q) → (q ∧ p)
D. Reducción al absurdo
4.24 ⊢ ¬(p ∧ ¬p)
4.25 p ⊢ ¬¬p
4.26 ⊢ ¬¬p → p
4.27 p → q, ¬q ⊢ ¬p (deriva MT, no lo uses)
4.28 p → ¬p ⊢ ¬p
4.29 ¬p ⊢ ¬(p ∧ q)
4.30 ¬(p ∨ q) ⊢ ¬p
4.31 p → q ⊢ ¬(p ∧ ¬q)
4.32 ⊢ ¬(p ↔ ¬p)
4.33 p ∨ q, ¬p ⊢ q (deriva SD, no lo uses)
NIVEL 3 · Analizar en parejas
E. Casos, dilemas y teoremas
4.34 p ∨ q, p → r, q → r ⊢ r
4.35 p ∨ q, p → r, q → s ⊢ r ∨ s (dilema constructivo complejo)
4.36 p ∨ q ⊢ q ∨ p
4.37 (p ∨ q) ∨ r ⊢ p ∨ (q ∨ r)
4.38 p ∧ (q ∨ r) ⊢ (p ∧ q) ∨ (p ∧ r)
4.39 ⊢ (p ∨ q) → ¬(¬p ∧ ¬q)
4.40 ⊢ (p ∧ q) → ¬(¬p ∨ ¬q)
4.41 ⊢ ¬(p ∧ q) → (¬p ∨ ¬q) (la mitad difícil de De Morgan: requiere absurdo dentro de casos)
4.42 ⊢ (p → q) → (¬p ∨ q)
4.43 ¬p ∨ q ⊢ p → q
4.44 ⊢ p ∨ ¬p
4.45 ⊢ (p → q) ∨ (q → p)
4.46 ((p ∨ q) ∧ ¬p) ⊢ q
4.47 ⊢ ((p → q) → p) → p (ley de Peirce: el reto del bloque)
NIVEL 4 · Auditar cierre del módulo
4.48 Lord Bluebottom, ahora sí. Retoma el ejercicio 3.20 y entrega la derivación formal completa,
con subpruebas, de quién mató a Lord Bluebottom.
4.49 Caballeros y escuderos formalizado. Formaliza el detonador de la semana 6 —C1: el primero
es caballero; C2: el segundo es caballero; y la afirmación “al menos uno es escudero” es
¬C1 ∨ ¬C2— junto con la regla de la isla (lo que dice un caballero es verdadero; lo que dice un
escudero es falso) y deriva formalmente la solución.
4.50 Consecuencia oculta. Toma el sistema de reglas que elegiste para el proyecto y deriva de él una
consecuencia que sus autores no escribieron. Entrega: las reglas formalizadas, la derivación
con subpruebas, y un párrafo explicando por qué esa consecuencia le importaría a quien aplica
el reglamento.
4.51 Prueba de inconsistencia. Si tu sistema tiene un conflicto, pruébalo del modo más fuerte
posible: supón que todas sus reglas se cumplen a la vez y deriva ⊥. Una derivación de ⊥ a
partir de las reglas de un reglamento es la demostración de que el reglamento es imposible de
cumplir. Es el hallazgo de máxima calificación.
4.52 T u “pelea” formalizada.Toma una discusión real que hayas tenido o presenciado esta semana.
Entrega: los enunciados de las dos partes formalizados, y una derivación que muestre si la
conclusión se seguía o no de las premisas. Si no se seguía, identifica exactamente qué le faltaba
al argumento: una premisa oculta, una falacia con nombre, o una ambigüedad.
4.53 Auditoría cruzada. Intercambia tu sistema formalizado con un compañero de otra carrera.
Cada uno audita el del otro y entrega un dictamen de media página: qué encontró, con qué
herramienta lo probó, y qué corrección propone. Después compara: ¿encontró tu compañero
algo que tú no viste? ¿Por qué?
Banco por trayectoria
T1 · DISEÑO Y MODA
4.54 Una guía de tallas asigna talla por busto o por cadera. Formaliza y prueba por casos que toda
clienta recibe alguna talla —o encuentra el caso en que no, y prueba que no la recibe.
4.55 Prueba por absurdo: “si esta prenda se produjera en talla XS, el consumo de tela sería menor al
mínimo del proveedor; luego no se produce en XS”.
T2 · GASTRONOMÍA
4.56 El menú ofrece entrada de pescado o de carne, y en ambos casos el maridaje incluye vino.
Prueba por casos que todo comensal recibe vino.
4.57 Prueba por absurdo que un platillo no puede estar a la vez en la cámara de refrigeración y en
servicio caliente, dadas las reglas de temperatura.
T3 · DERECHO
4.58 Un artículo con dos supuestos (“procede por vía A o por vía B”) y una consecuencia común.
Prueba por casos que la consecuencia es inevitable, y explica por qué esta estructura es la del
dilema en litigio.
4.59 Reductio en derecho: reconstruye formalmente un argumento del tipo “si se admitiera esa in-
terpretación, entonces cualquiera podría. . . , lo cual es absurdo”. Identifica cuál es exactamente
la contradicción y con qué premisa choca.
T4 · ADMINISTRACIÓN Y NEGOCIOS
4.60 “Todo gasto se aprueba por el director o por el comité; en cualquiera de los dos casos queda
registrado.” Prueba por casos que todo gasto aprobado queda registrado.
4.61 Prueba de inconsistencia: formaliza una política que prohíbe acumular descuentos junto con
dos reglas que otorgan descuento por causas distintas, y deriva ⊥ para el cliente que cumple
ambas.
T5 · NEGOCIOS INTERNACIONALES
4.62 “El bien es originario por contenido regional o por transformación sustancial; en ambos casos
accede a preferencia arancelaria.” Prueba por casos.
4.63 Prueba condicional: demuestra que “si el término es CIF, entonces el vendedor paga seguro”
se sigue de las reglas del Incoterm que formalizaste, abriendo el supuesto correspondiente.
T6 · INGENIERÍA Y SISTEMAS
4.64 Autorización: “accede si es dueño o si es administrador; en ambos casos se registra en el log”.
Prueba por casos que todo acceso queda registrado, y escribe la derivación como el comentario
de la función.
4.65 Prueba de inconsistencia de requisitos: formaliza tres requisitos de un sistema (por ejemplo:
toda operación se audita; las operaciones anónimas no guardan identidad; toda auditoría
registra la identidad) y deriva ⊥. Este es, literalmente, el trabajo de un analista de requisitos.
T7 · SALUD Y PSICOLOGÍA
4.66 Protocolo: “si hay criterio A o criterio B, se deriva a especialista”. Prueba por casos que un
paciente con cualquiera de los dos criterios se deriva.
4.67 Reducción al absurdo diagnóstica: formaliza “si fuera diagnóstico D, habría hallazgo H; no
hay H; luego no es D” y después audita el supuesto oculto: ¿qué tendría que ser verdad de la
prueba para que la primera premisa se sostenga?
Cierre del módulo y guía del primer parcial
Autoevaluación del alumno Antes del examen, marca honestamente. Si algo queda sin marcar, ese es
exactamente el ejercicio que te falta hacer.
□ Puedo formalizar “p solo si q” y “p a menos que q” sin dudar.
□ Puedo explicar por qué “si no llueve, no me mojo” no se sigue de “si llueve, me mojo”.
□ Construyo una tabla de 8 renglones sin equivocarme en el orden canónico.
□ Dado un argumento inválido, encuentro el renglón que lo refuta y lo cuento como historia.
□ Distingo las dos falacias del condicional y sé sus nombres.
□ Escribo una derivación con las tres columnas y todas las justificaciones.
□ Sé qué subprueba abrir según la forma de la meta.
□ Puedo probar algo por reducción al absurdo sin que me lo pidan.
□ Entiendo por qué no puedo citar una línea de una subprueba cerrada.
□ Tomé un reglamento real y probé algo sobre él.
TAREA DE CAMPO
Semana 5 — El absurdo cotidiano. Encuentra en la vida real un razonamiento del tipo “eso
no puede ser, porque si lo fuera pasaría [algo absurdo]”. Los usamos todo el tiempo al discutir.
Reconstrúyelo como una reducción al absurdo formal, con subprueba y todo.
Semana 6 — Cierre de unidad. Entrega tu “pelea” formalizada (ejercicio 4.5 del nivel 4): una
discusión real, sus enunciados formalizados, y la derivación que muestra si la conclusión se
seguía o no.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semanas 5–6 — Preselección y captura. Semana 5: trae dos o tres candidatos reales de tu
carrera y preséntalos en asesoría. El criterio de elección no es qué tan grande es el sistema, sino
qué tan explícitas son sus reglas: un reglamento pequeño con reglas claras da mejor proyecto
que un sistema enorme y vago. Semana 6: cierra la Fase 1 (Captura). Entrega el sistema elegido
descrito tal como funciona hoy, con sus reglas enumeradas una por una en español, antes de
formalizar nada. Si no puedes enumerar las reglas, todavía no tienes un sistema: tienes un tema.
Con lo aprendido en este módulo ya puedes hacer las tres cuartas partes del proyecto sobre
cualquier sistema condicional. Los módulos 2 a 4 te darán las herramientas para los sistemas
que no son de condicionales, sino de categorías (conjuntos), vínculos (relaciones) y asignaciones
(funciones).
MÓDULO 2
Teoría de conjuntos
El módulo anterior sirvió para tratar con reglas: enunciados que se afirman, se niegan y se encadenan.
Este módulo sirve para tratar con categorías: quiénes están dentro y quiénes fuera. Y casi todo sistema
profesional está hecho de las dos cosas al mismo tiempo. Un reglamento de becas tiene condicionales
(“si el promedio es mayor a 9, entonces. . . ”) pero también categorías (“los alumnos regulares”, “las
materias del área básica”). Formalizar solo las reglas y no las categorías deja la mitad del sistema sin
auditar.
La buena noticia, y es el hilo del curso, es que no hay nada nuevo que aprender: la intersección
es la conjunción, la unión es la disyunción, el complemento es la negación y la inclusión es el
condicional. Lo que cambia es el dominio, no la lógica. Este módulo lo hace explícito una y otra vez,
y a esas alturas el alumno debe empezar a sospechar que el curso trata de una sola cosa.
Sesión Lo que el alumno sabrá hacer Herramienta
5 Definir una categoría con un criterio que decida todos los casos pertenencia e in-
clusión
6 Combinar categorías y contar cuántos caen en cada zona operaciones y Venn
7 Simplificar y demostrar identidades entre categorías álgebra de conjuntos
8 Contar y auditar todas las combinaciones posibles de un sistema producto cartesiano`
  },
  5: {
    titulo: `Conjunto, pertenencia e inclusión`,
    texto: `Módulo 2 · Teoría de conjuntos

MÓDULO 2
Teoría de conjuntos
El módulo anterior sirvió para tratar con reglas: enunciados que se afirman, se niegan y se encadenan.
Este módulo sirve para tratar con categorías: quiénes están dentro y quiénes fuera. Y casi todo sistema
profesional está hecho de las dos cosas al mismo tiempo. Un reglamento de becas tiene condicionales
(“si el promedio es mayor a 9, entonces. . . ”) pero también categorías (“los alumnos regulares”, “las
materias del área básica”). Formalizar solo las reglas y no las categorías deja la mitad del sistema sin
auditar.
La buena noticia, y es el hilo del curso, es que no hay nada nuevo que aprender: la intersección
es la conjunción, la unión es la disyunción, el complemento es la negación y la inclusión es el
condicional. Lo que cambia es el dominio, no la lógica. Este módulo lo hace explícito una y otra vez,
y a esas alturas el alumno debe empezar a sospechar que el curso trata de una sola cosa.
Sesión Lo que el alumno sabrá hacer Herramienta
5 Definir una categoría con un criterio que decida todos los casos pertenencia e in-
clusión
6 Combinar categorías y contar cuántos caen en cada zona operaciones y Venn
7 Simplificar y demostrar identidades entre categorías álgebra de conjuntos
8 Contar y auditar todas las combinaciones posibles de un sistema producto cartesiano

---

5 Conjunto, pertenencia e inclusión
FICHA DE LA SESIÓN
Semana 7 (Amoxtli 2.1 Conjunto, pertenencia e inclusión; 2.2 Extensión y comprensión)
Meta operativa Al terminar, el alumno define un conjunto por comprensión con un criterio que
decide todos los casos, distingue ∈ de ⊆ sin dudar, y prueba una igualdad por
doble inclusión.
Lectura Badesa, Jané y Jansana, Elementos de lógica formal, cap. 1: principio de extensionali-
dad (§1), relación de inclusión (§2), principio de separación (§3), ejercicios (§4).
Materiales Un conjunto definido por comprensión listo para proyectar con sus casos límite;
pizarrón.
Reparto 15 min detonador · 50 min exposición · 90 min ejercicios (niveles 1–3) · 25 min cierre
y puesta en común de la tarea de campo.
DETONADOR APLICADO (15 min)
“¿Pertenece o no?” Escribe en el pizarrón un conjunto definido por una frase, no por una lista:
V = { x : x es una vocal del español }
Y lanza los casos límite, uno por uno, pidiendo votación a mano alzada: ¿la y? ¿la w? ¿la A
mayúscula, cuenta aparte de la a? ¿la é? ¿la u de “que”?
Cuando el grupo se divida —y se va a dividir en la y— haz la pregunta que abre la sesión: ¿el
problema está en la letra o está en cómo escribí el conjunto?
Conjunto, elemento, pertenencia
Un conjunto es una colección de objetos, llamados sus elementos, considerada como un solo objeto.
Se escribe a ∈ A para “a es elemento de A” y a /∈ A para su negación.
Principio de extensionalidad. Un conjunto queda completamente determinado por sus
elementos: dos conjuntos con los mismos elementos son el mismo conjunto. Nada más
cuenta.
Tres consecuencias que hay que decir en voz alta el primer día, porque son la fuente de la mitad de
los errores:
• El orden no importa: {a, b} = {b, a}.
• La repetición no cuenta: {a, a, b} = {a, b}.
• Cómo se describa el conjunto no importa: {x : x2 = 4} y {−2, 2} son el mismo conjunto, aunque
una descripción sea inteligente y la otra tonta.
Las dos maneras de definir un conjunto
Forma Aspecto Cuándo se usa
Por extensión A = {2, 3, 5, 7} Cuando los elementos son pocos y se pueden nombrar.
Por comprensión A = {x ∈ U : P(x)} Cuando son muchos, infinitos, o cuando lo que im-
porta es el criterio.
La forma por comprensión se lee “el conjunto de los x del universo U tales que P(x)”. Y aquí está el
primer puente del módulo, que conviene escribir en el pizarrón sin adornos:
PUENTE (la escalera del curso)
Esa P(x) es una condición lógica, y puede ser compuesta con las conectivas del módulo 1:
{x : P(x) ∧ Q(x)}, {x : P(x) ∨ Q(x)}, {x : ¬P(x)}.
Cada conectiva del módulo 1 va a producir, en la sesión siguiente, una operación de conjuntos.
La conjunción dará la intersección; la disyunción, la unión; la negación, el complemento. No es
una analogía: es la misma condición leída de otro modo.
CUIDADO
Una definición por comprensión sirve solo si su condicióndecide: para cada objeto del universo,
la condición debe ser verdadera o falsa, sin empates ni “depende”. “Los alumnos aplicados” no
define un conjunto. “Los alumnos con promedio mayor o igual a 8.5 al cierre del semestre” sí.
La diferencia entre las dos redacciones es, casi siempre, el hallazgo de una auditoría.
Conjuntos con nombre propio
• Conjunto vacío ∅ = { }: no tiene elementos. Hay uno solo, y |∅| = 0.
• Unitario {a}: exactamente un elemento. Ojo: a y {a} no son la misma cosa, como no es lo mismo
un zapato que una caja con un zapato.
• Universo U: el conjunto de todos los objetos que están en consideración en ese problema. Se
declara siempre, porque el complemento depende de él.
CUIDADO
∅ ̸= {∅}. El primero es una caja vacía; el segundo es una caja que contiene una caja vacía. El
primero tiene cero elementos, el segundo tiene uno. Esto parece un juego y es el ejercicio que
más se equivoca en el examen del segundo parcial, año con año.
Inclusión: la confusión central del módulo
A ⊆ B (A es subconjunto de B) significa que todo elemento de A es también elemento de B. Escrito
con la herramienta del módulo 1:
A ⊆ B significa para todo x : x ∈ A → x ∈ B.
A ⊂ B (subconjunto propio) significa además que A ̸= B: le falta al menos un elemento de B.
∈ conecta un elemento con un conjunto. ⊆ conecta dos conjuntos. Con A = {1, 2,{3, 4}}:
1 ∈ A ✓ {1} ⊆A ✓ {1} ∈A × { 3, 4} ∈A ✓ {3, 4} ⊆A ×
El caso {3, 4} es el que hay que discutir: es un elemento de A —está listado como tal— pero
no un subconjunto, porque 3 /∈ A.
Dos hechos que se prueban y no se memorizan: (1) ∅ ⊆ A para todo A —porque no hay ningún
elemento de ∅ que pudiera fallar; es un condicional de antecedente siempre falso, y esos son
verdaderos, exactamente como en la sesión 2—; (2) A ⊆ A para todo A.
Igualdad por doble inclusión
A = B si y solo si A ⊆ B y B ⊆ A.
Esta es la técnica de demostración de todo el módulo, y es literalmente la regla I↔ de la sesión 4:
para probar una coimplicación se prueban las dos implicaciones. Aquí, para probar una igualdad se
prueban las dos inclusiones. La estructura de la prueba es siempre la misma:
Ejemplo resuelto 5.1 Doble inclusión: si A ⊆ B y B ⊆ A, entonces A = B —el método
Para probar A = B se escriben dos párrafos.
(⊆) Sea x ∈ A arbitrario. . . . [argumento] . . . Luego x ∈ B. Como x era arbitrario, A ⊆ B.
(⊇) Sea x ∈ B arbitrario. . . . [argumento] . . . Luego x ∈ A. Como x era arbitrario, B ⊆ A.
Por doble inclusión, A = B. □
Nótese que cada párrafo es una prueba condicional: se supone x ∈ A y se deriva x ∈ B. El “sea x
arbitrario” es el supuesto; el cierre del párrafo es la I→. Si el alumno hizo bien la sesión 4, ya
sabe hacer esto: solo hay que decírselo.
Ejemplo resuelto 5.2 {x : x2 = 4} = {−2, 2}
(⊆) Sea x tal que x2 = 4. Entonces x2 − 4 = 0, es decir (x − 2)(x + 2) =0, de donde x = 2 o
x = −2. En ambos casos x ∈ {−2, 2}. (Obsérvese la prueba por casos de la sesión 4.)
(⊇) Si x = 2, entonces x2 = 4. Si x = −2, entonces x2 = 4. En ambos casos x cumple la
condición.
Por doble inclusión, los conjuntos son iguales. □
Cardinalidad
|A| es el número de elementos de A. Para conjuntos finitos se cuenta, y se cuenta después de aplicar
extensionalidad: |{a, a, b}| = 2, no 3. Y |{∅}| = 1.
NIVEL 1 · Reconocer en voz alta, en grupo
A. ∈ o ⊆ Sea A = {1, 2, 3, {4, 5}, ∅}. Di si cada afirmación es verdadera o falsa.
5.1 1 ∈ A
5.2 {1} ∈A
5.3 {1} ⊆A
5.4 4 ∈ A
5.5 {4, 5} ∈A
5.6 {4, 5} ⊆A
5.7 {{4, 5}} ⊆A
5.8 ∅ ∈ A
5.9 ∅ ⊆ A
5.10 {∅} ⊆A
5.11 {1, 2, 3} ⊆A
5.12 {1, 2, 3} ∈A
5.13 A ⊆ A
5.14 A ∈ A
5.15 |A| = 6
5.16 |A| = 5
B. ¿Está bien definido el conjunto? Di si la frase define un conjunto (su criterio decide todos los
casos) o no. Si no, propón una redacción que sí.
5.17 Los números pares entre 1 y 20.
5.18 Los alumnos altos del grupo.
5.19 Los alumnos que miden más de 1.75 m.
5.20 Las materias difíciles de la carrera.
5.21 Las materias con más de 30% de reprobación el semestre pasado.
5.22 Las buenas películas.
5.23 Los clientes frecuentes.
5.24 Los clientes con tres o más compras en los últimos 90 días.
5.25 Las prendas de la colección otoño.
5.26 Los platillos que llevan mucha sal.
NIVEL 2 · Aplicar individual
C. De comprensión a extensión Escribe por extensión, tomando como universo los números naturales
N = {0, 1, 2, 3, . . .} salvo que se indique otro.
5.27 {x : x < 6}
5.28 {x : x es par y x < 10}
5.29 {x : x es primo y x < 20}
5.30 {x : x2 = 9}
5.31 {x : x2 = 2}
5.32 {x : x + 1 = x}
5.33 {x : x < 3 ∨ x > 100} ∩ {x : x < 6}
5.34 {x : ¬(x < 4)} ∩ {x : x < 7}
5.35 {x ∈ Z : x2 = 9}
5.36 {x : x divide a 12}
D. De extensión a comprensión Escribe cada conjunto por comprensión, declarando el universo. Hay
varias respuestas correctas; se pide la más económica.
5.37 {2, 4, 6, 8, 10}
5.38 {1, 3, 5, 7, 9}
5.39 {1, 4, 9, 16, 25}
5.40 {a, e, i, o, u}
5.41 {lunes, . . . , viernes}
5.42 {−1, 0, 1}
5.43 {0}
5.44 ∅
E. Subconjuntos y cardinalidad
5.45 Lista todos los subconjuntos de {a, b}.
5.46 Lista todos los subconjuntos de {a, b, c}.
5.47 ¿Cuántos subconjuntos tiene un conjunto de 4 elementos? ¿De 5? ¿De n?
5.48 Da |A| para: A = {1, 1, 2}; A = ∅; A = {∅}; A = {∅, {∅}}; A = {{1, 2}, {3}}.
5.49 ¿Cuántos subconjuntos propios tiene {a, b, c}?
5.50 Encuentra todos los X tales que X ⊆ {1, 2} y 1 ∈ X.
NIVEL 3 · Analizar en parejas
F. Demuestra por doble inclusión Escribe la prueba en dos párrafos, con la estructura del ejemplo
resuelto.
5.51 {x ∈ N : x2 = 16} = {4}
5.52 {x : x es par} ∩ {x : x es primo} = {2} en N.
5.53 Si A ⊆ B y B ⊆ C, entonces A ⊆ C (transitividad de la inclusión).
5.54 ∅ ⊆ A para todo A. (Cuidado: ¿cómo se prueba algo sobre todos los elementos de un conjunto que no
tiene elementos?)
5.55 Si A ⊆ ∅, entonces A = ∅.
5.56 {x : x divide a 6} = {1, 2, 3, 6} en N.
5.57 Si A ⊆ B, entonces todo subconjunto de A es subconjunto de B.
5.58 {2n : n ∈ N} = {x ∈ N : x es par}.
G. Casos finos
5.59 ¿Es cierto que {1, 2} ∈ {{1, 2}, 3}? ¿Y que {1, 2} ⊆ {{1, 2}, 3}? Explica la diferencia con una
analogía de cajas.
5.60 Da un ejemplo de conjuntos A y B con A ∈ B y A ⊆ B a la vez.
5.61 ¿Puede ocurrir A ⊆ B y |A| = |B| con A ̸= B? Justifica.
5.62 Sea A = {∅, {∅}}. Lista todos los subconjuntos de A y di cuántos son.
5.63 ¿Cuántos elementos tiene {{1, 2, 3}}?
5.64 Si |A| = 3 y |B| = 5 y A ⊆ B, ¿cuántos elementos de B no están en A?
5.65 Verdadero o falso, con justificación: si A ̸= B entonces A ̸⊆ B.
5.66 Verdadero o falso: si todo elemento deA está en B y todo elemento de B está en A, los conjuntos
son iguales aunque estén escritos de forma distinta.
NIVEL 4 · Auditar se encarga y se defiende
5.67 La categoría indefinida. Busca en un documento real de tu carrera —reglamento, política,
manual, norma— una categoría que se use para decidir algo pero que no esté definida en
el documento (“cliente frecuente”, “caso urgente”, “material de primera calidad”, “alumno
regular”). Entrega: la cita literal, la explicación de al menos dos personas distintas que podrían
caer o no caer según quién interprete, y tu redacción por comprensión con un criterio que
decida todos los casos.
5.68 Categorías que se traslapan sin querer. Encuentra un sistema real con dos o más categorías
que deberían ser excluyentes y que, según su redacción, no lo son (dos tarifas, dos niveles de
riesgo, dos tallas, dos tipos de socio). Formaliza ambas por comprensión y exhibe un caso
concreto que caiga en las dos. Ese caso es tu hallazgo.
5.69 El caso frontera. Todo criterio con un umbral numérico tiene un borde. Toma un umbral
real (“mayor a 9”, “más de 30 días”, “a partir de $5 000”) y determina con precisión qué pasa
exactamente en el borde. Después revisa si el documento resuelve el borde o lo deja al azar. Si
lo deja, propón la corrección.
5.70 Universo declarado. Encuentra una regla real cuyo sentido cambie según el universo que se
suponga (“no se permiten mascotas”: ¿universo de animales? ¿de seres vivos? ¿incluye peces?).
Formaliza el mismo criterio bajo dos universos distintos y muestra que producen conjuntos
distintos.
5.71 Demostración aplicada. Toma dos categorías de tu sistema que su autor trate como si fueran
la misma (por ejemplo, “socio activo” y “socio al corriente de pagos”) y prueba, por doble
inclusión, si de verdad son iguales. Si no lo son, exhibe el elemento que está en una y no en la
otra: has encontrado que el documento usa dos nombres para dos cosas distintas creyendo que
son una.
5.72 Del criterio al conteo. Define por comprensión tres conjuntos de tu propio entorno, escríbelos
por extensión, identifica un subconjunto propio de cada uno y da las tres cardinalidades.
Después responde: ¿alguno de tus tres criterios habría dado un conjunto distinto si lo hubiera
aplicado otra persona? Si la respuesta es sí, reescríbelo.
Banco por trayectoria
T1 · DISEÑO Y MODA
5.73 Define por comprensión el conjunto de prendas de una colección cápsula y el de prendas que
admiten estampado. ¿Es uno subconjunto del otro? Pruébalo o exhibe el contraejemplo.
5.74 Una guía de tallas define S, M y L por rangos de busto. Escribe los tres conjuntos por compren-
sión y determina si son disjuntos dos a dos. Si dos se traslapan en un solo centímetro, ya tienes
un hallazgo.
T2 · GASTRONOMÍA
5.75 Define por comprensión el conjunto de platillos vegetarianos y el de platillos veganos de un
menú real. Prueba que uno es subconjunto propio del otro, y exhibe el elemento que marca la
diferencia.
5.76 “Alimento potencialmente peligroso” es una categoría de las normas de inocuidad. Busca su
definición real, escríbela por comprensión y decide si el arroz cocido pertenece. ¿La definición
te permitió decidir?
T3 · DERECHO
5.77 Toma un artículo que use una categoría legal (“persona vulnerable”, “interés legítimo”, “bien
de uso común”) y escríbela por comprensión. Determina si el documento define la categoría o
la remite a otro.
5.78 Prueba por doble inclusión si el conjunto de casos en que procede un recurso coincide con el
conjunto de casos en que se admite. Si no coinciden, describe el caso que está en uno y no en el
otro.
T4 · ADMINISTRACIÓN Y NEGOCIOS
5.79 Define por comprensión “cliente frecuente” según una política real. Si no está definida, ese
es el hallazgo: propón la definición y estima cuántos clientes cambiarían de categoría con tu
redacción frente a la interpretación actual.
5.80 Un sistema clasifica gastos en “operativo”, “de inversión” y “de representación”. Escribe los
tres por comprensión y busca un gasto real que caiga en dos.
T5 · NEGOCIOS INTERNACIONALES
5.81 Define por comprensión el conjunto de países que requieren visa para un pasaporte mexicano
y el de países del acuerdo comercial. ¿Alguno es subconjunto del otro? ¿Se cruzan?
5.82 “Bien de doble uso” es una categoría aduanera con lista oficial. Escríbela por comprensión y
por extensión, y explica por qué en este caso la extensión (la lista) y la comprensión (el criterio)
pueden no coincidir. Ese desajuste es un hallazgo real de la práctica aduanera.
T6 · INGENIERÍA Y SISTEMAS
5.83 Define por comprensión el conjunto de usuarios con permiso de escritura y el de admin-
istradores. Prueba la inclusión que creas que se cumple y verifica en el sistema real si de verdad
se cumple.
5.84 Un formulario valida “correo válido”. Escribe el conjunto por comprensión con precisión
suficiente para programarlo, y encuentra al menos dos cadenas frontera sobre las que dos
programadores distintos decidirían distinto.
T7 · SALUD Y PSICOLOGÍA
5.85 Define por comprensión el conjunto de pacientes que cumplen un criterio diagnóstico y el
de pacientes que reciben el tratamiento. ¿Coinciden? Prueba o refuta por doble inclusión, y
comenta qué significa clínicamente que no coincidan.
5.86 “Paciente de riesgo” aparece en protocolos reales. Encuentra una definición operativa, escríbela
por comprensión y determina si un paciente de 59 años con un factor de riesgo pertenece. Si la
definición no decide, propón la que sí.
TAREA DE CAMPO
Tres conjuntos de tu vida. Define por comprensión tres conjuntos tomados de tu vida real
—“las apps que uso a diario”, “las materias que puedo reprobar sin perder la beca”, “los lugares
donde como entre semana”— y luego escríbelos por extensión. Identifica un subconjunto propio
de cada uno. Y contesta la pregunta que importa: si le diera tu criterio a otra persona, ¿escribiría la
misma lista? Si no, arregla el criterio y trae las dos versiones.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 7 — Fase 1, cierre: reglas explícitas. Antes de formalizar nada, tu sistema tiene que
estar descrito con sus reglas enumeradas una por una. Esta semana agrega una capa: la lista
de categorías que tu sistema usa para decidir. Haz una tabla de dos columnas: en la izquierda,
cada categoría tal como el documento la nombra; en la derecha, la definición que el documento
da —y si no da ninguna, escribe “no definida”. Cada “no definida” es un candidato a hallazgo,
y suele ser el más fácil de defender ante el grupo.`
  },
  6: {
    titulo: `Operaciones y diagramas de Venn`,
    texto: `6 Operaciones y diagramas de Venn
FICHA DE LA SESIÓN
Semana 8 (Amoxtli 2.3 Operaciones y diagramas de Venn)
Meta operativa Al terminar, el alumno calcula expresiones con tres conjuntos, sombrea la región
correspondiente en un Venn, traduce en los dos sentidos entre región y expresión,
y cuenta cuántos elementos hay en cada zona.
Lectura Badesa, Jané y Jansana, cap. 2: operaciones básicas (§1), complementación (§2),
ejercicios (§6).
Materiales Pizarrón amplio para el Venn del salón; plantillas de Venn de dos y tres círculos
impresas (ahorra la mitad del tiempo de trazado).
Reparto 15 min detonador · 45 min operaciones y Venn · 95 min ejercicios (niveles 1–3) · 25
min conteo y cierre.
DETONADOR APLICADO (15 min)
“El Venn del salón”. Dibuja dos círculos grandes que se cruzan y rotúlalos Netflix y Spotify.
Pregunta a mano alzada quién tiene cada uno y ve anotando iniciales o palitos en la zona que
corresponda: solo Netflix, solo Spotify, los dos, ninguno.
En cinco minutos tienes un diagrama de Venn con datos reales del grupo. Entonces haz las tres
preguntas que arman la clase: ¿cuántos hay en el cruce? ¿cuántos tienen al menos uno? ¿cuántos hay
fuera de los dos círculos, y dónde los pongo?
Las cuatro operaciones
Operación Definición Se lee Venn
Unión A ∪ B {x : x ∈ A ∨ x ∈ B} lo que está en A, en B o en ambos
A B
U
Intersección A ∩
B
{x : x ∈ A ∧ x ∈ B} lo que está en los dos a la vez
A B
U
Diferencia A \\ B {x : x ∈ A ∧ x /∈ B} lo que está en A y no en B
A B
U
Complemento
Ac
{x ∈ U : x /∈ A} todo lo del universo que no está en A
A B
U
Dos conjuntos son disjuntos si A ∩ B = ∅: no comparten ningún elemento. Y la diferencia simétrica
A △ B = (A \\ B) ∪ (B \\ A) es lo que está en uno o en otro pero no en ambos: es el “o exclusivo” de
la sesión 1.
PUENTE (la escalera del curso)
Compárense las definiciones de la columna central con la tabla de conectivas de la sesión 1 y la
conclusión es inmediata:
∪ ↔ ∨ ∩ ↔ ∧ c ↔ ¬ ⊆ ↔ → = ↔ ↔ △ ↔ ⊻
Todo lo que el alumno aprendió a calcular con tablas de verdad lo puede calcular con conjuntos,
y al revés. La sesión 7 explota esta correspondencia sistemáticamente; aquí basta con dejarla
escrita en el pizarrón toda la clase.
La tabla de pertenencia: un Venn escrito
Un diagrama de Venn de tres conjuntos tiene ocho regiones, y una tabla de verdad de tres variables
tiene ocho renglones. No es coincidencia: son la misma cosa. Cada región del Venn corresponde a
un renglón, donde V significa “está dentro” y F “está fuera”.
x ∈ A x ∈ B x ∈ C A ∩ B (A ∩ B) \\ C región del Venn
V V V V F centro (los tres)
V V F V V A y B, no C
V F V F F A y C, no B
V F F F F solo A
F V V F F B y C, no A
F V F F F solo B
F F V F F solo C
F F F F F fuera de los tres
Los renglones con V en la última columna son exactamente las regiones que hay que sombrear. Esta
es la técnica más confiable del módulo: cuando una expresión de tres conjuntos se ve difícil, se hace
la tabla y el sombreado sale solo.
Ejemplo resuelto 6.1 (A ∪ B) ∩ Cc
A B
C U
Procedimiento: primero se sombrea A ∪ B (los dos círculos de arriba); después se borra todo lo
que cae dentro de C, porque Cc exige estar fuera. Quedan tres regiones: solo A, solo B, y A con
B sin C. En la tabla de pertenencia son los renglones 2, 4 y 6.
Ejemplo resuelto 6.2 Cálculo numérico
Sea U = {1, 2, . . . , 10}, A = {1, 2, 3, 4, 5}, B = {4, 5, 6, 7}, C = {5, 7, 9}.
A ∪ B = {1, 2, 3, 4, 5, 6, 7} A ∩ B = {4, 5}
A \\ B = {1, 2, 3} B \\ A = {6, 7}
Ac = {6, 7, 8, 9, 10} A △ B = {1, 2, 3, 6, 7}
(A ∩ B) ∪ C = {4, 5, 7, 9} A ∩ B ∩ C = {5}
(A ∪ B)c = {8, 9, 10} Ac ∩ Bc = {8, 9, 10}
Las dos últimas coinciden. No es casualidad: es De Morgan, y se demuestra en la sesión 7.
Conviene dejar la coincidencia a la vista y no explicarla todavía: que el alumno la note primero.
Contar: inclusión y exclusión
|A ∪ B| = |A| + |B| − |A ∩ B|
|A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|
La razón es la del detonador: al sumar |A| + |B|, los elementos del cruce se cuentan dos veces, y hay
que devolver una. Si los conjuntos son disjuntos, el término del cruce es cero y la suma funciona
directo.
NIVEL 1 · Reconocer en voz alta, en grupo
A. Cálculo directo Con U = {1, . . . , 10}, A = {1, 2, 3, 4}, B = {3, 4, 5, 6}, C = {5, 6, 7}, calcula:
6.1 A ∪ B
6.2 A ∩ B
6.3 A \\ B
6.4 B \\ A
6.5 Ac
6.6 Bc
6.7 A ∩ C
6.8 B ∩ C
6.9 A ∪ C
6.10 A △ B
6.11 |A ∪ B|
6.12 |A ∩ B|
6.13 (A ∩ B)c
6.14 Ac ∪ Bc
6.15 ¿Son A y C disjuntos?
6.16 ¿Son B y C disjuntos?
B. Región → expresión Para cada descripción, escribe la expresión de conjuntos:
6.17 Lo que está en A pero no en B.
6.18 Lo que está en los dos.
6.19 Lo que está en al menos uno.
6.20 Lo que no está en ninguno de los dos.
6.21 Lo que está en exactamente uno de los dos.
6.22 Lo que está en A y en B pero no en C.
6.23 Lo que está en los tres.
6.24 Lo que está en C y en ninguno de los otros dos.
NIVEL 2 · Aplicar individual
C. Sombrea el Venn Dibuja el diagrama y sombrea. Los primeros ocho son de dos conjuntos; los
demás, de tres.
6.25 A ∪ B
6.26 A ∩ B
6.27 A \\ B
6.28 Ac
6.29 (A ∩ B)c
6.30 Ac ∩ B
6.31 A △ B
6.32 (A ∪ B)c
6.33 A ∩ B ∩ C
6.34 A ∪ B ∪ C
6.35 (A ∩ B) \\ C
6.36 (A ∪ B) ∩ Cc
6.37 A ∩ (B ∪ C)
6.38 (A ∩ B) ∪ (A ∩ C)
6.39 A \\ (B ∪ C)
6.40 Ac ∩ Bc ∩ Cc
D. Conteo
6.41 |A| = 12, |B| = 9, |A ∩ B| = 4. Halla |A ∪ B|.
6.42 |A| = 20, |B| = 15, |A ∪ B| = 30. Halla |A ∩ B|.
6.43 En un grupo de 30: 22 usan Netflix, 18 usan Spotify, 3 no usan ninguno. ¿Cuántos usan los dos?
6.44 En el mismo grupo, ¿cuántos usan solo Netflix?
6.45 |U| = 50, |A| = 30. Halla |Ac|.
6.46 En una encuesta de 100 personas: 60 toman café, 50 toman té, 20 toman ambos. ¿Cuántas no
toman ninguno de los dos?
6.47 A y B son disjuntos, |A| = 7, |B| = 5. Halla |A ∪ B| y |A ∩ B|.
6.48 En un menú de 40 platillos: 18 llevan lácteos, 15 llevan gluten, 6 llevan ambos. ¿Cuántos
platillos puede pedir alguien que evita los dos?
NIVEL 3 · Analizar en parejas
E. Expresión → región, y de regreso
6.49 Escribe la tabla de pertenencia de ocho renglones de (A ∪ B) ∩ Cc y verifica que coincide con
el sombreado del ejemplo resuelto.
6.50 Haz lo mismo para A \\ (B ∩ C) y para (A \\ B) ∪ (A \\ C). ¿Coinciden? ¿Qué ley acabas de
verificar?
6.51 Encuentra una expresión que sombree exactamente la región del centro y las tres regiones “solo
uno”. (Es decir: los tres, o ninguno de los otros dos.)
6.52 Encuentra una expresión que sombree exactamente las tres regiones donde hay dos conjuntos
y no el tercero.
6.53 Escribe una expresión para “está en exactamente uno de los tres”.
6.54 Escribe una expresión para “está en al menos dos de los tres”.
6.55 ¿Es cierto que A \\ (B \\ C) = (A \\ B) \\ C? Decide con un Venn y, si es falso, exhibe un
contraejemplo numérico concreto.
6.56 ¿Es cierto que A △ (B △ C) = (A △ B) △ C? Decide con la tabla de pertenencia.
NIVEL 4 · Auditar se encarga y se defiende
6.57 La encuesta imposible. Busca datos reportados de verdad —una encuesta en prensa, un in-
forme institucional, una infografía de redes— donde se den porcentajes o conteos de categorías
que se cruzan. Modélalos con conjuntos y verifica con inclusión–exclusión si los números son
posibles. Si la suma de las partes excede el total sin que el cruce lo justifique, has probado que el
reporte está mal. Entrega el cálculo.
6.58 Categorías que no cubren el universo. Toma un sistema real que clasifique en tres categorías
(tres tarifas, tres niveles, tres tipos de socio) y verifica dos cosas con un Venn: que las categorías
sean disjuntas (nadie en dos) y que cubran el universo (nadie fuera de las tres). Cada falla es un
hallazgo: el traslape es una contradicción, el hueco es un vacío.
6.59 El Venn con datos propios. Levanta datos reales de un grupo de al menos 15 personas (tu
familia, tu equipo, un chat) sobre dos o tres características (“tiene coche”, “trabaja”, “estudia”).
Modélalo con conjuntos, dibuja el Venn con los conteos reales en cada región, y verifica que las
ocho regiones sumen el total. Después responde: ¿qué región resultó vacía, y te sorprende?
6.60 Simplificar para el mundo real. Toma una regla real escrita en forma complicada (“no aplica a
quienes no sean socios activos ni tengan convenio vigente”) y reescríbela como una expresión
de conjuntos. Después simplifícala usando complementos y De Morgan hasta la forma más
corta posible, y escribe la versión en español de esa forma corta. Entrega las dos redacciones y
di cuál pondrías en el documento.
6.61 Regiones sin regla. Formaliza las categorías de tu sistema del proyecto como conjuntos y
dibuja el Venn completo. Después ve región por región preguntando: ¿qué dice el sistema que
hay que hacer con alguien que cae aquí? Toda región para la que el sistema no diga nada es un
vacío probado, y el Venn es la prueba. Entrega el diagrama con las regiones sin regla marcadas.
6.62 Diferencia simétrica en la práctica. Encuentra un caso real donde lo importante sea justamente
la diferencia simétrica: lo que está en un registro y no en el otro, en ambos sentidos (dos
listas de asistencia, inventario contra sistema, dos bases de datos de clientes). Calcula A △ B y
explica qué significa operativamente cada mitad.
Banco por trayectoria
T1 · DISEÑO Y MODA
6.63 Sean E las prendas con estampado, N las de tono neutro y C las de la cápsula. Escribe y
sombrea: las de la cápsula con estampado y no neutras; las que no son ni estampadas ni
neutras. ¿Existe alguna prenda en la última región?
6.64 Un inventario dice: 40 prendas en total, 22 de algodón, 18 de temporada, 10 de algodón y de
temporada. ¿Cuántas no son ni de algodón ni de temporada?
T2 · GASTRONOMÍA
6.65 Sean L los platillos con lácteos, G con gluten y F con frutos secos. Escribe la expresión de “lo
que puede comer un comensal alérgico a los tres” y sombréala. En un menú de 35 con |L| = 14,
|G| = 12, |F| = 6, |L ∩ G| = 5, |L ∩ F| = 2, |G ∩ F| = 2, |L ∩ G ∩ F| = 1, ¿cuántos platillos son?
6.66 Modela el maridaje: T los platillos que llevan tinto, B los que llevan blanco. Si las reglas
dicen “carne roja lleva tinto” y “pescado lleva blanco”, ¿qué región del Venn corresponde a los
platillos sin regla de maridaje? Dale un nombre y busca un ejemplo real.
T3 · DERECHO
6.67 Sean T los recursos presentados en tiempo, E los presentados por escrito y L los presentados
por legitimado. Escribe la expresión de los que proceden y sombrea. Después sombrea la región
de los que no proceden y cuenta cuántas regiones son: cada una es una causal de improcedencia
distinta y el documento debería nombrarlas todas.
6.68 Toma un artículo con una excepción (“salvo que. . . ”). Modela la regla general como un conjunto
y la excepción como una diferencia. ¿La excepción recorta una región que de verdad estaba
dentro, o recorta el vacío? Si es lo segundo, la excepción es inútil y ese es un hallazgo.
T4 · ADMINISTRACIÓN Y NEGOCIOS
6.69 Sean F los clientes frecuentes, M los de compra mayor a $5 000 y Q los que compran en
liquidación. Sombrea la región de los que tendrían derecho a descuento según las reglas y
la de los que lo tienen prohibido. ¿Se traslapan? Si sí, esa región es la contradicción que ya
encontraste en la sesión 2; ahora tienes su dibujo.
6.70 De 200 clientes: 120 son frecuentes, 80 compraron más de $5 000, 50 son ambas cosas. ¿A
cuántos aplica el descuento? ¿Cuántos no reciben nada?
T5 · NEGOCIOS INTERNACIONALES
6.71 Sean V los países que requieren visa, A los del acuerdo comercial yS los sancionados. Sombrea:
los del acuerdo que además requieren visa; los sancionados que no están en el acuerdo; los que
no están en ninguna categoría. Verifica con casos reales si las tres últimas regiones están vacías
o no.
6.72 Reglas de origen: R contenido regional suficiente, T transformación sustancial, P solo reem-
paquetado. Escribe la expresión de “es originario” y la de “no es originario”. ¿Cubren juntas
todo el universo? Si hay una región fuera de las dos, el tratado tiene un vacío.
T6 · INGENIERÍA Y SISTEMAS
6.73 Sean D los usuarios dueños del archivo, M los administradores y B los casos con archivo
bloqueado. Escribe la expresión de “puede borrar” según la regla, sombrea, y localiza las
regiones donde la redacción no decide. Convierte cada región en un caso de prueba con
nombre.
6.74 Una base tiene 1 000 registros: 300 con correo inválido, 250 con teléfono faltante, 90 con ambos
problemas. ¿Cuántos registros están limpios? Si tu proceso de limpieza corrige primero los
correos y luego los teléfonos, ¿cuántos toca dos veces?
T7 · SALUD Y PSICOLOGÍA
6.75 Sean A, B y C tres criterios diagnósticos. Si el protocolo exige “al menos dos de los tres”,
escribe la expresión de conjuntos y sombréala. ¿Cuántas regiones abarca? Compárala con la
formalización lógica que hiciste en la sesión 1.
6.76 De 300 pacientes: 90 tienen hipertensión, 70 diabetes, 40 ambas. ¿Cuántos tienen al menos
una? ¿Cuántos ninguna? Si el protocolo de riesgo se aplica a quienes tienen al menos una, ¿a
cuántos hay que citar?
TAREA DE CAMPO
El Venn de tu mundo. Levanta datos reales de un grupo concreto (tu familia, tu equipo, un chat
de al menos 15 personas) sobre dos o tres características verificables —“tiene coche”, “trabaja”,
“estudia”—. Modélalo con conjuntos, dibuja el Venn con los conteos reales escritos en cada
región y comprueba que la suma de todas las regiones dé el total del grupo. Si no da, tienes un
dato mal levantado: encuéntralo. Trae el diagrama.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 8 — Fase 2, arranque: las categorías se vuelven conjuntos. Toma la tabla de categorías
que hiciste la semana pasada y conviértela en conjuntos: nómbralos con letras, declara el
universo y escribe cada uno por comprensión. Después dibuja el Venn de las dos o tres
categorías más importantes de tu sistema y recórrelo región por región preguntando qué dice el
sistema para cada una. Las regiones sin respuesta son vacíos; las regiones donde el sistema dice
dos cosas distintas son contradicciones. Ambas cosas son hallazgos, y el Venn es la prueba que
puedes proyectar en la presentación final.
7. Álgebra de conjuntos y conjunto potencia`
  },
  7: {
    titulo: `Álgebra de conjuntos y conjunto potencia`,
    texto: `7 Álgebra de conjuntos y conjunto potencia
FICHA DE LA SESIÓN
Semana 9 (Amoxtli 2.4 Álgebra de conjuntos y leyes de De Morgan; 2.5 Conjunto potencia)
Meta operativa Al terminar, el alumno demuestra una identidad de conjuntos por doble inclusión y
por tabla de pertenencia, simplifica una expresión aplicando las leyes con nombre,
y calcula P (A) y su cardinalidad.
Lectura Badesa, Jané y Jansana, cap. 2: complementación (§2), el conjunto potencia (§3),
ejercicios (§6).
Materiales Tabla de leyes proyectada durante toda la sesión; la tabla de equivalencias lógicas
de la sesión 2, a la vista al lado, para la comparación.
Reparto 15 min detonador · 55 min leyes, métodos de demostración y potencia · 85 min
ejercicios · 25 min el puente con la sesión 2 y cierre.
DETONADOR APLICADO (15 min)
“Niega bien”. Escribe en el pizarrón una sola frase:
“Tengo hambre y sueño.”
Y pide que escriban su negación en una hoja, sin hablar entre ellos. Recoge tres o cuatro y
transcríbelas al pizarrón. Va a aparecer, casi seguro, “no tengo hambre y no tengo sueño”, que
es incorrecta.
Entonces la pregunta: si yo tengo hambre pero no tengo sueño, ¿mentí al decir la frase original? Sí.
Luego la negación tiene que ser verdadera en ese caso. Y “no tengo hambre y no tengo sueño”
es falsa en ese caso. Guíalos hasta “no tengo hambre o no tengo sueño”.
Las leyes del álgebra de conjuntos
Ley Enunciado Equivalencia lógica gemela
Conmutativa A ∪ B = B ∪ A · A ∩ B = B ∩ A p ∨ q ≡ q ∨ p
Asociativa (A ∪ B) ∪ C = A ∪ (B ∪ C) (ídem ∩) (p ∨ q) ∨ r ≡ p ∨ (q ∨ r)
Distributiva A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) (y la dual) p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧
r)
Idempotencia A ∪ A = A · A ∩ A = A p ∨ p ≡ p
Identidad A ∪ ∅ = A · A ∩ U = A p ∨ F ≡ p
Dominación A ∪ U = U · A ∩ ∅ = ∅ p ∨ V ≡ V
Complemento A ∪ Ac = U · A ∩ Ac = ∅ p ∨ ¬p ≡ V
Doble compl. (Ac)c = A ¬¬p ≡ p
De Morgan (A ∪ B)c = Ac ∩ Bc y (A ∩ B)c = Ac ∪ Bc ¬(p ∨ q) ≡ ¬p ∧ ¬q
Absorción A ∪ (A ∩ B) =A · A ∩ (A ∪ B) =A p ∨ (p ∧ q) ≡ p
Diferencia A \\ B = A ∩ Bc p ∧ ¬q
Inclusión A ⊆ B ssi A ∪ B = B ssi A ∩ B = A p → q ≡ ¬p ∨ q
Dos maneras de demostrar una identidad
Método 1: doble inclusión. Es el de la sesión 5, y es el que se escribe en un dictamen porque se lee
como un argumento en español.
Ejemplo resuelto 7.1 De Morgan por doble inclusión: (A ∪ B)c = Ac ∩ Bc
(⊆) Sea x ∈ (A ∪ B)c. Entonces x /∈ A ∪ B, es decir, no es cierto que x ∈ A o x ∈ B. Por De
Morgan lógica, x /∈ A y x /∈ B. Luego x ∈ Ac y x ∈ Bc, es decir x ∈ Ac ∩ Bc.
(⊇) Sea x ∈ Ac ∩ Bc. Entonces x /∈ A y x /∈ B. Si x estuviera en A ∪ B, estaría en A o en B, y
ambas opciones contradicen lo anterior. Luego x /∈ A ∪ B, es decir x ∈ (A ∪ B)c.
Por doble inclusión, los conjuntos son iguales. □
Obsérvese que el párrafo (⊇) es una reducción al absurdo, y que el (⊆) usa la ley lógica de De
Morgan. La demostración de la ley de conjuntos descansa en la ley lógica: no es que se parezcan,
es que una sostiene a la otra.
Método 2: tabla de pertenencia. Se hacen las columnas de los dos lados y se comprueba que coinciden
renglón por renglón. Es mecánico, rápido y no se equivoca; su desventaja es que no explica nada y
no se puede escribir en un documento profesional.
x ∈ A x ∈ B A ∪ B (A ∪ B)c Ac Bc Ac ∩ Bc
V V V F F F F
V F V F F V F
F V V F V F F
F F F V V V V
Las columnas 4 y 7 son idénticas: la identidad queda probada.
CUIDADO
Un diagrama de Venn ilustra una identidad, no la demuestra: muestra que se cumple para
la configuración dibujada. Para una demostración se necesita la doble inclusión o la tabla de
pertenencia, que cubren todos los casos posibles. Esta distinción hay que sostenerla con firmeza,
porque el proyecto exige probar el hallazgo y un Venn bonito no es una prueba.
El conjunto potencia
P (A) es el conjunto de todos los subconjuntos de A. Sus elementos son conjuntos.
P ({a, b}) =

∅, {a}, {b}, {a, b}

, |P ({a, b})| = 4.
Si |A| = n, entonces |P (A)| = 2n.
Por qué: construir un subconjunto es tomar cada elemento y decidir si entra o no entra.
Son n decisiones independientes de dos opciones cada una, luego 2n resultados. Y es el
mismo 2n de los renglones de una tabla de verdad con n variables, por la misma razón.
Siempre: ∅ ∈ P(A) y A ∈ P(A). Son los dos que se olvidan.
NIVEL 1 · Reconocer en voz alta, en grupo
A. ¿Qué ley se aplicó? Nombra la ley que justifica cada paso.
7.1 A ∩ (B ∪ A) =A
7.2 A ∪ (A ∩ B) =A
7.3 (A ∩ B)c = Ac ∪ Bc
7.4 A ∪ Ac = U
7.5 A ∩ ∅ = ∅
7.6 (A ∪ B) ∪ C = A ∪ (B ∪ C)
7.7 A \\ B = A ∩ Bc
7.8 (Ac)c = A
7.9 A ∩ U = A
7.10 A ∪ A = A
B. Conjunto potencia
7.11 Escribe P (∅) y da su cardinalidad.
7.12 Escribe P ({a}).
7.13 Escribe P ({a, b}).
7.14 Escribe P ({a, b, c}).
7.15 ¿Cuánto vale |P (A)| si |A| = 6? ¿Si |A| = 10?
7.16 ¿Es cierto que ∅ ∈ P(A) siempre? ¿Y ∅ ⊆ P(A)?
7.17 ¿Cuántos elementos tiene P (P ({a}))?
7.18 Si |P (A)| = 32, ¿cuánto vale |A|?
NIVEL 2 · Aplicar individual
C. Simplifica Reduce a la expresión más corta posible, nombrando la ley usada en cada paso.
7.19 A ∪ (A ∩ B)
7.20 A ∩ (A ∪ B)
7.21 (A ∩ B) ∪ (A ∩ Bc)
7.22 (A ∪ B) ∩ (A ∪ Bc)
7.23 A ∪ (Ac ∩ B)
7.24 (Ac ∪ Bc)c
7.25 A \\ (A ∩ B)
7.26 (A \\ B) ∪ (A ∩ B)
7.27 (A \\ B)c
7.28 A ∩ (A ∪ B)c
7.29 (A ∪ B) \\ B
7.30 (Ac ∩ Bc)c
D. Demuestra por tabla de pertenencia
7.31 (A ∪ B)c = Ac ∩ Bc
7.32 (A ∩ B)c = Ac ∪ Bc
7.33 A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
7.34 A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
7.35 A \\ (B ∪ C) = (A \\ B) ∩ (A \\ C)
7.36 A \\ (B ∩ C) = (A \\ B) ∪ (A \\ C)
7.37 A △ B = (A ∪ B) \\ (A ∩ B)
7.38 (A \\ B) \\ C = A \\ (B ∪ C)
NIVEL 3 · Analizar en parejas
E. Demuestra por doble inclusión Escribe la prueba en dos párrafos, en español, como se escribiría
en un dictamen.
7.39 (A ∩ B)c = Ac ∪ Bc
7.40 A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
7.41 A \\ B = A ∩ Bc
7.42 Si A ⊆ B entonces Bc ⊆ Ac. (Es la contrapositiva de la sesión 2, en conjuntos.)
7.43 A ⊆ B si y solo si A ∪ B = B.
7.44 A ⊆ B si y solo si A ∩ B = A.
7.45 Si A ⊆ B y C ⊆ D, entonces A ∪ C ⊆ B ∪ D.
7.46 P (A) ∩ P(B) =P (A ∩ B).
7.47 ¿Es cierto que P (A) ∪ P(B) =P (A ∪ B)? Demuéstralo o exhibe un contraejemplo.
7.48 Si P (A) ⊆ P(B), entonces A ⊆ B.
NIVEL 4 · Auditar se encarga y se defiende
7.49 La negación mal hecha, en la calle. Encuentra un letrero, regla o mensaje real con una negación
de una conjunción o de una disyunción (“no se permite comer y beber”, “no se admiten perros
ni gatos”, “no aplica a menores de edad sin acompañante”). Formalízalo como conjuntos,
aplica De Morgan y determina qué dice literalmente frente a qué quiso decir quien lo escribió.
Entrega foto o transcripción, las dos lecturas y la redacción corregida.
7.50 Simplificación de una política real. Toma una regla real escrita con más condiciones de las
necesarias y demuestra, con las leyes del álgebra, que se puede reducir. Entrega la expresión
original, la cadena de simplificación con el nombre de cada ley, y la redacción corta en español.
Después responde: ¿la versión corta significa exactamente lo mismo? Pruébalo.
7.51 Redundancia probada. Una redundancia en un reglamento se prueba mostrando que una
regla es consecuencia de las otras, es decir, que el conjunto que define ya está contenido en la
unión de los demás. Toma tu sistema del proyecto, busca una regla candidata a redundante y
demuéstralo con una inclusión, no con una impresión.
7.52 Todas las configuraciones. Toma un sistema real con opciones independientes (extras de un
platillo, campos opcionales de un formulario, accesorios de un producto) y calcula 2n: cuántas
configuraciones distintas permite. Después cuenta cuántas de esas configuraciones el sistema
de verdad puede atender. La diferencia entre las dos cifras es un hallazgo: son combinaciones
que el sistema promete y no cumple.
7.53 El mismo conjunto con dos nombres. Busca en un documento real dos expresiones distintas
que designen al mismo conjunto (por ejemplo, “los no socios” y “quienes no tienen membresía
vigente ni convenio”). Demuestra por doble inclusión si son iguales. Si lo son, el documento
tiene una redundancia de vocabulario; si no lo son, tiene una inconsistencia. Cualquiera de las
dos es reportable.
7.54 Dictamen. Elige una de las identidades que demostraste en el nivel 3 y reescribe su de-
mostración como si fuera un párrafo de un dictamen profesional dirigido a alguien que no
sabe lógica: sin símbolos, en prosa, pero sin perder el rigor. Este ejercicio es el ensayo de la
defensa oral del proyecto.
Banco por trayectoria
T1 · DISEÑO Y MODA
7.55 “No se combinan estampados ni texturas” aplicado a una colección: formaliza como comple-
mento de una unión, aplica De Morgan y di qué prohíbe exactamente. ¿Prohíbe combinar
estampado con textura?
7.56 Una prenda admite 5 acabados opcionales e independientes. ¿Cuántas versiones distintas
existen? ¿Cuántas produce de verdad la marca? Explica la diferencia.
T2 · GASTRONOMÍA
7.57 “No se sirve con lácteos ni con gluten”: formaliza, aplica De Morgan y escribe la versión que
pondrías en la carta.
7.58 Un platillo tiene 6 extras opcionales. ¿Cuántas combinaciones puede pedir un comensal? Si la
cocina solo tiene protocolo para 12 de ellas, ¿cuántas quedan sin protocolo?
T3 · DERECHO
7.59 “No procede el recurso cuando no se presentó en tiempo ni por parte legitimada”: formaliza,
aplica De Morgan y determina si el artículo dice lo que su autor quiso. Es un error de redacción
legislativa frecuente y grave.
7.60 Demuestra que una de las causales de improcedencia de un artículo real está contenida en otra,
es decir, que es jurídicamente redundante.
T4 · ADMINISTRACIÓN Y NEGOCIOS
7.61 “No se autoriza el gasto si no tiene factura ni está presupuestado”: formaliza, aplica De Morgan
y decide si la política autoriza gastos con factura pero sin presupuesto. ¿Es eso lo que quería el
director?
7.62 Simplifica una política de descuentos escrita con cuatro condiciones a la mínima expresión
equivalente, con las leyes nombradas, y redacta la versión corta.
T5 · NEGOCIOS INTERNACIONALES
7.63 “No requiere permiso quien no exporte bienes de doble uso ni a país sancionado”: formaliza,
aplica De Morgan y determina el conjunto exacto de quienes sí requieren permiso.
7.64 Un embarque tiene 4 documentos opcionales según el caso. ¿Cuántas combinaciones docu-
mentales existen? ¿Cuántas están contempladas en el manual de la empresa?
T6 · INGENIERÍA Y SISTEMAS
7.65 Una condición de código dice if (!(a && b)) . Escríbela como conjuntos, aplica De Morgan
y reescribe la condición de la forma más legible. Después verifica que las dos versiones se
comportan igual en los cuatro casos.
7.66 Un formulario tiene 8 campos opcionales. ¿Cuántos estados distintos de llenado existen?
¿Cuántos casos de prueba escribiría un equipo razonable, y con qué criterio elegiría ese
subconjunto?
T7 · SALUD Y PSICOLOGÍA
7.67 “No se administra a pacientes sin función renal conservada ni consentimiento informado”:
formaliza, aplica De Morgan y determina a quién sí se administra. Discute la consecuencia
clínica de la lectura equivocada.
7.68 Un protocolo evalúa 5 factores de riesgo independientes. ¿Cuántos perfiles distintos de paciente
existen? Si el protocolo solo da indicación para tres niveles de riesgo, ¿cómo se agrupan los 32
perfiles en 3 niveles? Eso es una partición, y es el tema de la sesión 11.
TAREA DE CAMPO
Caza de negaciones mal hechas. Encuentra “en la calle” una negación mal formulada: un cartel,
una regla, un aviso del tipo “no se permite comer y beber”. Analiza qué significa realmente
según De Morgan y qué quiso decir quien lo escribió. Entrega foto o transcripción, las dos
lecturas y tu redacción corregida. Si además la corrección hace el letrero más corto, señálalo: es
el argumento con el que se convence a quien manda a imprimir letreros.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 9 — Fase 2: las reglas bien formuladas. Revisa todas las reglas de tu sistema buscando
negaciones de conjunciones y disyunciones (“no. . . ni . . . ”, “no se permite. . . y. . . ”). Aplica De
Morgan a cada una y compara lo que dice con lo que evidentemente quiso decir. Este es el
hallazgo más frecuente y más fácil de defender de todo el proyecto, porque no depende de
interpretación: la ley es la ley. Además, busca al menos una regla que puedas simplificar con las
leyes del álgebra: proponer una redacción más corta y demostrablemente equivalente es una
propuesta de mejora impecable en el criterio de pertinencia disciplinar.`
  },
  8: {
    titulo: `Producto cartesiano`,
    texto: `8 Producto cartesiano
FICHA DE LA SESIÓN
Semana 10 (Amoxtli 2.6 Producto cartesiano, puente a relaciones). Cierra el módulo y el
segundo parcial.
Meta operativa Al terminar, el alumno construye A × B, calcula su cardinalidad, lo representa en
tabla y en rejilla, distingue A × B de B × A, y entiende que un subconjunto de
A × B es una relación.
Lectura Badesa, Jané y Jansana, cap. 3 §1 (introducción: par ordenado y producto carte-
siano).
Materiales Un menú real de 3 platos y 2 bebidas proyectado; papel cuadriculado o plantilla de
rejilla; examen del segundo parcial.
Reparto 15 min detonador · 40 min par ordenado y producto · 55 min ejercicios (niveles 1–2)
· 60 min evaluación del segundo parcial · 10 min cierre y puente al módulo 3.
DETONADOR APLICADO (15 min)
“El menú”. Proyecta un menú mínimo y real:
Platos: pozole, mole, tinga
Bebidas: agua de jamaica, horchata
Pregunta: ¿cuántas comidas distintas de plato + bebida se pueden armar? Y luego, lo importante: que
las listen todas, sin que se les repita ninguna ni les falte ninguna.
Par ordenado
Un par ordenado (a, b) es la pareja formada por a y b en ese orden.
(a, b) = (c, d) si y solo si a = c y b = d.
De donde (1, 2) ̸= (2, 1), mientras que {1, 2} = {2, 1}. Un conjunto no distingue el orden; un par
ordenado existe justamente para distinguirlo. Y (a, a) es un par ordenado perfectamente legítimo,
mientras que {a, a} = {a} tiene un solo elemento.
Producto cartesiano
A × B = { (a, b) : a ∈ A ∧ b ∈ B }
Es el conjunto de todas las parejas posibles con primer elemento en A y segundo en B: todas las
combinaciones, sin excepción y sin juicio sobre si son buena idea.
|A × B| = |A| · |B|
Ejemplo resuelto 8.1 {1, 2} × {a, b, c}
{1, 2} × {a, b, c} = {(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)}
Seis elementos, como anuncia 2 · 3. Y en forma de tabla, que es la representación que hay que
instalar:
a b c
1 (1, a) ( 1, b) ( 1, c)
2 (2, a) ( 2, b) ( 2, c)
La tabla no es un adorno: cada casilla es un elemento del producto, y el número de casillas es la
cardinalidad. En la sesión 9, marcar casillas en esta tabla será exactamente definir una relación.
Advertencias:
• A × B ̸= B × A en general. Coinciden solo si A = B o si uno de los dos es vacío.
• A × ∅ = ∅: si no hay con qué formar la segunda coordenada, no hay pares.
• A × A se escribe A2, y tiene |A|2 elementos.
• Se puede seguir: A × B × C da ternas (a, b, c), con |A| · |B| · |C| elementos.
PUENTE (la escalera del curso)
Aquí termina el módulo y empieza el siguiente, en una sola frase: una relación es un subcon-
junto de A × B. El producto cartesiano es todo lo que podría estar vinculado; una relación es lo que
efectivamente está vinculado. Y una función, en el módulo 4, será una relación con una restricción
más. Los tres conceptos son el mismo objeto con distintos grados de exigencia, y por eso el
orden del curso no es negociable.
Dicho en la tabla del ejemplo: el producto cartesiano es la tabla completa; una relación es la
tabla con algunas casillas marcadas; una función es la tabla con exactamente una casilla marcada
por renglón.
NIVEL 1 · Reconocer en voz alta, en grupo
A. Construye el producto Sean A = {1, 2}, B = {a, b}, C = {x}, D = ∅.
8.1 A × B
8.2 B × A
8.3 A × C
8.4 C × A
8.5 A × A
8.6 B × B
8.7 A × D
8.8 C × C
8.9 |A × B|
8.10 |A × A|
8.11 |A × B × C|
8.12 ¿Es A × B = B × A?
B. Verdadero o falso
8.13 (1, 2) = (2, 1)
8.14 {1, 2} = {2, 1}
8.15 (1, 1) es un par ordenado válido.
8.16 |A × B| = |B × A| siempre.
8.17 Si |A| = 3 y |B| = 4, entonces |A × B| = 7.
8.18 Si A ⊆ B entonces A × C ⊆ B × C.
8.19 ∅ × ∅ = ∅
8.20 Si |A × B| = 12, entonces |A| = 3 y |B| = 4.
NIVEL 2 · Aplicar individual
C. Cardinalidades y conteo
8.21 Un menú tiene 4 platos, 3 bebidas y 2 postres. ¿Cuántas comidas completas distintas se pueden
armar?
8.22 Una prenda viene en 5 tallas y 7 colores. ¿Cuántas variantes hay en el catálogo?
8.23 Una aerolínea vuela entre 6 ciudades. ¿Cuántas rutas ordenadas origen–destino existen? ¿Y si
se excluyen las rutas de una ciudad a sí misma?
8.24 Una contraseña de 3 caracteres usa un alfabeto de 26 letras. ¿Cuántas hay?
8.25 |A| = 5, |B| = 0. Halla |A × B|.
8.26 Un horario tiene 5 días y 8 bloques de hora. ¿Cuántos espacios día–bloque existen? Si hay 3
salones, ¿cuántos espacios día–bloque–salón?
8.27 Si |A × B| = 24 y |A| = 6, halla |B|.
8.28 Un formulario tiene un campo de 3 opciones y otro de 4. ¿Cuántas respuestas distintas puede
recibir? ¿Y si ambos campos admiten quedarse vacíos?
D. Representaciones
8.29 Representa {1, 2, 3} × {a, b} en tabla y en rejilla de puntos.
8.30 Representa {1, 2}2 en rejilla y marca la diagonal (los pares con coordenadas iguales).
8.31 En la rejilla de {1, 2, 3} × {1, 2, 3}, marca los pares donde la primera coordenada es menor que
la segunda. ¿Cuántos son?
8.32 En la misma rejilla, marca los pares donde las coordenadas suman 4.
8.33 Dibuja la rejilla de {talla S, M, L} × {rojo, azul} y marca las tres combinaciones que una marca
real podría no producir. ¿Qué fracción del producto queda?
NIVEL 3 · Analizar en parejas
E. Propiedades del producto Demuestra o refuta con contraejemplo.
8.34 A × (B ∪ C) = (A × B) ∪ (A × C)
8.35 A × (B ∩ C) = (A × B) ∩ (A × C)
8.36 A × (B \\ C) = (A × B) \\ (A × C)
8.37 (A ∪ B) × C = (A × C) ∪ (B × C)
8.38 A × B = B × A si y solo si A = B o alguno es vacío.
8.39 Si A × B = ∅, entonces A = ∅ o B = ∅.
8.40 |P (A × B)| = 2|A|·|B|. Interpreta el resultado: ¿qué cuenta ese número?
8.41 ¿Es cierto que (A × B) ∪ (C × D) = (A ∪ C) × (B ∪ D)? Refuta con un contraejemplo pequeño.
NIVEL 4 · Auditar cierre del módulo
8.42 El catálogo que promete más de lo que tiene. Toma un catálogo real con dos dimensiones
(tallas × colores, modelos × acabados, rutas origen × destino) y calcula el tamaño del producto
cartesiano completo. Después cuenta cuántas combinaciones existen de verdad. Si el producto es
35 y el inventario tiene 22, hay 13 combinaciones que el sistema de pedidos probablemente
acepta y la empresa no puede surtir. Entrega el cálculo y la lista de las faltantes.
8.43 Combinaciones que las reglas permiten y no deberían. Formaliza como producto cartesiano
el espacio de combinaciones de tu sistema, y como subconjunto las que las reglas permiten.
Encuentra al menos una combinación permitida por las reglas que sea claramente indeseable
en tu campo profesional. Eso es un hallazgo de vacío: la regla no la prohibió porque nadie
pensó en ella.
8.44 Rejilla de casos sin cubrir. Dibuja la rejilla completa de dos dimensiones de tu sistema y marca
cada casilla con la regla que le aplica. Las casillas sin marca son casos sin regla. Entrega la
rejilla como una figura de tu presentación final: es la manera más convincente de mostrar un
vacío, porque se ve.
8.45 Explosión combinatoria. Cuenta las dimensiones independientes de tu sistema y calcula el
producto de sus tamaños. Si el número supera los pocos cientos, argumenta por qué el sistema
no puede tener una regla explícita por caso, y qué debería hacer en su lugar (reglas generales
con excepciones). Este es un argumento de diseño, y es exactamente lo que se espera en la
propuesta de mejora.
8.46 Producto cartesiano en el mundo. Detecta un producto cartesiano real (tallas × colores,
rutas origen–destino, horarios × salones), escríbelo como A × B, da su cardinalidad y verifica
contando en el mundo real que el número coincide. Si no coincide, explica por qué: casi
siempre es porque el mundo tiene restricciones que el producto cartesiano ignora, y nombrarlas
es el trabajo.
8.47 Cierre del segundo parcial. Toma tu sistema del proyecto y entrega la Fase 2 parcial: uni-
verso declarado, categorías formalizadas como conjuntos por comprensión, el Venn con las
regiones recorridas, las negaciones revisadas con De Morgan, y el producto cartesiano de sus
dimensiones con el conteo. Este documento es la mitad del proyecto final.
Banco por trayectoria
T1 · DISEÑO Y MODA
8.48 Formaliza las combinaciones posibles de una colección cápsula como producto cartesiano de
prendas superiores × inferiores. ¿Cuántos outfits promete la colección? Detecta las combina-
ciones que las reglas de estilo permiten pero que no deberían salir a pasarela.
8.49 Tallas × colores × largos: calcula el total de SKU y compáralo con los que la marca realmente
produce.
T2 · GASTRONOMÍA
8.50 Formaliza el menú como platos × bebidas y encuentra un platillo para el que ninguna regla de
maridaje dice qué bebida va. Ese es un vacío, y la rejilla es su prueba.
8.51 Entradas × fuertes × postres de un menú de tres tiempos: ¿cuántos menús distintos puede
armar un comensal? ¿Cuántos puede sostener la cocina en un servicio?
T3 · DERECHO
8.52 Formaliza tipos de recurso × tipos de acto reclamado como producto cartesiano y marca en la
rejilla cuáles combinaciones el ordenamiento contempla. Las casillas vacías son lagunas.
8.53 Sujetos × conductas: usa la rejilla para verificar si un reglamento sancionador cubre todas las
combinaciones que dice cubrir.
T4 · ADMINISTRACIÓN Y NEGOCIOS
8.54 Tipos de cliente × tipos de producto: calcula el total de combinaciones y marca en la rejilla qué
descuento aplica a cada una. Toda casilla sin descuento definido es una decisión que hoy toma
el cajero.
8.55 Áreas × tipos de gasto × montos (en tres rangos): ¿cuántas combinaciones de autorización
existen? ¿Cuántas están en el manual?
T5 · NEGOCIOS INTERNACIONALES
8.56 Países origen × países destino: formaliza las rutas como producto cartesiano y verifica cuántas
están cubiertas por algún tratado. Las no cubiertas son el conjunto que paga arancel general.
8.57 Incoterms × responsabilidades (flete, seguro, aduana): construye la rejilla completa y verifica
que cada casilla tenga asignado un responsable. Una casilla ambigua en un contrato real cuesta
dinero.
T6 · INGENIERÍA Y SISTEMAS
8.58 Roles × acciones: construye la matriz de permisos completa como producto cartesiano y marca
cada casilla con permitido o denegado. Las casillas sin decisión explícita son vulnerabilidades:
el sistema hará algo, y nadie decidió qué.
8.59 Navegadores × sistemas operativos × resoluciones: calcula el tamaño del espacio de pruebas
y argumenta qué subconjunto probarías y con qué criterio.
T7 · SALUD Y PSICOLOGÍA
8.60 Síntomas × duración (aguda, subaguda, crónica): construye la rejilla y marca la conducta que
indica el protocolo en cada casilla. Las vacías son los casos en que el clínico decide sin guía.
8.61 Fármacos × condiciones del paciente: construye la matriz de contraindicaciones y verifica que
esté completa. Una casilla vacía en esta matriz es, literalmente, un riesgo.
Cierre del módulo y guía del segundo parcial
Autoevaluación del alumno
□ Puedo explicar la diferencia entre ∈ y ⊆ con un ejemplo propio.
□ Sé por qué ∅ ̸= {∅} y puedo dar sus cardinalidades.
□ Puedo decir si una definición por comprensión decide todos los casos, y arreglarla si no.
□ Sombreo cualquier expresión de tres conjuntos sin dudar.
□ Sé por qué la unión de las cardinalidades no es la cardinalidad de la unión.
□ Puedo escribir una demostración por doble inclusión en dos párrafos, en español.
□ Aplico De Morgan a una regla real y noto si dice lo que quiso decir.
□ Calculo P (A) y sé por qué son 2n y no otra cosa.
□ Distingo (a, b) de {a, b} y sé por qué el orden importa en uno y no en el otro.
□ Puedo explicar en una frase qué es una relación, con el producto cartesiano en la mano.
TAREA DE CAMPO
T u producto cartesiano real.Detecta un producto cartesiano en el mundo —tallas × colores de
una prenda, rutas origen–destino, horarios× salones— escríbelo como A × B, di su cardinalidad
y verifica contando en el mundo real. Si el mundo tiene menos combinaciones que el producto,
explica cuáles faltan y por qué: ahí está tu primer vacío probado con esta herramienta.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 10 — Fase 2 y cierre del segundo parcial. Entrega el avance completo: sistema
capturado, universo declarado, categorías como conjuntos, Venn recorrido, negaciones revisadas
y producto cartesiano de las dimensiones con su conteo. Si a estas alturas ya tienes un hallazgo
probado, tienes el proyecto encaminado; si no, la sesión que sigue es la buena para encontrarlo,
porque las relaciones son donde aparecen los errores que nadie ve: los sistemas que suponen
que a cada cosa le toca exactamente una, y no es cierto.
MÓDULO 3
Relaciones
El módulo 1 sirvió para las reglas y el módulo 2 para las categorías. Este módulo sirve para lo tercero
que todo sistema profesional tiene y casi nadie formaliza: los vínculos. Quién responde ante quién,
qué materia es prerrequisito de cuál, qué talla corresponde a qué medida, qué documento acompaña
a qué trámite, qué platillo va con qué bebida.
La sesión 8 dejó la definición servida y conviene decirla otra vez, porque es todo lo que hay:
Una relación es un subconjunto del producto cartesiano. El producto es todo lo que
podría estar vinculado; la relación es lo que efectivamente lo está.
Y de ahí sale la utilidad para el proyecto. Un sistema de reglas supone cosas sobre sus vínculos:
supone que la asignación es única, que la jerarquía no tiene ciclos, que la clasificación no deja a nadie
fuera, que si a manda a b y b manda a c entonces a manda a c. Cada uno de esos supuestos tiene un
nombre técnico en este módulo, y cada uno se puede verificar. Cuando falla, el hallazgo es de los
buenos: no es un error de redacción, es un error de estructura.
Sesión Lo que el alumno sabrá hacer Herramienta
9 Representar un vínculo real de cinco maneras y darle vuelta pares, grafo, matriz, in-
versa
10 Verificar si un vínculo tiene las propiedades que el sistema le supone reflexiva, simétrica,
transitiva
11 Comprobar si una clasificación es limpia: sin traslapes ni huecos equivalencia y parti-
ción
12 Detectar ciclos y prerrequisitos redundantes en una jerarquía orden y diagramas de
Hasse`
  },
  9: {
    titulo: `Relaciones binarias: dominio, rango e inversa`,
    texto: `Módulo 3 · Relaciones

MÓDULO 3
Relaciones
El módulo 1 sirvió para las reglas y el módulo 2 para las categorías. Este módulo sirve para lo tercero
que todo sistema profesional tiene y casi nadie formaliza: los vínculos. Quién responde ante quién,
qué materia es prerrequisito de cuál, qué talla corresponde a qué medida, qué documento acompaña
a qué trámite, qué platillo va con qué bebida.
La sesión 8 dejó la definición servida y conviene decirla otra vez, porque es todo lo que hay:
Una relación es un subconjunto del producto cartesiano. El producto es todo lo que
podría estar vinculado; la relación es lo que efectivamente lo está.
Y de ahí sale la utilidad para el proyecto. Un sistema de reglas supone cosas sobre sus vínculos:
supone que la asignación es única, que la jerarquía no tiene ciclos, que la clasificación no deja a nadie
fuera, que si a manda a b y b manda a c entonces a manda a c. Cada uno de esos supuestos tiene un
nombre técnico en este módulo, y cada uno se puede verificar. Cuando falla, el hallazgo es de los
buenos: no es un error de redacción, es un error de estructura.
Sesión Lo que el alumno sabrá hacer Herramienta
9 Representar un vínculo real de cinco maneras y darle vuelta pares, grafo, matriz, in-
versa
10 Verificar si un vínculo tiene las propiedades que el sistema le supone reflexiva, simétrica,
transitiva
11 Comprobar si una clasificación es limpia: sin traslapes ni huecos equivalencia y parti-
ción
12 Detectar ciclos y prerrequisitos redundantes en una jerarquía orden y diagramas de
Hasse

---

9 Relaciones binarias: dominio, rango e inversa
FICHA DE LA SESIÓN
Semana 11 (Amoxtli 3.1 Relaciones binarias; 3.2 Dominio, rango y relación inversa)
Meta operativa Al terminar, el alumno traduce una relación real entre sus cinco representaciones,
calcula dominio, rango e inversa, y sabe cuántas relaciones distintas son posibles
entre dos conjuntos dados.
Lectura Badesa, Jané y Jansana, cap. 3 §1 (introducción: pares, producto cartesiano y
relaciones).
Materiales Cuatro nombres del grupo para el grafo del detonador; plantilla de matriz 4 × 4
impresa.
Reparto 15 min detonador · 45 min representaciones, dominio, rango e inversa · 95 min
ejercicios · 25 min conteo de relaciones y cierre.
DETONADOR APLICADO (15 min)
“¿Quién sigue a quién?” Pide cuatro voluntarios y escribe sus nombres en el pizarrón bien
separados. Pregunta, uno por uno: ¿a quién de estos tres sigues en redes? y dibuja una flecha por
cada respuesta.
Queda un grafo dirigido con datos reales del grupo. Entonces las tres preguntas: ¿todas las
flechas resultaron dobles? ¿alguien se sigue a sí mismo? ¿si Ana sigue a Beto y Beto sigue a Caro, Ana
sigue a Caro?
Definición y notación
Una relación binaria de A en B es un subconjunto R ⊆ A × B. Se escribe indistintamente
(a, b) ∈ R o a R b ,
y se lee “a está relacionado con b según R”. Cuando B = A se dice que R es una relación en A, y es el
caso que más nos va a interesar: las jerarquías, las clasificaciones y los prerrequisitos son relaciones
de un conjunto en sí mismo.
Las cinco representaciones
Ejemplo resuelto 9.1 La misma relación, cinco veces
Sea A = {1, 2, 3, 4} y R = {(1, 2), (2, 3), (3, 2), (4, 4)}.
1. Conjunto de pares. Tal como está escrita. Es la definición y la representación en la que nunca
se pierde información.
2. Regla (comprensión). Cuando existe: R = {(a, b) ∈ A2 : . . . condición. . .}. No toda relación
tiene una regla corta, y eso está bien.
3. Tabla o rejilla marcada. La tabla del producto cartesiano de la sesión 8, con una marca en las
casillas que sí están:
1 2 3 4
1 ×
2 ×
3 ×
4 ×
4. Matriz. La misma tabla con 1 y 0. Es la representación con la que trabaja cualquier computa-
dora:
MR =


0 1 0 0
0 0 1 0
0 1 0 0
0 0 0 1


5. Grafo dirigido. Un punto por elemento, una flecha por par. El par (4, 4) se dibuja como un
bucle:
1 2 3 4
Dominio, rango y codominio
• Dominio: dom R = {a : existe b con (a, b) ∈ R}. Los elementos que sí están relacionados con
algo.
• Rango o imagen: ran R = {b : existe a con (a, b) ∈ R}. Los que son alcanzados.
• Codominio: el conjunto B declarado, esté o no alcanzado por completo. Siempre ran R ⊆ B.
CUIDADO
La diferencia entre rango y codominio parece burocrática y es la fuente de dos hallazgos de
auditoría muy frecuentes: (a) Elementos huérfanos: los de A que no están en el dominio. En un
sistema real son las entradas para las que nadie definió qué pasa: el platillo sin bebida asignada,
el trámite sin responsable, la talla sin patrón. (b) Elementos inalcanzables: los de B que no
están en el rango. Son las salidas que el sistema declara y nunca usa: la categoría que existe
en el formulario y nadie recibe, el nivel de riesgo que nunca se asigna. Los dos se detectan
comparando A con dom R y B con ran R. Es aritmética, y produce dictámenes.
Relación inversa
R−1 = {(b, a) : (a, b) ∈ R}
Se le da vuelta a cada flecha. Consecuencias inmediatas: dom R−1 = ran R, ran R−1 = dom R, y
(R−1)−1 = R. En la matriz, invertir es transponer; en el grafo, girar todas las flechas.
La inversa de una relación siempre existe. Cualquier relación se puede dar vuelta, sin
condiciones. Guárdese esta frase: en la sesión 16 se verá que la inversa de una función no
siempre existe, y entender por qué es la diferencia entre las dos cosas.
Relaciones con nombre
• Vacía ∅: nadie relacionado con nadie.
• Total A × B: todos con todos.
• Identidad o diagonal IA = {(a, a) : a ∈ A}: cada uno consigo mismo y con nadie más.
PUENTE (la escalera del curso)
¿Cuántas relaciones distintas hay de A en B? Una relación es un subconjunto de A × B, luego
hay tantas como subconjuntos: por la sesión 7,
|P (A × B)| = 2|A|·|B|.
Con |A| = |B| = 4 son 216 = 65 536. Ese número es el tamaño del espacio de diseño: cuando
alguien decide cómo se vinculan dos catálogos de cuatro elementos, está eligiendo una opción
entre sesenta y cinco mil. Vale la pena decírselo al grupo así, porque explica por qué los sistemas
reales tienen vínculos mal elegidos: nadie revisó las otras.
NIVEL 1 · Reconocer en voz alta, en grupo
A. Dominio, rango, inversa Sea A = {1, 2, 3, 4}, B = {a, b, c} y R = {(1, a), (1, b), (2, c), (4, a)}.
9.1 ¿Es (1, a) ∈ R?
9.2 ¿Es (a, 1) ∈ R?
9.3 ¿Es 3 elemento del dominio?
9.4 Da dom R.
9.5 Da ran R.
9.6 Da el codominio.
9.7 Da R−1.
9.8 Da dom R−1.
9.9 ¿Qué elemento de A es huérfano?
9.10 ¿Qué elemento de B es inalcanzable?
9.11 |R|.
9.12 |A × B|.
B. Lee el grafo Para la relación en A = {1, 2, 3} del grafo:
1 2
9.13 Escribe R como conjunto de pares.
9.14 Da dom R y ran R.
9.15 Escribe la matriz de R.
9.16 Dibuja el grafo de R−1.
9.17 ¿Hay algún elemento sin flechas que salgan? ¿Sin flechas que entren?
NIVEL 2 · Aplicar individual
C. Cambia de representación Sea A = {1, 2, 3, 4}.
9.18 Escribe por extensión R = {(a, b) ∈ A2 : a < b} y dibuja su grafo.
9.19 Escribe por extensión S = {(a, b) ∈ A2 : a + b = 5} y su matriz.
9.20 Escribe por extensión T = {(a, b) ∈ A2 : a divide a b}.
9.21 Da la matriz de IA.
9.22 Dada la matriz
0 1
1 1

sobre {1, 2}, escribe la relación como pares y dibuja el grafo.
9.23 Escribe R−1 del ejercicio 1 por comprensión (no por extensión).
9.24 Da S−1 del ejercicio 2 y compárala con S. ¿Qué notas?
9.25 Sobre A, escribe la relación “a y b tienen el mismo residuo al dividir entre 2” como conjunto de
pares.
D. Conteo
9.26 ¿Cuántas relaciones hay de un conjunto de 2 elementos en uno de 3?
9.27 ¿Cuántas relaciones hay en un conjunto de 3 elementos?
9.28 ¿Cuántas relaciones hay en un conjunto de 4 elementos?
9.29 Si |A| = 5 y |B| = 2, ¿cuántas relaciones de A en B hay?
9.30 ¿Cuántas de las relaciones en un conjunto de 3 elementos contienen la diagonal completa?
(Pista: las tres casillas de la diagonal ya están decididas.)
9.31 ¿Cuántas relaciones en {1, 2, 3} son iguales a su inversa? (Reto: piensa en cuántas decisiones
independientes hay.)
NIVEL 3 · Analizar en parejas
E. Relaciones definidas por reglas
9.32 Sobre Z, describe con palabras la inversa de “a es el doble de b”.
9.33 Sobre las personas, describe la inversa de “es madre de”, “es hermano de”, “le debe dinero a”.
¿Cuál coincide con la original?
9.34 Da un ejemplo de relación R con dom R ̸= A y ran R ̸= B simultáneamente, y di qué significa
cada cosa.
9.35 ¿Puede una relación no vacía tener dominio vacío? Justifica.
9.36 Sea R en A con |A| = n. ¿Cuál es el máximo posible de |R|? ¿Y el mínimo, si se exige que el
dominio sea todo A?
9.37 Demuestra que dom(R−1) =ran(R).
9.38 Si R ⊆ S, ¿se sigue que R−1 ⊆ S−1? Demuéstralo o refútalo.
9.39 Sean R y S relaciones en A. ¿Es cierto que (R ∪ S)−1 = R−1 ∪ S−1? ¿Y con ∩? ¿Y con \\?
NIVEL 4 · Auditar se encarga y se defiende
9.40 Huérfanos. Modela como relación un vínculo real de tu sistema (trámite → responsable,
platillo → bebida, talla → patrón, síntoma → conducta). Calcula el dominio y compáralo con
el conjunto completo de entradas. Todo elemento fuera del dominio es un caso sin regla.
Entrega la lista de huérfanos y qué pasa hoy, en la práctica, cuando aparece uno.
9.41 Inalcanzables. Con la misma relación, calcula el rango y compáralo con el codominio declarado.
Todo elemento del codominio que nadie alcanza es una categoría que el sistema declara y
no usa. Averigua si es un residuo de una versión anterior del sistema: normalmente lo es, y
decirlo es un buen hallazgo.
9.42 Darle vuelta al sistema. Calcula la inversa de tu relación y pregúntate si tiene sentido operativo
leerla al revés. Ejemplos: la inversa de “talla → medidas” es “medidas → talla”, que es la
consulta que de verdad hace la clienta; la inversa de “trámite → responsable” es “responsable
→ trámites”, que es lo que necesita el jefe de área. Muchos sistemas están documentados en
un solo sentido y son inservibles en el otro: eso es un hallazgo de diseño.
9.43 Rejilla completa con huecos marcados. Dibuja la rejilla del producto cartesiano completo de tu
vínculo y marca las casillas que la relación contiene. Presenta la rejilla como figura y responde:
¿las casillas vacías están vacías a propósito? Distingue las prohibidas de las simplemente no
previstas. Las segundas son vacíos probados.
9.44 El vínculo que no es el que dicen. Busca en tu sistema un vínculo que el documento describe
de una manera y que en la práctica funciona de otra (“cada pedido tiene un vendedor asignado”
cuando en realidad hay pedidos con dos, o con ninguno). Formaliza las dos versiones como
relaciones distintas y exhibe el par concreto que las diferencia.
9.45 T u relación real.Elige una relación de tu entorno sobre 4 a 6 personas (“es amigo de”, “vive
con”, “le debe dinero a”), escríbela como conjunto de pares, dibuja su grafo y su matriz, y
calcula su inversa. La usarás otra vez en la sesión 10, así que guárdala bien.
Banco por trayectoria
T1 · DISEÑO Y MODA
9.46 Modela “medida corporal → talla” como relación entre el conjunto de medidas posibles (en
rangos) y {XS, S, M, L, XL}. Calcula dominio y rango: ¿hay medidas sin talla? ¿hay tallas que
nunca se asignan?
9.47 Modela “prenda → prenda con la que combina” como relación en el conjunto de prendas de
una cápsula. Dibuja el grafo y su inversa. ¿Debería ser simétrica? Verifica si la relación que
documentaste lo es.
T2 · GASTRONOMÍA
9.48 Modela “platillo → bebida recomendada” como relación. Lista los platillos huérfanos (sin
bebida asignada) y las bebidas inalcanzables. Ese es el vacío de maridaje que buscabas desde
la sesión 6, ahora con la herramienta correcta.
9.49 Modela “ingrediente → alérgeno” y calcula la inversa. La inversa —“alérgeno→ ingredientes”—
es la consulta que hace el comensal. ¿Tu carta permite responderla?
T3 · DERECHO
9.50 Modela “acto reclamado → recurso procedente” como relación. Los huérfanos son actos sin
recurso: si existen, es un problema de acceso a la justicia y hay que nombrarlo así.
9.51 Modela “norma → norma que la reforma” y dibuja el grafo. Después calcula la inversa: “norma
→ normas que la reformaron” es exactamente lo que necesita quien la aplica hoy.
T4 · ADMINISTRACIÓN Y NEGOCIOS
9.52 Modela “tipo de gasto → nivel de autorización” como relación. Verifica que todo tipo de gasto
tenga al menos un nivel (dominio completo) y que ninguno tenga dos (esto último se llama
unicidad y es el tema del módulo 4).
9.53 Modela “empleado → jefe” y dibuja el grafo del organigrama. Calcula la inversa. ¿Hay
empleados con dos jefes? ¿Hay jefes sin subordinados? Cada anomalía es reportable.
T5 · NEGOCIOS INTERNACIONALES
9.54 Modela “país → requisito documental” como relación y calcula dominio y rango. Los países
huérfanos son los que tu manual no cubre.
9.55 Modela “Incoterm → responsabilidad” como relación entre los once términos y {flete, seguro,
aduana de salida, aduana de entrada}. Dibuja la matriz completa y localiza las casillas que tu
manual no especifica.
T6 · INGENIERÍA Y SISTEMAS
9.56 Modela “rol → permiso” como relación y escribe su matriz. La matriz de permisoses la relación,
y su inversa —“permiso → roles que lo tienen”— es la consulta de auditoría de seguridad.
9.57 Modela “tabla → tabla referenciada” en una base de datos y dibuja el grafo. Verifica si hay
tablas huérfanas (nadie las referencia) y si el grafo tiene ciclos. Los ciclos son tema de la
sesión 12 y aquí solo hay que detectarlos.
T7 · SALUD Y PSICOLOGÍA
9.58 Modela “síntoma → conducta indicada por el protocolo” como relación. Los síntomas huér-
fanos son los que el protocolo no cubre; nombra al menos uno.
9.59 Modela “fármaco → interacción” como relación en el conjunto de fármacos. ¿Es simétrica en la
realidad? ¿Está documentada de forma simétrica? La diferencia entre esas dos respuestas es
un riesgo clínico.
TAREA DE CAMPO
T u relación real.Elige una relación de tu entorno sobre un grupo de 4 a 6 personas: “es amigo
de”, “vive con”, “le debe dinero a”, “le contesta los mensajes a”. Escríbela como conjunto
de pares ordenados, dibuja su grafo y calcula su inversa. Trae también una observación: ¿te
sorprendió alguna flecha que fuera de ida y no de vuelta? Guarda este trabajo: la semana que
viene lo vas a analizar a fondo.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 11 — Fase 2: las asignaciones como relaciones. Hasta ahora formalizaste las reglas
(módulo 1) y las categorías (módulo 2). Esta semana toca lo que las conecta. Identifica en tu
sistema al menos dos vínculos —cualquier “a cada X le corresponde Y”— y formalízalos como
relaciones, con su rejilla o su matriz. Después haz el cálculo del nivel 4: dominio contra entradas
posibles, rango contra codominio declarado. Es muy probable que salga tu primer hallazgo
sólido de esta sección del proyecto.`
  },
  10: {
    titulo: `Propiedades de las relaciones`,
    texto: `10 Propiedades de las relaciones
FICHA DE LA SESIÓN
Semana 12 (Amoxtli 3.3 Propiedades de las relaciones)
Meta operativa Al terminar, el alumno determina qué propiedades cumple una relación dada en
cualquiera de sus representaciones, y refuta las que fallanexhibiendo un contraejemplo
concreto.
Lectura Badesa, Jané y Jansana, cap. 3 §§1–2 (propiedades de las relaciones y ejemplos).
Materiales Tarjetas con relaciones cotidianas para el detonador; plantillas de grafo y matriz; la
relación real que cada alumno trajo de tarea.
Reparto 15 min detonador · 50 min las cinco propiedades y cómo se ven · 95 min ejercicios ·
20 min análisis de sus propias relaciones y encargo.
DETONADOR APLICADO (15 min)
“Ponle nombre a la propiedad”. Lanza tres relaciones cotidianas y pregunta, sin dar ningún
tecnicismo, qué tienen de raro:
“es hermano de” ¿va en los dos sentidos? ¿uno es hermano de sí mismo?
“es más alto que” ¿puede volver a sí mismo? ¿si a > b y b > c?
“está a menos de 5 km de” ¿va en los dos sentidos? ¿y la cadena?
La tercera es la buena: va en los dos sentidos y cada uno está a menos de 5 km de sí mismo,
pero la cadena falla: si a está a 4 km de b y b a 4 km de c, a puede estar a 8 km de c. Que el
grupo encuentre ese ejemplo solo es todo el detonador.
Las cinco propiedades
Sea R una relación en A.
Propiedad Definición En el grafo
Reflexiva para todo a ∈ A: (a, a) ∈ R bucle en todos los pun-
tos
Irreflexiva para todo a ∈ A: (a, a) /∈ R ningún bucle
Simétrica si (a, b) ∈ R entonces (b, a) ∈ R toda flecha es doble
Antisimétrica si (a, b) ∈ R y (b, a) ∈ R entonces a = b ninguna flecha doble
entre puntos distintos
Transitiva si (a, b) ∈ R y (b, c) ∈ R entonces (a, c) ∈ R todo atajo de dos pa-
sos existe también en
un paso
En la matriz: reflexiva es tener puros 1 en la diagonal; simétrica es ser igual a su transpuesta;
irreflexiva es tener puros 0 en la diagonal.
PUENTE (la escalera del curso)
Las tres definiciones importantes son condicionales, y por eso todo lo aprendido en el módulo 1
sirve aquí directamente:
• Para probar que se cumple: prueba condicional. Se supone el antecedente para elementos
arbitrarios y se deriva el consecuente (sesión 4).
• Para refutar: basta un contraejemplo, es decir, un caso en que el antecedente sea verdadero y
el consecuente falso. Es exactamente el renglón que refuta un argumento en la sesión 2.
• Y por eso una relación puede cumplir una propiedad vacuamente: si nunca se da el an-
tecedente, el condicional es verdadero. La relación vacía es simétrica, antisimétrica y transi-
tiva, por la misma razón por la que ∅ ⊆ A (sesión 5).
CUIDADO
Los tres errores garantizados de esta sesión:
(1) “No simétrica” no es “antisimétrica”. Son cosas distintas. {(1, 2), (2, 1), (1, 3)} no es
simétrica (falta (3, 1)) y tampoco es antisimétrica (tiene la doble flecha 1 ↔ 2). Y una relación
puede ser las dos: la diagonal IA es simétrica y antisimétrica a la vez.
(2) “No reflexiva” no es “irreflexiva”. Con A = {1, 2} y R = {(1, 1)}: no es reflexiva (falta
(2, 2)) y no es irreflexiva (tiene (1, 1)). Es ninguna de las dos.
(3) La transitividad se verifica sobre todas las cadenas, incluidas las que usan un bucle. Si
(1, 1) y (1, 2) están, hace falta (1, 2): ya está, no hay problema. Pero si (1, 2) y (2, 2) están, hace
falta (1, 2): también. Conviene revisar sistemáticamente.
Ejemplo resuelto 10.1 Análisis completo de “≤” sobre los naturales
Reflexiva: sí, a ≤ a para todo a.
Irreflexiva: no, precisamente por lo anterior.
Simétrica: no. Contraejemplo: 1 ≤ 2 pero 2 ̸≤ 1.
Antisimétrica: sí. Si a ≤ b y b ≤ a, entonces a = b.
Transitiva: sí. Si a ≤ b y b ≤ c, entonces a ≤ c.
Reflexiva + antisimétrica + transitiva: esta combinación tiene nombre y es un orden par-
cial (sesión 12). Nótese que el análisis completo son cinco líneas y que las negativas llevan
contraejemplo numérico. Esa es exactamente la forma en que se pide la respuesta en el examen.
Ejemplo resuelto 10.2 Análisis de “es hermano de” sobre un conjunto de personas
Reflexiva: no —nadie es hermano de sí mismo—. Irreflexiva: sí. Simétrica: sí, si se entiende
“hermano” como “comparte ambos padres”. Antisimétrica: no; contraejemplo: Ana y Beto son
hermanos entre sí y son personas distintas. Transitiva: casi. Si a es hermano de b y b de c,
entonces a es hermano de c. . . salvo cuando a = c, y entonces habría que concluir que a es
hermano de sí mismo, que es falso. No es transitiva, y por un pelo.
Este ejemplo es oro didáctico: la falla de transitividad no viene de un caso raro sino de la
interacción entre irreflexividad y transitividad. Vale la pena dedicarle cinco minutos, porque
enseña que estas propiedades no son independientes entre sí.
NIVEL 1 · Reconocer en voz alta, en grupo
A. Marca las propiedades Para cada relación en A = {1, 2, 3}, di qué propiedades cumple.
10.1 {(1, 1), (2, 2), (3, 3)}
10.2 ∅
10.3 A × A
10.4 {(1, 2), (2, 1)}
10.5 {(1, 2)}
10.6 {(1, 1), (1, 2), (2, 1), (2, 2)}
10.7 {(1, 2), (2, 3)}
10.8 {(1, 2), (2, 3), (1, 3)}
10.9 {(1, 1), (2, 2), (3, 3), (1, 2)}
10.10 {(1, 2), (2, 1), (1, 1)}
10.11 {(1, 1), (2, 2)}
10.12 {(1, 2), (2, 1), (1, 1), (2, 2), (3, 3)}
NIVEL 2 · Aplicar individual
B. Relaciones cotidianas y numéricas Determina las cinco propiedades. Cuando una falle, exhibe el
contraejemplo.
10.13 “a < b” sobre N.
10.14 “a ≤ b” sobre N.
10.15 “a divide a b” sobre N.
10.16 “a = b” sobre cualquier conjunto.
10.17 “a ̸= b” sobre un conjunto con al menos 3 elementos.
10.18 “a y b tienen el mismo residuo módulo 3” sobre N.
10.19 “es padre de” sobre personas.
10.20 “es antepasado de” sobre personas.
10.21 “vive en la misma ciudad que” sobre personas.
10.22 “está a menos de 5 km de” sobre lugares.
10.23 “es amigo de” sobre personas.
10.24 “A ⊆ B” sobre P (X).
10.25 “A ∩ B ̸= ∅” sobre P (X) con X no vacío.
10.26 “a y b nacieron el mismo mes” sobre personas.
C. Verifica en la matriz y en el grafo
10.27 Dada M =


1 1 0
1 1 0
0 0 1

 sobre {1, 2, 3}: ¿reflexiva? ¿simétrica? ¿transitiva? Justifica leyendo la
matriz, no la lista de pares.
10.28 Dada M =


0 1 1
0 0 1
0 0 0

: ¿qué propiedades? Dibuja el grafo.
10.29 Escribe la matriz de una relación en {1, 2, 3} que sea reflexiva y simétrica pero no transitiva.
10.30 Escribe la matriz de una relación transitiva y antisimétrica que no sea reflexiva ni irreflexiva.
10.31 Dibuja el grafo de una relación simétrica con exactamente 4 pares sobre {1, 2, 3}.
10.32 ¿Cómo se ve en la matriz que una relación es igual a su inversa? ¿Qué propiedad es eso?
NIVEL 3 · Analizar en parejas
D. Casos finos y construcciones
10.33 ¿Puede una relación ser simétrica y antisimétrica a la vez? Da todas las relaciones en {1, 2} que
lo sean.
10.34 ¿Puede ser reflexiva e irreflexiva a la vez? ¿Para qué conjunto A?
10.35 Construye una relación en {1, 2, 3} que sea simétrica y transitiva pero no reflexiva.
10.36 Construye una que sea reflexiva y transitiva pero no simétrica ni antisimétrica.
10.37 Demuestra: si R es simétrica y antisimétrica, entonces R ⊆ IA.
10.38 Demuestra: R es simétrica si y solo si R = R−1.
10.39 Demuestra: si R y S son transitivas, R ∩ S es transitiva. ¿Y R ∪ S? Refuta con un contraejemplo.
10.40 Demuestra: si R es transitiva e irreflexiva, entonces es antisimétrica.
10.41 Dada R = {(1, 2), (2, 3)} en {1, 2, 3}, añade el mínimo número de pares para hacerla transitiva.
(Se llama cierre transitivo.)
10.42 Haz lo mismo para hacerla reflexiva, y para hacerla simétrica. ¿Cuántos pares hay que añadir
en cada caso?
NIVEL 4 · Auditar se encarga y se defiende
10.43 El supuesto de transitividad falso. Busca en tu sistema un vínculo que el documento trata
como si fuera transitivo y no lo es (“es compatible con”, “es sustituible por”, “es equivalente
a”, “puede autorizar en ausencia de”). Formalízalo, exhibe la cadena concreta a → b → c
donde falla y explica la consecuencia práctica de que alguien lo suponga transitivo.
10.44 Simetría supuesta. Encuentra un vínculo que debería ser simétrico y que está documentado
de forma asimétrica —o al revés— (“interactúa con”, “combina con”, “es incompatible con”).
Exhibe el par que falta. En el caso de interacciones farmacológicas o de compatibilidades
técnicas, la asimetría documental es un riesgo, no una curiosidad.
10.45 Reflexividad tácita. Busca una regla cuyo sentido dependa de si el vínculo es reflexivo y donde
el documento no lo diga (“ningún empleado puede autorizar su propio gasto” presupone que
“autoriza a” podría ser reflexivo y lo prohíbe; si esa cláusula no existe, el sistema lo permite).
Determina qué hace hoy tu sistema con el caso a R a .
10.46 Análisis riguroso de tu relación real. Retoma la relación que trajiste de campo la semana
pasada y determina rigurosamente qué propiedades cumple, con un contraejemplo concreto
por cada una que falle. Entrega el análisis completo de las cinco, en el formato del ejemplo
resuelto de “≤”.
10.47 Cierre transitivo con consecuencias. Toma un vínculo de tu sistema que sí sea transitivo en la
realidad (jerarquía, prerrequisitos, herencia de permisos) y calcula su cierre transitivo: todos
los pares que se siguen aunque no estén escritos. Cada par nuevo es una consecuencia que el
sistema tiene y no documenta. Si alguno resulta indeseable —un permiso que se hereda hasta
donde nadie quería— tienes un hallazgo de primer nivel.
10.48 Matriz de propiedades. Construye una tabla con los vínculos de tu sistema en los renglones
y las cinco propiedades en las columnas, marcando cada casilla y anotando el contraejemplo
donde falle. Esta tabla es una figura excelente para la presentación final: muestra de un golpe
todo el trabajo estructural del proyecto.
Banco por trayectoria
T1 · DISEÑO Y MODA
10.49 Analiza las cinco propiedades de “combina con” sobre las prendas de una cápsula. ¿Es simétrica
en la realidad? ¿Es transitiva? Si A combina con B y B con C, ¿combina A con C? Exhibe el
contraejemplo con prendas concretas.
10.50 Analiza “es una talla más grande que”. ¿Qué propiedades tiene? Compárala con “es de talla
distinta a”.
T2 · GASTRONOMÍA
10.51 Analiza “marida con” sobre platillos y bebidas de un menú real. ¿Es transitiva? Exhibe la
cadena que falla.
10.52 Analiza “puede sustituir a” sobre ingredientes. La sustitución se supone transitiva en las
cocinas y casi nunca lo es: encuentra la cadena de tres sustituciones que arruina un platillo.
T3 · DERECHO
10.53 Analiza “es norma superior a” en una jerarquía normativa. Debería ser antisimétrica y transi-
tiva: verifica que lo sea y explica qué pasaría si no (dos normas superiores una a la otra).
10.54 Analiza “deroga a” sobre normas. ¿Es transitiva? ¿Puede haber ciclos? Un ciclo aquí sería
jurídicamente imposible y encontrarlo es un hallazgo grave.
T4 · ADMINISTRACIÓN Y NEGOCIOS
10.55 Analiza “es jefe de” en un organigrama real. Debe ser antisimétrica, irreflexiva y —en su
versión “es superior de”— transitiva. Verifica las tres y reporta cualquier falla: dos personas
jefes una de la otra es un organigrama imposible.
10.56 Analiza “puede autorizar el gasto de”. Calcula el cierre transitivo y determina hasta dónde
llega, de hecho, la autoridad del director general. ¿Coincide con lo que el manual dice?
T5 · NEGOCIOS INTERNACIONALES
10.57 Analiza “tiene tratado comercial con” sobre países. ¿Es simétrica? ¿Transitiva? El supuesto de
transitividad aquí —“mi socio del socio es mi socio”— es falso y costoso: exhibe el contraejem-
plo real.
10.58 Analiza “es país de origen de” sobre mercancías y países en una cadena de transformación.
¿La relación es unívoca? Ese es el problema central de las reglas de origen.
T6 · INGENIERÍA Y SISTEMAS
10.59 Analiza “hereda permisos de” entre roles. Calcula el cierre transitivo y verifica si algún rol
termina con permisos que nadie le quiso dar. Es una auditoría de seguridad real.
10.60 Analiza “depende del módulo” en un proyecto de software. Debe ser irreflexiva y sin ciclos; si
el grafo tiene un ciclo, el proyecto no compila y acabas de encontrar por qué.
T7 · SALUD Y PSICOLOGÍA
10.61 Analiza “interactúa con” sobre fármacos. Debería ser simétrica: verifica en una fuente real si la
documentación lo es en ambos sentidos para todos los pares que encuentres.
10.62 Analiza “es más grave que” en una escala de triage. Debe ser antisimétrica y transitiva para
que el orden de atención sea coherente. Si dos categorías se declaran mutuamente más graves,
el protocolo es inaplicable.
TAREA DE CAMPO
Análisis riguroso de tu relación. Retoma la relación real que trajiste la semana pasada (o elige
otra) y determina rigurosamente qué propiedades cumple, con un contraejemplo concreto para
cada una que falle. Entrega las cinco líneas, en el formato del análisis de “ ≤”. Y agrega una
observación de una línea: ¿alguna propiedad que esperabas que se cumpliera resultó falsa?
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 12 — Fase 3, arranque: la auditoría estructural.Empieza la fase de auditoría, y empieza
por lo estructural. Toma cada vínculo que formalizaste la semana pasada y verifica las cinco
propiedades. Después —y esto es lo que produce el hallazgo— compara el resultado con lo que
tu sistema supone. Casi siempre hay un desfase: el documento razona como si el vínculo fuera
transitivo, o simétrico, o irreflexivo, y no lo es. Ese desfase es un hallazgo probado, porque lo
demuestras con un contraejemplo concreto, y encaja perfecto en el criterio de auditoría de la
rúbrica.`
  },
  11: {
    titulo: `Equivalencia, clases y particiones`,
    texto: `11 Equivalencia, clases y particiones
FICHA DE LA SESIÓN
Semanas 12–13 (Amoxtli 3.4 Relaciones de equivalencia y particiones)
Meta operativa Al terminar, el alumno demuestra que una relación es de equivalencia, describe sus
clases y el cociente, y verifica si una clasificación real es una partición legítima.
Lectura Badesa, Jané y Jansana, cap. 3: relaciones de equivalencia y particiones.
Materiales Espacio despejado para la dinámica de agrupamiento (hay que poder moverse).
Reparto 15 min detonador · 45 min equivalencia, clases, particiones y el teorema · 90 min
ejercicios · 30 min auditoría de clasificaciones reales.
DETONADOR APLICADO (15 min)
“Agrúpense por mes de cumpleaños”. Pide al grupo, literalmente, que se levante y se organice
físicamente en bloques según el mes en que nació. Da dos minutos y deja que se acomoden
solos.
Cuando termine el movimiento, haz las tres preguntas señalando los bloques: ¿alguien quedó en
dos bloques a la vez? ¿alguien quedó sin bloque? ¿algún bloque quedó vacío? Las tres respuestas son
no —y el “no” de la tercera significa que los meses sin nadie simplemente no forman bloque—.
Relación de equivalencia
R en A es una relación de equivalencia si es reflexiva, simétrica y transitiva.
Intuitivamente: a R b significa “a y b son intercambiables para este propósito”. No idénticos: intercam-
biables respecto a un criterio. Dos billetes de cien pesos no son el mismo objeto, pero para pagar son
equivalentes.
Casi todas las relaciones de equivalencia útiles tienen la forma “a y b tienen el mismo. . . ”: mismo
mes de nacimiento, mismo tipo de sangre, mismo residuo al dividir entre 3, misma talla, misma
clave presupuestal. Y esa forma garantiza las tres propiedades de un golpe, porque “tener el mismo”
hereda la reflexividad, la simetría y la transitividad de la igualdad.
Clases de equivalencia
La clase de a es el conjunto de todo lo que es equivalente a a:
[a] ={x ∈ A : x R a }.
Propiedades, todas demostrables en dos líneas: a ∈ [a] (por reflexividad, luego ninguna clase es
vacía); a R b si y solo si [a] = [b]; y dos clases distintas son disjuntas —si comparten un elemento,
son la misma clase—.
El conjunto cociente A/R es el conjunto de todas las clases. Sus elementos son conjuntos.
Ejemplo resuelto 11.1 Congruencia módulo 3
Sobre N, sea a R b cuando a y b dejan el mismo residuo al dividir entre 3.
Es equivalencia: reflexiva (todo número deja su propio residuo); simétrica (sia y b dejan el mismo,
b y a también); transitiva (si a y b coinciden y b y c coinciden, a y c coinciden). Las tres se heredan
de la igualdad de los residuos.
Las clases son tres:
[0] ={0, 3, 6, 9, . . .} [1] ={1, 4, 7, 10, . . .} [2] ={2, 5, 8, 11, . . .}
El cociente: N/R = {[0], [1], [2]}, con tres elementos. Nótese que [0] = [3] = [6]: la misma clase
tiene muchos nombres, y cualquiera de sus elementos sirve de representante. Elegir uno —el 0,
el 1, el 2— es lo que hace un sistema cuando decide cómo llamar a cada categoría.
Particiones y el teorema que las conecta
Una partición de A es una familia de subconjuntos de A tal que:
(1) ninguno es vacío,
(2) son disjuntos dos a dos,
(3) su unión es todo A (lo cubren).
Teorema. Toda relación de equivalencia en A produce una partición de A —sus clases— y
toda partición de A produce una relación de equivalencia —“estar en el mismo bloque”—.
Son la misma cosa vista de dos maneras.
NIVEL 1 · Reconocer en voz alta, en grupo
A. ¿Es de equivalencia? Di sí o no. Si no, señala qué propiedad falla y con qué contraejemplo.
11.1 “a = b”
11.2 “a ≤ b”
11.3 “a y b tienen la misma edad”
11.4 “a es hermano de b”
11.5 “a y b están en el mismo grupo escolar”
11.6 “a conoce a b”
11.7 “a y b tienen el mismo tipo de sangre”
11.8 “a está a menos de 5 km de b”
11.9 “a y b son del mismo signo zodiacal”
11.10 “a y b tienen al menos un amigo en común”
11.11 “a y b nacieron en el mismo país”
11.12 {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)} en {1, 2, 3}
NIVEL 2 · Aplicar individual
B. Clases y cociente
11.13 Para “mismo residuo módulo 2” en {1, . . . , 10}: da las clases y el cociente.
11.14 Para “mismo residuo módulo 4” en {0, . . . , 11}: ídem.
11.15 Para “mismo número de letras” en {sol, luna, mar, cielo, río}: ídem.
11.16 Para R = {(1, 1), (2, 2), (3, 3), (4, 4), (1, 3), (3, 1), (2, 4), (4, 2)} en {1, 2, 3, 4}: da las clases. ¿Cuán-
tas son?
11.17 Para “mismo signo” en {−3, −1, 0, 2, 5} con las clases negativo, cero, positivo: ¿es partición?
11.18 Da [7] para la congruencia módulo 3 en N, y di con qué otros nombres se puede llamar a esa
misma clase.
11.19 Si |A| = 12 y todas las clases de una equivalencia tienen 3 elementos, ¿cuántas clases hay?
11.20 Si una equivalencia en A tiene una sola clase, ¿cuál es la relación? ¿Y si tiene tantas clases como
elementos?
C. ¿Es partición? Sobre A = {1, 2, 3, 4, 5, 6}, di si cada familia es una partición y, si no, cuál condición
falla.
11.21 {{1, 2}, {3, 4}, {5, 6}}
11.22 {{1, 2, 3}, {3, 4, 5, 6}}
11.23 {{1, 2}, {3, 4}}
11.24 {{1, 2, 3, 4, 5, 6}}
11.25 {{1}, {2}, {3}, {4}, {5}, {6}}
11.26 {{1, 2}, ∅, {3, 4, 5, 6}}
11.27 {{1, 3, 5}, {2, 4, 6}}
11.28 {{1, 2, 3}, {4, 5}, {6}, {2}}
NIVEL 3 · Analizar en parejas
D. Demostraciones y conteo
11.29 Demuestra que “mismo residuo módulo n” es de equivalencia, para cualquier n.
11.30 Demuestra que a R b si y solo si [a] = [b].
11.31 Demuestra que si [a] ∩ [b] ̸= ∅ entonces [a] = [b].
11.32 Demuestra que ninguna clase es vacía.
11.33 Sea f una asignación cualquiera de A a un conjunto de etiquetas. Demuestra que “a y b reciben
la misma etiqueta” siempre es de equivalencia. (Este ejercicio explica por qué todas las equivalencias
útiles son de la forma “tener el mismo. . . ”.)
11.34 ¿Cuántas particiones tiene un conjunto de 1, 2, 3 y 4 elementos? Enuméralas para 3.
11.35 Si R y S son equivalencias en A, ¿es R ∩ S de equivalencia? ¿Y R ∪ S? Demuestra la que sí y
refuta la que no.
11.36 ¿Cuántas relaciones de equivalencia hay en {1, 2, 3}? Enuméralas. (Pista: tantas como parti-
ciones.)
NIVEL 4 · Auditar se encarga y se defiende
11.37 ¿Es partición tu clasificación? Toma la clasificación central de tu sistema (tarifas, niveles, tipos,
categorías, tallas, grados de riesgo) y verifica las tres condiciones. Entrega: la lista de bloques,
la verificación de que son disjuntos —o el elemento que está en dos—, la verificación de que
cubren —o el elemento que no está en ninguno— y la de que ninguno es vacío —o el bloque
muerto—. Cada falla lleva su nombre: contradicción, vacío, redundancia.
11.38 La equivalencia oculta. Toda clasificación real esconde una relación de “mismo. . . ”. Encuentra
cuál es el criterio de la tuya y escríbelo explícitamente. Después pregunta lo importante: ¿ese
criterio está escrito en el documento o se aplica por costumbre? Si es lo segundo, tienes un hallazgo
de categoría indefinida, ahora con la maquinaria completa para probarlo.
11.39 Clases que deberían ser una. Busca dos categorías de tu sistema que en la práctica se traten
igual: reciben el mismo tratamiento, la misma tarifa, el mismo procedimiento. Si son indistin-
guibles para todos los efectos del sistema, la distinción es redundante y la propuesta de mejora
es fundirlas. Pruébalo mostrando que ninguna regla las diferencia.
11.40 Una clase que debería ser dos. Al revés: busca una categoría de tu sistema que agrupe casos
que no son intercambiables —que reciben el mismo trato y no deberían—. Exhibe dos elementos
de la misma clase con necesidades distintas. Esto es un hallazgo de grano demasiado grueso, y
es de los que más se agradecen en un dictamen.
11.41 Partición viva. Encuentra en la vida real una relación de equivalencia —algo que agrupe sin
dejar a nadie fuera ni en dos grupos: mismo tipo de sangre, misma colonia, mismo equipo,
misma generación— y describe explícitamente las clases y la partición que genera. Después
estropéala: cambia mínimamente el criterio para que deje de ser partición y explica qué se
rompió.
11.42 Del cociente al sistema. Cuenta cuántas clases tiene la clasificación de tu sistema y compáralo
con el número de reglas distintas que el sistema tiene para tratarlas. Si hay más clases que
reglas, algunas clases comparten trato y quizá no deberían existir; si hay más reglas que clases,
alguna regla no se aplica a nadie. Las dos cifras deberían cuadrar, y cuando no cuadran hay
algo que reportar.
Banco por trayectoria
T1 · DISEÑO Y MODA
11.43 ¿Es “misma talla” una relación de equivalencia sobre las clientas? Describe las clases. Después
audita: ¿la guía de tallas produce una partición o hay cuerpos en dos tallas y cuerpos en
ninguna?
11.44 ¿Es partición la clasificación de una colección en líneas (casual, formal, deportiva)? Busca la
prenda que cae en dos.
T2 · GASTRONOMÍA
11.45 ¿Es partición la división de una carta en secciones (entradas, fuertes, postres, bebidas)? Busca
el platillo que podría ir en dos y decide si eso es un problema.
11.46 “Tiene el mismo alérgeno principal”: ¿es equivalencia? ¿Qué pasa con un platillo que tiene
dos alérgenos? Esa es la falla, y explica por qué las clasificaciones por alérgeno nunca son
particiones.
T3 · DERECHO
11.47 ¿Es partición la clasificación de los delitos por tipo penal? Busca la conducta que encuadra en
dos tipos: en derecho eso tiene nombre propio y consecuencias procesales.
11.48 “Está sujeto al mismo régimen”: verifica si es equivalencia y describe las clases. ¿Hay sujetos
sin régimen asignado?
T4 · ADMINISTRACIÓN Y NEGOCIOS
11.49 ¿Es partición la segmentación de clientes de una empresa real? Busca al cliente que cae en dos
segmentos y al que no cae en ninguno. Es el hallazgo más frecuente de este bloque.
11.50 “Pertenece al mismo centro de costos”: verifica si es equivalencia y si las clases cubren todos
los gastos. Un gasto sin centro de costos es un vacío contable.
T5 · NEGOCIOS INTERNACIONALES
11.51 ¿Es partición la clasificación arancelaria de una mercancía? El sistema armonizado está dis-
eñado para serlo: busca un caso real de clasificación disputada y explica qué condición está en
juego.
11.52 “Tiene el mismo régimen aduanero”: describe las clases y verifica la cobertura.
T6 · INGENIERÍA Y SISTEMAS
11.53 ¿Es partición el conjunto de estados de un pedido (nuevo, pagado, enviado, entregado, cance-
lado)? Verifica que ningún pedido pueda estar en dos estados y que ninguno pueda quedar sin
estado. Un pedido en dos estados es un bug de consistencia.
11.54 “Pertenece al mismo módulo” sobre los archivos de un proyecto: ¿equivalencia? ¿Hay archivos
huérfanos que no pertenecen a ningún módulo?
T7 · SALUD Y PSICOLOGÍA
11.55 ¿Es partición la escala de triage (rojo, amarillo, verde, negro)? Debe serlo por diseño: verifica si
los criterios de asignación garantizan que ningún paciente quede en dos colores ni sin color.
11.56 “Tiene el mismo diagnóstico principal”: describe las clases. ¿Qué pasa con la comorbilidad?
Explica por qué obliga a distinguir diagnóstico principal de secundarios, y qué condición de
partición se está salvando con esa distinción.
TAREA DE CAMPO
T u partición real.Encuentra en la vida real una relación de equivalencia: algo que agrupe sin
dejar a nadie fuera ni a nadie en dos grupos —mismo tipo de sangre, misma colonia, mismo
equipo, misma generación—. Describe explícitamente las clases y la partición que genera,
y verifica las tres condiciones una por una. Trae también el criterio escrito como “tener el
mismo. . . ”.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 12–13 — Fase 3: las clasificaciones bajo examen. Aplica el procedimiento de las tres
condiciones a todas las clasificaciones de tu sistema. Es el paso más mecánico y más rentable de
toda la auditoría: los traslapes son contradicciones, los huecos son vacíos y los bloques vacíos
son redundancias, y las tres cosas están en la rúbrica con esos nombres. Si a estas alturas del
proyecto todavía no tienes un hallazgo probado, este es el ejercicio que te lo va a dar.
12. Relaciones de orden y diagramas de Hasse`
  },
  12: {
    titulo: `Relaciones de orden y diagramas de Hasse`,
    texto: `12 Relaciones de orden y diagramas de Hasse
FICHA DE LA SESIÓN
Semana 13 (Amoxtli 3.5 Relaciones de orden). Cierra el módulo y el tercer parcial.
Meta operativa Al terminar, el alumno distingue orden parcial de total, dibuja el diagrama de Hasse
de un orden, identifica maximales y mínimos, y detecta ciclos y aristas redundantes
en una jerarquía real.
Lectura Badesa, Jané y Jansana, cap. 3: relaciones de orden.
Materiales Lista de materias con prerrequisitos del mapa curricular de las carreras del grupo
(imprímela: es el mejor material de esta sesión); examen del tercer parcial.
Reparto 15 min detonador · 40 min orden, Hasse y extremos · 55 min ejercicios · 60 min
evaluación del tercer parcial · 10 min cierre y puente al módulo 4.
DETONADOR APLICADO (15 min)
“¿Quién va primero?” Proyecta cinco materias del mapa curricular con sus prerrequisitos
—úsalo del plan de estudios real del grupo— y pide que propongan un orden válido para
cursarlas.
Va a pasar lo interesante: distintos equipos propondrán órdenes distintos y todos válidos.
Entonces la pregunta: ¿por qué hay varias respuestas correctas? ¿qué pares de materias da igual en qué
orden tomarlos? Esos pares se llaman incomparables, y son el corazón de la sesión.
Orden parcial y orden total
R en A es un orden parcial si es reflexiva, antisimétrica y transitiva.
Es un orden total si además cualesquiera dos elementos son comparables: para todo a, b, o
a R b o b R a .
Compárese con la sesión anterior: la equivalencia y el orden comparten la reflexividad y la transi-
tividad, y se separan en la tercera. La simetría agrupa; la antisimetría jerarquiza. Toda la diferencia
entre clasificar y ordenar está en esa única propiedad.
Dos elementos son incomparables si ninguno está relacionado con el otro. Un orden parcial
admite incomparables; un orden total, no.
Relación Por qué Tipo
≤ en N dos números siempre se comparan orden total
⊆ en P (X) {a} y {b} son incomparables orden parcial
“divide a” en N 2 y 3 son incomparables orden parcial
“es prerrequisito de” dos materias del mismo semestre orden parcial
“es jefe de” (jerárquico) dos gerentes de áreas distintas orden parcial
CUIDADO
La versión estricta de un orden — < en lugar de ≤— es irreflexiva, antisimétrica (o mejor:
asimétrica) y transitiva. Ambas versiones son legítimas y la única diferencia es si un elemento
se considera relacionado consigo mismo. Lo importante es declarar cuál se está usando: un
reglamento que dice “tiene prioridad sobre” sin aclarar si algo tiene prioridad sobre sí mismo
genera discusiones bizantinas en el momento menos oportuno.
Diagrama de Hasse
Dibujar un orden como grafo dirigido es ilegible: todos los bucles y todas las flechas transitivas. El
diagrama de Hasse es el mismo orden dibujado con lo mínimo indispensable. Se construye en tres
pasos:
1. Borra todos los bucles (la reflexividad se da por sabida).
2. Borra todas las flechas que se siguen por transitividad: si están a → b y b → c, borra a → c.
3. Acomoda los elementos de modo que lo mayor quede arriba, y borra las puntas de flecha: la
altura indica la dirección.
Ejemplo resuelto 12.1 Hasse de “divide a” sobre {1, 2, 3, 4, 6, 12}
2 3
4 6
Se lee de abajo hacia arriba: hay camino ascendente de a a b exactamente cuando a divide a b.
Nótese que no hay línea directa de 1 a 12 aunque 1 divida a 12: se sigue por transitividad y por
eso no se dibuja. Y nótese que 2 y 3 son incomparables: están a la misma altura y no hay camino
entre ellos. El 1 es el mínimo y el 12 el máximo.
Ejemplo resuelto 12.2 Hasse de ⊆ sobre P ({a, b})
∅
{a} {b}
{a, b}
El vacío abajo, el total arriba, y los dos unitarios incomparables en medio. Con tres elementos
el diagrama tiene ocho vértices y es un cubo: vale la pena pedirlo como ejercicio, porque es el
momento en que el alumno ve que 2n no es una fórmula sino una forma.
Extremos
• Maximal: no hay nadie por encima. Minimal: nadie por debajo. Puede haber varios de cada uno.
• Máximo: está por encima de todos. Mínimo: por debajo de todos. Si existe, es único.
CUIDADO
Maximal y máximo no son lo mismo, y la diferencia se ve en el Hasse: si el diagrama termina en
dos puntas distintas, hay dos maximales y no hay máximo. En un sistema real eso significa que
hay dos autoridades últimas sin nadie que las desempate, y es un hallazgo: cuando dos normas
maximales se contradicen, no hay regla para decidir.
PUENTE (la escalera del curso)
Aquí cierra el módulo y conviene cerrarlo con la comparación completa, porque es la mitad del
examen conceptual:
Equivalencia Orden parcial
Propiedades refl. + sim. + trans. refl. + antisim. + trans.
Qué hace agrupa jerarquiza
Produce una partición un diagrama de Hasse
Se audita buscando traslapes y huecos ciclos y aristas redundantes
Y el puente al módulo 4: una relación de equivalencia asigna a cada elemento su clase, y esa
asignación es una sola por elemento. Una asignación en la que a cada entrada le corresponde
exactamente una salida se llama función, y es todo lo que falta del curso.
NIVEL 1 · Reconocer en voz alta, en grupo
A. ¿Orden, equivalencia o ninguno?
12.1 “a ≤ b” en N
12.2 “a < b” en N
12.3 “a divide a b” en N
12.4 “mismo residuo módulo 5”
12.5 “A ⊆ B”
12.6 “a es antepasado de b”
12.7 “misma edad”
12.8 “a es más alto que b”
12.9 “a es prerrequisito de b”
12.10 “a y b están en el mismo semestre”
12.11 “a tiene prioridad sobre b” en una cola
12.12 “a es hermano de b”
NIVEL 2 · Aplicar individual
B. Dibuja el Hasse
12.13 “Divide a” sobre {1, 2, 4, 8}.
12.14 “Divide a” sobre {1, 2, 3, 5, 6, 10, 15, 30}.
12.15 “Divide a” sobre {2, 3, 5, 7}. (¿Qué forma tiene?)
12.16 ⊆ sobre P ({a, b, c}).
12.17 ≤ sobre {1, 2, 3, 4}.
12.18 El orden de prerrequisitos: A antes de B y C; B y C antes de D; E sin relación con nada.
12.19 Un orden con 4 elementos, dos maximales y un mínimo.
12.20 Un orden con 5 elementos sin máximo ni mínimo.
C. Extremos
12.21 En el Hasse de “divide a” sobre {1, 2, 3, 4, 6, 12}: maximales, minimales, máximo y mínimo.
12.22 En “divide a” sobre {2, 3, 4, 6}: ¿hay máximo? ¿maximales?
12.23 En P ({a, b, c}) con ⊆: máximo y mínimo.
12.24 En {2, 3, 5, 7} con “divide a”: maximales y minimales.
12.25 Da un orden con exactamente tres maximales.
12.26 ¿Puede un orden tener dos máximos? Justifica con la antisimetría.
12.27 ¿Puede un elemento ser maximal y minimal a la vez?
12.28 En un orden total, ¿cuántos maximales puede haber?
NIVEL 3 · Analizar en parejas
D. Estructura y consecuencias
12.29 Demuestra que en un orden parcial, si existe máximo, es único.
12.30 Demuestra que ⊆ es un orden parcial en P (X) y que no es total si |X| ≥2.
12.31 Demuestra que la inversa de un orden parcial es un orden parcial. ¿Qué le pasa al Hasse?
12.32 Demuestra que un orden parcial no puede tener ciclos de longitud mayor a uno. (Usa anti-
simetría y transitividad.)
12.33 Explica por qué un grafo con un ciclo no puede ser un orden, y por qué eso importa en un
sistema de prerrequisitos.
12.34 Dado un orden parcial, un orden total compatible es una manera de alinear todos los elementos
en fila respetando el orden. Encuentra todos los órdenes totales compatibles del ejercicio B.6.
12.35 ¿Cuántas aristas tiene el Hasse de una cadena de n elementos? ¿Y el de n elementos todos
incomparables?
12.36 Si un Hasse tiene una arista de a a b y otra de a a c y otra de b a c, ¿está bien dibujado? Explica.
NIVEL 4 · Auditar cierre del módulo
12.37 Caza de ciclos. Toma una jerarquía real de tu carrera —prerrequisitos del mapa curricular,
flujo de aprobaciones, dependencias de un proyecto, jerarquía normativa— y verifica que no
tenga ciclos. Si encuentras uno, has probado que el sistema es inejecutable: entrega el ciclo
concreto y explica qué pasa en la práctica cuando alguien cae en él (casi siempre: alguien lo
resuelve con una excepción no escrita).
12.38 Prerrequisitos redundantes. Dibuja el Hasse de una jerarquía real y busca aristas que se sigan
por transitividad: si el plan dice que A es prerrequisito de B, B de C y también A de C, la
tercera es redundante. Entrega el diagrama con las redundantes marcadas y una línea sobre
por qué las escribieron.
12.39 Dos maximales sin desempate. Busca en tu sistema dos elementos maximales —dos autori-
dades últimas, dos normas de igual jerarquía, dos criterios de prioridad— y encuentra un caso
concreto en que se contradigan. Como ninguno está por encima del otro, el sistema no tiene
regla para decidir: ese es el hallazgo, y la propuesta de mejora es una regla de precedencia.
12.40 El orden total impuesto. Encuentra un sistema que exija un orden total —una fila, un ranking,
una prioridad estricta— sobre elementos que en realidad son incomparables. Muestra el par
incomparable y averigua con qué criterio se desempata hoy. Si el criterio no está escrito, es una
decisión discrecional disfrazada de regla.
12.41 Linealización. Toma el orden parcial de prerrequisitos de tu propia carrera y construye dos
rutas distintas y válidas para cursarla. La existencia de dos rutas demuestra que el mapa
curricular no determina un orden único, y comparar sus consecuencias (carga por semestre,
materias disponibles) es exactamente el trabajo de un coordinador académico.
12.42 Cierre del tercer parcial. Entrega la sección estructural completa de tu proyecto: los vínculos
formalizados como relaciones, sus cinco propiedades verificadas con contraejemplos, las
clasificaciones verificadas como particiones, y las jerarquías dibujadas como Hasse con sus
ciclos y redundancias marcadas. Con esto, la Fase 3 está a dos tercios.
Banco por trayectoria
T1 · DISEÑO Y MODA
12.43 Dibuja el Hasse del orden de tallas (XS < S < M < L < XL). ¿Es total? Después agrega las
tallas de niño y de talla plus: ¿sigue siendo total o aparecen incomparables?
12.44 Ordena las etapas de producción de una prenda por “debe hacerse antes de” y dibuja el Hasse.
Localiza las etapas que pueden hacerse en paralelo: son los pares incomparables, y son donde
se gana tiempo.
T2 · GASTRONOMÍA
12.45 Ordena los pasos de una receta por “debe hacerse antes de” y dibuja el Hasse. Los incompa-
rables son los pasos paralelizables: cuéntalos y estima cuánto tiempo ahorra la cocina si los
ejecuta a la vez.
12.46 Ordena una carta de vinos por cuerpo y verifica si el orden es total o hay vinos incomparables.
Si el sommelier los ordena igual, ¿con qué criterio desempata?
T3 · DERECHO
12.47 Dibuja el Hasse de la jerarquía normativa aplicable a un caso concreto. Localiza los maximales:
si hay dos, encuentra el conflicto que el sistema no resuelve.
12.48 Verifica que “deroga a” no tenga ciclos en un ordenamiento real. Un ciclo sería jurídicamente
imposible: si lo encuentras, es un hallazgo mayor.
T4 · ADMINISTRACIÓN Y NEGOCIOS
12.49 Dibuja el Hasse del flujo de autorizaciones de un gasto. Busca ciclos (“ A autoriza solo si B
autorizó y B solo si A autorizó”) y aristas redundantes.
12.50 Dibuja el Hasse del organigrama. ¿Hay máximo? ¿Hay dos maximales? ¿Hay alguien
incomparable con todos, es decir, sin lugar en la jerarquía?
T5 · NEGOCIOS INTERNACIONALES
12.51 Ordena los pasos de un despacho aduanero por precedencia y dibuja el Hasse. Los pasos
paralelizables son donde se reduce el tiempo de liberación.
12.52 Ordena los Incoterms por “el vendedor asume más responsabilidad que”. ¿Es un orden total o
hay términos incomparables? La respuesta es más interesante de lo que parece.
T6 · INGENIERÍA Y SISTEMAS
12.53 Dibuja el grafo de dependencias de un proyecto y verifica que sea acíclico. Un ciclo aquí impide
compilar: si lo encuentras, ya sabes por qué falla el build.
12.54 Dibuja el Hasse de la jerarquía de roles por “tiene al menos los permisos de”. Busca dos roles
maximales: si hay dos administradores incomparables, ninguno puede auditar al otro.
T7 · SALUD Y PSICOLOGÍA
12.55 Ordena las categorías de triage por gravedad y verifica que el orden sea total: en una urgencia
no puede haber pares incomparables, porque alguien tiene que pasar primero.
12.56 Ordena los pasos de un protocolo por precedencia obligatoria y dibuja el Hasse. Los incom-
parables son los que el equipo puede hacer simultáneamente, y en reanimación eso salva
vidas.
Cierre del módulo y guía del tercer parcial
Autoevaluación del alumno
□ Puedo pasar una relación entre pares, rejilla, matriz y grafo sin equivocarme.
□ Sé qué es un huérfano y un inalcanzable, y los busco sin que me lo pidan.
□ Refuto una propiedad exhibiendo el contraejemplo, no diciendo “no se cumple”.
□ Distingo “no simétrica” de “antisimétrica” y puedo dar un ejemplo de cada cosa.
□ Encuentro la falla de transitividad de “está cerca de” y de “es amigo de”.
□ Puedo probar que una relación es de equivalencia y describir sus clases.
□ Verifico si una clasificación real es partición con las tres condiciones.
□ Dibujo un Hasse borrando bucles y aristas transitivas.
□ Distingo maximal de máximo y sé por qué importa cuando hay dos maximales.
□ Sé por qué un ciclo en una jerarquía prueba que el sistema no se puede ejecutar.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 13 — Fase 3: cierre estructural y tercer parcial. Entrega toda la auditoría estructural. A
estas alturas deberías tener al menos un hallazgo probado; si tienes tres, elige el más defendible
para el centro de tu presentación y deja los otros como hallazgos secundarios. La semana que
entra empieza el último módulo, y trae la herramienta que resuelve la pregunta más peligrosa
que se le puede hacer a un sistema: ¿de verdad a cada caso le corresponde una sola respuesta?
MÓDULO 4
Funciones
El curso termina donde empieza casi todo problema real: en las asignaciones. A cada persona su
CURP , a cada pedido su folio, a cada paciente su nivel de riesgo, a cada medida su talla, a cada gasto
su nivel de autorización, a cada entrada del formulario su respuesta. Un sistema profesional, visto
de lejos, es una máquina de asignar.
Y una función no es más que una relación a la que se le exigen dos cosas:
Totalidad: todo elemento del dominio tiene asignado algo.
Unicidad: ninguno tiene asignadas dos cosas distintas.
Esas dos exigencias son la razón de que este módulo cierre el curso. Cuando un sistema real falla la
primera, hay un caso sin respuesta: unvacío. Cuando falla la segunda, hay un caso con dos respuestas
distintas: una contradicción o una ambigüedad. Son exactamente las cuatro palabras de la rúbrica
del proyecto, y aquí aparecen no como categorías de un dictamen sino como el incumplimiento de
dos condiciones verificables.
Sesión Lo que el alumno sabrá hacer Herramienta
13 Verificar si una asignación real es una función, o dónde falla totalidad y unicidad
14 Detectar colisiones de identificadores y salidas inalcanzables inyectiva, sobre, biyec-
tiva
15 Auditar procesos en cadena y sus incompatibilidades composición
16 Determinar si un proceso se puede deshacer función inversa`
  },
  13: {
    titulo: `Concepto de función: dominio, codominio, imagen`,
    texto: `Módulo 4 · Funciones

MÓDULO 4
Funciones
El curso termina donde empieza casi todo problema real: en las asignaciones. A cada persona su
CURP , a cada pedido su folio, a cada paciente su nivel de riesgo, a cada medida su talla, a cada gasto
su nivel de autorización, a cada entrada del formulario su respuesta. Un sistema profesional, visto
de lejos, es una máquina de asignar.
Y una función no es más que una relación a la que se le exigen dos cosas:
Totalidad: todo elemento del dominio tiene asignado algo.
Unicidad: ninguno tiene asignadas dos cosas distintas.
Esas dos exigencias son la razón de que este módulo cierre el curso. Cuando un sistema real falla la
primera, hay un caso sin respuesta: unvacío. Cuando falla la segunda, hay un caso con dos respuestas
distintas: una contradicción o una ambigüedad. Son exactamente las cuatro palabras de la rúbrica
del proyecto, y aquí aparecen no como categorías de un dictamen sino como el incumplimiento de
dos condiciones verificables.
Sesión Lo que el alumno sabrá hacer Herramienta
13 Verificar si una asignación real es una función, o dónde falla totalidad y unicidad
14 Detectar colisiones de identificadores y salidas inalcanzables inyectiva, sobre, biyec-
tiva
15 Auditar procesos en cadena y sus incompatibilidades composición
16 Determinar si un proceso se puede deshacer función inversa

---

13 Concepto de función: dominio, codominio, imagen
FICHA DE LA SESIÓN
Semana 14 (Amoxtli 4.1 Concepto de función; 4.2 Dominio, codominio e imagen)
Meta operativa Al terminar, el alumno decide si una asignación real es función verificando las dos
condiciones por separado, y si no lo es, exhibe el elemento concreto que la rompe.
Lectura Badesa, Jané y Jansana, cap. 4 §1 (el concepto de función).
Materiales Lista de asignaciones reales para votar en el detonador; plantillas de diagrama de
flechas.
Reparto 15 min detonador · 45 min definición, las dos condiciones, dominio/codominio/im-
agen · 90 min ejercicios · 30 min asesoría de proyectos.
DETONADOR APLICADO (15 min)
“¿Función o no?” Proyecta asignaciones reales y pide voto a mano alzada, una por una, sin
explicar nada todavía:
1. A cada persona, su CURP .
2. A cada persona, su número de teléfono.
3. A cada alumno, su calificación final de esta materia.
4. A cada persona, su madre biológica.
5. A cada persona, sus hijos.
6. A cada número, su raíz cuadrada.
El 2 y el 5 van a dividir al grupo, y el 6 es la trampa buena. Cierra con la frase que define la
sesión: cada entrada, exactamente una salida. Y con la pregunta que la afina: ¿“exactamente una” es
lo mismo que “a lo más una”?
Definición
Una función de A en B es una relación f ⊆ A × B tal que para cada a ∈ A existe exactamente un
b ∈ B con (a, b) ∈ f . Se escribe
f : A → B, f (a) =b.
Condición Qué exige Si falla, en el sistema
real
Totalidad ningún elemento de A se queda sin imagen hay un caso sin re-
spuesta: vacío
Unicidad ningún elemento de A tiene dos imágenes hay un caso con dos
respuestas: contradic-
ción o ambigüedad
x
y
z
sí es función
x
y
z
no: falla las dos
En el diagrama de la derecha: del 1 salen dos flechas (falla unicidad) y del 2 no sale ninguna (falla
totalidad). En una función, de cada punto de la izquierda sale exactamente una flecha. Cuántas
lleguen a cada punto de la derecha —ninguna, una o varias— es otro asunto, y es el tema de la
sesión 14.
Dominio, codominio, imagen
• Dominio A: todas las entradas. En una función, el dominio es todo A; no hay huérfanos, por
definición.
• Codominio B: el conjunto declarado de salidas posibles.
• Imagen im f = { f (a) : a ∈ A} ⊆B: las salidas que de hecho se usan.
CUIDADO
Aquí reaparece la distinción de la sesión 9, y ahora con una asimetría importante: en una
función no puede haber entradas huérfanas —la totalidad lo prohíbe— pero sí puede haber
salidas inalcanzables, elementos del codominio que nadie recibe. Si im f ̸= B, hay categorías
declaradas y nunca asignadas. Eso no rompe la función, pero en un sistema real es un hallazgo:
una etiqueta que existe en el formulario y nadie usa.
Cuándo una regla define una función
Una regla en español o una fórmula no es automáticamente una función. Hay que verificar las dos
condiciones respecto al dominio y codominio declarados. Los tres modos de falla:
Regla Problema Cómo se arregla
f (x) =1/x sobre R el 0 no tiene imagen restringir el do-
minio
f (x) =√x sobre R los negativos no tienen imagen restringir el do-
minio
“a cada x, un y con y2 = x” dos imágenes ( ±) elegir una:
declarar la
regla
“a cada empleado, su bono” quien no tiene bono declarar el
bono 0 o re-
stringir
Ejemplo resuelto 13.1 ¿Cuáles de estas cuatro relaciones son funciones de A = {1, 2, 3} en B = {a, b}?
R1 = {(1, a), (2, a), (3, b)} sí: cada entrada, una salida
R2 = {(1, a), (1, b), (2, a), (3, b)} no: el 1 tiene dos imágenes
R3 = {(1, a), (3, b)} no: el 2 no tiene imagen
R4 = {(1, a), (2, a), (3, a)} sí (y im R4 = {a} ̸= B)
R4 merece un comentario: es función perfectamente legítima aunque desperdicie la mitad del
codominio. Que todas las entradas reciban la misma salida no viola nada. Lo que sí es un dato
de auditoría es que la salida b nunca se usa.
PUENTE (la escalera del curso)
Recuérdese el ejercicio 11.5 del módulo anterior: “a y b reciben la misma etiqueta” siempre es
una relación de equivalencia. Ahora se puede decir con precisión: toda función induce una
partición de su dominio, agrupando las entradas que comparten imagen. Las clases son las
“fibras” de la función. Clasificar y asignar son la misma operación vista de los dos lados, y ese es
el último eslabón de la escalera del curso.
NIVEL 1 · Reconocer en voz alta, en grupo
A. ¿Es función? Con A = {1, 2, 3} y B = {a, b, c}, di si cada relación es función de A en B y, si no,
cuál condición falla y en qué elemento.
13.1 {(1, a), (2, b), (3, c)}
13.2 {(1, a), (2, a), (3, a)}
13.3 {(1, a), (2, b)}
13.4 {(1, a), (1, b), (2, c), (3, c)}
13.5 ∅
13.6 A × B
13.7 {(1, c), (2, c), (3, b)}
13.8 {(1, a), (2, b), (3, b), (3, c)}
B. Asignaciones del mundo real ¿Función? Si no, di qué condición falla.
13.9 A cada persona, su CURP .
13.10 A cada persona, su número de teléfono.
13.11 A cada alumno, su calificación final.
13.12 A cada persona, su madre biológica.
13.13 A cada persona, su cónyuge.
13.14 A cada asiento del cine, el boleto que lo ocupa en una función dada.
13.15 A cada producto, su código de barras.
13.16 A cada código de barras, su producto.
13.17 A cada empleado, su jefe directo.
13.18 A cada empleado, su bono anual.
13.19 A cada país, su capital.
13.20 A cada país, sus idiomas oficiales.
NIVEL 2 · Aplicar individual
C. Dominio, codominio, imagen
13.21 f : {1, 2, 3} → {a, b, c} con f = {(1, a), (2, a), (3, c)}: da la imagen y di si hay salidas inalcanz-
ables.
13.22 f (x) =x2 sobre {−2, −1, 0, 1, 2} con codominio Z: da la imagen.
13.23 f (x) =2x sobre N con codominio N: da la imagen.
13.24 f (x) =x + 1 sobre Z con codominio Z: da la imagen.
13.25 f (x) =|x| sobre Z: da la imagen.
13.26 f : {alumnos} → {0, . . . , 10}, la calificación: ¿cuándo la imagen es todo el codominio?
13.27 Da una función de {1, 2, 3} en {a, b} cuya imagen sea todo el codominio, y otra cuya imagen
tenga un solo elemento.
13.28 ¿Cuántas funciones hay de {1, 2, 3} en {a, b}? ¿Y de A en B en general?
D. Funciones definidas por casos y por tablas
13.29 Verifica si esto define una función sobre Z: f (x) =0 si x es par, f (x) =1 si x es impar.
13.30 Verifica si esto define una función sobre Z: f (x) =0 si x ≥ 0, f (x) =1 si x ≤ 0.
13.31 Verifica si esto define una función sobre Z: f (x) =0 si x > 0, f (x) =1 si x < 0.
13.32 Una tarifa: $50 si la estancia es de menos de 2 horas, $80 si es de 2 a 4 horas, $120 si es de más
de 4 horas. ¿Es función? Verifica los bordes.
13.33 Otra tarifa: $50 hasta 2 horas, $80 de 2 a 4, $120 de 4 en adelante. ¿Es función? Compara con la
anterior.
13.34 Un descuento: 10% a estudiantes, 15% a mayores de 60. ¿Es función sobre el conjunto de todos
los clientes?
13.35 Escribe la tabla de f : {1, 2, 3, 4} → {a, b} con f (x) =a si x es impar y b si es par. Da la imagen.
13.36 Define una función que asigne a cada alumno su clase de equivalencia según “mismo mes de
nacimiento”. ¿Cuál es el codominio?
NIVEL 3 · Analizar en parejas
E. Casos finos
13.37 Da el mayor dominio posible dentro de R para que f (x) =1/(x − 3) sea función.
13.38 Ídem para f (x) =√
x − 1.
13.39 Ídem para f (x) =1/(x2 − 4).
13.40 ¿Es función la relación “a cada conjunto, su cardinalidad” sobre los subconjuntos finitos de N?
¿Cuál es la imagen?
13.41 ¿Es función “a cada fracción, su valor”? ¿Y “a cada número racional, su representación como
fracción”?
13.42 Demuestra que si f : A → B y g : A → B cumplen f (a) =g(a) para todo a, entonces f = g
como conjuntos de pares.
13.43 Demuestra que una relación R en A × B es función si y solo si para todo a ∈ A, el conjunto
{b : (a, b) ∈ R} tiene exactamente un elemento.
13.44 Sea f : A → B. Demuestra que im f = B si y solo si todo elemento de B tiene al menos una
preimagen.
NIVEL 4 · Auditar se encarga y se defiende
13.45 Auditoría de las dos condiciones.Toma la asignación central de tu sistema (caso→ tratamiento,
gasto → nivel de autorización, medida → talla, síntoma → conducta, monto → tarifa) y verifica
las dos condiciones por separado. Entrega: la entrada concreta que no recibe nada (vacío), la
entrada concreta que recibe dos cosas distintas (ambigüedad), o la demostración de que no
existen ninguna de las dos. Las tres son resultados válidos de auditoría.
13.46 La tarifa con bordes ambiguos. Busca una tabla de tarifas, rangos o niveles reales y revisa
todos sus bordes. Los sistemas de rangos casi siempre tienen al menos un borde mal escrito
(“hasta” y “desde” que se tocan, o que dejan un hueco). Entrega la tabla original, el borde
defectuoso y la redacción corregida.
13.47 Declarar el caso que falta. Para cada falla de totalidad que encontraste, escribe la declaración
que la arregla: el valor por defecto, la categoría “otros”, el responsable subsidiario. Después
argumenta por qué esa declaración es preferible a dejar el caso al criterio de quien aplique la
regla. Esto es, literalmente, la propuesta de mejora que pide el criterio 3 de la rúbrica.
13.48 Las fibras de tu sistema. Agrupa las entradas de tu asignación que reciben la misma salida.
Cada grupo es una clase de equivalencia. Pregunta lo importante: ¿todas las entradas de un
mismo grupo merecen de verdad el mismo trato? Si encuentras dos que no, tienes un hallazgo de
grano grueso, y la mejora es partir la clase.
13.49 Salidas que nadie recibe. Calcula la imagen de tu asignación y compárala con el codominio
declarado. Toda salida inalcanzable es una categoría muerta: averigua si es residuo de una
versión anterior del sistema y propón retirarla o justificar por qué se conserva.
13.50 Tres asignaciones de tu entorno. Detecta tres asignaciones reales de tu vida diaria y decide
cuáles son función y cuáles no, justificando con las dos condiciones y exhibiendo el elemento
que falla (“a cada asiento, un boleto”; “a cada persona, sus mascotas”; “a cada mesa, su
mesero”). Trae las tres.
Banco por trayectoria
T1 · DISEÑO Y MODA
13.51 “A cada conjunto de medidas, su talla”: verifica las dos condiciones con la guía de tallas real.
Los cuerpos sin talla son vacíos; los que caen en dos son ambigüedades. Este es el cierre de lo
que empezaste en la sesión 5.
13.52 “A cada prenda, su ficha técnica”: ¿es función? ¿Hay prendas sin ficha? ¿Hay prendas con dos
versiones de ficha? Lo segundo es más frecuente y más grave.
T2 · GASTRONOMÍA
13.53 “A cada platillo, su precio”: verifica. Después audita el caso de los platillos con variantes: ¿el
sistema asigna un precio o dos?
13.54 “A cada platillo, su bebida recomendada”: ¿es función? Los huérfanos de la sesión 9 son ahora
fallas de totalidad, con nombre y prueba.
T3 · DERECHO
13.55 “A cada conducta, su sanción”: verifica las dos condiciones en un reglamento sancionador. Una
conducta con dos sanciones posibles es una ambigüedad con consecuencias de debido proceso.
13.56 “A cada caso, su vía procesal”: ¿es función? Un caso que admite dos vías sin regla de preferencia
es un vacío que en la práctica resuelve quien recibe el escrito.
T4 · ADMINISTRACIÓN Y NEGOCIOS
13.57 “A cada monto, su nivel de autorización”: revisa todos los bordes de la tabla. Un monto
exactamente en el límite es el caso que hay que buscar.
13.58 “A cada cliente, su segmento”: verifica las dos condiciones. Es la misma auditoría de la
sesión 11 vista como función, y ahora se puede probar de dos maneras distintas: úsalo en la
presentación.
T5 · NEGOCIOS INTERNACIONALES
13.59 “A cada mercancía, su fracción arancelaria”: debe ser función por diseño. Busca un caso real de
doble clasificación posible y explica el mecanismo que existe para resolverlo.
13.60 “A cada Incoterm, el responsable del seguro”: verifica que todo término tenga uno y solo uno
asignado en tu manual.
T6 · INGENIERÍA Y SISTEMAS
13.61 “A cada entrada del formulario, su validación”: verifica las dos condiciones. Un campo sin
validación es un vacío; un campo con dos validaciones contradictorias es un bug esperando a
ocurrir.
13.62 “A cada código de error, su mensaje al usuario”: ¿es función? ¿Hay códigos sin mensaje (vacío)
y mensajes que ningún código produce (salida inalcanzable)?
14. Inyectiva, sobreyectiva, biyectiva
T7 · SALUD Y PSICOLOGÍA
13.63 “A cada perfil de síntomas, su nivel de triage”: verifica las dos condiciones. Un perfil sin nivel
asignado es exactamente el caso en que el protocolo deja solo al clínico.
13.64 “A cada paciente, su médico tratante”: ¿es función? Las fallas de unicidad aquí tienen nombre
en la práctica hospitalaria y consecuencias de responsabilidad.
TAREA DE CAMPO
Tres asignaciones reales. Detecta tres asignaciones de tu entorno y decide cuáles son función
y cuáles no, justificando con el criterio de las dos condiciones y exhibiendo el elemento que
falla cuando falla. Ejemplos para arrancar: “a cada asiento, un boleto”; “a cada persona, sus
mascotas”; “a cada mesa del restaurante, su mesero”. Trae las tres con su veredicto.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 14 — Fase 3: las asignaciones bajo examen. Aplica la auditoría de las dos condiciones
a todas las asignaciones de tu sistema. Es el procedimiento que más hallazgos produce y el más
fácil de defender, porque cada resultado es un objeto concreto: este caso no tiene respuesta, este
otro tiene dos. Si tu proyecto todavía no tiene un hallazgo probado, esta semana lo consigue.`
  },
  14: {
    titulo: `Inyectiva, sobreyectiva, biyectiva`,
    texto: `14 Inyectiva, sobreyectiva, biyectiva
FICHA DE LA SESIÓN
Semana 15 (Amoxtli 4.3 Funciones inyectiva, sobreyectiva y biyectiva)
Meta operativa Al terminar, el alumno clasifica una función en los tres tipos, prueba la inyectividad
formalmente y la refuta con una colisión concreta.
Lectura Badesa, Jané y Jansana, cap. 4 §§1–2 (concepto de función y biyectabilidad).
Materiales El caso del cine con boletos numerados; diagramas de flechas en blanco.
Reparto 15 min detonador · 40 min los tres tipos y cómo probarlos · 75 min ejercicios · 50
min asesoría de proyectos: el hallazgo debe estar probado, no opinado.
DETONADOR APLICADO (15 min)
“¿Sobran o se repiten asientos?” Plantea un cine con boletos numerados y asientos numerados,
y la asignación “a cada boleto, su asiento”. Pregunta qué significa, en la sala, que:
dos boletos distintos den el mismo asiento → ?
haya asientos que ningún boleto ocupe → ?
ninguna de las dos cosas ocurra → ?
Las respuestas: un pleito, una sala con lugares vacíos, y una sala perfecta. Esas tres situaciones
son la no inyectividad, la no sobreyectividad y la biyección.
Los tres tipos
Sea f : A → B.
Tipo Definición En el diagrama
Inyectiva entradas distintas dan salidas distintas: si f (x) = f (y) entonces
x = y
a cada punto de B
llega a lo más una
flecha
Sobreyectiva im f = B: todo elemento de B es alcanzado a cada punto de B
llega al menos una
flecha
Biyectiva inyectiva y sobreyectiva a cada punto de
B llega exactamente
una flecha
inyectiva, no sobre sobre, no inyectiva biyectiva
Cómo probar y cómo refutar
Probar inyectividad: se supone f (x) = f (y) y se deriva x = y. Es una prueba condicional
(sesión 4).
Refutar inyectividad: se exhiben dos entradas distintas con la misma salida. Una colisión
concreta.
Probar sobreyectividad: se toma un b ∈ B arbitrario y se construye un a con f (a) =b.
Refutar sobreyectividad: se exhibe un elemento de B que ningún a alcanza.
Ejemplo resuelto 14.1 f (x) =2x y f (x) =x2, según el dominio
f (x) =2x de Z en Z. Inyectiva: si 2x = 2y entonces x = y. No sobreyectiva: el 3 no es imagen
de ningún entero.
f (x) =2x de Z en los pares. Ahora sí es sobreyectiva, luego biyectiva. No cambió la regla:
cambió el codominio declarado.
f (x) =x2 de Z en Z. No inyectiva: f (−2) = f (2) =4, colisión. No sobreyectiva: el 3 no es
cuadrado.
f (x) = x2 de N en los cuadrados perfectos. Inyectiva (porque en N no hay negativos que
colisionen) y sobreyectiva: es biyectiva.
La moraleja hay que escribirla en el pizarrón:la clasificación no es una propiedad de la fórmula,
es una propiedad de la fórmula junto con su dominio y su codominio. Cambiar cualquiera de
los tres cambia la respuesta.
Cardinalidades: lo que las flechas obligan
Para conjuntos finitos:
• Si f : A → B es inyectiva, entonces |A| ≤ |B|.
• Si es sobreyectiva, entonces |A| ≥ |B|.
• Si es biyectiva, entonces |A| = |B|.
Principio del palomar. Si |A| > |B|, ninguna función de A en B puede ser inyectiva:
forzosamente hay una colisión.
En el mundo: si el sistema tiene más casos que etiquetas, dos casos van a compartir
etiqueta. Si hay más documentos que folios posibles, dos documentos van a tener el
mismo folio. No es un descuido: es una imposibilidad aritmética, y demostrarla es un
hallazgo irrefutable.
NIVEL 1 · Reconocer en voz alta, en grupo
A. Clasifica de la lista de pares Todas son funciones de A = {1, 2, 3} en B = {a, b, c} salvo indicación.
Di si son inyectivas, sobreyectivas, biyectivas o ninguna.
14.1 {(1, a), (2, b), (3, c)}
14.2 {(1, a), (2, a), (3, a)}
14.3 {(1, a), (2, b), (3, b)}
14.4 {(1, c), (2, a), (3, b)}
14.5 de A en {a, b}: {(1, a), (2, b), (3, a)}
14.6 de {1, 2} en B: {(1, a), (2, b)}
14.7 de {1, 2} en {a, b}: {(1, b), (2, a)}
14.8 de A en {a}: {(1, a), (2, a), (3, a)}
NIVEL 2 · Aplicar individual
B. Clasifica funciones numéricas Indica dominio y codominio en cada caso y clasifica.
14.9 f (x) =x + 3 de Z en Z
14.10 f (x) =2x de Z en Z
14.11 f (x) =2x de Z en los pares
14.12 f (x) =x2 de Z en Z
14.13 f (x) =x2 de N en N
14.14 f (x) =|x| de Z en N
14.15 f (x) =x3 de R en R
14.16 f (x) =3x − 5 de R en R
14.17 f (x) =x mod 3 de N en {0, 1, 2}
14.18 f (n) =“número de letras de n” de {uno,. . . ,diez} en N
C. Pruebas y colisiones
14.19 Prueba formalmente que f (x) =3x + 1 sobre R es inyectiva.
14.20 Prueba que f (x) =5x − 2 de R en R es sobreyectiva.
14.21 Refuta la inyectividad de f (x) =x2 − 4x sobre R exhibiendo una colisión.
14.22 Refuta la sobreyectividad de f (x) =x2 de R en R.
14.23 Restringe el dominio de f (x) =x2 para hacerla inyectiva.
14.24 Restringe el codominio de f (x) =x2 sobre R para hacerla sobreyectiva.
14.25 Haz las dos cosas y obtén una biyección.
14.26 ¿Cuántas funciones inyectivas hay de {1, 2} en {a, b, c}? ¿Cuántas biyectivas de {1, 2, 3} en
{a, b, c}?
NIVEL 3 · Analizar en parejas
D. Estructura y palomar
14.27 Demuestra que si f : A → B es inyectiva y A, B son finitos, entonces |A| ≤ |B|.
14.28 Demuestra que si |A| = |B| finitos, entonces f es inyectiva si y solo si es sobreyectiva.
14.29 ¿Es cierto lo anterior para conjuntos infinitos? Da un contraejemplo con f (x) =2x sobre N.
14.30 En un grupo de 30 personas, demuestra que al menos dos nacieron el mismo mes. ¿Cuál es la
función y cuáles los conjuntos?
14.31 En un grupo de 400 personas, ¿qué garantiza el palomar sobre las fechas de nacimiento?
14.32 Demuestra que si |A| > |B|, ninguna función de A en B es inyectiva.
14.33 Sea f : A → B cualquier función. Demuestra que f restringida a un subconjunto de A sigue
siendo función, y que si f era inyectiva la restricción también.
14.34 Si f es sobreyectiva y |A| = |B| finitos, ¿cuántas preimágenes tiene cada elemento de B?
Justifica.
NIVEL 4 · Auditar se encarga y se defiende
14.35 Colisiones de identificadores. Todo sistema asigna identificadores: folios, claves, códigos,
matrículas, SKU, números de expediente. Toma uno real y determina si la asignación es
inyectiva. Una colisión es un hallazgo de máxima gravedad, porque significa que dos objetos
distintos son indistinguibles para el sistema. Entrega: la regla de generación del identificador,
y o bien la colisión concreta, o bien la prueba de que no puede haber colisiones.
14.36 Palomar aplicado. Cuenta el número de identificadores posibles que la regla de tu sistema
puede generar y compáralo con el número de objetos que tendrá que identificar en su vida útil.
Si los objetos exceden los identificadores, has demostrado que las colisiones son inevitables, sin
necesidad de encontrar una. Es el hallazgo más elegante que este curso permite: la aritmética
prueba que el sistema falla antes de que falle.
14.37 Sobreyectividad que sí importa. Normalmente que sobren salidas no es problema, pero a
veces sí: si el sistema declara cinco niveles de riesgo y solo asigna tres, los otros dos son
categorías muertas; si un presupuesto declara diez partidas y solo se usan cuatro, hay seis que
nadie ejerce. Calcula la imagen de una asignación real y reporta las salidas nunca usadas con
una hipótesis de por qué existen.
14.38 La biyección que el sistema necesita. Busca en tu sistema una asignación que debería ser biyec-
tiva —asiento y boleto, expediente y número, empleado y credencial, mesa y cuenta— y verifica
las dos condiciones. Cualquier falla es un error operativo con consecuencias, y nombrarla
con precisión (“no es inyectiva” o “no es sobreyectiva”) hace el dictamen inmediatamente
accionable.
14.39 Una inyectiva y una biyectiva del mundo. Encuentra en el mundo una función que sea
inyectiva pero no sobreyectiva, y otra que sea biyectiva. Pista: los códigos que identifican cosas
suelen ser inyectivos y casi nunca sobreyectivos, porque el espacio de códigos se diseña con
holgura. Justifica las dos clasificaciones y explica, en el caso inyectivo, por qué la holgura es
deliberada.
14.40 Anonimizar y perder. Muchos sistemas transforman datos a propósito de manera no inyectiva,
para que no se pueda volver atrás (agrupar edades en rangos, truncar códigos postales, reem-
plazar nombres por categorías). Encuentra un caso real y explica qué se gana y qué se pierde.
Si la transformación resulta ser inyectiva sin que sus autores lo quisieran, la anonimización no
funciona, y eso es un hallazgo serio.
Banco por trayectoria
T1 · DISEÑO Y MODA
14.41 ¿Es inyectiva la asignación “prenda → SKU”? Verifica cómo se construye el SKU y determina
si dos prendas distintas podrían recibir el mismo.
14.42 ¿Es sobreyectiva “medidas → talla”? ¿Hay tallas que la guía nunca asigna? Si la XS nunca se
asigna, ¿por qué se produce?
T2 · GASTRONOMÍA
14.43 ¿Es biyectiva “mesa → cuenta abierta” en un turno? Debería serlo: verifica qué pasa cuando se
juntan dos mesas o cuando una mesa pide dos cuentas.
14.44 ¿Es inyectiva “platillo → código de la comanda”? Una colisión aquí manda el plato equivocado
a la mesa equivocada.
T3 · DERECHO
14.45 ¿Es inyectiva “expediente → número de expediente”? Verifica la regla de numeración y aplica
el palomar a los expedientes del año.
14.46 ¿Es sobreyectiva “caso → sanción” sobre el catálogo de sanciones? Las sanciones que nunca se
imponen son letra muerta: identifícalas y discute qué significa.
T4 · ADMINISTRACIÓN Y NEGOCIOS
14.47 ¿Es inyectiva “factura → folio”? Aplica el palomar: cuenta los folios posibles según la regla y
las facturas anuales.
14.48 ¿Es sobreyectiva “gasto → partida presupuestal”? Las partidas nunca usadas son presupuesto
inmovilizado; repórtalas.
T5 · NEGOCIOS INTERNACIONALES
14.49 ¿Es inyectiva “embarque → número de guía”? Verifica la regla del transportista y estima con el
palomar cuándo se agota.
14.50 ¿Es sobreyectiva “mercancía → fracción arancelaria”? Las fracciones que nunca se usan en tu
empresa son las que nadie revisa cuando cambian.
T6 · INGENIERÍA Y SISTEMAS
14.51 ¿Es inyectiva la función hash o la regla de generación de claves primarias de tu sistema? Aplica
el palomar al espacio de claves y estima la probabilidad de colisión. Este es literalmente un
problema de ingeniería real.
14.52 ¿Es sobreyectiva “código de error → mensaje”? Los mensajes que ningún código produce son
código muerto.
T7 · SALUD Y PSICOLOGÍA
14.53 ¿Es inyectiva “paciente → número de historia clínica”? Una colisión aquí mezcla dos historias
clínicas, con consecuencias evidentes. Verifica la regla de generación.
14.54 ¿Es sobreyectiva “paciente → nivel de riesgo”? Si un nivel nunca se asigna, o el instrumento
está mal calibrado o el nivel es innecesario. Argumenta cuál de las dos.
TAREA DE CAMPO
Una inyectiva y una biyectiva. Encuentra en el mundo una función que sea inyectiva pero
no sobreyectiva, y otra que sea biyectiva. Justifica ambas clasificaciones con las definiciones,
no con la intuición: para la inyectividad, explica por qué no puede haber colisiones; para la
sobreyectividad, explica por qué toda salida se alcanza. Trae las dos.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 15 — Fase 3: el hallazgo probado. Esta es la semana de asesoría y la exigencia es
una sola: el hallazgo debe estar probado, no opinado. Trae a asesoría el hallazgo que vas a
presentar y prepárate para que se te pregunte “¿cuál es la prueba?”. Las respuestas aceptables
son: la tabla de verdad que muestra la contradicción, la derivación que muestra la consecuencia
oculta, el elemento que está en dos clases, el caso que no está en ninguna, el ciclo del Hasse, la
colisión de identificadores, o la aritmética del palomar. La respuesta “se ve que está mal” no es
aceptable. También trae ya redactada la propuesta de mejora, porque el criterio 3 de la rúbrica
pesa 25% y es el que más se olvida.`
  },
  15: {
    titulo: `Composición de funciones`,
    texto: `15 Composición de funciones
FICHA DE LA SESIÓN
Semana 15 (Amoxtli 4.4 Composición de funciones). Sesión corta, comparte semana con la
anterior.
Meta operativa Al terminar, el alumno calcula composiciones, verifica la compatibilidad de domin-
ios y detecta el eslabón incompatible de un proceso en cadena.
Lectura Badesa, Jané y Jansana, cap. 4 (composición y biyectabilidad).
Materiales Un trámite real de tres ventanillas para el detonador.
Reparto 10 min detonador · 30 min composición y compatibilidad · 50 min ejercicios (niveles
1–2, y 3 si alcanza) · resto para asesoría.
DETONADOR APLICADO (15 min)
“El trámite de tres ventanillas”. Describe un trámite real en cadena: en la ventanilla 1 entregas
la solicitud y sales con un comprobante; con el comprobante vas a la 2 y sales con un folio; con
el folio vas a la 3 y sales con el documento final.
Pregunta: ¿qué pasa si la ventanilla 2 pide algo que la 1 no entrega? Y remata: ¿podríamos hacer una
sola ventanilla que haga las tres cosas?
Definición
Dadas f : A → B y g : B → C, la composición g ◦ f : A → C se define por
(g ◦ f )(x) =g( f (x)).
a
f
g( f (a))
g
g ◦ f
A B C
CUIDADO
Dos advertencias sobre la notación y una sobre el orden. (1) g ◦ f se lee “g después de f ”: se
aplica primero la de la derecha. Es contraintuitivo y es fuente permanente de errores. (2) La
composición no es conmutativa. En general g ◦ f ̸= f ◦ g, y a veces una existe y la otra no.
Con f (x) = x + 1 y g(x) = x2: (g ◦ f )(x) = (x + 1)2 mientras ( f ◦ g)(x) = x2 + 1. (3) Sí es
asociativa: h ◦ (g ◦ f ) = (h ◦ g) ◦ f . Por eso tiene sentido hablar de una cadena de etapas sin
paréntesis.
Compatibilidad
Para que g ◦ f exista hace falta que la salida de f sea entrada legítima de g, es decir im f ⊆ dom g.
Si hay un solo valor de salida de f que g no puede recibir, la composición falla para ese caso: en un
proceso real, eso es exactamente el expediente que se queda atorado.
Qué se hereda
• Si f y g son inyectivas, g ◦ f es inyectiva.
• Si f y g son sobreyectivas, g ◦ f es sobreyectiva.
• Si f y g son biyectivas, g ◦ f es biyectiva.
• La identidad idA(x) =x cumple f ◦ idA = f = idB ◦ f : es el “no hacer nada”.
NIVEL 1 · Reconocer en voz alta, en grupo
A. Composición con tablas Sean f : {1, 2, 3} → {a, b} con f (1) = a, f (2) = b, f (3) = a; y
g : {a, b} → {x, y} con g(a) =y, g(b) =x.
15.1 (g ◦ f )(1)
15.2 (g ◦ f )(2)
15.3 (g ◦ f )(3)
15.4 La tabla completa de g ◦ f
15.5 im(g ◦ f )
15.6 ¿Existe f ◦ g?
15.7 ¿Es g ◦ f inyectiva?
15.8 ¿Es g ◦ f sobreyectiva?
NIVEL 2 · Aplicar individual
B. Composición con fórmulas Con f (x) =x + 2, g(x) =3x, h(x) =x2 sobre R:
15.9 g ◦ f
15.10 f ◦ g
15.11 h ◦ f
15.12 f ◦ h
15.13 g ◦ g
15.14 h ◦ h
15.15 (h ◦ g) ◦ f
15.16 h ◦ (g ◦ f )
15.17 f ◦ idR
15.18 Halla x tal que (g ◦ f )(x) =12
NIVEL 3 · Analizar en parejas
C. Propiedades
15.19 Demuestra que si f y g son inyectivas, g ◦ f es inyectiva.
15.20 Demuestra que si f y g son sobreyectivas, g ◦ f es sobreyectiva.
15.21 Da un ejemplo donde g ◦ f sea inyectiva sin que g lo sea.
15.22 Da un ejemplo donde g ◦ f sea sobreyectiva sin que f lo sea.
15.23 Demuestra que si g ◦ f es inyectiva, entonces f es inyectiva.
15.24 Demuestra que si g ◦ f es sobreyectiva, entonces g es sobreyectiva.
15.25 Dadas f (x) =2x y (g ◦ f )(x) =2x + 6, halla g.
15.26 Dadas g(x) =x + 1 y (g ◦ f )(x) =x2 + 1, halla f .
NIVEL 4 · Auditar se encarga y se defiende
15.27 El eslabón incompatible. Toma un proceso real de tu carrera con tres o más etapas y modela
cada etapa como función. Verifica la compatibilidad de cada empalme: ¿toda salida de una
etapa es entrada válida de la siguiente? Si encuentras una salida que la etapa siguiente no
puede recibir, ese es el caso que se atora en la vida real. Entrega el diagrama de la cadena y el
empalme roto.
15.28 La ventanilla única. Calcula la composición completa de ese proceso: la función que va de la
entrada inicial al resultado final, sin las etapas intermedias. Después pregunta lo que importa:
¿alguna etapa intermedia es innecesaria para el resultado? Si la composición no cambia al quitarla,
la etapa es burocracia pura y acabas de probarlo.
15.29 Pérdida de información en la cadena. Determina si el proceso completo es inyectivo. Si no lo
es, localiza en qué etapa se pierde la información —por el ejercicio 15.5, si el proceso pierde
información, la primera etapa que falla la inyectividad es la culpable—. Explica si esa pérdida
es deliberada o accidental.
16. Función inversa y síntesis del curso
15.30 Orden de las etapas. Encuentra en tu proceso dos etapas que el documento presenta en un
orden fijo y verifica si el orden importa: calcula las dos composiciones. Si dan lo mismo, el
orden es arbitrario y puede paralelizarse —conecta esto con los pares incomparables del Hasse
de la sesión 12—. Si dan distinto, hay una razón y el documento debería explicarla.
15.31 Cadena de autorizaciones. Modela una cadena de autorizaciones o validaciones como com-
posición y verifica si el resultado final depende de todas las etapas. Una etapa cuya salida no
afecta el resultado es una firma que no sirve para nada, y decirlo con la prueba en la mano es
un hallazgo valiente y defendible.
Banco por trayectoria
T1 · MODA · T2 · GASTRONOMÍA
15.32 (T1) Modela “medidas → talla → patrón → consumo de tela” como composición y calcula la
función completa “medidas → consumo”. ¿Se pierde información en el camino? ¿Dónde?
15.33 (T2) Modela “pedido → comanda → platillo → cuenta” como composición y verifica la
compatibilidad de cada empalme. El empalme roto es donde se equivocan las cuentas.
T3 · DERECHO · T4 · NEGOCIOS
15.34 (T3) Modela “hecho → tipo penal → pena aplicable → pena ejecutada” como composición. ¿Es
inyectiva la cadena completa? Si no, dos hechos distintos terminan con la misma consecuencia:
discute si eso es justo.
15.35 (T4) Modela “solicitud → validación → autorización → pago” y verifica si alguna etapa es
prescindible para el resultado.
T5 · INTERNACIONALES · T6 · SISTEMAS · T7 · SALUD
15.36 (T5) Modela “mercancía → fracción → arancel → costo total” como composición y calcula la
función directa “mercancía → costo”.
15.37 (T6) Modela un pipeline de transformación de datos como composición de funciones y verifica
la compatibilidad de tipos en cada empalme. Un empalme incompatible es una excepción en
producción.
15.38 (T7) Modela “síntomas → diagnóstico → tratamiento → resultado” y determina en qué etapa
se pierde información clínica. Discute las consecuencias de esa pérdida para el seguimiento.`
  },
  16: {
    titulo: `Función inversa y síntesis del curso`,
    texto: `16 Función inversa y síntesis del curso
FICHA DE LA SESIÓN
Semana 16 (Amoxtli 4.5 Función inversa; síntesis del curso). Presentación y defensa del
proyecto.
Meta operativa Al terminar, el alumno determina si una función tiene inversa y por qué, y puede
explicar en una sola frase cómo se encadenan las cuatro unidades del curso.
Lectura Badesa, Jané y Jansana, cap. 4 §2 (biyectabilidad).
Materiales Un mensaje cifrado con desplazamiento +1 impreso; rúbrica del proyecto impresa
para cada evaluador; la escalera del curso proyectada.
Reparto 10 min detonador · 30 min inversa · 25 min síntesis del curso · 105 min presenta-
ciones y defensa del proyecto · 10 min cierre.
DETONADOR APLICADO (15 min)
“Deshaz el hechizo”. Reparte un mensaje corto cifrado desplazando cada letra una posición
(A → B, B → C, . . . ) y pide que lo descifren. Toma dos minutos.
Después la pregunta que importa: ¿por qué se pudo deshacer? Y el contraste: si el cifrado hubiera
mandado todas las vocales a la letra A, ¿se podría deshacer? No. Y ahí está la sesión completa.
La inversa
En la sesión 9 se dijo que la relación inversa siempre existe: basta dar vuelta a las flechas. La pregunta
de hoy es cuándo esa relación invertida es además una función, y la respuesta es exactamente lo de la
sesión pasada:
f : A → B tiene función inversa f −1 : B → A si y solo si f es biyectiva.
Y cuando existe: f −1 ◦ f = idA y f ◦ f −1 = idB.
La razón, que hay que pedir que el alumno diga con sus palabras:
• Si f no es inyectiva, al dar vuelta hay un elemento de B con dos imágenes: falla la unicidad. Al ver
la salida no se sabe cuál era la entrada.
• Si f no es sobreyectiva, al dar vuelta hay un elemento de B sin imagen: falla la totalidad. Hay
salidas de las que no se puede regresar porque nunca se llegó a ellas.
Son las dos condiciones de la sesión 13, aplicadas a la relación invertida. El curso se cierra sobre sí
mismo.
Ejemplo resuelto 16.1 Inversa de f (x) =2x + 3 sobre R
Primero se verifica que es biyectiva: inyectiva porque 2x + 3 = 2y + 3 implica x = y; sobreyec-
tiva porque dado b, el valor x = (b − 3)/2 cumple f (x) =b.
Para calcularla se despeja: si y = 2x + 3 entonces x = (y − 3)/2, luego
f −1(y) =y − 3
2 .
Verificación: f −1( f (x)) = ((2x + 3) − 3)/2 = x. ✓
Nótese el orden del procedimiento: primero se demuestra que existe, después se calcula. Despejar
sin verificar es el error clásico, y produce “inversas” de funciones que no las tienen.
Ejemplo resuelto 16.2 Por qué f (x) =x2 no tiene inversa, y cómo arreglarlo
Sobre R no es inyectiva ( f (−3) = f (3) =9) ni sobreyectiva (el −1 no es imagen). Al invertir, el
9 tendría dos imágenes y el −1 ninguna: la relación invertida no es función.
Se arregla restringiendo: sobre [0, ∞) con codominio [0, ∞), f es biyectiva y su inversa es
f −1(y) =√y. La función no cambió de fórmula; cambió de dominio y codominio.
Esa operación —restringir para poder invertir— es exactamente lo que hace un sistema real
cuando decide que solo se puede rastrear el origen de un producto dentro de cierto rango de
fechas, o que solo se puede revertir una operación en el mismo día.
Síntesis: la escalera del curso
Una proposición se combina con conectivas y se prueba con reglas (módulo 1). Una
condición sobre objetos define unconjunto (módulo 2). Dos conjuntos generan suproducto
cartesiano (sesión 8). Un subconjunto del producto es una relación (módulo 3). Una
relación con totalidad y unicidad es una función (módulo 4). Una función inyectiva
y sobreyectiva es una biyección, y una biyección es lo único que se puede deshacer
(sesión 16).
Una sola escalera, seis escalones, y cada uno se apoya en el anterior.
Y la tabla que conviene proyectar el último día, porque es el curso entero en doce renglones:
Lógica (mód. 1) Conjuntos (mód. 2) Relaciones y funciones (mód. 3–4)
¬ negación Ac complemento —
∧ conjunción ∩ intersección —
∨ disyunción ∪ unión —
→ implicación ⊆ inclusión —
↔ coimplicación = igualdad —
⊻ disyunción exclusiva △ dif. simétrica —
De Morgan De Morgan —
prueba condicional doble inclusión prueba de inyectividad
reducción al absurdo prueba por contradic-
ción
prueba de no existencia
contraejemplo (un
renglón)
un elemento que falla una colisión concreta
tautología U —
contradicción ∅ función sin inversa
NIVEL 1 · Reconocer en voz alta, en grupo
A. ¿Tiene inversa?
16.1 f = {(1, a), (2, b), (3, c)} de {1, 2, 3} en
{a, b, c}
16.2 f = {(1, a), (2, a), (3, b)} en {a, b}
16.3 f = {(1, a), (2, b)} en {a, b, c}
16.4 f (x) =x + 5 en Z
16.5 f (x) =x2 en Z
16.6 f (x) =3x de Z en Z
16.7 f (x) =3x de R en R
16.8 f (x) =|x| de Z en N
NIVEL 2 · Aplicar individual
B. Calcula la inversa Verifica primero que exista.
16.9 f (x) =x + 7 en R
16.10 f (x) =4x en R
16.11 f (x) =2x − 6 en R
16.12 f (x) = (x + 1)/3 en R
16.13 f (x) =x3 en R
16.14 f (x) =1/x en R \\ {0}
16.15 f (x) =x2 de [0, ∞) en [0, ∞)
16.16 f = {(1, c), (2, a), (3, b)}
16.17 f (x) =5 − x en R
16.18 f (x) = (2x + 1)/(x − 1) en R \\ {1} (reto)
NIVEL 3 · Analizar en parejas
C. Estructura
16.19 Demuestra que si f es biyectiva, f −1 también lo es, y ( f −1)−1 = f .
16.20 Demuestra que f −1 ◦ f = idA.
16.21 Demuestra que si f y g son biyectivas, entonces (g ◦ f )−1 = f −1 ◦ g−1. (Nótese el cambio de
orden: para deshacer una cadena hay que deshacer los pasos en orden inverso.)
16.22 Da una función que sea su propia inversa y que no sea la identidad. Da otras dos.
16.23 ¿Cuántas funciones de {1, 2, 3} en sí mismo tienen inversa?
16.24 Explica en tres líneas, sin fórmulas, por qué una función no inyectiva no se puede deshacer,
usando un ejemplo de tu carrera.
16.25 Sea f no inyectiva. La relación f −1 existe: descríbela y di qué tipo de objeto asigna a cada
elemento de la imagen.
16.26 Demuestra que restringir el dominio de una función a un subconjunto donde sea inyectiva
siempre permite construir una inversa sobre la imagen.
NIVEL 4 · Auditar entrega final
16.27 ¿Se puede deshacer? Toma un proceso real de tu sistema y determina si es reversible: dada
la salida, ¿se puede reconstruir la entrada? Verifica las dos condiciones. Si el sistema promete
poder revertir algo que estructuralmente no se puede revertir, tienes un hallazgo importante.
16.28 La reversión en orden inverso. Si tu sistema tiene un procedimiento de cancelación o correc-
ción, verifica que deshaga los pasos en el orden inverso al que los hizo. Los procedimientos de
cancelación mal diseñados suelen deshacer en el mismo orden, y eso deja estados inconsistentes:
si lo encuentras, la prueba es el ejercicio 16.3.
16.29 Anonimización verificada. Si tu sistema transforma datos para proteger identidades, verifica
que la transformación no sea inyectiva. Si lo es, la identidad se puede reconstruir y la protección
es ficticia. Es un hallazgo de los que se agradecen mucho.
16.30 El proyecto completo. Entrega “El auditor lógico”: el sistema capturado con sus reglas
explícitas, la formalización con al menos dos de las cuatro unidades del curso, el hallazgo
probado con la herramienta que corresponda, y la propuesta de mejora coherente con tu campo.
Preséntalo y defiéndelo.
16.31 Modelado de punta a punta (alternativa al 16.4 para quien quiera el reto máximo).Elige un proceso
real de tu vida y modélalo con las cuatro herramientas a la vez: formaliza una regla de decisión
con lógica, define los conjuntos involucrados, identifica una relación entre ellos y una función
con su posible inversa. Preséntalo como una sola pieza: es la demostración de que puedes
formalizar un pedazo del mundo.
Banco por trayectoria
TODAS LAS TRAYECTORIAS
16.32 (T1) ¿Se puede reconstruir las medidas de una clienta a partir de su talla? ¿Por qué no? Nombra
la propiedad que falla y explica por qué la industria acepta esa pérdida.
16.33 (T2) ¿Se puede reconstruir la comanda a partir de la cuenta? Verifica y di qué se pierde.
16.34 (T3) ¿Se puede reconstruir el hecho a partir de la sentencia? Nombra la propiedad que falla y
discute sus consecuencias para la transparencia judicial.
16.35 (T4) ¿Se puede reconstruir el detalle de gastos a partir del total del reporte? Explica por qué la
agregación nunca es invertible y qué implica para la auditoría contable.
16.36 (T5) ¿Se puede reconstruir la mercancía a partir de la fracción arancelaria? Verifica la inyectivi-
dad y explica el problema práctico.
16.37 (T6) ¿Es reversible tu transformación de datos? Si usas hash de contraseñas, la no invertibilidad
es el objetivo: explica por qué, en el lenguaje de este curso.
16.38 (T7) ¿Se puede reconstruir el cuadro clínico a partir del código de diagnóstico? Nombra la
propiedad que falla y discute qué se pierde en la codificación.
Rúbrica del proyecto integrador
Autoevaluación final del curso
□ Puedo formalizar cualquier regla del español al lenguaje simbólico y defender mi traducción.
□ Decido la validez de un argumento y exhibo el renglón que lo refuta.
□ Construyo una derivación con subpruebas y justifico cada paso.
□ Verifico si una categoría está bien definida y la arreglo si no.
□ Demuestro una identidad de conjuntos por doble inclusión, en prosa.
□ Aplico De Morgan a una regla real y detecto si dice lo que quiso decir.
□ Verifico las cinco propiedades de una relación con contraejemplos.
□ Compruebo si una clasificación es partición con las tres condiciones.
□ Detecto ciclos y redundancias en una jerarquía dibujando su Hasse.
□ Audito una asignación con las dos condiciones de función.
□ Detecto colisiones de identificadores y argumento con el palomar.
□ Determino si un proceso se puede deshacer y por qué.
□ Y lo más importante: sé la diferencia entre decir que algo está mal y probar que está mal.
AVANCE DEL PROYECTO “EL AUDITOR LÓGICO”
Semana 16 — Presentación final. Presentas tu sistema formalizado, el fallo probado y la
corrección, y los defiendes ante el grupo. Lleva a la mano el objeto que prueba tu hallazgo —la
tabla, la derivación, el diagrama, el elemento, el cálculo— porque la primera pregunta va a ser
“muéstramelo”.
Y una última cosa. Hace dieciséis semanas la pregunta era si esto servía para tu carrera. Ya
tienes la respuesta y no es un discurso: es el error que encontraste en un documento real de tu
propio campo, que nadie había visto, y que puedes demostrar.`
  },
};
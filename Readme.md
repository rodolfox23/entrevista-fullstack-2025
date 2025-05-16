# Prueba Dirección Educación Pública
Debe realizar un fork a este repositorio y subir sus respuestas en el fork\
Debe hacer commit a su fork hasta las 2025/05/16 10:45 hora Santiago\
No dude en realizar consultas
## Instrucciones desafio

Utilizar el archivo main.html para realizar la prueba\
Utilizar google las veces que estimes conveniente (no resta puntos)\
<mark>__No__ permitir que una Inteligencia Artificial responda el desafio en su lugar</mark>

---

Se debe crear una aplicación que cree el conjunto de un input de texto y un botón desde JavaScript.\
Contener el input de texto y botón dentro del div input-y-boton\
El botón debe tener el texto "Crear elemento"\
Los input aceptables son input, anchor, button, paragraph\
Cualquier otro input sobre la casilla de texto inicial, debe ser tratado como un paragraph\
Al pulsar el botón, dentro del __div container-elementos__ se debe crear uno de los siguientes elementos:

- __Input__ de texto con placeholder "Creado en código"
- __Anchor__ que abra una página de google en una nueva pestaña y tenga el texto "Un enlace"
- __Button__ que al presionarlo escriba "hola, mundo!" en el div output. Debe tener el texto de "Escribir"
- __Paragraph__ con el texto "Texto creado en código"

El div container-elementos debe mostrar su contenido en 2 columnas en todos los tamaños de dispositivo

Los divs input-y-boton, container-elementos y output no deben ser modificados

El CSS y JavaScript deben estar en archivos separados

## Rúbrica
|Criterio | descripción | Puntos |
|-|-|-|
|conjunto input y botón| Crear dinámicamente el conjunto input y botón que crean los elementos especificados | 1 Punto|
|Input|Tras ingresar el texto "input" en el conjunto "input y botón" se crea un input con placeholder al presionar el botón en el div container-elementos| 1 Punto |
|Anchor|Tras ingresar el texto "anchor" en el conjunto "input y botón" se crea un anchor que enlaza a Google en una nueva pestaña al presionar el botón en el div container-elementos| 1 Punto|
|Botón con evento|Tras ingresar el texto "button" en el conjunto "input y botón" se crea un botón en el div container-elementos que cumple con el comportamiento de escribir "hola, mundo!" en el div output al presionar el botón| 1 Punto|
|Párrafo|Tras ingresar el texto "paragraph" en el conjunto "input y botón" se crea un párrafo al presionar el botón en el div container-elementos| 1 Punto|
|Input no especificado|Tras ingresar un texto que no sea ni input, paragraph, anchor o button en el conjunto "input y botón" se crea un párrafo al presionar el botón en el div container-elementos| 1 Punto |
|CSS|El div container-elementos muestra su contenido en 2 columnas| 1 Punto |
|Archivos separados| El archivo de JavaScript se encuentra en su propios documento y correctamente enlazado en main.html| 1 Punto|
|Archivos separados| El archivo de CSS se encuentra en su propio documento y correctamente enlazado en main.html| 1 Punto|
|Textos|Se respetaron los textos indicados en las instrucciones para cada elemento| 1 Punto| 
||Total|10 Puntos|

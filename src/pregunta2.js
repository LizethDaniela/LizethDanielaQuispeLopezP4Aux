"use strict";

//Pregunta 2:
//Sus tareas:
//PARTE 1
//1. Escribe una función asíncrona 'loadNPause' que recree la pregunta 1, esta vez
//usando async / await (solo la parte donde se consume la promesa, reutilice la
//función 'createImage' que escribió antes)
function loadNPause(){
    return new createImage();
}
var AsyncFunction = (async function(){}).constructor


//PARTE 2
//1. Cree una función asíncrona 'loadAll' que reciba un array de rutas de imagen
//'imgArr'
////2. Utilice .map para recorrer el array, para cargar todas las imágenes con la
//función 'createImage' (la matriz resultante se llamará 'imgs')
//3. Muestre el array ‘imgs’ en la consola
//4. Utilice una función de combinación de promesas para obtener las imágenes del
//array.
//5. Agregue la clase 'parallel' a todas las imágenes (tiene algunos estilos CSS).
//Datos de prueba para la parte 2:
//['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].
//Para probarlos, comente por un momento la función ‘loadNPause’
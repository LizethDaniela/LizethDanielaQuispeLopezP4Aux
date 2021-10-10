"use strict";

// La solucion de la pregunta 1 va aqui
console.log("hola mundo");
//Pregunta 1:
//¡Para este desafío, revisa el video “Assignment4” en el repositorio de las clases!
//Luego, programe la funcionalidad que se muestra en dicho video.
//Sus tareas:
//NOTA: Las tareas no son tan descriptivas esta vez, por lo que puede averiguar
//algunas cosas usted mismo (consulta la documentación de MDN).
//PARTE 1
//1. Cree una función 'createImage' que reciba 'imgPath' como entrada. Esta
//función devuelve una promesa que crea una nueva imagen (use
//document.createElement('img')) y establece el atributo ‘.src’ en el ruta de la
//imagen proporcionada
function createImage (){
    const imgPath = document.createElement('img');
    imgPath.src=images[i];
    i++;
    //console.log(imgPath);
}

  
//2. Cuando la imagen haya terminado de cargarse, agréguela al elemento DOM
//con la clase 'images' y resuelva la promesa. El valor resuelto debe ser el
//elemento de la imagen en cuestión. En caso de que haya un error al cargar la
//imagen (escuche el evento 'error'), rechace la promesa.
imgPath.addEventListener('load', function() {
    console.log("La imagen cargo de manera correcta");
  });
  
  imgPath.addEventListener('error', function() {
    console.log("error");
  });

  
//PARTE 2
//3. Consuma la promesa usando ‘.then’ y también controle los errores.
createImage().then (function(mensaje){
    console.log(mensaje);
  }). catch (function(error){
    console.log(error);
  });
//4. Una vez que se haya cargado la imagen, pause la ejecución durante 2
//segundos usando temporizadores.
setTimeout(createImage, 2000) ;
//5. Una vez transcurridos los 2 segundos, oculte la imagen actual (configure la
//propiedad ‘display’ de CSS a 'none'), y cargue una segunda imagen.
if(i >= images.length){
    i = 0;
} 
setInterval(createImage, 2000);

let images = [], i = 0;
images[0] = "img-1.jpg";
images[1] = "img-2.jpg";
images[2] = "img-3.jpg";
//6. Una vez que se haya cargado la segunda imagen, vuelva a pausar la ejecución
//durante 2 segundos.
setTimeout(createImage, 2000) ;
//7. Una vez transcurridos los 2 segundos, oculte la imagen actual.


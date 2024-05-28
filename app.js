//Dom
console.log(document)

//1.-getElements (nos permite seleccionar los elementos del documento  HTML)

//1.1.-getElementByID (nos da el elemento llamado por el ID.)
const element = document.getElementById("title");
console.log(element)


//1.2.-querySelector (nos da el primer elemento de la lista)
const selector = document.querySelector("#listas");
console.log(selector);

//1.3.-querySelectorAll (devuelve todos los elementos que encuentra con ese selector)
const elementos_lista = document.querySelectorAll("#lista");
console.log(elementos_lista)

//2.-Modificar Elementos (nos permite modificar los elementos del HTML)

//2.1.-textContend (Permite modifcar el contenido de un elemento.)
let modificar = document.getElementById("principal").textContent = "Este es el nuevo parrafo para el titulo";
console.log(modificar)

//2.2 innerHTML
let txt =document.getElementById("lista-2");
console.log(txt.innerHTML)

//3.-Style (permite modifica los stylos en linea)

//3.1.-property style (permite ponerle estilo)
const title = document.getElementById("title");
title.style.color = 'blue';

//3.2.-property classList.add (agregando lista de clases al estilo)
title.classList.add('color-blue','estilo-borrar')

//3.3 property classList.remove (elimina la lista de clases al estilo)
title.classList.remove('estilo-borrar')

//4.-Dom Traversing (permite moverse dentro del HTML)
const menuNavigation = document.querySelector('nav');
console.log(menuNavigation.children[0].children[1]);

//5.-CreateElement (permite crear un nuevo elemento)
const new_element = document.createElement('p');
const contenedores = document.getElementById('contenedores');

new_element.textContent= 'estoy creando contenido al contenedor';

new_element.classList.add('primera_clase','Segunda_clase');
new_element.setAttribute('id','firstID');

contenedores.appendChild(new_element)




// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Como vemos en el index.html hay dos botones que, al hacer click llama a 2 funciones: "agregarAmigo()" y "sortearAmigo()". 
//Vamos a crear la función "agregarAmigo()"

let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    //Se agrega el .trim() para que también arroje el error cuando pongo un espacio. 
    let nuevoAmigo = document.querySelector(`#amigo`).value.trim();
    if (nuevoAmigo === ``) {
        alert(`Error, ingresa un nombre válido`);
    } else {
        listaAmigos.push(nuevoAmigo);
        //Ahora se agrega los nombres en la lista, que se agregue uno de bajo de otro.
        asignarTextoElemento(`ul`, listaAmigos);
        limpiarInput();
        console.log(listaAmigos);
    }
}

function limpiarInput() {
        document.querySelector(`#amigo`).value = ``;
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Como vemos en el index.html hay dos botones que al hacer click llama a 2 funciones: "agregarAmigo()" y "sortearAmigo()". 
//Vamos a crear la función "agregarAmigo()"

let listaAmigos = [];

function agregarAmigo() {
let nuevoAmigo = document.querySelector(`#amigo`).value;
if (nuevoAmigo == ``) {
    alert(`Error, ingresa un nombre válido`);
} else {
    listaAmigos.push(nuevoAmigo);
    limpiarInput();
    console.log(listaAmigos);
}
}

function limpiarInput() {
        document.querySelector(`#amigo`).value = ``;
}

agregarAmigo();
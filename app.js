// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Como vemos en el index.html hay dos botones que, al hacer click llama a 2 funciones: "agregarAmigo()" y "sortearAmigo()". 
//Vamos a crear la función "agregarAmigo()"

let listaAmigos = [];

function agregarAmigo() {
    //Se agrega el .trim() para que también arroje el error cuando pongo un espacio.
    let nuevoAmigo = document.querySelector(`#amigo`).value.trim();
    if (nuevoAmigo === ``) {
        alert(`Error, ingresa un nombre válido`);
    } else {
        listaAmigos.push(nuevoAmigo);
        actualizarLista();
        limpiarInput();
        console.log(listaAmigos);
    }
}

function actualizarLista() {
    let listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = ""; // Limpia la lista antes de agregar los elementos.

    //Ahora se agrega los nombres en la lista, que se agregue uno de bajo de otro.
    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function limpiarInput() {
        document.querySelector(`#amigo`).value = ``;
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert(`Por favor, ingresa al menos 2 nombres para poder realizar el sorteo`);
        return;
    }
    
    let amigoAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let amigoSorteado = listaAmigos[amigoAleatorio];
    console.log(amigoSorteado);
    
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = ""; // Limpia el resultado anterior

    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultadoHTML.appendChild(li);
}
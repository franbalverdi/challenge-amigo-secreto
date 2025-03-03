<h1 align="center">Challenge del amigo secreto</h1>
<img align="center" src="/assets/amigo-secreto.png">

El objetivo de la app es poder agregar un listado de amigos para que luego se sortée un amigo ganador al final.

Para eso necesitamos crear un input donde podamos escribir el nombre de nuestro amigo.

Luego al lado un botón "Añadir" cuya acción es la de colocar el nombre debajo del input y así a medida que vayamos agregando amigos, se vayan ubicando uno debajo del otro.

Una vez realizada la carga, apretar el otro botón "Sortear amigo" para que automáticamente imprima el amigo ganador con un color diferente.

Vamos a comenzar con la lógica de programación:

- Primero creamos la listaAmigos como una lista vacía, que luego vamos a ir incorporando elementos.

- Botón añadir: Crear una función en donde al hacer click en el botón tomamos el valor del input y lo sumamos a la lista que se imprime debajo. Teniendo en cuenta que si el campo está vacío o si tiene un espacio, se arroja un alert anunciando que debe escribirse un nombre válido.

- Creamos una función en donde tomamos el valor del input y creamos una lista (li) dentro de la lista (ul) que está en el index.html. Luego a esta función la incorporamos dentro de la función del paso 2 para que realice la secuencia completa.

- Armamos otra función que limpie el input al hacer click y la incorporamos también a la función del paso 2.

- Botón sortear amigo: ahora creamos la función para poder sortear el amigo secreto. Lo primero que hacemos es validad que al menos haya 2 nombres ingresados en la lista para poder hacer el sorteo correctamente.

- Consecutivamente creamos la selección aleatoria de la lista, donde utilizamos el Math.random() y luego el Math.Floor() para convertirlo en un número entero. Y por último lo multiplicamos con la longitud de la lista (listaAmigos.length).

- Al finalizar hacemos lo mismo que el paso 2, seleccionamos la ul con id="resultado" y le creamos una li dentro con el amigo aleatorio que se sorteó al inicio de este paso.

FIN. -

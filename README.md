<h1>Challenge del amigo secreto</h1>

- Vamos a comenzar con la lógica de programación:
  1- Botón añadir: ya agregamos la función en donde al hacer click en el botón tomamos el valor del input y lo sumamos a la lista que se imprime debajo.
  Para poder hacer que la lista se imprima uno debajo del otro, lo que hicimos es tomar la ul con el id="listaAmigos" y luego en ella crear un elemento "li" y a su vez agregarlo al DOM con appendChild(li). De esta forma se ubica uno debajo del otro.

  2- Botón sortear amigo: ahora creamos la función para poder sortear el amigo secreto. Lo primero que hacemos es validad que al menos haya 2 nombres ingresados en la lista para poder hacer el sorteo correctamente.
  Ahora creamos la selección aleatoria de la lista, donde utilizamos el Math.random() y luego el Math.Floor() para convertirlo en un número entero. Y por último lo multiplicamos con la longitud de la lista (listaAmigos.length).
  Al finalizar hacemos lo mismo que el paso anterior, seleccionamos la ul con id="resultado" y le creamos una li dentro con el amigo aleatorio que se calculó en el paso anterior.

  FIN. -

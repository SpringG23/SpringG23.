// Declara aqui tus variables
let mario = document.querySelector(".mario");
let moneda = document.querySelector(".moneda");
/* Problema 1:Cuando se presione el botón "Saltar", Mario debe subir 
hasta donde esta la moneda, y esta debe desaparecer */

/*Problema 2 : Cuando se presione de nuevo el boton "Bajar" Mario baja al nivel del suelo de nuevo */

// 3: Cuando el botón "Cambiar el color" es presionado, el color de fondo cambia

// 4: Cuando el botón "Finalizar juego" es presionado, el título de la página dice "Game over"
let botonfinal = document.querySelector(".finalizar");
botonfinal.onclick= function(){
  let final = document.querySelector("h1");
  final.innerHTML = "Game over"
}
// 5: Cuando el botón "Actualizar Puntaje" es presionado, el contador de puntuación se establece en "1" en lugar de 0
let puntajeboton =document.querySelector(".actualizar-puntaje");
puntajeboton.onclick= function(){
  let puntaje = document.querySelector(".score");
  puntaje.innerHTML = parseInt(puntaje-this.textContent) + 1;
}
// 6: Cuando el botón "Crecer" es presionado, la imagen de Mario se debe hacer más grande.
let botonCrecer = document.querySelector(".crecer");
botonCrecer.onclick = function() {
  let posicionActual = parseInt(mario.style.height) || 75;
  const cantidadPixelesPorPaso = 10;
  const limiteCrecer = 700;

  let nuevaPosicion = posicionActual + cantidadPixelesPorPaso
  if (nuevaPosicion <= limiteCrecer) {
    mario.style.height = nuevaPosicion + "px";
  }
}
//7: Ya el boton de mover a la derecha esta hecho. Haz ahora uno para que se mueva a la izquierda.
let botonDerecha = document.querySelector(".derecha");
botonDerecha.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75; // Obtener la posición actual (si no la consigue empienza en 75)
  const cantidadPixelesPorPaso = 10; // Cantidad de píxeles a mover
  const limiteDerecha = 700; // 700px es lo maximo que se va a mover para que no se salga de la pantalla

  // Calcular la nueva posición
  let nuevaPosicion = posicionActual + cantidadPixelesPorPaso;
  if (nuevaPosicion <= limiteDerecha) {
    mario.style.left = nuevaPosicion + "px"; // Actualizar la posición
  }
};

let botonizquierda = document.querySelector(".izquierda");
botonizquierda.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75; // Obtener la posición actual (si no la consigue empienza en 75)
  const cantidadPixelesPorPaso = 10; // Cantidad de píxeles a mover
  const limiteizquierda = -14; // 700px es lo maximo que se va a mover para que no se salga de la pantalla
  
  // Calcular la nueva posición
  let nuevaPosicion = posicionActual - cantidadPixelesPorPaso;
  if (nuevaPosicion >= limiteizquierda) {
    mario.style.left = nuevaPosicion + "px"; // Actualizar la posición
  }
};

let botonsaltar = document.querySelector(".saltar");
botonsaltar.onclick = function () {
  
  let posicionActual = parseInt(mario.style.top) || 125; 
  const cantidadPixelesPorPaso = 100 ; 
  const limitesaltar = 125;
  
    let nuevaPosicion = posicionActual;
    if (nuevaPosicion <= limitesaltar) {
      mario.style.bottom = nuevaPosicion + "px"; 
      moneda.style.visibility = "hidden";
    }
  };  

  let botonbajar = document.querySelector(".bajar");
botonbajar.onclick = function () {
  let posicionActual = parseInt(mario.style.top) || 35; 
  const cantidadPixelesPorPaso = -100 ; 
  const limitebajar = -125;
  
    let nuevaPosicion = posicionActual;
    if (nuevaPosicion >= limitebajar) {
      mario.style.bottom = nuevaPosicion + "px"; 
    }
  };  

 let nuevaPosicion = posicionActual - cantidadPixelesPorPaso;
 if (nuevaPosicion >= limiteizquierda) {
  mario.style.left = nuevaPosicion + "px";
  
 }
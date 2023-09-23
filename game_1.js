const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);
window.addEventListener('resize', setCanvasSize); //El resizeevento se activa cuando se cambia el tamaño de la vista del documento (ventana).

function startGame() {
  let canvasSize;

  if (window.innerHeight > window.innerWidth) { //la forma del canvas siempre sea igual sin importar si disminimos oagrandamos la ventana
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  const elementsSize = canvasSize / 10;//hace que las figuras entro del canvas siempre sean equivalentes en tamaño al del canvas

  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';  //popiedad que establece el tamaño de los elmentos  con la variable antescalculada pra que sea dinamica
  game.textAlign = 'end'; //alinea la posicon donde empieza nuetra primerbombita

  for (let i = 1; i <= 10; i++) {//rellona lagrilla debombas empezando por la posicion 1
    game.fillText(emojis['X'], elementsSize, elementsSize * i);//ultiplica por i ya sea en el eje "x" o "y"
  }
  //window.innerHeight devuelve la altura interior de la ventana en píxeles,
  //window.innerWidth devuelve el ancho interior de la ventana en píxeles (es decir, 

  // game.fillRect(0,50,100,100); --crea rectangulos
  // game.clearRect(50,50,50,50);-borra rectangulos
  // game.clearRect()
  // game.clearRect(0,0,50,50);

  // game.font = '25px Verdana' funete y tamaño
  // game.fillStyle = 'purple';--inserta texto
  // game.textAlign = 'center'; posicion
  // game.fillText('Platzi', 25, 25); texto y posicion a insertatr
}

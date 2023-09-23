const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;//las vaiables que determminan el tamaño se vuelven globales
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);//se llama a la funcion

function setCanvasSize() {//se divide a la funcion de tamaño y de forma de mapa
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = canvasSize / 10;

  startGame();//se manda a llamar la forma del mapa que detrmine el nivel
}

function startGame() {
    console.log({ canvasSize, elementsSize });
  
    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';
  
    const map = maps[0];//indicamos que mapa usaremos
    const mapRows = map.trim().split('\n');
    //El método trim( ) elimina los espacios en blanco en ambos extremos del string
    //El split()método de String valores toma un patrónque describe dónde debe ocurrir cada división y divide esta cadena en una lista ordenada de subcadenas buscando el patrón
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    console.log({map, mapRows, mapRowCols});
    
    for (let row = 1; row <= 10; row++) {
      for (let col = 1; col <= 10; col++) {
        game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize * col, elementsSize * row);
        //método fillText(), parte de la API de Canvas 2D, dibuja una cadena de texto en las coordenadas especificadas
      }
    }
  }
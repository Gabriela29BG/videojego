const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  
  elementsSize = canvasSize / 10;

  startGame();
}

function startGame() {
  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[0]; //escoge cual aray sera utilizado
  const mapRows = map.trim().split('\n');//covierte las el arreglo en filas
  //split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas
  //trim( ) elimina los espacios en blanco en ambos extremos del string.
  const mapRowCols = mapRows.map(row => row.trim().split(''));//conviete las filas en columnas
  console.log({map, mapRows, mapRowCols});
  
  mapRowCols.forEach((row, rowI) => {  //se itera dentro de las fila y dentro de
    row.forEach((col, colI) => {//la columna tambien se itera
      const emoji = emojis[col];// se omprime el arreglo col por ser el array de arrays
      const posX = elementsSize * (colI + 1);
      const posY = elementsSize * (rowI + 1);//lapsicion de "x" y "y"  es el tamaño de nuesros elemntos por lo qe debuelve el array mas 1(todo lo qe semultipllica porcero es cero por eso es por uno)
      game.fillText(emoji, posX, posY);  //cada emoji le asignamos su poscion
    });
  });
  
  // for (let row = 1; row <= 10; row++) {
  //   for (let col = 1; col <= 10; col++) {
  //     game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize * col, elementsSize * row);
  //   }
  // }
}
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementsSize;

const playerPosition = {
  x: undefined,
  y: undefined,
};

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

  const map = maps[0];
  const mapRows = map.trim().split('\n');
  const mapRowCols = mapRows.map(row => row.trim().split(''));
  console.log({map, mapRows, mapRowCols});
  
  game.clearRect(0,0,canvasSize, canvasSize);
  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1);
      const posY = elementsSize * (rowI + 1);

      if (col == 'O') { ///para que no aparesca al inicio al recargar el juego se haace un bucle if
        if (!playerPosition.x && !playerPosition.y) { //si ninguno tiene algo por dentro enonces entra al if
          playerPosition.x = posX;//pero si es decir, si es undefined "x" y "y" esto es true por lo tanto sele asgna un valor
          playerPosition.y = posY; ///enonces si ambas condiciones if son true se visualiza la caleverita en la puetaa
          console.log({playerPosition});
        }
      }
      
      game.fillText(emoji, posX, posY);
    });
  });

  movePlayer();
}

function movePlayer() {
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
  if (event.key == 'ArrowUp') moveUp();
  else if (event.key == 'ArrowLeft') moveLeft();
  else if (event.key == 'ArrowRight') moveRight();
  else if (event.key == 'ArrowDown') moveDown();
}
function moveUp() {
  console.log('Me quiero mover hacia arriba');
  playerPosition.y -= elementsSize;
  startGame(); //se manda a llamar el inicio del juego, la cual manda a llamr la sosicion del jugador 
  //y no solo la funcion de posicion del jugador
}
function moveLeft() {
  console.log('Me quiero mover hacia izquierda');
  playerPosition.x -= elementsSize; //si se mueve a la izqieda restamos
  startGame();
}
function moveRight() {
  console.log('Me quiero mover hacia derecha');
  playerPosition.x += elementsSize; //si se mueve a la derecha sumamos
  startGame();
}
function moveDown() {
  console.log('Me quiero mover hacia abajo');
  playerPosition.y += elementsSize;
  startGame();
}
let canvasWidth = 534;  // Ancho inicial del canvas
let canvasHeight = 608; // Alto inicial del canvas
function setup() {
  createCanvas(534, 608);
  
  // Altura de los botones y margen inferior
  let buttonHeight = 40;
  let marginBottom = 20;
  
  // Posición vertical
  let yPosition = height - buttonHeight - marginBottom; // Altura del canvas - altura del botón - margen
  
  // Ancho de cada botón y espacio entre ellos
  let buttonWidth = 120; // Puedes ajustar el ancho según sea necesario
  let spaceBetween = 10; // Espacio entre botones
  
  // Posiciones horizontales
  let xPosition1 = (width / 2) - (2 * (buttonWidth + spaceBetween) + buttonWidth / 2);
  let xPosition2 = xPosition1 + buttonWidth + spaceBetween;
  let xPosition3 = xPosition2 + buttonWidth + spaceBetween;
  let xPosition4 = xPosition3 + buttonWidth + spaceBetween;

  // Crear botones
  createButton('Ataque').position(xPosition1, yPosition);
  createButton('Defender').position(xPosition2, yPosition);
  createButton('Usar Objeto').position(xPosition3, yPosition);
  createButton('Huir').position(xPosition4, yPosition);
}

function draw() {
  background(220);
}

function setup1() {
  createCanvas(canvasWidth, canvasHeight);
  let topLeft=createButton('FIGHT'),
  topRight=createButton('PARTY'),
  bottomLeft=createButton('ITEM'),
  bottomRight=createButton('RUN');
  topLeft.id('FIGHT');
  topLeft.position('100px','100px');
  //topLeft.position(0,300);
  //topRight.position(267,300);
  //bottomLeft.position(0,450);
  //bottomRight.position(267,450);
  topLeft.style('width','267px')
         .style('height','150px')
  topRight.style('width','267px')
          .style('height','150px')
  bottomLeft.style('width','267px')
            .style('height','150px')
  bottomRight.style('width','267px')
             .style('height','150px')
  bottomLeft.id('ITEM');
  bottomRight.id('RUN');
  topRight.id('PARTY')
  textAlign(CENTER, CENTER);
}

function draw1() {
  background(220);
  fill(0);
  textSize(24);
  text(`Tamaño del canvas: ${canvasWidth} x ${canvasHeight}`, width / 2, height / 2);
}

function mousePressed1() {
  // Aumentar el tamaño del canvas en 1 píxel
  canvasWidth++;
  //canvasHeight++;
  resizeCanvas(canvasWidth, canvasHeight);
}

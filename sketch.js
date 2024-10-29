let canvasWidth = 534;  // Ancho inicial del canvas
let canvasHeight = 608; // Alto inicial del canvas

function setup() {
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

function draw() {
  background(220);
  fill(0);
  textSize(24);
  text(`Tamaño del canvas: ${canvasWidth} x ${canvasHeight}`, width / 2, height / 2);
}

function mousePressed() {
  // Aumentar el tamaño del canvas en 1 píxel
  canvasWidth++;
  //canvasHeight++;
  resizeCanvas(canvasWidth, canvasHeight);
}

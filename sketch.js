let canvasWidth = 500;  // Ancho inicial del canvas
let canvasHeight = 608; // Alto inicial del canvas

function setup() {
  createCanvas(canvasWidth, canvasHeight);
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

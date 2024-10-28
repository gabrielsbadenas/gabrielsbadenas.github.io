let circle = {
    x: 320, // Posición inicial X (centro)
    y: 240, // Posición inicial Y (centro)
    radius: 30, // Radio del círculo
    grayScale: 0 // Nivel de escala de grises
};

// Setup inicial
function setup() {
    createCanvas(640, 480); // Crea un canvas de 640x480 píxeles
    noStroke(); // Sin borde para el círculo
    background(240); // Color de fondo
}

// Dibuja el círculo en la posición actual
function draw() {
    background(240); // Limpia el fondo en cada frame
    fill(circle.grayScale); // Color del círculo en escala de grises
    ellipse(circle.x, circle.y, circle.radius * 2); // Dibuja el círculo
}

// Maneja el evento táctil
function touchStarted() {
    circle.x = touchX; // Actualiza la posición X
    circle.y = touchY; // Actualiza la posición Y
    // Cambia el color en escala de grises
    circle.grayScale = Math.floor((map(touchX, 0, width, 0, 15) + map(touchY, 0, height, 0, 15)) / 2) * 16; 
    return false; // Previene el comportamiento por defecto
}

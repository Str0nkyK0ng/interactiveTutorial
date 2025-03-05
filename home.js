// #### CANVAS CODE ####

//first get a reference to the "canvas" element of our html (find it via the ID we gave it in the HTML)
const canvas = document.getElementById('interactiveCanvas');

//the we can set up code for each mouse action (entering the canvas, leaving it, moving around in it)
//set up what to do when our mouse goes over the canvas
canvas.onmouseover = function (mouseEvent) {
  //set the background color of the canvas to black
  canvas.style.backgroundColor = 'aliceblue';
};

let color = 0;
//when the mouse moves on the canvas, draw something
canvas.onmousemove = function (mouseEvent) {
  //how big should our square be (in pixels)
  let squareSize = 25;
  //get the "context", or the thing that allows us to draw on the canvas
  const ctx = canvas.getContext('2d');
  //define how to style the square (in our case, filling it blue)

  //make a random hex color
  color += 100;

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  ctx.fillStyle = '#' + randomColor;
  /*
  actually draw it at the mouse position
  Note: We subtract -squareSize/2 from the X and Y position because rectangles are drawn from the top left corner.
  */
  ctx.fillRect(
    mouseEvent.offsetX - squareSize / 2,
    mouseEvent.offsetY - squareSize / 2,
    squareSize,
    squareSize
  );
};

//set up what to do when our mouse leaves the canvas
canvas.onmouseleave = function () {
  //set the background color of the canvas to white
  canvas.style.backgroundColor = 'aliceblue';
  //clear the "context" of the canvas, so that it is empty when we draw on it later
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// background rain

const canvasRain = document.getElementById('backgroundCanvas');
const ctxRain = canvasRain.getContext('2d');
canvasRain.width = window.innerWidth;
canvasRain.height = window.innerHeight;

let rainDrops = [];
let rainDropCount = 500;
let rainDropSpeed = 5;

// A class is a collection of information, and some functions to interact with it.
// For our "RainDrop" it'll have an X and Y position, a length, a speed, and a color.
class RainDrop {
  x = Math.random() * canvasRain.width;
  y = Math.random() * canvasRain.height;
  length = Math.random() * 10 + 10;
  speed = Math.random() * 10 + rainDropSpeed;

  // we can also write functions inside of classes, so lets write code to tell the raindrop how to draw itself

  draw() {
    ctxRain.fillStyle = 'aliceblue';
    ctxRain.fillRect(this.x, this.y, 2, this.length);
  }

  update() {
    // tell the raindrop to move down
    this.y += this.speed;
    // if we are off the canvas, go back to the top
    if (this.y > canvasRain.height) {
      this.y = 0;
    }
  }
}

function createRain() {
  for (let i = 0; i < rainDropCount; i++) {
    rainDrops.push(new RainDrop());
  }
}

function drawRain() {
  for (let i = 0; i < rainDrops.length; i++) {
    rainDrops[i].draw();
  }
}

function updateRain() {
  for (let i = 0; i < rainDrops.length; i++) {
    rainDrops[i].update();
  }
}

function animateRain() {
  ctxRain.clearRect(0, 0, canvasRain.width, canvasRain.height);
  drawRain();
  updateRain();
  requestAnimationFrame(animateRain);
}
createRain();
animateRain();

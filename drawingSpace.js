// #### CANVAS CODE ####

//first get a reference to the "canvas" element of our html (find it via the ID we gave it in the HTML)
const canvas = document.getElementById('interactiveCanvas');
canvas.style.backgroundColor = 'grey';

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
  //clear the "context" of the canvas, so that it is empty when we draw on it later
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = 'grey';
};

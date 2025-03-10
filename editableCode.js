// #### HTML PLAYGROUND CODE ####

// Get some HTML components by ID
const input = document.getElementById('inputCode');
const output = document.getElementById('editableCodeOutput');

//This is gonna be the code we start with in the textbox.
let raw = `<p style='background-color:red'> Can you change the background color of this? </p>
<div style='background-color:blue; font-style:italic; color:white'>What about this font color?</div>
`;
input.value = raw;
output.innerHTML = raw;

//Setup a handler to move any input fcrom the textbox into the output as "innerHTML" (so html that will be renderer)
const inputHandler = function (e) {
  console.log(e.target.value);
  output.innerHTML = e.target.value;
};

//the handler will run whenever the input gets a new value
input.addEventListener('input', inputHandler);

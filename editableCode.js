// Get some components by ID
const input = document.getElementById('inputCode');
const output = document.getElementById('editableCodeOutput');

// on mount

let raw = `<p style='background-color:red'> Can you change the background color of this? </p>

<div style='background-color:blue; font-style:italic; color:white'>What about this font color?</div>


`;
input.value = raw;
output.innerHTML = raw;
const inputHandler = function (e) {
  console.log(e.target.value);
  output.innerHTML = e.target.value;
};

input.addEventListener('input', inputHandler);

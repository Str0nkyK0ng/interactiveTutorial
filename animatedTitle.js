// #### MOVING TITLE CODE ####

let timeToChange = 250; //in milliseconds, so 0.25 seconds
//what the full title is
let fullTitle = 'INTERACTIVE WEBSITE TUTORIAL===';
//how many characters we want to show at a time
let length = 10;
//where we are in the title
let index = 0;

function changeTitle() {
  let currentTitle = '';

  //get "length many characters" from the title, starting from our current index
  for (let i = 0; i < length; i++) {
    //the % here just makes sure we don't go out of bounds
    let realIndex = (index + i) % fullTitle.length;
    currentTitle += fullTitle[realIndex];
  }
  //rebuild the title
  document.title = currentTitle;
  //move our starting point by one
  index++;
}

//set a timeout (or a frequency when to execute our "change title code")
changeTitle();
setInterval(changeTitle, timeToChange);

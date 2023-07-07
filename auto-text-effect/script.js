const textEl = document.getElementById("text"); // gets the element with the id 'text' and stores it in the variable 'textEl'
const speedEl = document.getElementById("speed"); // gets the element with the id 'speed' and stores in the variable 'speedEl'
const text = "Chukwudubem is an avid developer";

let index = 1;
let speed = 300 / speedEl.value; // divides the current speedEl value by 300 which serves as speed

writeText(); // hoisting the function

function writeText() {
  textEl.innerText = text.slice(0, index); // gets the textEl's innerText i.e., the wordEl's value in this case, slices it i.e., creates a copy of it from the first character until current index.

  index++; // increments the index

  if (index > text.length) {
    // checks if the current index is greater than length of entire text. if it is, then it restarts the function by setting the index to 1 again
    index = 1;
  }

  setTimeout(writeText, speed); // calls the function at a set time i.e., every speed.value
}

speedEl.addEventListener("input", (e) => {
  // the speedEl listens for an input i.e., a change in its value and sets the spped based off that
  speed = 300 / e.target.value;
});

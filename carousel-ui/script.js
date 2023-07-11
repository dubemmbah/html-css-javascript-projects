const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let index = 0;

let interval = setInterval(run, 2000);

function run() {
  index++;

  changeImage();
}

function changeImage() {
  if (index > img.length - 1) {
    index = 0; // checks if index > nodelist length, if it is, it resets index back to starting point i.e., 0
  } else if (index < 0) {
    index = img.length - 1;
  }

  imgs.style.transform = `translateX(${-index * 500}px)`;
}

// Clears interval
function resetInterval() {
  // This function is basically there to prevent collision between the automatic transitioning of the images and the button clicks. Hence, when either button is clicked, the transition is terminated and it allows for dynamic movement of the images by the button
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval(interval);
});

rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval(interval);
});

// FUNCTIONALITY
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; // this circle buttons start from one since the first progress step is one to represent the active one

next.addEventListener("click", function () {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length; // checks if currentActive (circle) is greater than the length of the circles, then set currentActive to be equal to the length of the circles array when the iteration > 4
  }
  update();
});

prev.addEventListener("click", function () {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1; // checks if currentActive (circle) is less than 1, if it is then set the currentActive to remain at 1 (otherwise, it decrements)
  }
  console.log(currentActive);
  update();
});

const update = function () {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%"; // by default, active.length starts at 1 and increases / decreases as the next & prev btns are clicked respectively & circles.length is a constant that's always equal to 4. Hence, we are subtracting one from both values, in order to get a precise progress step. e.g when actives.length = 1, we have (1 - 1) / (4 - 1) * 100%. The step is not visible at this point, when the actives.length goes up, (2 - 1) / (4 - 1) * 100% = 33.3% progress step

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

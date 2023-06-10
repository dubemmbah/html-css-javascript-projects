const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClass();
    panel.classList.add("active");
  });
}); // for each of the panels, an event listener listens for a click and invokes the function to first remove the active class from all panel and then place the active class on the clicked panel

// forEach is a method that accepts a function as a parameter

const removeActiveClass = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

// const boxes = document.querySelectorAll(".box");

// window.addEventListener("scroll", checkBoxes);

// checkBoxes();

// function checkBoxes() {
//   // we need to find out where the trigger point is i.e., when the scroll event is in effect, where we want the transition to come into play */
//   const triggerBottom = (window.innerHeight / 5) * 4;

//   boxes.forEach(function (box) {
//     // returns the DOM rect object (a rectangle) providing info about the size of an element & its position relative to the viewport
//     const boxTop = box.getBoundingClientRect().top;
//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  // Trigger bottom is a little less than the height of the viewport
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

const boxes = document.querySelectorAll(".box");
const footer = document.querySelector(".footer");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
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

footer.innerHTML = ` <footer class="footer">Copyright Chukwudubem Mbah, ${new Date().getFullYear()}</footer>`;

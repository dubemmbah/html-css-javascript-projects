const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// basically, we get all the button elements with the class 'toggle', and looping through all of them. For each btn, they listen for a click event and toggle the 'active' class on their parent element i.e., their respective div containers

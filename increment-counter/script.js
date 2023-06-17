const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = function () {
    const target = +counter.getAttribute("data-target"); // gets the attribute on each counter, converts it to a number and stores it in the variable
    const c = +counter.innerText; // gets the innertext on each counter and stores it in the variable 'c'.

    const increment = target / 150; // gets each individual data-target & divides them by 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

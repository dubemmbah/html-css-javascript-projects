const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;

const blurring = function () {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // to fade out the loading text as it approaches 100
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
};

let int = setInterval(blurring, 30);

const scale = function (num, in_Min, in_Max, out_Min, out_Max) {
  return ((num - in_Min) * (out_Max - out_Min)) / (in_Max - in_Min) + out_Min;
};

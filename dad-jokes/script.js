const jokeEl = document.getElementById("joke");
const jokeBtn = document.querySelector(".btn");

// const generateJoke = function () {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// };

const generateJoke = async function () {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json(); // a promise as well so we have to await on it

  jokeEl.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

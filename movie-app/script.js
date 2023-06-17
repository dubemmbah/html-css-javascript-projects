// prettier-ignore
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5cd1d18e843565b1a165dadbe57fc05b&page=1"; // to enable setting of the most popular movies on the landing page when it loads
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=5cd1d18e843565b1a165dadbe57fc05b&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
//   Get initial movies

getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = ""; // clears the HTML of the main element

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>`;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // to prevent submission to page since its submit event

  const searchTerm = search.value; // gets the value from the search input and stores it in a variable

  if (searchTerm && searchTerm !== "") {
    // checks if searchTerm exists & if it is not equal to an empty string
    getMovies(SEARCH_API + searchTerm); // fetches the searched movie from the API with the searchTerm concatenated to our API

    search.value = ""; // clears the searchTerm
  } else {
    window.location.reload(); // submission w/out having any value in searchTerm should reload the page
  }
});

const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username); // i.e., APIURL/username returns a promise using destructuring saying we want to take out just data

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");

    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos"); // if there was any error encountered whilst trying to obtain repos
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${user.name}"
        class="avatar"
      />
    </div>

    <div class="user-info">
      <h2>${user.name}</h2>
      <p>
        ${user.bio}
      </p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>`;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents the default behaviour of a form i.e., submitting info to a file etc

  const user = search.value; // gets the input (username) from the user and stores it in the variable username. In this case, the username variable is a local-scope variable meaning it cannot be assessed in the global scope. So, how do we go about it?

  if (user) {
    // checks if there is a valid user with the id given
    getUser(user); // calls the async function

    search.value = ""; // clears the input field
  }
});

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button"); // for each sound, we are creating a button element
  btn.classList.add("btn"); // adding a class of btn on each of the buttons created

  btn.innerHTML = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play(); // html5 element for audio elements
  });

  document.getElementById("buttons").appendChild(btn); // getting the div with the id 'buttons' and passing in (append) all the newly created buttons into the container.
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause(); // pauses the current song that is playing. audio tags do not have a stop method so we pause it and then set its current time to 0 to restart is basically
    song.currentTime = 0;
  });
}

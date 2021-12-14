var start = true;

var current = 0;

var player = 0;

function rolling() {
  if (start) {
    let random = Math.trunc(Math.random() * 6) + 1;
    document.querySelector("img").src = `images/dice-${random}.png`;

    current += random;

    if (random !== 1) {
      document.getElementById(`current--${player}`).innerHTML = current;
    } else {
      changePlayer();
    }
  }
}

function changePlayer() {
  current = 0;
  document.getElementById(`current--${player}`).innerHTML = 0;
  player = player === 0 ? 1 : 0;
  document.getElementById("player--0").classList.toggle("bg-primary");
  document.getElementById("player--0").classList.toggle("bg-info");
  document.getElementById("player--1").classList.toggle("bg-primary");
  document.getElementById("player--1").classList.toggle("bg-info");
}

let scores = [0, 0];

function hold() {
  if (start) {
    scores[player] += current;
    document.getElementById(`score--${player}`).innerHTML = scores[player];

    if (scores[player] > 30) {
      document.getElementById(`player--${player}`).classList.add("bg-danger");
      document.getElementById(`winner--${player}`).classList.remove("d-none");
      document.querySelector("img").src = `images/dice-0.png`;

      start = false;

    } else {
      changePlayer();
    }
  }
}

document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById(`player--0`).classList.remove("bg-danger");
  document.getElementById(`player--1`).classList.remove("bg-danger");

  document.getElementById("player--0").classList.remove("bg-info");
  document.getElementById("player--0").classList.add("bg-primary");
  document.getElementById("player--1").classList.remove("bg-primary");
  document.getElementById("player--1").classList.add("bg-info");

  document.getElementById("winner--0").classList.add("d-none");
  document.getElementById("winner--1").classList.add("d-none");

  document.getElementById(`score--0`).innerHTML = 0;
  document.getElementById(`score--1`).innerHTML = 0;

  document.getElementById(`current--0`).innerHTML = 0;
  document.getElementById(`current--1`).innerHTML = 0;

  start = true;
  current = 0;
  player = 0;
  scores = [0, 0];
})
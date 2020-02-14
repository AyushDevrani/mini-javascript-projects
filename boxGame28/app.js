let box = {};
const score = document.querySelector(".score");
const gameAreaEle = document.querySelector(".gameArea");
const gameArea = gameAreaEle.getBoundingClientRect();
let squares = [];
let gamebox = {
  x: Math.floor(gameArea.width / 100),
  y: Math.floor(gameArea.height / 100)
}
let player = {
  speed: 100,
  square: 1,
  score: 0
}
document.addEventListener("DOMContentLoaded", build);
document.addEventListener("keyup", function (e) {
  const allowKey = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  }
  if (allowKey[e.keyCode]) {
    handleKeyPress(allowKey[e.keyCode])
  }
})

function makeActive() {
  let randomIndex = Math.floor(Math.random() * squares.length);
  if (randomIndex != 0 && player.square != randomIndex) {
    squares[randomIndex].classList.add("active");
  } else {
    makeActive();
  }
}

function handleKeyPress(key) {
  console.log(key);
  if (key === "left" && box.x > gameArea.left) {
    box.x -= player.speed;
    player.square--;
  }
  if (key === "right" && box.x < gameArea.right - box.offsetWidth) {
    box.x += player.speed;
    player.square++;
  }
  if (key === "down" && box.y < (gameArea.bottom - box.offsetHeight)) {
    box.y += player.speed;
    player.square += gamebox.x;
  }
  if (key === "up" && box.y > gameArea.top) {
    box.y -= player.speed;
    player.square -= gamebox.x;
  }
  box.style.left = box.x + "px";
  box.style.top = box.y + "px";
  console.log(player.square);
  if (squares[player.square].classList.contains("active")) {
    console.log("FOUND");
    squares[player.square].classList.remove("active");
    makeActive();
    player.score++;
    score.innerHTML = player.score;
  }
}

function build() {
  box = document.createElement("div");
  box.classList.add("box");
  box.x = gameArea.top;
  box.y = gameArea.left;
  box.style.top = box.y + "px";
  box.style.left = box.x + "px";
  gameAreaEle.appendChild(box);
  let counter = 1;
  for (let y = 0; y < gamebox.y; y++) {
    for (let x = 0; x < gamebox.x; x++) {
      squares[counter] = document.createElement("div");
      squares[counter].innerHTML = counter;
      squares[counter].classList.add("square");
      gameAreaEle.appendChild(squares[counter]);
      counter++;
    }
  }
  makeActive();
}
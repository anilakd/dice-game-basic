var playText = document.querySelector("h2");
var container = document.querySelector(".container");
var winnerTitle = document.querySelector(".winner-title");

function start() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  container.classList.remove("invisible");

  var firstPlayerDiceImage = document.querySelector(".first-player img");
  var secondPlayerDiceImage = document.querySelector(".second-player img");

  console.log(randomNumber1);
  firstPlayerDiceImage.setAttribute(
    "src",
    "images/dice" + randomNumber1 + ".png"
  );

  secondPlayerDiceImage.setAttribute(
    "src",
    "images/dice" + randomNumber2 + ".png"
  );

  if (randomNumber1 > randomNumber2) {
    winnerTitle.textContent = "🚩 Player 1 WIN !";
  } else if (randomNumber1 < randomNumber2) {
    winnerTitle.textContent = "Player 2 WIN ! 🚩";
  } else {
    winnerTitle.textContent = "DRAW ";
  }
  winnerTitle.classList.remove("invisible");

  playText.textContent = "Play again";
  playText.style.color = "red";
  winnerTitle.style.color = "yellow";
}

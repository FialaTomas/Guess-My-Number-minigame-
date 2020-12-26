"use strict";
// Guess My Number! minigame

// To add:
// - multiple highscores
// - number of tries
// - cheerful effects on correct guess
// - further refactoring

// Initial values
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Check! button
// Button to check the users guess
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   User guess
  //   Incorrect input
  if (!guess) {
    displayMessage("Need a number!");
  }
  //   Correct guess
  else if (guess === secretNumber) {
    displayMessage("Correct!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";

    // Compares current score highscore, if the current score is higher, logs it as new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // When guess is wrong (using combination of if/else and ternary operator)
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "Too high!...(? hides a hint)"
          : "Too low!...(? hides a hint)"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("No more guesses, try again!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again! button
// Button to reset the game without losing progress in Highscore
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

// ? (hint)
// When cursor move over ? the game provides a hint
const help = document.querySelector(".number");
help.addEventListener("mouseover", function () {
  const guess = Number(document.querySelector(".guess").value);
  let target = document.querySelector(".number");
  switch (true) {
    case guess === 0:
      target.textContent = "?";
      break;
    case guess === secretNumber:
      target.textContent = secretNumber;
      break;
    case secretNumber < guess && secretNumber < 15:
      target.textContent = "<15";
      break;
    case secretNumber > guess && secretNumber > 15:
      target.textContent = ">15";
      break;
    case secretNumber < guess && secretNumber < 10:
      target.textContent = "<10";
      break;
    case secretNumber > guess && secretNumber > 10:
      target.textContent = ">10";
      break;
    case secretNumber < guess && secretNumber < 5:
      target.textContent = "<5";
      break;
    case secretNumber > guess && secretNumber > 5:
      target.textContent = ">5";
      break;
  }
});

help.addEventListener("mouseout", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess !== secretNumber)
    document.querySelector(".number").textContent = "?";
});

//   User guess by ENTER
  document.querySelector(".check").addEventListener("keydown", function(e){
  if (e.key === "Enter"){  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   User guess
  //   Incorrect input
  if (!guess) {
    displayMessage("Not a number!");
  }
  //   Correct guess
  else if (guess === secretNumber) {
    displayMessage("Correct!");
    //  Changes background color to green if the guess is correct
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
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("No more guesses, try again!");
      document.querySelector(".score").textContent = 0;
    }

  }
})

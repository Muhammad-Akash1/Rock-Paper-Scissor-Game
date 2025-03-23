let userScore = 0;
let compScore = 0;
let message = document.querySelector(".message");
let computerScore = document.querySelector(".scoreComp");
let playerScore = document.querySelector(".scoreUser");

const choices = document.querySelectorAll(".button");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const gameDraw = () => {
  message.innerText = "Game is drawn...!!";
  message.style.backgroundColor = "blue";
message.style.margin = "auto";
};

const showWinner = (userWin , userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    message.innerText = `You win! your ${userChoice} beats ${compChoice}.`;
    playerScore.innerText = userScore;
    message.style.backgroundColor = "green";
    message.style.margin = "auto";
  } else {
    compScore++;
    message.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
    computerScore.innerText = compScore;
    message.style.backgroundColor = "red";
    message.style.margin = "auto";
  }
};
const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);
  const compChoice = getCompChoice();
  console.log("Computer choice = ", compChoice);

  if (userChoice === compChoice) {
    // Draw
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors,rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

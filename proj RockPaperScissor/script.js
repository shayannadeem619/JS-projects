console.log("Hello, Tomotao!");
function getComputerChoice() {
  let choiceOne = "ROCK";
  let choiceTwo = "SCISSOR";
  let choiceThree = "PAPER";
  let rndNum = Math.floor(Math.random() * 3 + 1);
  if (rndNum == 1) {
    return choiceOne;
  } else if (rndNum == 2) {
    return choiceTwo;
  } else if (rndNum == 3) {
    return choiceThree;
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice");
  humanChoice = humanChoice.toUpperCase();

  if (
    humanChoice != "ROCK" &&
    humanChoice != "SCISSOR" &&
    humanChoice != "PAPER"
  ) {
    alert(
      "Please enter from the following choices: 'Rock', 'Scissor' or 'Paper' "
    );
  } else {
    return humanChoice;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let totalScore = humanScore + computerScore;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "ROCK" && computerChoice == "SCISSOR") {
      humanScore = ++humanScore;
      console.log("Player win, Rock beats Scissor");
    } else if (humanChoice == "SCISSOR" && computerChoice == "PAPER") {
      humanScore = ++humanScore;
      console.log("Player win, Scissor beats Paper");
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
      humanScore = ++humanScore;
      console.log("Player win, Paper beats Rock");
    } else if (humanChoice == "SCISSOR" && computerChoice == "ROCK") {
      computerScore = ++computerScore;
      console.log("Computer win, Rock beats Scissor");
    } else if (humanChoice == "PAPER" && computerChoice == "SCISSOR") {
      computerScore = ++computerScore;
      console.log("Computer win, Scissor beats Paper");
    } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
      computerScore = ++computerScore;
      console.log("Computer win, Paper beats Rock");
    } else if (humanChoice == "ROCK" && computerChoice == "ROCK") {
      console.log("Nobody win, Rock Rock draw");
    } else if (humanChoice == "SCISSOR" && computerChoice == "SCISSOR") {
      console.log("Nobody win, Scissor Scissor draw");
    } else if (humanChoice == "PAPER" && computerChoice == "PAPER") {
      console.log("Nobody win, Paper Paper draw");
    }
  }
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    console.log(
      `Computer selected: ${computerSelection}, You selected: ${humanSelection}`,
      `, Player score: ${humanScore}, Computer score: ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log(
      `Player win with score: ${humanScore}, Computer score: ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Computer win with score: ${computerScore}, Player score: ${humanScore}`
    );
  } else {
    console.log(
      `Nobody win, Its a Draw Draw match, Computer score: ${computerScore}, Player score: ${humanScore}`
    );
  }
}
playGame();

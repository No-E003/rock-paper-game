 //Global variables that will be used for the game
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;

// Function that will be used for the computer to randomly choose a game option from the array we created under the name options 
function getComputerChoice() {
  const options = ['rock','paper','scissors'];
  return options[Math.floor(Math.random() * options.length )];
};

//function that stores the results for each round of the game depending on the player choice and returns the results with a score
function playGame(playerSelection) {
  let computerSelection = getComputerChoice();
  if(playerSelection == computerSelection) {
    p.innerHTML = `Its a tie! You chose ${playerSelection} and the computer chose ${computerSelection}` +'.<br/>' + `Player Score: ${playerScore}` +'.<br/>' + `Computer Score: ${computerScore}` + '.<br/>';
    container.appendChild(p);
    //return alert(`Its a draw. You chose ${playerSelection} and the computer chose ${computerSelection}. The current score between player and bot is ${playerScore} to ${computerScore}.`)
  } else if(playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++;
    p.innerHTML = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}` +'.<br/>' + `Player Score: ${playerScore}` +'.<br/>' + `Computer Score: ${computerScore}` + '.<br/>';
    container.appendChild(p);
    //return alert(`You won! You chose ${playerSelection} and the computer chose ${computerSelection}. Your score: ${playerScore} Computer Score: ${computerScore}`);
  } else if(playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++;
    p.innerHTML = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}` +'.<br/>' + `Player Score: ${playerScore}` +'.<br/>' + `Computer Score: ${computerScore}` + '.<br/>';
    container.appendChild(p);
    //return alert(`You won! You chose ${playerSelection} and the computer chose ${computerSelection}. Your score: ${playerScore}. Computer Score: ${computerScore}`);
  } else if(playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++;
    p.innerHTML = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}` +'.<br/>' + `Player Score: ${playerScore}` +'.<br/>' + `Computer Score: ${computerScore}` + '.<br/>';
    container.appendChild(p);
    //return alert(`You won! You chose ${playerSelection} and the computer chose ${computerSelection}. Your score: ${playerScore}. Computer Score: ${computerScore}`);
  } else {
    computerScore++;
    p.innerHTML = `You Lose! You chose ${playerSelection} and the computer chose ${computerSelection}` +'.<br/>' + `Player Score: ${playerScore}` +'.<br/>' + `Computer Score: ${computerScore}` + '.<br/>';
    container.appendChild(p);
    //return alert(`You Lost! You chose ${playerSelection} and the computer chose ${computerSelection}. Your score: ${playerScore}. Computer Score: ${computerScore}`);
  }
  if(playerScore == 5) {
    p.style.display = "block";
    p.textContent = "You win! Please refresh if you would like to play again";
    disableButtons();
  } else if (computerScore == 5) {
    p.style.display = "block";
    p.textContent = "The computer Won! Please refresh if you would like to play again.";
    disableButtons();
  }
};

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true;
  })
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

//displays the results
const container = document.querySelector('#results');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click',() => {
    playGame(button.value); 
  });
});

const p  = document.createElement('p');
p.style.color = 'orange';  
p.style.fontSize = "24px";
p.style.fontWeight = "500";
p.style.margin = "0";
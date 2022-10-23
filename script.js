 //Global variables that will be used for the game
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;

// Function that will be used for the computer to randomly choose a game option from the array we created under the name options 
function getComputerChoice() {
  const options = ['rock','paper','scissors'];
  return options[Math.floor(Math.random() * options.length )];
};

//function that stores the results for each round of the game depending on the player choice and computer random choice
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
};

//function result() {
  //if(playerScore == computerScore) {
    //return alert(`No one wins! Final score: ${playerScore} to ${computerScore}`);
  //} else if(playerScore > computerScore) {
    //return alert(`You win! Final score: ${playerScore} to ${computerScore}`);
  //} else {
    //return alert(`The computer wins! Final score: ${playerScore} to ${computerScore}`);
  //}
//};

 //Function that will store all the previous functions in to one single game in a series best of five matches
 //function gamePlay() {
  //let playerSelection = prompt("In a best of five against the computer. Choose between rock, paper, or scissors: ").toLowerCase();
  //let computerSelection = getComputerChoice();
  //playGame(playerSelection,computerSelection);
  //return result();
//};

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click',() => {
    playGame(button.value);
  });
});

const container = document.querySelector('#results');

const p  = document.createElement('p');
//p.innerHTML = `Computer Score: ${computerScore}` +'.<br/>' + `Player Score: ${playerScore}` + '.<br/>'
p.style.color = 'white';  
//container.appendChild(p);
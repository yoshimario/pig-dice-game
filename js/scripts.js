// Global Variables
const activePlayer1, activePlayer2;
// Business Logic

function PlayerInfo () {
  this.playerName
  this.rolledDice = 0;
  this.turnScore = 0;
  this.playerScore = 0;
  this.activePlayer = activePlayer;
}

// Function is for determining who is active

function activePlayer() {
  if(activePlayer1 === true & activePlayer2.) {
    $('.playerOneCard').children().prop('disabled', false);
    $('.playerOneCard').removeClass('disableGamingArea');
    $('.playerTwoCard').children().prop('disabled', true);
    $('.playerTwoCard').removeClass('disableGamingArea');
  } else if {
    $('.playerOneCard').children().prop('disabled', true);
    $('.playerOneCard').removeClass('disableGamingArea');
    $('.playerTwoCard').children().prop('disabled', false);
    $('.playerTwoCard').removeClass('disableGamingArea');
  } else {
    console.log("We ran into a problem!");
  }
});

// Function below is the random number generator

PlayerInfo.prototype.rollDice = function() {
  let randomNumber = Math.floor((Math.random()* 6) + 1);
    this.rolledDice = randomNumber;
    
    if (randomNumber === 1) {
      this.playerScore = 0;
      this.rolledDice = 1;
      console.log("You are doomed for eternity as you have a 1! HAHA Try again!");
    } else if (randomNumber > 1) {
      this.playerScore = this.playerScore + randomNumber
      console.log(this.rolledDice);
    } else {
    console.log("We ran into a problem!");
    } 
    return this.playerScore;
}

// User Interface

let playerDiceOutput = new PlayerInfo();
console.log(playerDiceOutput.rollDice());
console.log(playerDiceOutput.rollDice());

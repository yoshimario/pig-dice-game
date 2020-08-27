// Global Variables

// Business Logic

function PlayerInfo () {
  this.playerName
  this.rolledDice = 0;
  this.turnScore = 0;
  this.playerScore = 0;
  this.activePlayer = activePlayer;
}

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

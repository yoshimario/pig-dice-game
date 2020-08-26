// Global Variables

// Business Logic

function PigDice () {
  this.rolledDice = 0,
  this.playerScore = 0
}

PigDice.prototype.rollDice = function() {
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

let diceOutput = new PigDice();
console.log(diceOutput.rollDice());
console.log(diceOutput.rollDice());
// Global Variables
const playerOneScore, playerTwoScore;
// Business Logic

//This function holds what the player rolled and the current player

function PlayerScore (rolledDice,currentScore) {
  this.rolledDice = 0;
  this.currentScore = 0;
}

PlayerScore.prototype.rolldice = function () {
  let randomNumber = Math.floor(Math.random()* 6) + 1);
    this.rolledDice = randomNumber;
    console.log(randomNumber);
    
    if (randomNumber === 1) {
      this.currentScore = 0;
      this.rolledDice = 1;
      console.log("You are doomed for eternity as you have a 1! HAHA Try again!");
    } else if (randomNumber > 1) {
      this.currentScore = randomNumber + this.currentScore
      console.log(currentScore);
    } else {
    console.log("We ran into a problem!")
    } 

});

// User Interface


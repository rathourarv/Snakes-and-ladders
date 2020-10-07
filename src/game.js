const Board = require("./board");
const Dice = require("./dice");
const prompt = require('prompt-sync')();

class Game {
  constructor(startPositon = 0, endPosition = 100, numberOfSteps = 10) {
    this.board = new Board(startPositon, endPosition);
    this.numberOfSteps = numberOfSteps;
    this.dice = new Dice();
  }

  start() {
    const name = prompt('Please enter your name: ');
    console.log(`welcome to Snakes and Ladders ${name}`)
    for (let turn = 0; turn < this.numberOfSteps; turn++) {
      const value = this.dice.roll()
      console.log(`Your turn number: ${turn} and dice value is ${value}`)
    }
  }
}

module.exports = Game

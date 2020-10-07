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
    console.log("starting...")
  }
}

module.exports = Game

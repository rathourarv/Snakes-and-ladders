const Board = require("./board");
const Dice = require("./dice");
const prompt = require('prompt-sync')();
const Player = require("./player");
const Snake = require("./snake");

class Game {
  constructor(startPositon = 0, endPosition = 100, numberOfSteps = 10, snakes = []) {
    this.board = new Board(startPositon, endPosition);
    this.numberOfSteps = numberOfSteps;
    this.dice = new Dice();
    this.player = undefined;
    this.snakes = snakes.map((snake => new Snake(snake.head, snake.tail)));
  }

  handleSnakebite(position) {
    let filteredSnakes = this.snakes.filter(snake => snake.hasBitten(position));
    // ignoring the case where multiple snake's head on a same position as it's not valid
    return filteredSnakes.length == 0 ? position : filteredSnakes[0].tail
  }

  start() {
    const name = prompt('Please enter your name: ');
    console.log(`welcome to Snakes and Ladders ${name}`)
    this.player = new Player(name, this.board.startPosition);
    for (let turn = 0; turn < this.numberOfSteps; turn++) {
      const value = this.dice.roll();
      const nextPosition = this.player.getNextPosition(value);
      if (this.board.isValid(nextPosition)) {
        this.player.updatePosition(this.handleSnakebite(nextPosition));
        console.log(`Your turn number: ${turn} and dice value is ${value}`);
      } else {
        console.log(`Skipping... position is not valid ${nextPosition}`);
      }
    }
    console.log(`your total score is ${this.player.getCurrentPosition()}`)
  }
}

module.exports = Game

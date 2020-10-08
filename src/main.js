const fs = require("fs");
const Game = require("./game");
const Dice = require("./dice");
const Logger = require("js-logger");
const prompt = require('prompt-sync')();

Logger.useDefaults();

let game;
// check if the config file is present else use default configs
if (fs.existsSync("./src/config/config.json")) {
    const config = JSON.parse(fs.readFileSync("./src/config/config.json"));
    const diceType = config["diceType"];
    const possibleValues = config["dices"][diceType];
    const dice = new Dice(possibleValues);
    game = new Game(config["startPosition"], config["endPosition"], config["numberOfSteps"], config["snakes"], dice);
} else {
    game = new Game(0, 100, 10, [], new Dice());
}

const name = prompt('Please enter your name: ');
Logger.info(`welcome to Snakes and Ladders ${name}`);
const score = game.start(name);
Logger.info(`Congratulations ${name}: your total score is ${score}`)
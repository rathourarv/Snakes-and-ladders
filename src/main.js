const fs = require("fs");
const Game = require("./game");
const Dice = require("./dice");
const Logger = require("js-logger");

Logger.useDefaults();
// check if the config file is present else use default configs
if (fs.existsSync("./src/config/config.json")) {
    const config = JSON.parse(fs.readFileSync("./src/config/config.json"));
    const diceType = config["diceType"];
    const possibleValues = config["dices"][diceType];
    const dice = new Dice(possibleValues);
    const game = new Game(config["startPosition"], config["endPosition"], config["numberOfSteps"], config["snakes"], dice);
    game.start()
} else {
    new Game().start()
}

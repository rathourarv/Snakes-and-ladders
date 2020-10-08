const fs = require("fs");
const Game = require("./game");

// check if the config file is present else use default configs
if (fs.existsSync("./src/config/config.json")) {
  const config = JSON.parse(fs.readFileSync("./src/config/config.json"));
  const game = new Game(config["startPosition"], config["endPosition"], config["numberOfSteps"], config["snakes"]);
  game.start()
} else {
  new Game().start()
}

const fs = require("fs");
const Game = require("./game");

// check if the config file is present else use default configs
if (fs.existsSync("./config/config.json")) {
  const config = JSON.parse(fs.readFileSync("./config/config.json"));
  const game = new Game(config["startPosition"], config["endPosition"], config["numberOfSteps"])
  game.start()
} else {
  new Game().start()
}

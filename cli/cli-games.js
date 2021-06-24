const Header = require("./components/header");

class CliGames {
  constructor() {
    this._header = new Header("CLI Games");
  }

  start() {
    this._header.printHeader();
    this.showScreen();
  }

  showScreen() {
    console.log("Show main screen");
  }
}

module.exports = CliGames;

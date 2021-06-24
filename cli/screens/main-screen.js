const Header = require("../components/header");

class MainScreen {
  constructor() {
    this._header = new Header("CLI Games");
  }

  showScreen() {
    this._header.printHeader();
    console.log("Prompt goes here ..");
  }
}

module.exports = MainScreen;

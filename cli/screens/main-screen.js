const { prompt } = require("enquirer");

const Header = require("../components/header");
const { TIC_TAC_TOE } = require("../types/screen-types");

class MainScreen {
  constructor() {
    this._header = new Header("CLI Games");
  }

  showScreen() {
    this._header.printHeader();
  }

  async getUserChoice() {
    const { choice } = await prompt({
      type: "select",
      name: "choice",
      message: "Pick a game",
      choices: [TIC_TAC_TOE, "Chess", "Go back"],
    });

    return choice;
  }
}

module.exports = MainScreen;

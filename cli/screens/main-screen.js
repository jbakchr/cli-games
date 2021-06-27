const clear = require("clear");
const { prompt } = require("enquirer");

const Header = require("../components/header");
const { TIC_TAC_TOE, EXIT } = require("../types/screen-types");

class MainScreen {
  constructor() {
    this._header = new Header("CLI Games");
  }

  showScreen() {
    clear();
    this._header.printHeader();
  }

  async getUserChoice() {
    const { choice } = await prompt({
      type: "select",
      name: "choice",
      message: "Pick a game - or exit",
      choices: [TIC_TAC_TOE, "Chess", EXIT],
    });

    return choice;
  }
}

module.exports = MainScreen;

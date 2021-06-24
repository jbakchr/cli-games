const clear = require("clear");
const { prompt } = require("enquirer");

const Header = require("../components/header");

class TicTacToeScreen {
  constructor() {
    this._header = new Header("Tic Tac Toe");
  }

  showScreen() {
    clear();
    this._header.printHeader();
  }

  async getUserChoice() {
    const { choice } = await prompt({
      type: "select",
      name: "choice",
      message: "Choose what to do",
      choices: ["Play", "Go back"],
    });

    if (choice === "Play") {
      console.log("Play game ..");
    } else {
      return choice;
    }
  }
}

module.exports = TicTacToeScreen;

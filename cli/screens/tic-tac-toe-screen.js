const clear = require("clear");
const { prompt } = require("enquirer");
const chalk = require("chalk");

const Header = require("../components/header");
const TicTacToeGame = require("../games/TicTacToeGame");

class TicTacToeScreen {
  _game;

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

    return choice;
  }

  async playGame() {
    this._game = new TicTacToeGame();

    while (!this._game.winner) {
      this.showScreen();
      await this._game.printGame();
    }

    // Show final board
    this.showScreen();
    this._game.showBoard();

    // Show winner
    console.log(
      chalk.bold.inverse.yellow(`Player ${this._game.winner} wins!!\n`)
    );
  }
}

module.exports = TicTacToeScreen;

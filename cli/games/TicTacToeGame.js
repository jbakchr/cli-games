const { prompt } = require("enquirer");
const chalk = require("chalk");

const TicTacToeBoard = require("../components/tic-tac-toe-board");

class TicTacToeGame {
  constructor() {
    this._winner = null;
    this._board = new TicTacToeBoard();
    this._playerTurn = 1;
  }

  get winner() {
    return this._winner;
  }

  set winner(winner) {
    this._winner = winner;
  }

  async printGame() {
    this.showBoard();
    let choice = await this.getUserSelection();
    while (!this.isValidSelection(choice.row, choice.col)) {
      console.log(`\n${chalk.bold.red("INVALID CHOICE")} .. pick again\n`);
      choice = await this.getUserSelection();
    }
    this._board.setBoard(choice.row, choice.col, this._playerTurn);
    this._playerTurn = this._playerTurn === 1 ? 2 : 1;
  }

  showBoard() {
    this._board.printBoard();
  }

  async getUserSelection() {
    const { row, col } = await prompt([
      {
        type: "input",
        name: "row",
        message: "Choose row",
      },
      {
        type: "input",
        name: "col",
        message: "Choose column",
      },
    ]);

    return { row, col };
  }

  isValidSelection(row, col) {
    return this._board._board[row][col] === " " ? true : false;
  }
}

module.exports = TicTacToeGame;

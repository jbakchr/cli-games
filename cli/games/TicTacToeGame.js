const { prompt } = require("enquirer");

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
    const { row, col } = await this.getUserSelection();
    console.log(row, col);
    this.winner = "Jonas";
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

  checkUserSelection(row, col) {}
}

module.exports = TicTacToeGame;

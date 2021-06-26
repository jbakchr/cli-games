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
    // Print current board
    this.showBoard();

    // Get choice from user
    let choice = await this.getUserSelection();

    // Validate choice
    while (!this.isValidSelection(choice.row, choice.col)) {
      console.log(`\n${chalk.bold.red("INVALID CHOICE")} .. pick again\n`);
      choice = await this.getUserSelection();
    }

    // Set mark on board
    this._board.setBoard(choice.row, choice.col, this._playerTurn);

    // Check win condition
    this.checkWin();

    // Change player
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

  checkWin() {
    // Check if player has won by rows
    if (this.checkRowWin()) {
      this.winner = "Jonas";
    }
  }

  checkRowWin() {
    // Initialize win counter and get the mark of current player
    let winCounter = 0;
    const playerMarker = this._playerTurn === 1 ? "X" : "O";

    // Loop through each row
    for (let i = 0; i < this._board._board.length; i++) {
      // Loop through each cell and check if each cell is equal to player mark
      for (let j = 0; j < this._board._board[i].length; j++) {
        if (this._board._board[i][j] === playerMarker) {
          winCounter++;
        } else {
          winCounter = 0;
          break;
        }
      }

      // After all 3 cells are checked then check if there's 3 in a row
      if (winCounter === 3) {
        return true;
      }
    }

    return false;
  }
}

module.exports = TicTacToeGame;

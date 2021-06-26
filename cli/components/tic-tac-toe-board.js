class TicTacToeBoard {
  constructor() {
    this._board = [
      ["X", "X", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  }

  setBoard(row, col, playerTurn) {
    this._board[row][col] = playerTurn === 1 ? "X" : "O";
  }

  printBoard() {
    let board = this.getDivider();

    this._board.forEach((row) => {
      board += "|";
      row.forEach((cell) => {
        board += cell + "|";
      });
      board += "\n";
      board += this.getDivider();
    });

    console.log(board);
  }

  getDivider() {
    return "+-+-+-+\n";
  }
}

module.exports = TicTacToeBoard;

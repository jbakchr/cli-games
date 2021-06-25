class TicTacToeGame {
  _winner = null;

  constructor() {
    console.log("Starting game ..");
  }

  get winner() {
    return this._winner;
  }

  set winner(winner) {
    this._winner = winner;
  }

  printGame() {
    console.log("Print board and prompt here ..");
    this.winner = "Jonas";
  }

  showBoard() {}
}

module.exports = TicTacToeGame;

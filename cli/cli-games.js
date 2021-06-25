const MainScreen = require("./screens/main-screen");
const TicTacToeScreen = require("./screens/tic-tac-toe-screen");

const { MAIN, TIC_TAC_TOE } = require("./types/screen-types");

class CliGames {
  constructor() {
    this._screens = [];
    this._screens.push(new MainScreen());
  }

  get screen() {
    return this._screens[this._screens.length - 1];
  }

  start() {
    this.switchScreen(MAIN);
  }

  async switchScreen(screen) {
    let userChoice;

    switch (screen) {
      case MAIN:
        const mainScreen = this.screen;
        mainScreen.showScreen();
        userChoice = await mainScreen.getUserChoice();
        this.switchScreen(userChoice);
        break;
      case TIC_TAC_TOE:
        this._screens.push(new TicTacToeScreen());
        const ticTacToeScreen = this.screen;
        ticTacToeScreen.showScreen();
        userChoice = await ticTacToeScreen.getUserChoice();

        // This should be a while loop that'll constantly play the game at first
        // and then prompt the user for whether he/she wants to play again or go back
        if (userChoice === "Play") {
          ticTacToeScreen.playGame();
        }
        break;
      default:
        console.log("Default ..");
        break;
    }
  }
}

module.exports = CliGames;

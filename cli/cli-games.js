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
    switch (screen) {
      case MAIN:
        const mainScreen = this.screen;
        mainScreen.showScreen();
        const choice = await mainScreen.getUserChoice();
        this.switchScreen(choice);
        break;
      case TIC_TAC_TOE:
        this._screens.push(new TicTacToeScreen());
        const ticTacToeScreen = this.screen;
        ticTacToeScreen.showScreen();
        ticTacToeScreen.getUserChoice();
        break;
      default:
        console.log("Default ..");
        break;
    }
  }
}

module.exports = CliGames;

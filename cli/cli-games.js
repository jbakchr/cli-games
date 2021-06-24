const MainScreen = require("./screens/main-screen");

const { MAIN_SCREEN, TIC_TAC_TOE } = require("./types/screen-types");

class CliGames {
  constructor() {
    this._screens = [];
    this._screens.push(new MainScreen());
  }

  start() {
    this.switchScreen(MAIN_SCREEN);
  }

  async switchScreen(screen) {
    switch (screen) {
      case MAIN_SCREEN:
        this._screens[this._screens.length - 1].showScreen();
        const choice = await this._screens[
          this._screens.length - 1
        ].getUserChoice();
        console.log(choice);
        break;
      case TIC_TAC_TOE:
        console.log("Switch to:", TIC_TAC_TOE);
      default:
        console.log("Default ..");
        break;
    }
  }
}

module.exports = CliGames;

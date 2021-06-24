const MainScreen = require("./screens/main-screen");

const { MAIN_SCREEN } = require("./types/screen-types");

class CliGames {
  constructor() {
    this._screens = [];
    this._screens.push(new MainScreen());
  }

  start() {
    this.switchScreen(MAIN_SCREEN);
  }

  switchScreen(screen) {
    switch (screen) {
      case MAIN_SCREEN:
        this._screens[this._screens.length - 1].showScreen();
        break;
      default:
        console.log("Default ..");
        break;
    }
  }
}

module.exports = CliGames;

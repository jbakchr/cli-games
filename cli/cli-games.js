const chalk = require("chalk");
const clear = require("clear");

const MainScreen = require("./screens/main-screen");
const TicTacToeScreen = require("./screens/tic-tac-toe-screen");

const { MAIN, TIC_TAC_TOE, GO_BACK, EXIT } = require("./types/screen-types");

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

  end() {
    const ending = "\nArrivederci Franz ..\n";
    console.log(chalk.bold.red(ending));
    setTimeout(() => {
      clear();
    }, 2500);
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
        // Push Tic Tac Toe screen onto array
        this._screens.push(new TicTacToeScreen());

        // Show Tic Tac Toe Screen
        const ticTacToeScreen = this.screen;
        ticTacToeScreen.showScreen();

        // Get users choice for wanting to play or not
        userChoice = await ticTacToeScreen.getUserChoice();

        // Keep playing while users choice is 'play'
        while (userChoice === "Play") {
          await ticTacToeScreen.playGame();
          userChoice = await ticTacToeScreen.getUserChoice();
        }

        // Go back
        this.switchScreen(GO_BACK);

        break;
      case GO_BACK:
        // Pop current screen of array of screens
        this._screens.pop();

        // Show main screen
        this.switchScreen(MAIN);
        break;
      case EXIT:
        this.end();
        break;
    }
  }
}

module.exports = CliGames;

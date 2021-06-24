const figlet = require("figlet");

class Header {
  constructor(headerText) {
    this._headerText = headerText;
  }

  get headerTitle() {
    return this._headerText;
  }

  set headerTitle(text) {
    this._headerText = text;
  }

  printHeader() {
    console.log(figlet.textSync(this._headerText));
  }
}

module.exports = Header;

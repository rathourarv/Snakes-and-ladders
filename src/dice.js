class Dice {
  constructor(possibleResults = [1,2,3,4,5,6]) {
    this._possibleResults = possibleResults;
  }

  roll() {
    return this._possibleResults[Math.floor(Math.random() * this._possibleResults.length)];
  }
}

module.exports = Dice

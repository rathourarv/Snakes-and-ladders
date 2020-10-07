const { it } = require("mocha");
const Dice = require("../src/dice");
const assert = require('assert');

describe('Dice', () => {
  describe("#roll", () => {
    it("should return one value from a given list", () => {
      let possibleValues = [1, 2, 3, 4, 5, 6];
      const dice = new Dice(possibleValues);
      const value = dice.roll();
      assert.ok(possibleValues.includes(value))
    });
    it("should return 1 if possible values has only one element", () => {
      const dice = new Dice([1]);
      const value = dice.roll();
      assert.ok(value == 1)
    });
  });
});

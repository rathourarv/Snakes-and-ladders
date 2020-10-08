const assert = require('assert');
const Game = require('../src/game');
const Dice = require('../src/dice');

describe('Game', () => {
    describe("HandleSnakeBite", () => {
        it("should return snake's tail if position is equal to snake's head", () => {
            const game = new Game(0, 100, 10, [{"head": 12, "tail": 1}])
            const givenPosition = game.handleSnakebite(12);
            assert.equal(givenPosition, 1);
        });

        it("should return same position if position is not equal to snake's head", () => {
            const game = new Game(0, 100, 10, [{"head": 12, "tail": 1}])
            const givenPosition = game.handleSnakebite(10);
            assert.equal(givenPosition, 10);
        });
    });

    describe("Start", () => {
        it("should return 15 end position if dice throws only one number", () => {
            const game = new Game(0, 50, 3, [{"head": 12, "tail": 1}], new Dice([5]))
            const endPosition = game.start("alan");
            assert.equal(endPosition, 15);
        });

        it("should return start position if number of steps are 0", () => {
            const game = new Game(0, 50, 0, [{"head": 12, "tail": 1}], new Dice([5]))
            const endPosition = game.start("alan");
            assert.equal(endPosition, 0);
        });

        it("should return start position if step is not on the board", () => {
            const game = new Game(0, 0, 10, [], new Dice());
            const endPosition = game.start("alan");
            assert.equal(endPosition, 0);
        });

    });
});
const assert = require('assert');
const Game = require('../src/game')

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
});
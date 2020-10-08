const assert = require('assert');
const Board = require('../src/board')

describe('Board', () => {
    describe("IsValid", () => {
        it("should return true for values with range", () => {
            const board = new Board(101, 150);
            assert.ok(board.isValid(101));
            assert.ok(board.isValid(150));
            assert.ok(board.isValid(120));
            assert.ok(!board.isValid(201))
        });
    });

    describe("getStartPosition", () => {
        it("should return start position", () => {
            const board = new Board(101, 150);
            assert.equal(board.getStartPosition(), 101);
        });
    });
});

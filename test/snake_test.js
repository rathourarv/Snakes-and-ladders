const Snake = require("../src/snake");
const assert = require('assert');

describe('Snake', () => {
  describe("hasBitten", () => {
    it("should return true if snake's head is on the given position", () => {
      const snake = new Snake(14, 7);
      assert.ok(snake.hasBitten(14));
      assert.ok(!snake.hasBitten(12))
    });
  });
});

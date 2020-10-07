const assert = require('assert');
const Player = require('../src/player');

describe('Player', () => {
  describe('#getNextPosition()', () => {
    it('should return 10 when position is 6 and current position is 4', () => {
      assert.equal(new Player("Arvind", 4).getNextPosition(6), 10);
    });
  });

  describe('#updatePosition()', () => {
    it('should update current position to given number', () => {
      const player = new Player("Arvind", 4)
      player.updatePosition(6)
      assert.equal(player.currentPostion, 6);
    });
  });

  describe('#getCurrentPosition()', () => {
    it('should return 4 when ask for current postition', () => {
      assert.equal(new Player("Arvind", 4).getCurrentPosition(), 4);
    });
  });
});


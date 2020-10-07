class Player {
  constructor(name, initialPostion) {
    this.name = name;
    this.currentPostion = initialPostion;
  }

  getNextPosition(position) {
    return this.currentPostion + position;
  }

  updatePosition(position) {
    this.currentPostion = position;
  }

  getCurrentPosition() {
    return this.currentPostion;
  }
}

module.exports = Player

class Board {
  constructor(startPosition, endPosition) {
    this.startPosition = startPosition
    this.endPosition = endPosition
  }

  isValid(position) {
    return (position >= this.startPosition && position <= this.endPosition)
  }
}

module.exports = Board

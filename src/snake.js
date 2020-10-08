class Snake {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  hasBitten(position) {
    return this.head === position
  }
}

module.exports = Snake;

module.exports = class Dice {
  constructor (dice, faces) {
    this._dice = dice
    this._faces = faces
    this._result = 0
    this._tray = []
  }

  roll () {
    this.clearTray()
    do {
      const die = this._random.int(1, this.faces)
      this._result += die
      this.tray.push(die)
    } while (this.tray.length < this.dice)

    return this.result
  }

  clearTray () {
    this._result = 0
    this.tray.splice(0, this.tray.length)
  }

  get dice () {
    return this._dice
  }

  get faces () {
    return this._faces
  }

  get result () {
    return this._result
  }

  get tray () {
    return this._tray
  }

  _randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

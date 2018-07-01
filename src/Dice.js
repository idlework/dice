module.exports = class Dice {
  constructor (dice, faces) {
    this._validateConstructor(dice, faces)
    this._initConstructor(dice, faces)
  }

  roll () {
    this.clearTray()
    do {
      const die = this._randomInt(1, this.faces)
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

  _validateConstructor (dice, faces) {
    if (!Number.isInteger(dice)) {
      throw new Error('The number of dice has to be an integer.')
    }

    if (dice < 1) {
      throw new Error('The number of dice has to be greater than zero.')
    }

    if (!Number.isInteger(faces)) {
      throw new Error('Faces should be an integer')
    }

    if (faces < 2) {
      throw new Error('The number of faces has to be greater than one.')
    }
  }

  _initConstructor (dice, faces) {
    this._dice = dice
    this._faces = faces
    this._result = 0
    this._tray = []
  }

  _randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

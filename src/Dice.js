module.exports = class Dice {
  /**
   * Intitialize Dice class.
   *
   * @param {Number} dice - Number corresponding with the amount of dice.
   * @param {Number} faces - Number corresponding with the amount of faces on the dice.
   */
  constructor (dice, faces) {
    this._validateConstructor(dice, faces)
    this._initConstructor(dice, faces)
  }

  /**
   * Roll the dice.
   *
   * @return {Array} - Returns the total of all dice.
   */
  roll () {
    this.clearTray()
    do {
      const die = this._randomInt(1, this.faces)
      this._result += die
      this.tray.push(die)
    } while (this.tray.length < this.dice)

    return this.result
  }

  /**
   * Clears the tray from dice. Result and tray will be cleared.
   */
  clearTray () {
    this._result = 0
    this.tray.splice(0, this.tray.length)
  }

  /**
   * Return the amount of dice.
   *
   * @return {Number} - Return the amount of dice.
   */
  get dice () {
    return this._dice
  }

  /**
   * Returns the amount of faces on a the dice.
   *
   * @return {Number} - Returns the amount of faces on a the dice.
   */
  get faces () {
    return this._faces
  }

  /**
   * Returns the total of all the dice.
   *
   * @return {Number} - Returns the total of all the dice.
   */
  get result () {
    return this._result
  }

  /**
   * Returns the tray(array) with all the dice.
   *
   * @return {Array} - Return an array with all the dice.
   */
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

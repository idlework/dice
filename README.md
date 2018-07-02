# Dice

## Installation
```shell
$ npm i @idlework/dice --save
```

## Usage
```javascript
import Dice from 'dice'

export default class Map extends Dice {
  constructor (dice, faces) {
    super(dice, faces)
  }
}
```

*or*

```javascript
import Dice from 'dice'

const dice = new Dice(2, 6)
```

*or*

```javascript
const Dice = require('dice')
const dice = new Dice(2, 6)
```

## API

### constructor

Intitialize Dice class.

#### Parameters

-   `dice` **[Number][1]** Number corresponding with the amount of dice.
-   `faces` **[Number][1]** Number corresponding with the amount of faces on the dice.

### roll

Roll the dice.

Returns **[Number][1]** Returns the total of all dice.

### clearTray

Clears the tray from dice. Result and tray will be cleared.

### dice

Return the amount of dice.

Returns **[Number][1]** Return the amount of dice.

### faces

Returns the amount of faces on a the dice.

Returns **[Number][1]** Returns the amount of faces on a the dice.

### result

Returns the total of all the dice.

Returns **[Number][1]** Returns the total of all the dice.

### tray

Returns the tray(array) with all the dice.

Returns **[Array][2]** Return an array with all the dice.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

## Contributing
Issues are welcome. The best way to report a problem is to reproduce it with a code example.

Pull requests are welcome. If you want to change the API, it's better to discuss it using an issue ticket.

## License

Dice is [MIT licensed](./LICENSE).
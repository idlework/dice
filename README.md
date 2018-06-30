# Dice

## Installation
```shell
$ npm i dice-js --save
```

## Usage
```javascript
import Dice from 'dice-js'

export default class Map extends Dice {
  constructor (dice, faces) {
    super(dice, faces)
  }
}
```

*or*

```javascript
import Dice from 'dice-js'

const dice = new Dice(2, 6)
```

*or*

```javascript
const dice = require("dice-js")

const dice = new Array2D(2, 6)
```

## API

## Contributing
Issues are welcome. The best way to report a problem is to reproduce it with a code example.

Pull requests are welcome. If you want to change the API, it's better to discuss it using an issue ticket.

## License

Dice is [MIT licensed](./LICENSE).
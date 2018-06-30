import Array2D from './../src/Dice'
import test from 'ava'

test('create dice', t => {
  const dice = new Dice(2, 6)
  t.truthy(dice)
})

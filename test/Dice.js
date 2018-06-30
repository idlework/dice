import Dice from './../src/Dice'
import test from 'ava'

test('create 2 dice with 6 faces', t => {
  const dice = new Dice(2, 6)
  t.truthy(dice)
})

test('check amount of dice', t => {
  const dice = new Dice(2, 6)
  t.true(dice.dice === 2)
})

test('check amount of faces', t => {
  const dice = new Dice(2, 6)
  t.true(dice.dice === 2)
})

test('roll dice', t => {
  const dice = new Dice(2, 6)
  const result = dice.roll()
  t.true(result > 0)
})

test('clear dice tray', t => {
  const dice = new Dice(2, 6)
  dice.roll()
  dice.clearTray()
  t.true(dice.result === 0)
  t.true(dice.tray.length === 0)
})

test('check result', t => {
  const dice = new Dice(2, 6)
  dice.roll()
  t.true(dice.result > 0)
})

test('check tray', t => {
  const dice = new Dice(2, 6)
  dice.roll()
  t.true(dice.tray.length > 0)
})

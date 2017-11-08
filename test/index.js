import test from 'ava'
import vind from '../lib'

test('type: String', (t)=> {
  const obj = Object.create(null)
  obj['color'] = 'primary'
  obj['size'] = 'large'

  const result = vind(obj)
  t.is(Object.keys(result).length, 2)

  t.is('color' in result, false)
  t.is('size' in result, false)
  t.is('is-color' in result, false)
  t.is('is-size' in result, false)
  t.is(result['is-primary'], true)
  t.is(result['is-large'], true)
})

test('type: Boolean', (t)=> {
  const obj = Object.create(null)
  obj['ghost'] = true
  obj['submit'] = false

  const result = vind(obj)
  t.is(Object.keys(result).length, 2)

  t.is('is-ghost' in result, true)
  t.is('is-submit' in result, true)
  t.is(result['is-ghost'], true)
  t.is(result['is-submit'], false)
})

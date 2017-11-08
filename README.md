# vind

Object to Vue style class name object converter.

## Usage

```js
import vind from 'vind'

const obj = {
  ghost: true,
  color: 'primary'
  size: 'large'
}

// Simple use
console.log(vind(obj))
/*
{
  'is-ghost': true,
  'is-primary': true,
  'is-large': true
}
*/

// Custom prefix
console.log(vind(obj, '--'))
/*
{
  '--ghost': true,
  '--primary': true,
  '--large': true
}
*/
```

## Use in Vue.js

```html
<template>
  <button :class="buttonClass"></button>
</template>

<script>
import vind from 'vind'
export default {
  props: {
    ghost: Boolean,
    size: String,
    color: String
  },
  computed : {
    buttonClass () {
      const { ghost, size, button } = this
      return vind({ghost, size, button})
    }
  }
}
</script>
```

## LICENSE

MIT

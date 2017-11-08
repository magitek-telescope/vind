# obj-to-stylenames

Object to CSS class converter.

## Usage

```js
import objToStyleNames from 'obj-to-stylenames'

const obj = {
  ghost: true,
  color: 'primary'
  size: 'large'
}

const result = console.log(objToStyleNames(obj))

console.log(result)
/*
{
  'is-ghost': true,
  'is-primary': true
  'is-large': true
}
*/
```

## Use in Vue.js

```html
<template>
  <button :class="buttonClass"></button>
</template>

<script>
import objToStyleNames from 'obj-to-stylenames'
export default {
  props: {
    ghost: Boolean,
    size: String,
    color: String
  },
  computed : {
    buttonClass () {
      const { ghost, size, button } = this
      return objToStyleNames({ghost, size, button})
    }
  }
}
</script>
```

## LICENSE

MIT

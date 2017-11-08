// @flow

function entries (obj) {
  return Object.keys(obj).map(key => [key, obj[key]])
}

function vind (obj: Object, prefix: string = 'is-') {
  const styles = {}
  entries(obj).forEach(([name, value]) => {
    switch (typeof value) {
      case 'string': {
        styles[`${prefix}${value}`] = true
        break
      }
      case 'boolean': {
        styles[`${prefix}${name}`] = value
        break
      }
    }
  })
  return styles
}

export default vind

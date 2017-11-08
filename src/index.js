// @flow

function objToStyles (obj: Object) {
  const styles = {}
  Object.entries(obj).forEach(([name, value]) => {
    switch (typeof value) {
      case 'string': {
        styles[`is-${value}`] = true
        break
      }
      case 'boolean': {
        styles[`is-${name}`] = value
        break
      }
    }
  })
  return styles
}

export default objToStyles

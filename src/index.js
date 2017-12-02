// @flow

function vind (obj: Object, prefix: string = '') {
  const styles = {}
  Object.entries(obj).forEach(([name, value]) => {
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

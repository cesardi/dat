var stringKey = require('dat-encoding').toStr

module.exports = function (key) {
  return `dat://${stringKey(key)}`
}

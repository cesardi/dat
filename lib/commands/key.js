var Dat = require('dat-node')
var ui = require('../ui')

module.exports = {
  name: 'key',
  help: 'Get the key for existing Dats',
  command: function (opts) {
    if (opts._.length && opts.dir === process.cwd()) opts.dir = opts._[0] // use first arg as dir if default set
    opts.createIfMissing = false

    Dat(opts.dir, opts, function (err, dat) {
      if (err && err.message.indexOf('.dat')) return ui.exitErr('No existing Dat in this directory')
      else if (err) return ui.exitErr(err)
      console.log(ui.link(dat.key))
    })
  }
}

var prettyBytes = require('pretty-bytes')

module.exports = function (stats) {
  if (!stats.peers.total) return ['Looking for connections in Dat Network...']
  var peers = stats.peers
  var network = stats.network
  var msg = []
  var peerMsg = ''
  if (network.downloadSpeed) {
    peerMsg = `Downloading from ${peers.downloadingFrom}`
    peerMsg += ` of ${peers.total} ${peers.total === 1 ? 'connection' : 'connections'}`
  } else {
    peerMsg = `${peers.total} ${peers.total === 1 ? 'connection' : 'connections'}`
    peerMsg += ` (${peers.complete} ${peers.complete === 1 ? 'connection has' : 'connections have'} all data)`
  }
  msg.push(peerMsg)
  var spdMsg = ''
  if (network.downloadSpeed) spdMsg += `Downloading: ${prettyBytes(network.downloadSpeed)}/s` + '  '
  if (network.uploadSpeed) spdMsg += `Uploading: ${prettyBytes(network.uploadSpeed)}/s`
  msg.push(spdMsg)
  return msg
}

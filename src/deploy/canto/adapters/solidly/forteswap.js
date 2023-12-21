const { deployAdapter, addresses } = require('../../../utils')
const factory = addresses.canto.solidlyFactories.forteswap

const networkName = 'canto'
const tags = ['forteswap']
const name = 'ForteswapAdapter'
const contractName = 'VelodromeAdapter'

const gasEstimate = 300_000
const args = [name, factory, gasEstimate]

module.exports = deployAdapter(networkName, tags, name, contractName, args)

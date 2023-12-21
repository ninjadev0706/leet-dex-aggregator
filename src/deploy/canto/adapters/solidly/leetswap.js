const { deployAdapter, addresses } = require('../../../utils')
const factory = addresses.canto.solidlyFactories.leetswap

const networkName = 'canto'
const tags = ['leetswap']
const name = 'LeetswapAdapter'
const contractName = 'VelodromeAdapter'

const gasEstimate = 300_000
const args = [name, factory, gasEstimate]

module.exports = deployAdapter(networkName, tags, name, contractName, args)

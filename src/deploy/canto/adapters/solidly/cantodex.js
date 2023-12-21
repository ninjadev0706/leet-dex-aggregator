const { deployAdapter, addresses } = require('../../../utils')
const factory = addresses.canto.solidlyFactories.cantodex

const networkName = 'canto'
const tags = ['cantodex']
const name = 'CantodexAdapter'
const contractName = 'VelodromeAdapter'

const gasEstimate = 300_000
const args = [name, factory, gasEstimate]

module.exports = deployAdapter(networkName, tags, name, contractName, args)

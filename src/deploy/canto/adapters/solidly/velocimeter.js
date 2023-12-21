const { deployAdapter, addresses } = require('../../../utils')
const factory = addresses.canto.solidlyFactories.velocimeter

const networkName = 'canto'
const tags = ['velocimeter']
const name = 'VelocimeterAdapter'
const contractName = 'VelodromeAdapter'

const gasEstimate = 300_000
const args = [name, factory, gasEstimate]

module.exports = deployAdapter(networkName, tags, name, contractName, args)

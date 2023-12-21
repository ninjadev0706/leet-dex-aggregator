const { deployUniV2Contract, addresses } = require('../../../utils')
const { cantoswap: factory } = addresses.canto.univ2Factories

const networkName = 'canto'
const name = 'CantoswapAdapter'
const tags = ['cantoswap']
const fee = 3

module.exports = deployUniV2Contract(networkName, tags, name, factory, fee)

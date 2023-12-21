const { setTestEnv, addresses } = require('../../../utils/test-env')
const { curvelikePools } = addresses.avalanche

describe('LeetAdapter - synapse', () => {
    
    let testEnv
    let tkns
    let ate // adapter-test-env

    before(async () => {
        const networkName = 'avalanche'
        const forkBlockNumber = 19595355
        testEnv = await setTestEnv(networkName, forkBlockNumber)
        tkns = testEnv.supportedTkns

        const contractName = 'SaddleAdapter'
        const adapterArgs = [
            'SynapseAdapter',
            curvelikePools.SynapseDAIeUSDCeUSDTeNUSD,
            320_000
        ]
        ate = await testEnv.setAdapterEnv(contractName, adapterArgs)
    })

    beforeEach(async () => {
        testEnv.updateTrader()
    })

    describe('Swapping matches query', async () => {

        it('100 USDTe -> DAIe', async () => {
            await ate.checkSwapMatchesQuery('100', tkns.USDTe, tkns.DAIe)
        })
        it('100 DAIe -> USDCe', async () => {
            await ate.checkSwapMatchesQuery('100', tkns.DAIe, tkns.USDCe)
        })
        it('100 USDCe -> USDTe', async () => {
            await ate.checkSwapMatchesQuery('100', tkns.USDCe, tkns.USDTe)
        })

    })

    it('Query returns zero if tokens not found', async () => {
        const supportedTkn = tkns.USDTe
        ate.checkQueryReturnsZeroForUnsupportedTkns(supportedTkn)
    })

    it('Gas-estimate is between max-gas-used and 110% max-gas-used', async () => {
        const options = [
            [ '1', tkns.USDTe, tkns.USDCe ],
            [ '1', tkns.USDCe, tkns.DAIe ],
            [ '1', tkns.DAIe, tkns.USDTe ],
        ]
        await ate.checkGasEstimateIsSensible(options)
    })

})

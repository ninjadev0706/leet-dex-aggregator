const { 
    avalanche: ava, 
    dogechain: dog, 
    arbitrum: arb,
    optimism: opt,
    canto
} = require('./addresses.json')

module.exports = {
    "avalanche": {
        adapterWhitelist: [
            'TraderJoeAdapter',
            'PangolinAdapter',
            'SushiswapAdapter',
            'GlacierAdapter',
            'SolisnekAdapter',
      
            'SynapseAdapter',
            'AxialAS4DAdapter',
            'PlatypusAdapter',
            
            'CurveAtricryptoAdapter',
            'Curve3poolV2Adapter',
            'Curve3poolfAdapter',
            'CurveAaveAdapter',
            'CurveUSDCAdapter',
            'CurveYUSDAdapter',
            
            'LiquidityBook2Adapter',
            'LiquidityBookAdapter',
            'KyberElasticAdapter',
            'WoofiV2Adapter',
            'GeodeWPAdapter',
            'GmxAdapter',
            
            'SAvaxAdapter',
            'WAvaxAdapter',
        ],
        minimalAdapterWhitelist: [
            'WAvaxAdapter',
            'TraderJoeAdapter',            
            'LiquidityBookAdapter',
            'KyberElasticAdapter',
            'GmxAdapter',
        ],
        hopTokens: [
            ava.assets.WAVAX,
            ava.assets.WETHe,
            ava.assets.USDTe,
            ava.assets.USDC,
            ava.assets.USDCe,
            ava.assets.WBTCe,
            ava.assets.DAIe,
            ava.assets.USDt,
          ],
        wnative: ava.assets.WAVAX
    }, 
    "canto": {
        adapterWhitelist: [
            'LeetswapAdapter',
            'CantoswapAdapter',
            'VelocimeterAdapter',
            'ForteswapAdapter',
            'CantodexAdapter',
        ],
        hopTokens: [
            canto.assets.LEET,
            canto.assets.WCANTO,
            canto.assets.NOTE,
            canto.assets.ETH,
            canto.assets.USDC,
            canto.assets.USDT,
            canto.assets.WBTC,
            canto.assets.BUSD,
            canto.assets.ATOM,
            canto.assets.cINU,
            canto.assets.FLOW,
            canto.assets.multiBTC,
            canto.assets.WSTETH,
            canto.assets.stATOM
        ],
        wnative: canto.assets.WCANTO
    },
    "dogechain": {
        adapterWhitelist: [
            'DogeSwapAdapter',
            'KibbleSwapAdapter',
            'YodeSwapAdapter',
            'QuickswapAdapter'
        ],
        hopTokens: [
            dog.assets.ETH,
            dog.assets.USDC,
            dog.assets.USDT,
            dog.assets.WWDOGE,
        ], 
        wnative: dog.assets.WWDOGE
    },
    "arbitrum": {
        adapterWhitelist: [
            'BalancerV2Adapter',
            'Curve3cryptoAdapter',
            'Curve2stableAdapter',
            'CurveFraxVstAdapter',
            'CurveFraxBpAdapter',
            'CurveMetaAdapter',
            'DodoV1Adapter',
            'DodoV2Adapter',
            'GmxAdapter',
            'SaddleArbUsdAdapter',
            'SaddleArbUsdV2Adapter',
            'SushiswapAdapter',
            'SwaprAdapter',
            'UniswapV3Adapter',
            'LiquidityBook2Adapter',
            'LiquidityBookAdapter',
            'KyberElasticAdapter',
            'WoofiV2Adapter',
            'OreoswapAdapter',
            'SwapfishAdapter',
            'CamelotAdapter',
            'WETHAdapter',
            'CamelotAlgebraAdapter',
        ],
        hopTokens: [
            arb.assets.WETH,
            arb.assets.WBTC,
            arb.assets.USDC,
            arb.assets.USDT,
            arb.assets.DAI,
        ], 
        wnative: arb.assets.WETH
    },
    "optimism": {
        adapterWhitelist: [
            'BeethovenxAdapter',
            'CurveMetaSUSDCRVAdapter',
            'CurveSethAdapter',
            'Curve3stableAdapter',
            'CurveWstethAdapter',
            
            'SaddleFraxBPAdapter',
            'SaddleMetaFraxAdapter',
            'SaddleMetaSUSDAdapter',
            'SaddleOptUsdAdapter',
            
            'KyberElasticAdapter',
            'ZipswapAdapter',
            'UniswapV3Adapter',
            'VelodromeAdapter',
            'WoofiV2Adapter',
        ],
        hopTokens: [
            opt.assets.WETH,
            opt.assets.WBTC,
            opt.assets.USDC,
            opt.assets.USDT,
            opt.assets.DAI,
            opt.assets.OP, 
            opt.assets.wstETH,
            opt.assets.sETH, 
            // opt.assets.MAI, 
            // opt.assets.KNC, 
            // opt.assets.BOB, 
        ], 
        wnative: opt.assets.WETH
    }
}

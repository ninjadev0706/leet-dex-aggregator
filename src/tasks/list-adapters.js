const { task } = require("hardhat/config");

task("list-adapters", "Lists all adapters for the current LeetRouter", async (_, hre) => {
  const LeetRouter = await hre.ethers.getContract("LeetRouter")
  const adapterLen = await LeetRouter.adaptersCount()
  const adapterIndices = Array.from(Array(adapterLen.toNumber()).keys())
  const liveAdapters = await Promise.all(adapterIndices.map(async (i) => {
      const adapter = await LeetRouter.ADAPTERS(i)
      const name = await hre.ethers.getContractAt("LeetAdapter", adapter)
        .then(a => a.name())
      return { adapter, name }
  }))
  console.table(liveAdapters)
})

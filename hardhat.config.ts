import 'dotenv/config';
import { task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import '@typechain/hardhat'
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";
import "./tasks/greet.ts";
import "./tasks/changegreet.ts";


task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */

export default {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {enabled: process.env.DEBUG ? false : true},
    },
  },
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: {mnemonic: process.env.MNEMONIC},
      gasMultiplier: 1.2
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: process.env.MNEMONIC}
    },
    hardhat: {
      accounts: {mnemonic: process.env.MNEMONIC},
      // forking: {
      //         url: process.env.RINKEBY_URL || '',
      //         blockNumber: 10884241
      //     },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    //apiKey: process.env.BSCSCAN_API_KEY,
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  docgen: {
    path: './docsgen',
    clear: true,
    runOnCompiele: false,
  },
  dodoc: {
   runOnCompile: false,
   debugMode: true,
 },

};

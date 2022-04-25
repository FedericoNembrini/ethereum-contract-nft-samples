/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config()
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("web3");

module.exports = {
  solidity: "0.8.10",

  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY]
    }
    // , mainnet: {
    //   url: "",
    //   accounts: [""]
    //   gasPrice: web3.toWei("30", "gwei"),
    // }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  gasReporter: {
    currency: "EUR",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    // gasPrice: process.env.GAS_PRICE
  }
};

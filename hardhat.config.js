/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-ethers")

module.exports = {
  solidity: "0.8.27",
  networks: {
    skale: {
      url: "https://testnet.skalenodes.com/v1/giant-half-dual-testnet",
      chainId: 974399131,
     accounts: ["fb8115812046721650aa2f546ccc4fb3ae24b19bad7494217f552ba3769e5e29"],
    },
  }
  }


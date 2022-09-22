require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/EZxYJsFNguQDDhrNBxGq2wLegrTbC77_',
      accounts: ['57c4fb5eade4dca27c04eb6642c24d04e9f260f84910887e1d948431cc3470a0']
    }
  }
};
// 0x01F167bB71aA8c124D6b5b69AcD5356385B95f8APS
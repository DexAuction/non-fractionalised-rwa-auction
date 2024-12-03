const { ethers,network  } = require("hardhat");

async function main() {
  // const signers = await ethers.getSigners();
  const [owner,add1,add2] = await ethers.getSigners();

//   let contract_owner = await ethers.getSigner(network.config.from);
  console.log("contract_owner",await owner.getAddress());
  const SKLERC721 = await ethers.getContractFactory("SKLERC721");
  const EnglishAuction = await ethers.getContractFactory("EnglishAuction");

  const SKLERC721contract = await SKLERC721.deploy(await owner.getAddress());
  const EnglishAuctioncontract = await EnglishAuction.deploy(await SKLERC721contract.getAddress(),1,100,60 * 60 * 24 * 7);
  console.log("SKLERC721contract address",await SKLERC721contract.getAddress());
  console.log("EnglishAuctioncontract address",await EnglishAuctioncontract.getAddress());

   await SKLERC721contract.safeMint(await owner.getAddress(),1);
   await SKLERC721contract.approve(await EnglishAuctioncontract.getAddress(),1);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
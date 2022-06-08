const hre = require("hardhat");

async function main() {
  const biscuit = await hre.ethers.getContractFactory("Biscuit");
  const biscuit_contract = await biscuit.deploy();

  await biscuit_contract.deployed();

  console.log("biscuit_contract deployed to:", biscuit_contract.address); // 0xBf0495d2d8ba03B662A12375067353E299f5a8d3
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

import { ethers, upgrades } from "hardhat";

async function main() {

  const accounts = await ethers.getSigners();

  const GreeterV2 = await ethers.getContractFactory("GreeterV2", accounts[1]);
  const upgraded = await upgrades.upgradeProxy(
    "0x280710AC8B93e13283E07b4fbab12A1309365310",
    GreeterV2);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

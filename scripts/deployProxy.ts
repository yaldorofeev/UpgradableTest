import { ethers, upgrades } from "hardhat";

async function main() {

  const accounts = await ethers.getSigners();

  const Greeter = await ethers.getContractFactory("Greeter", accounts[1]);
  const proxy = await upgrades.deployProxy(Greeter, ["Hello, Hardhat!"]);
  await proxy.deployed();

  console.log("Proxy deployed to:", proxy.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

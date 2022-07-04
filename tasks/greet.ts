import 'dotenv/config';
import { types } from "hardhat/config";
import { task } from "hardhat/config";
import { upgrades } from "hardhat";

task("greet", "Connect erc token contract")
  .addParam("user", "ID of accaunt in array in .env")
  .setAction(async (args, hre) => {

  const accounts = await hre.ethers.getSigners();

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.attach("0x280710AC8B93e13283E07b4fbab12A1309365310");
  const tx = await greeter.connect(accounts[args.user]).greet();
  await tx.wait();

  const count = await greeter.greetingCounter(await accounts[args.user].getAddress());
  console.log(count);

});

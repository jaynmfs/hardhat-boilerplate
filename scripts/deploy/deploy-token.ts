import hre, { ethers } from "hardhat";

import { getAccounts } from "@/utils/account.util";
import addressUtil from "@/utils/address.util";

async function main() {
  // TODO: add deploy code here
  const addresses = getAccounts(hre.network.name);

  const XToken = await ethers.getContractFactory("XToken");
  const xtoken = await XToken.deploy();
  await xtoken.deployed();

  addressUtil.setAddress("XToken", xtoken.address);
  console.log(`XToken are deployed to ${hre.network.name}: ${xtoken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

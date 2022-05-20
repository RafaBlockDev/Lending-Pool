import {ethers} from "ethers"

async function main() {
    const RafaToken = await ethers.getContractFactory("RafaToken");
    const token = await RafaToken.deploy();

    await token.deployed();

    console.log("Rafa Token deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
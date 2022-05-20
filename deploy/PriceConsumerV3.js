import {ethers} from "ethers"

const deployPriceConsumerV3 = async () => {
    const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");

    console.log("🚀 PriceConsumerV3 contract deployed to: ", token.address);
}
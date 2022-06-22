const { ethers } = require("hardhat");

async function main() {
    const AlveyNFT = await ethers.getContractFactory("AlveyNFT");
    const alveyNFT = await AlveyNFT.deploy();
    await alveyNFT.deployed();
    console.log(alveyNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
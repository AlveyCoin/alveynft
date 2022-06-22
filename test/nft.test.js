const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AlveyNFT", function() {
    it("Should return the new alvey nft once it's changed", async function() {
        const AlveyNFT = await ethers.getContractFactory("AlveyNFT");
        const alveyNFT = await AlveyNFT.deploy();

        await alveyNFT.deployed();
        const res = await alveyNFT.createNFTItem(
            "cat",
            "https://www.baidu.com",
            "cat",
            10
        );
        const r1 = await alveyNFT.getNFTInfoById(0);
        console.log(r1);
    });
});
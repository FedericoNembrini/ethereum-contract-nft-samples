const hre = require("hardhat");

async function main() {
	const SampleNFTContract = await hre.ethers.getContractFactory("SampleNFTContract");
	const sampleNFTContract = await SampleNFTContract.deploy(
		"",
		"",
		"");

	await sampleNFTContract.deployed();

	console.log("Contact Deployed At:", sampleNFTContract.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
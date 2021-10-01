var Web3 = require("web3");
var ABI = require("../../CryptoMafiaCity.json");
const bigNumber = require("bignumber.js");
var web3 = new Web3(window["ethereum"]);
let contractAddress = "0xcd117b1a0bff2a181cfb7017d0ea62b7025a9a6d";
const prod = true;

export async function ConnectWallet() {
  if (window["ethereum"]) {
    const address = await window["ethereum"].enable();
    const returned_address = address.length ? address[0] : null;
    if (returned_address) {
      const netID = await web3.eth.net.getId();
      // in prod ==1 valid
      if (netID != 1 && prod) {
        throw new Error("Please connect to Ethereum Mainnet");
      } else {
        return returned_address;
      }
    } else {
      throw new Error("No wallet is connected");
    }
  } else {
    throw new Error("Please install Metamask");
  }
}

export async function BuyButtonPress(address, buyCount) {
  if (!contractAddress) {
    throw new Error(
      "Please come back when public mint starts. Follow us on Twitter."
    );
  } else if (!address) {
    throw new Error("Please connect wallet first!");
  } else {
    let contract = new web3.eth.Contract(ABI, contractAddress);
    var itemPrice = new bigNumber("64000000000000000");
    let sumAmount = itemPrice.multipliedBy(buyCount);
    return contract.methods
      .mintMafia(buyCount)
      .estimateGas({ from: address, value: sumAmount })
      .then(function(gasAmount) {
        let gasLimit = new bigNumber(gasAmount)
          .multipliedBy(110)
          .dividedBy(100)
          .toFixed(0);
        // alert(
        //   "Press OK to continue to approve the transaction in Metamask and then wait for the transaction to be sent..."
        // );
        return contract.methods
          .mintMafia(buyCount)
          .send({ value: sumAmount, from: address, gasLimit: gasLimit })
          .then(res => {
            return res.transactionHash;
          });
      })
      .catch(err => {
        throw new Error(err.message);
      });
  }
}
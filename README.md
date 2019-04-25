# Conflux-Demo

A demo for interacting with Conflux node by javascript API.

## Install

```npm install```

## Run

1. Test the connection with Conflux test net: ```node src/testConnection.js```. You'll get the current epoch number if the connection is fine.
2. Transfer token:
    * Create a test account by [Conflux Wallet](https://wallet.confluxscan.io/), and get test token from faucet.
    * Copy the private key into ```src/sendTransaction.js```
    * Adjust the nonce in ```src/sendTransaction.js```
    * Adjust the receiver address in ```src/sendTransaction.js```
    * Transfer 0.3 cfx token to receiver by running ```src/sendTransaction.js```
    * Check the result on [Conflux Scan](https://www.confluxscan.io/)
3. Deploy smart contract:
    * Use the test account created by step 2.
    * Copy the private key into ```src/deployRawContract.js```
    * Adjust the nonce in ```src/deployRawContract.js```
    * Compile a smart contract with Sol version 0.5.0~0.5.2 (in the sample code, the contract is "ballot" https://remix.ethereum.org)
    * Copy the byte code into ```src/deployRawContract.js```
    * Deploy contract by running ```src/deployRawContract.js```
    * Check the result on [Conflux Scan](https://www.confluxscan.io/)
4. Interact with contact:
    * Use the test account created by step 2.
    * Copy the private key into ```src/interactWithContract.js```
    * Copy the contract ABI into ```src/interactWithContract.js```
    * Check the transaction hash created by step 3 on [Conflux Scan](https://www.confluxscan.io/), copy the contract address into ```src/interactWithContract.js```
    * To run winningProposal function: 
        * Invoke the winningProposal function in ```src/interactWithContract.js``` 
    * To run vote function: 
        * Adjust the nonce in ```src/interactWithContract.js```
        * Invoke the vote function in ```src/interactWithContract.js```

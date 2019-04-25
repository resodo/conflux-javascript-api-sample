const BN = require('bn.js');
const ConfluxWeb = require('conflux-web');

const confluxWeb = new ConfluxWeb('http://testnet-jsonrpc.conflux-chain.org:12537');
// generate an account and private key by conflux wallet: https://wallet.confluxscan.io
const privateKey = '0x1b7a722b5f729995135560a46296e32444b80ce70948d16158c617187b797cb8';
confluxWeb.cfx.accounts.wallet.add(privateKey);

const AMOUNT_TOKEN = new BN('300000000000000000'); // 0.3 cfx token
const receiver = '0x57bfe26feeb6e529e71ca5fe037bd6c18b9d8f7b';

const txParams = {
  from: 0,
  nonce: 0, // make nonce appropriate
  gasPrice: 10,
  gas: 21000,
  value: AMOUNT_TOKEN,
  to: receiver,
  data: '',
};

confluxWeb.cfx.signTransaction(txParams)
  .then((encodedTransaction) => {
    const { rawTransaction } = encodedTransaction;
    console.log('raw transaction: ', rawTransaction);
    return confluxWeb.cfx.sendSignedTransaction(rawTransaction).then((transactionHash) => {
      console.log('transaction hash from RPC: ', transactionHash);
    });
  }).catch(console.error);

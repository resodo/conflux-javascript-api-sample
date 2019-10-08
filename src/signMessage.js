const ConfluxWeb = require('conflux-web');

const confluxWeb = new ConfluxWeb('http://testnet-jsonrpc.conflux-chain.org:12537');
// generate an account and private key by conflux wallet: https://wallet.confluxscan.io
const privateKey = '0x46b9e861b63d3509c88b7817275a30d22d62c8cd8fa6486ddee35ef0d8e0495f';
const data = 'hello world!'

console.log(confluxWeb.cfx.accounts.sign(data, privateKey));


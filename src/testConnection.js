const ConfluxWeb = require('conflux-web');

const confluxWeb = new ConfluxWeb('http://testnet-jsonrpc.conflux-chain.org:12537');

confluxWeb.cfx.getEpochNumber().then(console.log);

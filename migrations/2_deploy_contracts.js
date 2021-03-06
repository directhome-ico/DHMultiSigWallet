const MultisigWallet = artifacts.require('MultiSigWallet.sol')
const trace = true;

module.exports = function(deployer) {
  deployer.deploy(MultisigWallet, [
    '0x2693295CE330C3cFb6B2E9a6383563fC52F78bE6', // byao firefox
    '0x5d61Dc55612d88b8Cac87c32F0288140f751BC6E', // test ledger
    '0xD0b5D03c2c9d7B6EbacfdC2fd52db66FB861B909', // byao chrome
  ], 2).then(() => {
    if (trace) console.log('MultisigWallet deployed at : ' + MultisigWallet.address);
  }).catch(e => console.log(e));
};

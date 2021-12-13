const Masterchef = artifacts.require('MasterChef');
const Cake = artifacts.require('CakeToken');
const Syrup = artifacts.require('SyrupBar');
module.exports = function (deployer) {
    let masterChef;
    let cakeToken;
    let syrup;
    deployer.deploy(Cake)
        .then((_cake) => {
            cakeToken = _cake;
            return cakeToken.mint('100000000000000000000');
        })
        .then((tx) => {
            return deployer.deploy(Syrup,cakeToken.address);
        })
        .then((_syrup) => {
            syrup = _syrup;
            return deployer.deploy(Masterchef, cakeToken.address, _syrup.address, '0x6Ff850ae284951787216dbc9880e6573c53Ab822', '50000000000000000000',0);
        }).then((mc) => {
            masterChef = mc;
            return cakeToken.transferOwnership(masterChef.address);
        }).then((tx) => {
            console.log(`Owner transfer : ${tx.transactionHash}`);
            return syrup.transferOwnership(masterChef.address);
        }).then((tx) => {
            console.log(`Transfer : ${tx.transactionHash}`);
            console.table({
                Cake : cakeToken.address,
                Masterchef : masterChef.address
            })
        })
}
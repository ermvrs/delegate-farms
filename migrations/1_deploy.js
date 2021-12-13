const DelegateFarm = artifacts.require("DelegateFarm");
const BEP20 = artifacts.require("BEP20");
// pancakeswap masterchef testnet : 0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9
// cake testnet : 0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e
// rbs testnet : 0x482aae2b58de0a684c3c6b192ed66df348801a3c
// rbs master : 0xec1ba003e6af1a31efb9288c8425fce821b47c19
// Router: 0xD99D1c33F9fC3444f8101754aBC46c52416550D1
// pancake swap testnet https://pancake.kiemtienonline360.com/#/swap

module.exports = function(deployer) {
  let stakeToken;
  let farm;
  deployer.deploy(BEP20, 'CAKE STAKING TOKEN', 'CST').then((tt) => {
    stakeToken = tt;
    return   deployer.deploy(DelegateFarm, 
              '0x83084A7cdE9C5cbF2b7c8C56A8100F8c6F9C27c7',
              '0x868577d0A5eE47bEf86dF24f0d21772b8b2C762E', 
              '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
              '0x2C875C19E093F446dE65E46473170703486eb0E6',
              '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
              stakeToken.address,
              '0xAfAEEe58a58867c73245397C0F768FF041D32d70',
              49,
              'OPERATÖR');
              })
  .then((df) => {

    farm = df;
    return stakeToken.transferOwnership(farm.address);
  }).then((tx) => {
    console.log(`Ownership transferred with tx : ${tx.transactionHash}`)

    console.table({
      Token : stakeToken.address,
      Farm : farm.address
    })
  })
;
};


/* 
Testnet kurulu kontratlar 
│  Token  │ '0x560a23b22907F0aC9a19E8868c6FF7C0ea0D8846' │
│  Farm   │ '0x22aF4f35817200E6c8FEBF0f2950783F6FabF418' │

Staking tokenin ownerlığını farma devretmeyi unutma

Mainnet

token : 0xbAcfBE8c1a54644c930F856a61e0EeD0386748E7
farm : 0x4b890c52cc648716F23693f11e7938F1855602d3
*/
pragma solidity ^0.8.9;

interface IRobiniaChef {

    function getMultiplier(uint256 _from, uint256 _to) external pure returns (uint256);
    function pendingRobinia(uint256 _pid, address _user) external view returns (uint256);
    function canHarvest(uint256 _pid, address _user) external view returns (bool);
    function massUpdatePools() external;
    function updatePool(uint256 _pid) external;
    function deposit(uint256 _pid, uint256 _amount, address _referrer) external;
    function withdraw(uint256 _pid, uint256 _amount) external;
    function emergencyWithdraw(uint256 _pid) external;
    
}
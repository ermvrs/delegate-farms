pragma solidity ^0.8.9;

interface IPancakeChef {

    function pendingCake(uint256 _pid, address _user) external view returns (uint256);
    function massUpdatePools() external;
    function updatePool(uint256 _pid) external;
    function deposit(uint256 _pid, uint256 _amount) external;
    function withdraw(uint256 _pid, uint256 _amount) external;
    function enterStaking(uint256 _amount) external; // cake stakelenen kısım burası sanırsam.
    function leaveStaking(uint256 _amount) external; // cake withdraw fonksiyonu.
    function emergencyWithdraw(uint256 _pid) external; // ödülleri almadan stakelenen tokenlerin çekildiği fonksiyon.

}
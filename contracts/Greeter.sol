//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Greeter is Initializable, OwnableUpgradeable {
    string private greeting;

    mapping(address => uint256) public greetingCounter;

    function initialize(string memory _greeting) public initializer {
      __Ownable_init();
      greeting = _greeting;
    }

    function greet() public returns (string memory) {
      greetingCounter[_msgSender()] += 1;
      return greeting;
    }

    function setGreeting(string memory _greeting) public onlyOwner {
      greeting = _greeting;
    }
}

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract GreeterV2 is Initializable, OwnableUpgradeable {
    string private greeting;

    mapping(address => uint256) public greetingCounter;

    string private farewell;

    mapping(address => uint256) public farewellCounter;

    function initialize(string memory _greeting, string memory _farewell)
        public initializer {
      __Ownable_init();
      greeting = _greeting;
      farewell = _farewell;
    }

    function greet() public returns (string memory) {
      greetingCounter[_msgSender()] += 1;
      return greeting;
    }

    function bay() public returns (string memory) {
    farewellCounter[_msgSender()] += 1;
    return farewell;
    }

    function setGreeting(string memory _greeting) public onlyOwner {
      greeting = _greeting;
    }

    function setFarewell(string memory _farewell) public onlyOwner {
      farewell = _farewell;
    }
}

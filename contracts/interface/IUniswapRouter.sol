// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "./ISwapRouter.sol";

interface IUniswapRouter is ISwapRouter {
    function refundETH() external payable;
}

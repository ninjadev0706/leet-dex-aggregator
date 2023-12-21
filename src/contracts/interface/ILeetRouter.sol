// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct Query {
    address adapter;
    address tokenIn;
    address tokenOut;
    uint256 amountOut;
}
struct Offer {
    bytes amounts;
    bytes adapters;
    bytes path;
    uint256 gasEstimate;
}
struct FormattedOffer {
    uint256[] amounts;
    address[] adapters;
    address[] path;
    uint256 gasEstimate;
}
struct Trade {
    uint256 amountIn;
    uint256 amountOut;
    address[] path;
    address[] adapters;
}

interface ILeetRouter {
    event UpdatedTrustedTokens(address[] _newTrustedTokens);
    event UpdatedAdapters(address[] _newAdapters);
    event UpdatedMinFee(uint256 _oldMinFee, uint256 _newMinFee);
    event UpdatedFeeClaimer(address _oldFeeClaimer, address _newFeeClaimer);
    event LeetSwap(
        address indexed _sender,
        address indexed _tokenIn,
        address indexed _tokenOut,
        uint256 _amountIn,
        uint256 _amountOut,
        address _to
    );

    // admin
    function setTrustedTokens(address[] memory _trustedTokens) external;

    function setAdapters(address[] memory _adapters) external;

    function setFeeClaimer(address _claimer) external;

    function setMinFee(uint256 _fee) external;

    // misc
    function trustedTokensCount() external view returns (uint256);

    function adaptersCount() external view returns (uint256);

    // query

    function queryAdapter(
        uint256 _amountIn,
        address _tokenIn,
        address _tokenOut,
        uint8 _index
    ) external returns (uint256);

    function queryNoSplit(
        uint256 _amountIn,
        address _tokenIn,
        address _tokenOut,
        uint8[] calldata _options
    ) external view returns (Query memory);

    function queryNoSplit(
        uint256 _amountIn,
        address _tokenIn,
        address _tokenOut
    ) external view returns (Query memory);

    function findBestPathWithGas(
        uint256 _amountIn,
        address _tokenIn,
        address _tokenOut,
        uint256 _maxSteps,
        uint256 _gasPrice
    ) external view returns (FormattedOffer memory);

    function findBestPath(
        uint256 _amountIn,
        address _tokenIn,
        address _tokenOut,
        uint256 _maxSteps
    ) external view returns (FormattedOffer memory);

    // swap

    function swapNoSplit(
        Trade calldata _trade,
        address _to,
        uint256 _fee
    ) external returns (uint256 amountOut);

    function swapNoSplitFromAVAX(
        Trade calldata _trade,
        address _to,
        uint256 _fee
    ) external payable returns (uint256 amountOut);

    function swapNoSplitToAVAX(
        Trade calldata _trade,
        address _to,
        uint256 _fee
    ) external returns (uint256 amountOut);

    function swapNoSplitWithPermit(
        Trade calldata _trade,
        address _to,
        uint256 _fee,
        uint256 _deadline,
        uint8 _v,
        bytes32 _r,
        bytes32 _s
    ) external returns (uint256 amountOut);

    function swapNoSplitToAVAXWithPermit(
        Trade calldata _trade,
        address _to,
        uint256 _fee,
        uint256 _deadline,
        uint8 _v,
        bytes32 _r,
        bytes32 _s
    ) external returns (uint256 amountOut);
}

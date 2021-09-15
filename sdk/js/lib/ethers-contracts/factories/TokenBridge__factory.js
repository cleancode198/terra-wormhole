/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { utils, Contract, ContractFactory, } from "ethers";
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "initData",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161078f38038061078f83398101604081905261002f91610314565b818161005c60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61042c565b6000805160206107488339815191521461008657634e487b7160e01b600052600160045260246000fd5b6100928282600061009b565b50505050610491565b6100a4836100d1565b6000825111806100b15750805b156100cc576100ca838361011160201b6100291760201c565b505b505050565b6100da8161013d565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606101368383604051806060016040528060278152602001610768602791396101fd565b9392505050565b610150816102d260201b6100551760201c565b6101b75760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101dc60008051602061074883398151915260001b6102d860201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61025c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101ae565b600080856001600160a01b03168560405161027791906103dd565b600060405180830381855af49150503d80600081146102b2576040519150601f19603f3d011682016040523d82523d6000602084013e6102b7565b606091505b5090925090506102c88282866102db565b9695505050505050565b3b151590565b90565b606083156102ea575081610136565b8251156102fa5782518084602001fd5b8160405162461bcd60e51b81526004016101ae91906103f9565b60008060408385031215610326578182fd5b82516001600160a01b038116811461033c578283fd5b60208401519092506001600160401b0380821115610358578283fd5b818501915085601f83011261036b578283fd5b81518181111561037d5761037d61047b565b604051601f8201601f19908116603f011681019083821181831017156103a5576103a561047b565b816040528281528860208487010111156103bd578586fd5b6103ce83602083016020880161044f565b80955050505050509250929050565b600082516103ef81846020870161044f565b9190910192915050565b602081526000825180602084015261041881604085016020870161044f565b601f01601f19169190910160400192915050565b60008282101561044a57634e487b7160e01b81526011600452602481fd5b500390565b60005b8381101561046a578181015183820152602001610452565b838111156100ca5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6102a8806104a06000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101cc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b815260040161011591906101e8565b600082516101de81846020870161021b565b9190910192915050565b602081526000825180602084015261020781604085016020870161021b565b601f01601f19169190910160400192915050565b60005b8381101561023657818101518382015260200161021e565b83811115610245576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122086388e25f997a8287c8de3ce61c3254fde4d9da5048335ebdc272f01e84137e064736f6c63430008040033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
var TokenBridge__factory = /** @class */ (function (_super) {
    __extends(TokenBridge__factory, _super);
    function TokenBridge__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TokenBridge__factory.prototype.deploy = function (implementation, initData, overrides) {
        return _super.prototype.deploy.call(this, implementation, initData, overrides || {});
    };
    TokenBridge__factory.prototype.getDeployTransaction = function (implementation, initData, overrides) {
        return _super.prototype.getDeployTransaction.call(this, implementation, initData, overrides || {});
    };
    TokenBridge__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TokenBridge__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TokenBridge__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    TokenBridge__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    TokenBridge__factory.bytecode = _bytecode;
    TokenBridge__factory.abi = _abi;
    return TokenBridge__factory;
}(ContractFactory));
export { TokenBridge__factory };
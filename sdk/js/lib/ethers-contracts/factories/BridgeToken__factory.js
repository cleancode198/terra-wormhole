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
                name: "beacon",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
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
var _bytecode = "0x608060405234801561001057600080fd5b5060405161099338038061099383398101604081905261002f9161048e565b818161005c60017fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d51610599565b60008051602061094c8339815191521461008657634e487b7160e01b600052600160045260246000fd5b6100928282600061009b565b505050506105fe565b6100a483610175565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a26000825111806100e55750805b156101705761016e836001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561012657600080fd5b505afa15801561013a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015e9190610474565b8361031560201b6100291760201c565b505b505050565b6101888161034160201b6100551760201c565b6101e75760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b61026a816001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561022357600080fd5b505afa158015610237573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025b9190610474565b61034160201b6100551760201c565b6102cf5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b60648201526084016101de565b806102f460008051602061094c83398151915260001b61034760201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b606061033a838360405180606001604052806027815260200161096c6027913961034a565b9392505050565b3b151590565b90565b6060833b6103a95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101de565b600080856001600160a01b0316856040516103c4919061054a565b600060405180830381855af49150503d80600081146103ff576040519150601f19603f3d011682016040523d82523d6000602084013e610404565b606091505b50909250905061041582828661041f565b9695505050505050565b6060831561042e57508161033a565b82511561043e5782518084602001fd5b8160405162461bcd60e51b81526004016101de9190610566565b80516001600160a01b038116811461046f57600080fd5b919050565b600060208284031215610485578081fd5b61033a82610458565b600080604083850312156104a0578081fd5b6104a983610458565b60208401519092506001600160401b03808211156104c5578283fd5b818501915085601f8301126104d8578283fd5b8151818111156104ea576104ea6105e8565b604051601f8201601f19908116603f01168101908382118183101715610512576105126105e8565b8160405282815288602084870101111561052a578586fd5b61053b8360208301602088016105bc565b80955050505050509250929050565b6000825161055c8184602087016105bc565b9190910192915050565b60208152600082518060208401526105858160408501602087016105bc565b601f01601f19169190910160400192915050565b6000828210156105b757634e487b7160e01b81526011600452602481fd5b500390565b60005b838110156105d75781810151838201526020016105bf565b8381111561016e5750506000910152565b634e487b7160e01b600052604160045260246000fd5b61033f8061060d6000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610106565b565b606061004e83836040518060600160405280602781526020016102e36027913961012a565b9392505050565b3b151590565b90565b60006100917fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50546001600160a01b031690565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156100c957600080fd5b505afa1580156100dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610101919061023c565b905090565b3660008037600080366000845af43d6000803e808015610125573d6000f35b3d6000fd5b6060833b61018e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b0316856040516101a99190610263565b600060405180830381855af49150503d80600081146101e4576040519150601f19603f3d011682016040523d82523d6000602084013e6101e9565b606091505b50915091506101f9828286610203565b9695505050505050565b6060831561021257508161004e565b8251156102225782518084602001fd5b8160405162461bcd60e51b8152600401610185919061027f565b60006020828403121561024d578081fd5b81516001600160a01b038116811461004e578182fd5b600082516102758184602087016102b2565b9190910192915050565b602081526000825180602084015261029e8160408501602087016102b2565b601f01601f19169190910160400192915050565b60005b838110156102cd5781810151838201526020016102b5565b838111156102dc576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220813ae4be586d50c3d307c80085a4f903eb2b66c9f46f351ded782b605510fc4264736f6c63430008040033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
var BridgeToken__factory = /** @class */ (function (_super) {
    __extends(BridgeToken__factory, _super);
    function BridgeToken__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    BridgeToken__factory.prototype.deploy = function (beacon, data, overrides) {
        return _super.prototype.deploy.call(this, beacon, data, overrides || {});
    };
    BridgeToken__factory.prototype.getDeployTransaction = function (beacon, data, overrides) {
        return _super.prototype.getDeployTransaction.call(this, beacon, data, overrides || {});
    };
    BridgeToken__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    BridgeToken__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    BridgeToken__factory.createInterface = function () {
        return new utils.Interface(_abi);
    };
    BridgeToken__factory.connect = function (address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    };
    BridgeToken__factory.bytecode = _bytecode;
    BridgeToken__factory.abi = _abi;
    return BridgeToken__factory;
}(ContractFactory));
export { BridgeToken__factory };
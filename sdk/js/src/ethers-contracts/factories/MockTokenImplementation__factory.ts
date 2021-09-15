/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockTokenImplementation,
  MockTokenImplementationInterface,
} from "../MockTokenImplementation";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender_",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue_",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue_",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "sequence_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "nativeContract_",
        type: "bytes32",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nativeContract",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender_",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "sequence_",
        type: "uint64",
      },
    ],
    name: "updateDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testNewImplementationActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506111fb806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a18cd7c611610071578063a18cd7c614610258578063a457c2d71461026b578063a9059cbb1461027e578063c71f461514610291578063dd62ed3e146102a457600080fd5b806370a08231146101d85780638da5cb5b1461020157806395d89b411461021c5780639a8a0592146102245780639dc29fac1461024557600080fd5b806323b872dd116100f457806323b872dd14610180578063313ce5671461019357806339509351146101a85780633d6c043b146101bb57806340c10f19146101c357600080fd5b806306fdde0314610126578063095ea7b31461014457806318160ddd146101675780631f8cdb2b14610179575b600080fd5b61012e6102dd565b60405161013b91906110a5565b60405180910390f35b610157610152366004610e97565b610306565b604051901515815260200161013b565b6003545b60405190815260200161013b565b6001610157565b61015761018e366004610e5c565b61031c565b60045460405160ff909116815260200161013b565b6101576101b6366004610e97565b6103d2565b60085461016b565b6101d66101d1366004610e97565b610409565b005b61016b6101e6366004610e09565b6001600160a01b031660009081526005602052604090205490565b6007546040516001600160a01b03909116815260200161013b565b61012e610441565b600754600160a81b900461ffff1660405161ffff909116815260200161013b565b6101d6610253366004610e97565b6104d6565b6101d6610266366004610ec0565b61050a565b610157610279366004610e97565b6105e0565b61015761028c366004610e97565b61067b565b6101d661029f366004610f31565b610688565b61016b6102b2366004610e2a565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b6040516060906102f290600090602001610fef565b604051602081830303815290604052905090565b6000610313338484610787565b50600192915050565b60006103298484846108ac565b6001600160a01b0384166000908152600660209081526040808320338452909152902054828110156103b35760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103c785336103c28685611147565b610787565b506001949350505050565b3360008181526006602090815260408083206001600160a01b038716845290915281205490916103139185906103c290869061112f565b6007546001600160a01b031633146104335760405162461bcd60e51b81526004016103aa906110f8565b61043d8282610a84565b5050565b6060600060010180546104539061115e565b80601f016020809104026020016040519081016040528092919081815260200182805461047f9061115e565b80156104cc5780601f106104a1576101008083540402835291602001916104cc565b820191906000526020600020905b8154815290600101906020018083116104af57829003601f168201915b5050505050905090565b6007546001600160a01b031633146105005760405162461bcd60e51b81526004016103aa906110f8565b61043d8282610b66565b6007546001600160a01b031633146105345760405162461bcd60e51b81526004016103aa906110f8565b60025467ffffffffffffffff8083169116106105925760405162461bcd60e51b815260206004820152601e60248201527f63757272656e74206d6574616461746120697320757020746f2064617465000060448201526064016103aa565b82516105a5906000906020860190610cb5565b5081516105b9906001906020850190610cb5565b506002805467ffffffffffffffff191667ffffffffffffffff929092169190911790555050565b3360009081526006602090815260408083206001600160a01b0386168452909152812054828110156106625760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103aa565b61067133856103c28685611147565b5060019392505050565b60006103133384846108ac565b600754600160a01b900460ff16156106d85760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064016103aa565b6007805460ff60a01b1916600160a01b17905586516106fe9060009060208a0190610cb5565b508551610712906001906020890190610cb5565b506004805460ff90961660ff19909616959095179094556002805467ffffffffffffffff90941667ffffffffffffffff19909416939093179092556007805461ffff909316600160a81b02600162ffff0160a01b03199093166001600160a01b03909216919091179190911790556008555050565b6001600160a01b0383166107e95760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103aa565b6001600160a01b03821661084a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103aa565b6001600160a01b0383811660008181526006602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166109105760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103aa565b6001600160a01b0382166109725760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103aa565b6001600160a01b038316600090815260056020526040902054818110156109ea5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103aa565b6109f48282611147565b6001600160a01b038086166000908152600560205260408082209390935590851681529081208054849290610a2a90849061112f565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a7691815260200190565b60405180910390a350505050565b6001600160a01b038216610ada5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103aa565b8060006003016000828254610aef919061112f565b90915550506001600160a01b03821660009081526005602052604081208054839290610b1c90849061112f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610bc65760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103aa565b6001600160a01b03821660009081526005602052604090205481811015610c3a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103aa565b610c448282611147565b6001600160a01b03841660009081526005602052604081209190915560038054849290610c72908490611147565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161089f565b828054610cc19061115e565b90600052602060002090601f016020900481019282610ce35760008555610d29565b82601f10610cfc57805160ff1916838001178555610d29565b82800160010185558215610d29579182015b82811115610d29578251825591602001919060010190610d0e565b50610d35929150610d39565b5090565b5b80821115610d355760008155600101610d3a565b80356001600160a01b0381168114610d6557600080fd5b919050565b600082601f830112610d7a578081fd5b813567ffffffffffffffff80821115610d9557610d956111af565b604051601f8301601f19908116603f01168101908282118183101715610dbd57610dbd6111af565b81604052838152866020858801011115610dd5578485fd5b8360208701602083013792830160200193909352509392505050565b803567ffffffffffffffff81168114610d6557600080fd5b600060208284031215610e1a578081fd5b610e2382610d4e565b9392505050565b60008060408385031215610e3c578081fd5b610e4583610d4e565b9150610e5360208401610d4e565b90509250929050565b600080600060608486031215610e70578081fd5b610e7984610d4e565b9250610e8760208501610d4e565b9150604084013590509250925092565b60008060408385031215610ea9578182fd5b610eb283610d4e565b946020939093013593505050565b600080600060608486031215610ed4578283fd5b833567ffffffffffffffff80821115610eeb578485fd5b610ef787838801610d6a565b94506020860135915080821115610f0c578384fd5b50610f1986828701610d6a565b925050610f2860408501610df1565b90509250925092565b600080600080600080600060e0888a031215610f4b578283fd5b873567ffffffffffffffff80821115610f62578485fd5b610f6e8b838c01610d6a565b985060208a0135915080821115610f83578485fd5b50610f908a828b01610d6a565b965050604088013560ff81168114610fa6578384fd5b9450610fb460608901610df1565b9350610fc260808901610d4e565b925060a088013561ffff81168114610fd8578283fd5b8092505060c0880135905092959891949750929550565b600080835482600182811c91508083168061100b57607f831692505b602080841082141561102b57634e487b7160e01b87526022600452602487fd5b81801561103f57600181146110505761107c565b60ff1986168952848901965061107c565b60008a815260209020885b868110156110745781548b82015290850190830161105b565b505084890196505b50505050505061109d816a2028576f726d686f6c652960a81b8152600b0190565b949350505050565b6000602080835283518082850152825b818110156110d1578581018301518582016040015282016110b5565b818111156110e25783604083870101525b50601f01601f1916929092016040019392505050565b60208082526017908201527f63616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b6000821982111561114257611142611199565b500190565b60008282101561115957611159611199565b500390565b600181811c9082168061117257607f821691505b6020821081141561119357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f03d4555da7f96f9f98b07f07e67a3e8527ea80f34cc936ad0d15e63ac3829d164736f6c63430008040033";

export class MockTokenImplementation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTokenImplementation> {
    return super.deploy(overrides || {}) as Promise<MockTokenImplementation>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockTokenImplementation {
    return super.attach(address) as MockTokenImplementation;
  }
  connect(signer: Signer): MockTokenImplementation__factory {
    return super.connect(signer) as MockTokenImplementation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenImplementationInterface {
    return new utils.Interface(_abi) as MockTokenImplementationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTokenImplementation {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockTokenImplementation;
  }
}

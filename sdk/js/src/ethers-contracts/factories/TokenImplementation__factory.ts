/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenImplementation,
  TokenImplementationInterface,
} from "../TokenImplementation";

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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506111e9806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063a18cd7c611610071578063a18cd7c614610246578063a457c2d714610259578063a9059cbb1461026c578063c71f46151461027f578063dd62ed3e1461029257600080fd5b80638da5cb5b146101ef57806395d89b411461020a5780639a8a0592146102125780639dc29fac1461023357600080fd5b8063313ce567116100e9578063313ce5671461018157806339509351146101965780633d6c043b146101a957806340c10f19146101b157806370a08231146101c657600080fd5b806306fdde031461011b578063095ea7b31461013957806318160ddd1461015c57806323b872dd1461016e575b600080fd5b6101236102cb565b6040516101309190611093565b60405180910390f35b61014c610147366004610e85565b6102f4565b6040519015158152602001610130565b6003545b604051908152602001610130565b61014c61017c366004610e4a565b61030a565b60045460405160ff9091168152602001610130565b61014c6101a4366004610e85565b6103c0565b600854610160565b6101c46101bf366004610e85565b6103f7565b005b6101606101d4366004610df7565b6001600160a01b031660009081526005602052604090205490565b6007546040516001600160a01b039091168152602001610130565b61012361042f565b600754600160a81b900461ffff1660405161ffff9091168152602001610130565b6101c4610241366004610e85565b6104c4565b6101c4610254366004610eae565b6104f8565b61014c610267366004610e85565b6105ce565b61014c61027a366004610e85565b610669565b6101c461028d366004610f1f565b610676565b6101606102a0366004610e18565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b6040516060906102e090600090602001610fdd565b604051602081830303815290604052905090565b6000610301338484610775565b50600192915050565b600061031784848461089a565b6001600160a01b0384166000908152600660209081526040808320338452909152902054828110156103a15760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103b585336103b08685611135565b610775565b506001949350505050565b3360008181526006602090815260408083206001600160a01b038716845290915281205490916103019185906103b090869061111d565b6007546001600160a01b031633146104215760405162461bcd60e51b8152600401610398906110e6565b61042b8282610a72565b5050565b6060600060010180546104419061114c565b80601f016020809104026020016040519081016040528092919081815260200182805461046d9061114c565b80156104ba5780601f1061048f576101008083540402835291602001916104ba565b820191906000526020600020905b81548152906001019060200180831161049d57829003601f168201915b5050505050905090565b6007546001600160a01b031633146104ee5760405162461bcd60e51b8152600401610398906110e6565b61042b8282610b54565b6007546001600160a01b031633146105225760405162461bcd60e51b8152600401610398906110e6565b60025467ffffffffffffffff8083169116106105805760405162461bcd60e51b815260206004820152601e60248201527f63757272656e74206d6574616461746120697320757020746f206461746500006044820152606401610398565b8251610593906000906020860190610ca3565b5081516105a7906001906020850190610ca3565b506002805467ffffffffffffffff191667ffffffffffffffff929092169190911790555050565b3360009081526006602090815260408083206001600160a01b0386168452909152812054828110156106505760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610398565b61065f33856103b08685611135565b5060019392505050565b600061030133848461089a565b600754600160a01b900460ff16156106c65760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b6044820152606401610398565b6007805460ff60a01b1916600160a01b17905586516106ec9060009060208a0190610ca3565b508551610700906001906020890190610ca3565b506004805460ff90961660ff19909616959095179094556002805467ffffffffffffffff90941667ffffffffffffffff19909416939093179092556007805461ffff909316600160a81b02600162ffff0160a01b03199093166001600160a01b03909216919091179190911790556008555050565b6001600160a01b0383166107d75760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610398565b6001600160a01b0382166108385760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610398565b6001600160a01b0383811660008181526006602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166108fe5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610398565b6001600160a01b0382166109605760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610398565b6001600160a01b038316600090815260056020526040902054818110156109d85760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610398565b6109e28282611135565b6001600160a01b038086166000908152600560205260408082209390935590851681529081208054849290610a1890849061111d565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a6491815260200190565b60405180910390a350505050565b6001600160a01b038216610ac85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610398565b8060006003016000828254610add919061111d565b90915550506001600160a01b03821660009081526005602052604081208054839290610b0a90849061111d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610bb45760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610398565b6001600160a01b03821660009081526005602052604090205481811015610c285760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610398565b610c328282611135565b6001600160a01b03841660009081526005602052604081209190915560038054849290610c60908490611135565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161088d565b828054610caf9061114c565b90600052602060002090601f016020900481019282610cd15760008555610d17565b82601f10610cea57805160ff1916838001178555610d17565b82800160010185558215610d17579182015b82811115610d17578251825591602001919060010190610cfc565b50610d23929150610d27565b5090565b5b80821115610d235760008155600101610d28565b80356001600160a01b0381168114610d5357600080fd5b919050565b600082601f830112610d68578081fd5b813567ffffffffffffffff80821115610d8357610d8361119d565b604051601f8301601f19908116603f01168101908282118183101715610dab57610dab61119d565b81604052838152866020858801011115610dc3578485fd5b8360208701602083013792830160200193909352509392505050565b803567ffffffffffffffff81168114610d5357600080fd5b600060208284031215610e08578081fd5b610e1182610d3c565b9392505050565b60008060408385031215610e2a578081fd5b610e3383610d3c565b9150610e4160208401610d3c565b90509250929050565b600080600060608486031215610e5e578081fd5b610e6784610d3c565b9250610e7560208501610d3c565b9150604084013590509250925092565b60008060408385031215610e97578182fd5b610ea083610d3c565b946020939093013593505050565b600080600060608486031215610ec2578283fd5b833567ffffffffffffffff80821115610ed9578485fd5b610ee587838801610d58565b94506020860135915080821115610efa578384fd5b50610f0786828701610d58565b925050610f1660408501610ddf565b90509250925092565b600080600080600080600060e0888a031215610f39578283fd5b873567ffffffffffffffff80821115610f50578485fd5b610f5c8b838c01610d58565b985060208a0135915080821115610f71578485fd5b50610f7e8a828b01610d58565b965050604088013560ff81168114610f94578384fd5b9450610fa260608901610ddf565b9350610fb060808901610d3c565b925060a088013561ffff81168114610fc6578283fd5b8092505060c0880135905092959891949750929550565b600080835482600182811c915080831680610ff957607f831692505b602080841082141561101957634e487b7160e01b87526022600452602487fd5b81801561102d576001811461103e5761106a565b60ff1986168952848901965061106a565b60008a815260209020885b868110156110625781548b820152908501908301611049565b505084890196505b50505050505061108b816a2028576f726d686f6c652960a81b8152600b0190565b949350505050565b6000602080835283518082850152825b818110156110bf578581018301518582016040015282016110a3565b818111156110d05783604083870101525b50601f01601f1916929092016040019392505050565b60208082526017908201527f63616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b6000821982111561113057611130611187565b500190565b60008282101561114757611147611187565b500390565b600181811c9082168061116057607f821691505b6020821081141561118157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212206a038daa4d2cf1396c2b2c816cf9c7cff4528d48408d404779927ba8a1256f5564736f6c63430008040033";

export class TokenImplementation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenImplementation> {
    return super.deploy(overrides || {}) as Promise<TokenImplementation>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenImplementation {
    return super.attach(address) as TokenImplementation;
  }
  connect(signer: Signer): TokenImplementation__factory {
    return super.connect(signer) as TokenImplementation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenImplementationInterface {
    return new utils.Interface(_abi) as TokenImplementationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenImplementation {
    return new Contract(address, _abi, signerOrProvider) as TokenImplementation;
  }
}

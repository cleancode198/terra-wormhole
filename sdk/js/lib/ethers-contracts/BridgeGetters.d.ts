/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BridgeGettersInterface extends ethers.utils.Interface {
  functions: {
    "governanceActionIsConsumed(bytes32)": FunctionFragment;
    "isInitialized(address)": FunctionFragment;
    "isTransferCompleted(bytes32)": FunctionFragment;
    "wormhole()": FunctionFragment;
    "chainId()": FunctionFragment;
    "governanceChainId()": FunctionFragment;
    "governanceContract()": FunctionFragment;
    "wrappedAsset(uint16,bytes32)": FunctionFragment;
    "bridgeContracts(uint16)": FunctionFragment;
    "tokenImplementation()": FunctionFragment;
    "WETH()": FunctionFragment;
    "outstandingBridged(address)": FunctionFragment;
    "isWrappedAsset(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "governanceActionIsConsumed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTransferCompleted",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "wormhole", values?: undefined): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governanceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedAsset",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeContracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "outstandingBridged",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWrappedAsset",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "governanceActionIsConsumed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTransferCompleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wormhole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "governanceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bridgeContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "outstandingBridged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWrappedAsset",
    data: BytesLike
  ): Result;

  events: {};
}

export class BridgeGetters extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BridgeGettersInterface;

  functions: {
    governanceActionIsConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isInitialized(impl: string, overrides?: CallOverrides): Promise<[boolean]>;

    isTransferCompleted(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    wormhole(overrides?: CallOverrides): Promise<[string]>;

    chainId(overrides?: CallOverrides): Promise<[number]>;

    governanceChainId(overrides?: CallOverrides): Promise<[number]>;

    governanceContract(overrides?: CallOverrides): Promise<[string]>;

    wrappedAsset(
      tokenChainId: BigNumberish,
      tokenAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    bridgeContracts(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenImplementation(overrides?: CallOverrides): Promise<[string]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    outstandingBridged(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isWrappedAsset(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  governanceActionIsConsumed(
    hash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isInitialized(impl: string, overrides?: CallOverrides): Promise<boolean>;

  isTransferCompleted(
    hash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wormhole(overrides?: CallOverrides): Promise<string>;

  chainId(overrides?: CallOverrides): Promise<number>;

  governanceChainId(overrides?: CallOverrides): Promise<number>;

  governanceContract(overrides?: CallOverrides): Promise<string>;

  wrappedAsset(
    tokenChainId: BigNumberish,
    tokenAddress: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  bridgeContracts(
    chainId_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenImplementation(overrides?: CallOverrides): Promise<string>;

  WETH(overrides?: CallOverrides): Promise<string>;

  outstandingBridged(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isWrappedAsset(token: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    governanceActionIsConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isInitialized(impl: string, overrides?: CallOverrides): Promise<boolean>;

    isTransferCompleted(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wormhole(overrides?: CallOverrides): Promise<string>;

    chainId(overrides?: CallOverrides): Promise<number>;

    governanceChainId(overrides?: CallOverrides): Promise<number>;

    governanceContract(overrides?: CallOverrides): Promise<string>;

    wrappedAsset(
      tokenChainId: BigNumberish,
      tokenAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    bridgeContracts(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenImplementation(overrides?: CallOverrides): Promise<string>;

    WETH(overrides?: CallOverrides): Promise<string>;

    outstandingBridged(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWrappedAsset(token: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    governanceActionIsConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInitialized(impl: string, overrides?: CallOverrides): Promise<BigNumber>;

    isTransferCompleted(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wormhole(overrides?: CallOverrides): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    governanceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    governanceContract(overrides?: CallOverrides): Promise<BigNumber>;

    wrappedAsset(
      tokenChainId: BigNumberish,
      tokenAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bridgeContracts(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    outstandingBridged(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWrappedAsset(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    governanceActionIsConsumed(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInitialized(
      impl: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTransferCompleted(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wrappedAsset(
      tokenChainId: BigNumberish,
      tokenAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bridgeContracts(
      chainId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    outstandingBridged(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWrappedAsset(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
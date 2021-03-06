/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MerkleProof, MerkleProofInterface } from "../MerkleProof";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xf72d2363",
        type: "bytes32",
      },
    ],
    name: "c_0xf72d2363",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60e0610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063225f917e146038575b600080fd5b604e6004803603810190604a91906066565b6050565b005b50565b6000813590506060816096565b92915050565b600060208284031215607757600080fd5b60006083848285016053565b91505092915050565b6000819050919050565b609d81608c565b811460a757600080fd5b5056fea2646970667358221220c3d36f1ec80386c4bd7e73fdecf16ba9c7b8fdb4c03b1b1838fb5866a667d3de64736f6c63430008040033";

export class MerkleProof__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleProof> {
    return super.deploy(overrides || {}) as Promise<MerkleProof>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MerkleProof {
    return super.attach(address) as MerkleProof;
  }
  connect(signer: Signer): MerkleProof__factory {
    return super.connect(signer) as MerkleProof__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleProofInterface {
    return new utils.Interface(_abi) as MerkleProofInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleProof {
    return new Contract(address, _abi, signerOrProvider) as MerkleProof;
  }
}

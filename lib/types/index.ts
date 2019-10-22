//export *  from './tendermint';
import * as sdk from "@tendermint/amino-js";
export * from "@tendermint/amino-js";

//export * from './sdk_types'

export interface ErrorResponse {
  code: number;
  data: string;
  message: string;
}

export interface TxBuilderParams {
  sequence: number;
  account_number: number;
  chain_id: string;
}

export interface TxBuilder {
  CreateSignMessage(): string;
  AddMsg(msg: sdk.Msg): boolean;
}

export type MsgBuyName = {
  type: "buy_name";
  value: {
    name: string;
    Bid: sdk.Coin;
    Buyer: string;
  };
};
// StdSignMsg is a convenience structure for passing along
// a Msg with the other requirements for a StdSignDoc before
// it is signed. For use in the CLI.

export type StdSignMsg = {
  chain_id: string;
  account_number: number;
  sequence: number;
  fee: sdk.StdFee;
  msgs: [sdk.Msg];
  memo: string;
};

export type Bech32AccAddress = string

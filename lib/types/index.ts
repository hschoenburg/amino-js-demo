//export *  from './tendermint';
import * as sdk from '@tendermint/amino-js';
export * from '@tendermint/amino-js';
//export * from './sdk_types'




export interface ErrorResponse {
  code: number,
  data: string,
  message: string
}

export type MsgBuyName = {
    type: "buy_name"
    value: {
    name: string,
    Bid: sdk.Coin[],
    Buyer: string
    }
}


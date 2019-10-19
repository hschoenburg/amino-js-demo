import * as Amino from '@tendermint/amino-js'
import * as sdk from "../lib/types"

export function DecodeTx(txData: any): sdk.Tx {
  const bytes = Amino.base64ToBytes(txData);
  const value = Amino.unmarshalTx(bytes, true);
  return value
  
}

export interface MsgSend {
    from_address: string;
    to_address: string;
    amount: sdk.Coin[];
}


export function BuildMsgSend(from_address: string, to_address: string, amount: sdk.Coin): sdk.Msg {
  return {
          type: `sdk-sdk/MsgSend`,
          value: {
                  from_address: from_address,
                  to_address: to_address,
                  amount: [amount],
                }
        }
}

/*
export function BuildBuyNameMsg(coin: sdk.Coin, name: string, from: string): sdk.MsgBuyName {
	const msg = <sdk.MsgBuyName>{
		type: "buy_name",
    value: {
      name: name,
      Bid: [coin],
      Buyer: from,
    }
  }
  return msg

}

*/

import * as Amino from '@tendermint/amino-js'
import * as cosmos from "../lib/types"

export function DecodeTx(txData: any): sdk.Tx {
  const bytes = Amino.base64ToBytes(txData);
  const value = Amino.unmarshalTx(bytes, true);
  return value
  
}

 export interface StdTx extends cosmos.TxValue {
     msg: cosmos.Msg[],
     fee: cosmos.StdFee,
     signatures: cosmos.StdSignature[],
     memo: string;
 }


export interface MsgSend {
    from_address: string;
    to_address: string;
    amount: cosmos.Coin[];
}


export function BuildMsgSend(from_address: string, to_address: string, amount: cosmos.Coin): cosmos.Msg {
  return {
          type: `cosmos-sdk/MsgSend`,
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

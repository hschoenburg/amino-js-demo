import * as Amino from '@tendermint/amino-js'
import * as sdk from "../lib/types"

export function DecodeTx(txData: any): sdk.Tx {
  const bytes = Amino.base64ToBytes(txData);
  const value = Amino.unmarshalTx(bytes, true);
  return value
  
}
/*
 export interface StdTx extends TxValue {
     msg: Msg[];
     fee: StdFee;
     signatures: StdSignature[];
     memo: string;
 }
export interface Msg {
    type: string;
    value: MsgSend | MsgMultiSend;
}

export interface MsgSend {
    from_address: string;
    to_address: string;
    amount: Coin[];

*/

// MsgBuyName defines the BuyName message
  // type MsgBuyName struct {
  //   Name  string         `json:"name"`
  //     Bid   sdk.Coins      `json:"bid"`
  //       Buyer sdk.AccAddress `json:"buyer"`
  //       }
//       

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

import * as Amino from 'amino-js'
import * as cosmos from '../lib/types'
import * as nameservice from './types'

export function DecodeTx(txData: any): any {
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

export function BuildBuyNameMsg(coin: cosmos.Coin, name: string, from: string): cosmos.Msg {
	const msg = <nameservice.MsgBuyName>{
    name: name,
    bid: coin,
    buyer: from,
		type: "buy_name",
    }
    return msg

}


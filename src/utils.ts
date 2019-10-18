import * as Amino from '@tendermint/amino-js'
import * as cosmos from '../lib/types'
import * as nameservice from './types'

export function DecodeTx(txData: any): any {
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

export function BuildMsgBuyName(coin: cosmos.Coin, name: string, from: string): cosmos.Msg {
	const msg = <nameservice.MsgBuyName>{
    name: name,
    bid: coin,
    buyer: from,
		type: "buy_name",
    }
    return msg

}


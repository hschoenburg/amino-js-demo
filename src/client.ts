import axios from 'axios';

import * as sdk from '../lib/types';

import { DecodeTx } from './utils'


export  class NameServiceClient {

  async QueryWhois (name: string): Promise<any | sdk.ErrorResponse> {
    const data = await axios.get('/nameservice/names/' + name + '/whois')
    return data.data.result
  }

  async QueryAccount (address: string): Promise<sdk.BaseAccount | sdk.ErrorResponse> {
    const response = await axios.get('/auth/accounts/' + address)
    if(response.data.error) {
      return response.data.error
    } else {
    return response.data.result
    }
  }

  async QueryTx (hash: string): Promise<sdk.Tx | sdk.ErrorResponse> {
    var response = await axios.post('/rpc/tx?hash=' + '0x' + hash + '&prove=true')
    if(response.data.error) {
      return response.data.error
    } else {
      return DecodeTx(response.data.result.tx)
    }
  }

  async MsgSend (msg: sdk.MsgSend): Promise<sdk.Tx | sdk.ErrorResponse | boolean > {
    return true
  }


  // returns a promise
  QueryResolveName (name: string) {}

  BuildMsgBuyName (params: any) {}

  BuildMsgSetName (params: any) {}
}

// proof examples
// https://github.com/cosmos/amino-js/blob/master/test/store.test.tsk
// coming soon
// https://github.com/jordansexton/sig

// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
// https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
//
//
//
// TxHash 5FF36B7420CE18430A2D14694FA8D591F81430CD9BE7B5596E83F555BD358B09
// 26657/tx?hash
// ALice address cosmos1ys94ptve4hfghgv7j40p0hxq07z090x6cta2mk

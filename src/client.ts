import axios from 'axios';

import { RPCTxQueryWithProofResponseJSON, Proof } from '../lib/types';

import { DecodeTx } from './utils'


export  class NameServiceClient {

  async QueryWhois (name: string) {
    const data = await axios.get('/nameservice/names/' + name + '/whois')
    return data.data.result
  }

  async QueryAccount (address: any) {
    console.log('querying')
    const data = await axios.get('/auth/accounts/' + address)
    console.log(data)
    return data.data.result
  }

  async QueryTx (hash: any) {
    var data:RPCTxQueryWithProofResponseJSON = await axios.post('/rpc/tx?hash=' + '0x' + hash + '&prove=true')
    const decodedTx = DecodeTx(data.result.tx)
    return decodedTx
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

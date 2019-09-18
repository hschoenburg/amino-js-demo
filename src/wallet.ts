/*

import  *'    from './types';

export default class Wallet implements WalletInterface {
    address: string = ''
    pubKey: any = undefined
    privKey: any = undefined

  constructor () {
    this.pubKey = undefined
    this.address = undefined
  }

  BuildStdTx (msgs: Array<any>) {
    const tx = {
      type: 'auth/StdTx',
      value: {
        msg: msgs,

        fee: {
          amount: [{
            denom: 'stake',
            amount: '50'
          }],
          gas: '200'
        },
        memo: 'I hope this works'
      }
    }
    return tx
  }

  import (pubKey: any, privKey: any, address: any) {
    this.pubKey = pubKey
    this.privKey = privKey,
    this.address = address
  }

  // given seed phrase
  // have the user copy/paste and keep their seed phrase
  generateFromSeed (seed: string) {}

  generate () {
    // create and save pubKey, privKJey and address

  }

  sign () {}
}
*/

export default class Wallet {
  constructor () {
    this.address = undefined
    this.pubKey = undefined
    this.address = undefined
  }

  BuildStdTx (msgs) {
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

  import (pubKey, privKey, address) {
    this.pubKey = pubKey
    this.privKey = privKey,
    this.address = address
  }

  // given seed phrase
  // have the user copy/paste and keep their seed phrase
  generateFromSeed (seed) {}

  generate () {
    // create and save pubKey, privKJey and address

  }

  sign () {}
}

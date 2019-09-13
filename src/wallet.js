export default class Wallet {


  constructor() {
    this.address = undefined
    this.pubKey = undefined
    this.address = undefined
  }
    

  import(pubKey, privKey, address) {
   this.pubKey = pubKey
   this.privKey = privKey,
   this.address = address
  }

  // given seed phrase
  // have the user copy/paste and keep their seed phrase
  generateFromSeed(seed) {}


  generate() {
    // create and save pubKey, privKJey and address

  sign() {}




}

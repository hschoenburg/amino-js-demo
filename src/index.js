/*
 * ok lets spec out this app. It should work for hellochain first
 * Create an account
 * So Send Greetings to an address
 * List all greetings for an address
 */


import axios from "axios"
import _ from 'lodash';
import {encodeString, decodeString } from '@tendermint/amino-js'
import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

import {
  // createCosmosAddress,
  sign,
  // createSignature,
  // createSignMessage,
  generateWalletFromSeed,
  generateSeed,
  // generateWallet,
  createSignedTx
  // createBroadcastBody
} from "js-cosmos-wallet";

//placeholder var for local wallet
let wallet = {}


function BuildGreetingTx(params) {

  const tx = {
     'type':  'auth/StdTx',
     'value': {
         'msg':        [{
             'type':  'hellochain/MsgGreet',
             'value': {
                 'Sender': params.Sender,
                 'Recipient': params.Recipient,
                 'Body': params.Body
             }
         }],
         "fee":        {
             "amount": [{
                 "denom":  "stake",
                 "amount": "50"
             }],
             "gas":    "200"
         },
         "memo":       "I hope this works"
     }
  };
  return tx;
}

function generateWallet(e) {
  e.preventDefault();
  console.log('seed that wallet!')

  let seed = generateSeed();
  wallet  = generateWalletFromSeed(seed)
  document.getElementById("Mnemonic").innerHTML = "Seed: " + seed
  document.getElementById("PubKey").innerHTML = "PubKey: " + wallet.publicKey
  document.getElementById("PrivKey").innerHTML = "PrivKey: " + wallet.privateKey
  document.getElementById("Address").innerHTML = "Address: " + wallet.cosmosAddress
  document.getElementById("Wallet").style.display = "block"
  console.log(seed)
  console.log(wallet)

  getMetadata(wallet.cosmosAddress).then(function(data) {
    console.log(data)
  })

}


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("GenerateWallet").addEventListener('click', generateWallet)

  const GreeterForm = document.getElementById("GreeterForm")
  GreeterForm.addEventListener("submit", function(e) {

    e.preventDefault()
    let elements = GreeterForm.elements

    let txParams = {
      Sender: wallet.cosmosAddress,
      Recipient:  elements[1].value,
      Body: elements[0].value
    }

    let unsignedTx = BuildGreetingTx(txParams)
    console.log(unsignedTx)
    let signedTx = sign(unsignedTx, wallet)

    console.log(signedTx)

  })

})

function getMetadata (address) {
  return axios.get("/auth/accounts/" + address)
}

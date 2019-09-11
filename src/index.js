import _ from 'lodash';
import {encodeString, decodeString } from '@tendermint/amino-js'
import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

import {
  // createCosmosAddress,
  sign,
  // createSignature,
  // createSignMessage,
  generateWalletFromSeed,
  // generateSeed,
  // generateWallet,
  createSignedTx
  // createBroadcastBody
} from "js-cosmos-wallet";


const tx = {
   'type':  'auth/StdTx',
   'value': {
       'msg':        [{
           'type':  'hellochain/MsgGreet',
           'value': {
               'Sender': 'cosmos1h806c7khnvmjlywdrkdgk2vrayy2mmvf9rxk2r',
               'Recipient':   'cosmos1z7g5w84ynmjyg0kqpahdjqpj7yq34v3suckp0e',
               'Body':    'Greetings Earthling'
           }
       }],
       "fee":        {
           "amount": [{
               "denom":  "uatom",
               "amount": "5000"
           }],
           "gas":    "200000"
       },
       "signatures": [{
           "pub_key":   {
               "type":  "tendermint/PubKeySecp256k1",
               "value": "AtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJP"
           },
           "signature": "1nUcIH0CLT0/nQ0mBTDrT6kMG20NY/PsH7P2gc4bpYNGLEYjBmdWevXUJouSE/9A/60QG9cYeqyTe5kFDeIPxQ=="
       }],
       "memo":       "1122672754"
   }
};

function encodedTx() {
  const encodedTx = marshalTx(tx);
  const decodedTx = unmarshalTx(encodedTx);
  const second = document.createElement('p');

  second.innerHTML = JSON.stringify(decodedTx.value.msg[0].value.Body)

  return second
}

function button(callback, text) {
  console.log("hello from button")
  const box = document.createElement("div");
  const label = document.createElement("p");
  label.innerHTML = text
  const button = document.createElement("input")
  button.setAttribute("type", "submit")
  button.addEventListener("click", callback)
  box.appendChild(label)
  box.appendChild(button)
  return box
}


document.addEventListener('DOMContentLoaded', function() {

  let copy = "here is the first buttonreally "
  let callback = function() {
    console.log("button clicked")
  }
  document.body.appendChild(button(callback, copy))

})


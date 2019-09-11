import _ from 'lodash';
import {encodeString, decodeString } from '@tendermint/amino-js'
import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

//import { Client } from 'cosmos-sdk'
//let client = require('cosmos-sdk')('http://localhost:26657')
//let node  = Client('http://localhost:26657')

async function GetStatus() {

  let fetchAccount = await node.req('GET', '/status')

  console.log(fetchAccount)

  return fetchAccount
}

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
       'fee':        {
           'amount': [{
               'denom':  'uatom',
               'amount': '5000'
           }],
           'gas':    '200000'
       },
       'signatures': [{
           'pub_key':   {
               'type':  'tendermint/PubKeySecp256k1',
               'value': 'AtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJP'
           },
           'signature': '1nUcIH0CLT0/nQ0mBTDrT6kMG20NY/PsH7P2gc4bpYNGLEYjBmdWevXUJouSE/9A/60QG9cYeqyTe5kFDeIPxQ=='
       }],
       'memo':       '1122672754'
   }
};

function encodedTx() {
  const encodedTx = marshalTx(tx);
  const decodedTx = unmarshalTx(encodedTx);
  const second = document.createElement('p');

  second.innerHTML = JSON.stringify(decodedTx.value.msg[0].value.Body)

  return second
}

function component() {
  const element = document.createElement('div');

  var encoded = decodeString(encodeString("Hey there Amino Decoded String here."))

  element.innerHTML = encoded[0] 

  return element;
}

document.addEventListener('DOMContentLoaded', function() {
  document.body.appendChild(component());
  document.body.appendChild(encodedTx());
})




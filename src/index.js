import _ from 'lodash';
import {encodeString, decodeString } from '@tendermint/amino-js'
import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

const tx = {
   'type':  'auth/StdTx',
   'value': {
       'msg':        [{
           'type':  'hellochain/Greeting',
           'value': {
               'sender': 'cosmos1h806c7khnvmjlywdrkdgk2vrayy2mmvf9rxk2r',
               'recipient':   'cosmos1z7g5w84ynmjyg0kqpahdjqpj7yq34v3suckp0e',
               'body':    'Greetings Earthling'
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

const encodedTx = marshalTx(tx);
const decodedTx = unmarshalTx(encodedTx);

function component() {
  const element = document.createElement('div');

  var encoded = decodeString(encodeString("Hey there Amino Decoded"))
  console.log(encoded)

  element.innerHTML = encodedTx

  return element;
}

document.body.appendChild(component());


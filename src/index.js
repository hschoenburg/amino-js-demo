/*
 * ok lets spec out this app. It should work for nameservice
 * Create a Wallet
 * Query Your Wallet Balance
 * Receive coins to this account
 e Buy a name -> with proof

 *
 * Query your names
 * Update Your name
 * Send coins to address
 */

import NameServiceClient from './client.js'

const client = new NameServiceClient()

// import {encodeString, decodeString } from '@tendermint/amino-js'
// import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

// placeholder var for local wallet

async function WhoisQueryHandler (e) {
  e.preventDefault()
  const name = e.target.elements[0].value
  const data = await client.QueryWhois(name)
  document.getElementById('WhoisQueryResult').innerHTML = JSON.stringify(data)
}
async function AccountQueryHandler (e) {
  e.preventDefault()
  const address = e.target.elements[0].value
  const data = await client.QueryAccount(address)
  document.getElementById('AccountQueryResult').innerHTML = JSON.stringify(data)
}

async function TxQueryHandler (e) {
  e.preventDefault()
  const hash = e.target.elements[0].value
  const data = await client.QueryTx(hash)
  document.getElementById('TxQueryResult').innerHTML = JSON.stringify(data)
}

function RegisterFormListeners (client) {
  document.getElementById('WhoisQueryForm').addEventListener('submit', WhoisQueryHandler)
  document.getElementById('AccountQueryForm').addEventListener('submit', AccountQueryHandler)
  document.getElementById('TxQueryForm').addEventListener('submit', TxQueryHandler)
}

document.addEventListener('DOMContentLoaded', function () {
  (async () => {
    RegisterFormListeners()
  })()
})

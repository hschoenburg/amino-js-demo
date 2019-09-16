import axios from 'axios'

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

import NameServiceClient from './client.ts'

const client = new NameServiceClient()

// import {encodeString, decodeString } from '@tendermint/amino-js'
// import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

// placeholder var for local wallet

async function WhoisQueryHandler (e: Event): Promise<void> {
  e.preventDefault()
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const name = elements[0].value
  const data = await client.QueryWhois(name)
  document.getElementById('WhoisQueryResult').innerHTML = JSON.stringify(data)
}
async function AccountQueryHandler (e: Event): Promise<void> {
  e.preventDefault()
  //const target = e.target as HTMLFormElement
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const address = elements[0].value
  const data = await client.QueryAccount(address)
  document.getElementById('AccountQueryResult').innerHTML = JSON.stringify(data)
}

async function TxQueryHandler (e: Event): Promise<void> {
  e.preventDefault()
  console.log('TXQUERY')
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const hash = elements[0].value
  const data = await client.QueryTx(hash)
  document.getElementById('TxQueryResult').innerHTML = JSON.stringify(data)
}

function RegisterFormListeners (client: NameServiceClient) {
  document.getElementById('WhoisQueryForm').addEventListener('submit', WhoisQueryHandler)
  document.getElementById('AccountQueryForm').addEventListener('submit', AccountQueryHandler)
  document.getElementById('TxQueryForm').addEventListener('submit', TxQueryHandler)
}

window.onload = function() {
    RegisterFormListeners(client)
}

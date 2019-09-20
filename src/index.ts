import axios from 'axios'
import * as types from './types'
import { DecodeTx }  from './utils'
import { TrySocket } from './socket'

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

import  { NameServiceClient } from './client'

const client = new NameServiceClient()


// import {encodeString, decodeString } from '@tendermint/amino-js'
// import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

// placeholder var for local wallet


async function BuyNameHandler(e: Event): Promise<void> {
  e.preventDefault()
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const name = elements[0].value
  const denom = elements[1].value
  const amount = elements[2].value
  
  const coin = { denom: denom, amount: amount }
  //const msg = utils.BuildBuyNameMsg(coin, name, "my Sdk Account Address")

}

async function WhoisQueryHandler (e: Event): Promise<void> {
  e.preventDefault()
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const name = elements[0].value
  const data = await client.QueryWhois(name)
  let resultPrompt = document.getElementById('WhoisQueryResult')
  if (resultPrompt) {
    resultPrompt.innerHTML = JSON.stringify(data)
  }
}

async function AccountQueryHandler (e: Event): Promise<void> {
  e.preventDefault()
  //const target = e.target as HTMLFormElement
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const address = elements[0].value
  const data = await client.QueryAccount(address)
  let resultPrompt = document.getElementById('AccountQueryResult')
  if (resultPrompt) {
    resultPrompt.innerHTML = JSON.stringify(data)
  }
}

async function TxQueryHandler (e: Event): Promise<void> {
  e.preventDefault()
  console.log('TXQUERY')
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const hash = elements[0].value.trim()

  console.log(hash)
  const data = await client.QueryTx(hash)
  let resultPrompt = document.getElementById('TxQueryResult')
  if (resultPrompt) {
    resultPrompt.innerHTML = JSON.stringify(data)
  }
}

function RegisterFormListeners (client: NameServiceClient) {
  let queryForm = document.getElementById('WhoisQueryForm')
  if(queryForm) {
    queryForm.addEventListener('submit', WhoisQueryHandler)
  }
  let accountForm = document.getElementById('AccountQueryForm')
  if(accountForm) {
    accountForm.addEventListener('submit', AccountQueryHandler)
  }
  let txForm = document.getElementById('TxQueryForm')
    if(txForm) {
      txForm.addEventListener('submit', TxQueryHandler)
    }
}

window.onload = function() {
    RegisterFormListeners(client)

  TrySocket()
}


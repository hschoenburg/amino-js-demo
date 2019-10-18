import axios from 'axios'
import * as sdk from '../lib/types'
import { DecodeTx }  from './utils'
import { TrySocket } from './socket'

import  { NameServiceClient } from './client'
const client = new NameServiceClient()


export async function BuyNameHandler(e: Event): Promise<void> {
  e.preventDefault()
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const name = elements[0].value
  const denom = elements[1].value
  const amount = elements[2].value
  
  const coin = { denom: denom, amount: amount }
  //const msg = utils.BuildBuyNameMsg(coin, name, "my Sdk Account Address")

}

export async function WhoisQueryHandler (e: Event): Promise<void> {
  e.preventDefault()
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const name = elements[0].value
  const data = await client.QueryWhois(name)
  let resultPrompt = document.getElementById('WhoisQueryResult')
  if (resultPrompt) {
    resultPrompt.innerHTML = JSON.stringify(data)
  }
}

export async function AccountQueryHandler (e: Event): Promise<sdk.BaseAccount | sdk.ErrorResponse> {
  e.preventDefault()
  //const target = e.target as HTMLFormElement
  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const address: string = elements[0].value
  const data  = await client.QueryAccount(address)
  let resultPrompt = document.getElementById('AccountQueryResult')

  if(resultPrompt) {
    if('code' in data) {
      // this was an error
      resultPrompt.innerHTML = JSON.stringify(data.message)
    } else {
      resultPrompt.innerHTML = JSON.stringify(data)
    }
  }
  return data
}

export async function TxQueryHandler (e: Event): Promise<void> {
  e.preventDefault()
  console.log('TXQUERY')

  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const hash = elements[0].value.trim()

  const data = await client.QueryTx(hash)
  console.log(data)
  let resultPrompt = document.getElementById('TxQueryResult')
  if (resultPrompt) {
    resultPrompt.innerHTML = JSON.stringify(data)
  }
}


export async function MsgSendHandler (e: Event): Promise<void> {
  e.preventDefault()
  console.log('MsgSend')

  const elements = (<HTMLFormElement>e.target).elements as  HTMLCollectionOf<HTMLInputElement>
  const to_address: string = elements[0].value.trim()
  const denom: string = elements[1].value.trim()
  const amount: string = elements[2].value.trim()

  let msg: sdk.MsgSend = {
      to_address: to_address,
      from_address: to_address,
      amount: [{amount: amount, denom: "name"}]
    }

  const data = await client.MsgSend(msg)
  let resultPrompt = document.getElementById('MsgSendResult')
  if (resultPrompt) {
    resultPrompt.innerHTML = JSON.stringify(data)
  }
}


export function RegisterFormListeners () {
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

  let sendForm = document.getElementById('MsgSendForm')
    if(sendForm) {
      sendForm.addEventListener('submit', MsgSendHandler)
    }
}


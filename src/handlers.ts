//import axios from "axios";
import * as sdk from "../lib/types";
//import { DecodeTx } from "./utils";
//import { TrySocket } from './socket'
import { API, Wallet } from "@tendermint/sig";

import { Cosmos } from "./cosmos";

import { NameServiceClient } from "./client";
const client = new NameServiceClient();

/*
export async function BuyNameHandler(e: Event): Promise<void> {
  /*
  e.preventDefault();
  const elements = (<HTMLFormElement>e.target).elements as HTMLCollectionOf<
    HTMLInputElement
  >;
  //const name = elements[0].value;
  //const denom = elements[1].value;
  //const amount = elements[2].value;

  //const coin = { denom: denom, amount: amount };
  //const msg = utils.BuildBuyNameMsg(coin, name, "my Sdk Account Address")
}
*/

export function CreateWalletHandler(
  api: API,
  wallet: Wallet | null
): (e: Event) => Wallet {
  return function(e: Event): Wallet {
    console.log("SENDING");
    e.preventDefault();
    if (wallet) {
      throw new Error("Wallet already created?");
    }
    if (!api) {
      throw new Error("sig api not instatiated");
    }

    wallet = api.createWallet();

    let WalletStatus = document.getElementById("WalletBoxStatus");
    if (WalletStatus) {
      WalletStatus.innerHTML = "Wallet Address: " + wallet.address;
    }
    let resultPrompt = document.getElementById("CreateWalletResult");
    if (resultPrompt) {
      resultPrompt.innerHTML = JSON.stringify(wallet);
    }
    // wallet instantiated now we can use it to sign
    RegisterFormListeners(api, wallet);
    return wallet;
  };
}

export async function WhoisQueryHandler(e: Event): Promise<void> {
  e.preventDefault();
  const elements = (<HTMLFormElement>e.target).elements as HTMLCollectionOf<
    HTMLInputElement
  >;
  const name = elements[0].value;
  const data = await client.QueryWhois(name);
  let resultPrompt = document.getElementById("WhoisQueryResult");
  if (resultPrompt) {
    resultPrompt.innerHTML = JSON.stringify(data);
  }
}

export async function AccountQueryHandler(
  e: Event
): Promise<sdk.BaseAccount | sdk.ErrorResponse> {
  e.preventDefault();
  //const target = e.target as HTMLFormElement
  const elements = (<HTMLFormElement>e.target).elements as HTMLCollectionOf<
    HTMLInputElement
  >;
  const address: string = elements[0].value;
  const data = await client.QueryAccount(address);
  let resultPrompt = document.getElementById("AccountQueryResult");

  if (resultPrompt) {
    if ("code" in data) {
      // this was an error
      resultPrompt.innerHTML = JSON.stringify(data.message);
    } else {
      resultPrompt.innerHTML = JSON.stringify(data);
    }
  }
  return data;
}

export async function TxQueryHandler(e: Event): Promise<void> {
  e.preventDefault();
  console.log("TXQUERY");

  const elements = (<HTMLFormElement>e.target).elements as HTMLCollectionOf<
    HTMLInputElement
  >;
  const hash = elements[0].value.trim();

  const data = await client.QueryTx(hash);
  console.log(data);
  let resultPrompt = document.getElementById("TxQueryResult");
  if (resultPrompt) {
    resultPrompt.innerHTML = JSON.stringify(data);
  }
}

export function MsgSendHandler(
  api: API,
  wallet: Wallet
): (e: Event) => Promise<sdk.MsgSend> {
  return async function(e: Event) {
    e.preventDefault();

    const elements = (<HTMLFormElement>e.target).elements as HTMLCollectionOf<
      HTMLInputElement
    >;
    const to_address: string = elements[0].value.trim();
    const denom: string = elements[1].value.trim();
    const amount: string = elements[2].value.trim();

    let msg: sdk.MsgSend = {
      to_address: to_address,
      from_address: to_address,
      amount: [{ amount: amount, denom: denom }]
    };

    let cosmos = new Cosmos(api, wallet);
    let response = await cosmos.SendMessage(msg);

    let resultPrompt = document.getElementById("MsgSendResult");
    if (resultPrompt) {
      resultPrompt.innerHTML = JSON.stringify(response);
    }
    return msg;
  };
}

export function RegisterWalletCreator(api: API, wallet: Wallet | null) {
  let createWalletButton = document.getElementById("CreateWalletButton");
  if (createWalletButton) {
    createWalletButton.addEventListener(
      "click",
      CreateWalletHandler(api, wallet)
    );
  }
}

// TODO finish this thing
/*
function enableWallet() {
  let boxes = document.getElementsByClassName("query-box") as Array<HTMLElement>
  boxes: = Array.prototype.slice.call(boxes)
  boxes.forEach( function(element: any){
    element.style.display = 'block'
  });
}
  */

export function RegisterFormListeners(api: API, wallet: Wallet) {
  let queryForm = document.getElementById("WhoisQueryForm");
  if (queryForm) {
    queryForm.addEventListener("submit", WhoisQueryHandler);
  }
  let accountForm = document.getElementById("AccountQueryForm");
  if (accountForm) {
    accountForm.addEventListener("submit", AccountQueryHandler);
  }
  let txForm = document.getElementById("TxQueryForm");
  if (txForm) {
    txForm.addEventListener("submit", TxQueryHandler);
  }

  let sendForm = document.getElementById("MsgSendForm");
  if (sendForm) {
    sendForm.addEventListener("submit", MsgSendHandler(api, wallet));
  }
}

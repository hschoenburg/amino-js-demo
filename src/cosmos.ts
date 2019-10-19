import { API, Wallet } from "@tendermint/sig";
import * as sdk from "../lib/types";

import { NameServiceClient } from "./client";

//import { Tx } from "./tx";

export class Cosmos {
  client: NameServiceClient;
  api: API;
  wallet: Wallet;

  constructor(api: API, wallet: Wallet) {
    this.client = new NameServiceClient();
    this.api = api;
    this.wallet = wallet;
  }

  async SendMessage(msg: sdk.MsgSend): Promise<sdk.MsgSend> {
    console.log(this.wallet.address);
    return msg;

    // get account and sequence
    // if account does not exist - throw error
    // account must be funded!
    // createTx
    // AddMsg
    // SignTx
    // Append Signature
    // Broadcast Tx
    // VerifyInclusion
  }
}

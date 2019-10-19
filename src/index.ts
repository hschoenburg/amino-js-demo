//import { TrySocket } from './socket'
import * as handlers from "./handlers";

import { instantiate, API, Wallet } from "@tendermint/sig";

// global vars for storing sig and wallet

window.onload = async function() {
  var api: API = await instantiate();
  var wallet: Wallet | null = null;
  handlers.RegisterWalletCreator(api, wallet);

  //TrySocket()
};

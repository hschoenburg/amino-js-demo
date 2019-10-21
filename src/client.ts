import axios from "axios";

import * as sdk from "../lib/types";

import * as Amino from '@tendermint/amino-js'

export class CosmosClient {
  async QueryWhois(name: string): Promise<any | sdk.ErrorResponse> {
    const data = await axios.get("/nameservice/names/" + name + "/whois");
    return data.data.result;
  }

  async QueryAccount(
    address: string
  ): Promise<sdk.BaseAccount | sdk.ErrorResponse> {
    const response = await axios.get("/auth/accounts/" + address);
    if (response.data.error) {
      return response.data.error;
    } else {
      return response.data.result;
    }
  }

  async QueryTx(hash: string): Promise<sdk.Tx | sdk.ErrorResponse> {
    var response = await axios.post(
      "/rpc/tx?hash=" + "0x" + hash + "&prove=true"
    );
    if (response.data.error) {
      return response.data.error;
    } else {
      const bytes = Amino.base64ToBytes(txData);
      const value = Amino.unmarshalTx(bytes, true);
      return value
    }
  }
}

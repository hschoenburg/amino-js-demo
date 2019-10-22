import * as sdk from "../lib/types";

export const DEFAULT_GAS_PRICE = [
  { amount: (2.5e-8).toFixed(9), denom: `uatom` }
];
export const DEFAULT_GAS_AMOUNT = "0";

export function TxBuilder(params: sdk.TxBuilderParams): sdk.TxBuilder {

  let TxParams = params
  //let signature: sdk.StdSignature | null = null
  let msgs: Array<sdk.Msg> = []
  let memo: string = "";
  let fee: sdk.StdFee = { amount: DEFAULT_GAS_PRICE, gas: "0" };

  return {

    CreateSignMessage: function():  string  {
      let sig_msg = <sdk.StdSignMsg>{
        chain_id: TxParams.chain_id,
        account_number: TxParams.account_number,
        sequence: TxParams.sequence,
        fee: fee,
        msgs: msgs,
        memo: memo
      };
      return JSON.stringify(sig_msg);
    },

    AddMsg: function(msg: sdk.Msg): boolean  {
      msgs.push(msg);
      return true;
    }
  }
}

//CreateSignMessage() {} --= return TX to be sined
//AddMsg() -- append an additional Message, maybe add more gas?
//SetFee() -- pass a new fee object
//Validate()Signature? --
//AppendSignature?
//encode? decode? -- Amino <-> JSON
//hash() -- return Txhash, error if missing info

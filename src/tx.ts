import * as sdk from "../lib/types";

export const DEFAULT_GAS_PRICE = [
  { amount: (2.5e-8).toFixed(9), denom: `uatom` }
];
export const DEFAULT_GAS_AMOUNT = "0";

export class Tx {
  chain_id: string;
  account_number: number;
  sequence: number;
  signature: sdk.StdSignature | null;
  msgs: Array<sdk.Msg>;
  memo: string = "";
  fee: sdk.StdFee;

  constructor(params: {
    sequence: number;
    account_number: number;
    chain_id: string;
  }) {
    this.account_number = params.account_number;
    this.sequence = params.sequence;
    this.chain_id = params.chain_id;
    this.signature = null;
    this.fee = { amount: DEFAULT_GAS_PRICE, gas: "0" };
    this.msgs = [];
  }

  CreateSignMessage(): string {
    let sig_msg = <sdk.StdSignMsg>{
      chain_id: this.chain_id,
      account_number: this.account_number,
      sequence: this.sequence,
      fee: this.fee,
      msgs: this.msgs,
      memo: this.memo
    };
    return JSON.stringify(sig_msg);
  }

  AddMsg(msg: sdk.Msg): boolean {
    this.msgs.push(msg);
    return true;
  }
}

//CreateSignMessage() {} --= return TX to be sined
//AddMsg() -- append an additional Message, maybe add more gas?
//SetFee() -- pass a new fee object
//Validate()Signature? --
//AppendSignature?
//encode? decode? -- Amino <-> JSON
//hash() -- return Txhash, error if missing info

import * as sdk from "../lib/types";
import { Tx, DEFAULT_GAS_PRICE, DEFAULT_GAS_AMOUNT } from "../src/tx";

describe("CreateSignMessage", () => {
  let params = { sequence: 5, account_number: 7, chain_id: "test-chain-05" };
  let exampleTx = new Tx(params);

  it("returns a properly formatted JSON signmessage to be hashed and signed", async () => {
    let sig_msg = JSON.parse(exampleTx.CreateSignMessage());
    expect(sig_msg.sequence).toEqual(params.sequence);
  });

  it("inserts a default value for fee", async () => {
    let sig_msg = JSON.parse(exampleTx.CreateSignMessage());
    expect(sig_msg.fee.amount).toEqual(DEFAULT_GAS_PRICE);
    expect(sig_msg.fee.gas).toEqual(DEFAULT_GAS_AMOUNT);
  });
});

describe("AddMsg", () => {
  let params = { sequence: 5, account_number: 7, chain_id: "test-chain-05" };
  let exampleTx = new Tx(params);

  let msg_send: sdk.Msg = {
    type: "cosmos-sdk/MsgSend",
    value: {
      from_address: "blahblah",
      to_address: "haha",
      amount: [{ amount: "5", denom: "utaom" }]
    }
  };

  beforeEach(() => {
    exampleTx = new Tx(params);
  });

  it("pushes the new message into messages", async () => {
    exampleTx.AddMsg(msg_send);
    expect(exampleTx.msgs.length).toEqual(1);
  });

  it("includes in SignMessage", async () => {
    exampleTx.AddMsg(msg_send);
    expect(exampleTx.msgs.length).toEqual(1);
    expect(JSON.parse(exampleTx.CreateSignMessage()).msgs.length).toEqual(1);
  });

  it("inserts a default value for fee", async () => {
    let sig_msg = JSON.parse(exampleTx.CreateSignMessage());
    expect(sig_msg.fee.amount).toEqual(DEFAULT_GAS_PRICE);
    expect(sig_msg.fee.gas).toEqual(DEFAULT_GAS_AMOUNT);
  });
});

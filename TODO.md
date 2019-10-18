pseudocode plan for MSgSend


CreateSignMsg

SignSignMsg

CreateStdTx - with Msgs and Signature


Fees and gs 
memo
simulate creates gas estimate?


Class Tx
generateSignMsg

default Gas and Fees
- Simulate - to give me proper Gas and Fees?

Can I encode it to skip a round trip step?
AddMsg
AppendSignature
SignWithKey


Amino.encodeMsgSend? 











- Use types from jordansexton/sig?

- decode and verify tx proof
- Msg proof?
- Build, sign and broadcast Tx
- Verify Tx sig?


Library for building and signing Messages


CreateSignMsg

type StdSignMsg struct {
  ChainID       string      `json:"chain_id"`
  AccountNumber uint64      `json:"account_number"`
  Sequence      uint64      `json:"sequence"`
  Fee           auth.StdFee `json:"fee"`
  Msgs          []sdk.Msg   `json:"msgs"`
  Memo          string      `json:"memo"`
}
